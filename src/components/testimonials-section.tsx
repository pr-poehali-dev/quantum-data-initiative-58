import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Владелец, сеть кофеен «Ароматный двор»",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "За 3 месяца работы с агентством подписчики в VK выросли с 800 до 5 200. Выручка в кофейнях увеличилась на 28% — напрямую связываю это с их работой.",
  },
  {
    name: "Марина Соколова",
    role: "Директор, клиника эстетической медицины",
    avatar: "/professional-woman-scientist.png",
    content:
      "Запустили контекстную рекламу в Яндекс.Директ — стоимость заявки снизилась вдвое по сравнению с предыдущим подрядчиком. Команда профессиональная и всегда на связи.",
  },
  {
    name: "Дмитрий Ларин",
    role: "Основатель, строительная компания «СтройМастер»",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Разработали нам брендбук и фирменный стиль с нуля. Теперь выглядим как серьёзная компания. SEO-продвижение уже через 4 месяца дало первые позиции в Яндексе.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные результаты бизнеса, с которым мы работали
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}