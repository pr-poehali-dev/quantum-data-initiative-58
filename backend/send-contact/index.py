import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта E&E на почту агентства."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    email = body.get("email", "").strip()
    message = body.get("message", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}),
        }

    smtp_password = os.environ["SMTP_PASSWORD"]
    from_email = "port26rus@yandex.ru"
    to_email = "port26rus@yandex.ru"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта E&E от {name}"
    msg["From"] = from_email
    msg["To"] = to_email

    html = f"""
    <h2>Новая заявка с сайта E&amp;E</h2>
    <table style="border-collapse:collapse;width:100%;max-width:500px">
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Имя</td><td style="padding:8px">{name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Телефон</td><td style="padding:8px">{phone}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Email</td><td style="padding:8px">{email or '—'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Сообщение</td><td style="padding:8px">{message or '—'}</td></tr>
    </table>
    """

    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
