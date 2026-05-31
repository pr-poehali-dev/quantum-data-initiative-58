import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const SEND_URL = "https://functions.poehali.dev/031fc2e7-0c0d-4a4e-a9d6-39f3576b10c3"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Пожалуйста, заполните имя и телефон")
      return
    }
    setLoading(true)
    try {
      const res = await fetch(SEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: "", phone: "", email: "", message: "" })
      } else {
        setError("Произошла ошибка. Попробуйте позже.")
      }
    } catch {
      setError("Не удалось отправить заявку. Проверьте интернет-соединение.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = (val: boolean) => {
    if (!val) {
      setSent(false)
      setError("")
    }
    onOpenChange(val)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-zinc-900 border border-red-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-xl text-white">
            Получить <span className="text-red-500">консультацию</span>
          </DialogTitle>
        </DialogHeader>

        {sent ? (
          <div className="py-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-lg font-semibold text-white mb-2">Заявка отправлена!</p>
            <p className="text-gray-400">Мы свяжемся с вами в ближайшее время.</p>
            <Button
              className="mt-6 bg-red-500 hover:bg-red-600 text-white border-0"
              onClick={() => handleClose(false)}
            >
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-1">
              <Label className="text-gray-300">Имя *</Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-gray-300">Телефон *</Label>
              <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-gray-300">Email</Label>
              <Input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-gray-300">Расскажите о вашем проекте</Label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Кратко опишите задачу..."
                rows={3}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500 resize-none"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white border-0 font-semibold"
            >
              {loading ? "Отправляем..." : "Отправить заявку"}
            </Button>
            <p className="text-gray-500 text-xs text-center">* обязательные поля</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
