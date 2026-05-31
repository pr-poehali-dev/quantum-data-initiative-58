import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "С чего начать работу с агентством?",
      answer:
        "Всё начинается с бесплатной консультации. Мы изучаем ваш бизнес, цели и бюджет, после чего предлагаем конкретный план с понятными шагами и ожидаемыми результатами.",
    },
    {
      question: "Сколько стоят ваши услуги?",
      answer:
        "Стоимость зависит от набора услуг и объёма работ. Мы работаем с разными бюджетами — от небольших локальных бизнесов до крупных компаний. Точную цифру озвучим после знакомства с вашим проектом.",
    },
    {
      question: "Когда будут первые результаты?",
      answer:
        "Контекстная реклама и таргетинг дают результат уже в первые 1-2 недели. SEO — долгосрочный инструмент, первые позиции появляются через 2-4 месяца. SMM показывает рост через 4-8 недель активного ведения.",
    },
    {
      question: "Вы работаете только с определёнными нишами?",
      answer:
        "Нет, мы работаем с бизнесами из разных сфер: розница, услуги, медицина, строительство, общепит и другие. Главное — понимать вашу аудиторию, а это мы умеем.",
    },
    {
      question: "Как вы отчитываетесь о результатах?",
      answer:
        "Каждый месяц вы получаете детальный отчёт с ключевыми показателями: охват, трафик, количество и стоимость заявок, динамика подписчиков. Всё прозрачно и в цифрах.",
    },
    {
      question: "Можно заказать только одну услугу?",
      answer:
        "Конечно! Мы работаем как комплексно, так и по отдельным направлениям. Можете начать с одной услуги, а потом расширить сотрудничество — без обязательных пакетов.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на самые популярные вопросы о работе с нашим агентством.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}