import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Брендинг и стратегия",
    description: "Разрабатываем логотип, фирменный стиль и брендбук. Позиционируем вас на рынке и придумываем запоминающиеся названия.",
    icon: "brain",
    badge: "Бренд",
  },
  {
    title: "SMM и соцсети",
    description: "Ведём и продвигаем аккаунты в VK, Telegram и других сетях. Создаём контент, который вовлекает и продаёт.",
    icon: "globe",
    badge: "SMM",
  },
  {
    title: "Контекстная реклама",
    description: "Настраиваем Яндекс.Директ для быстрого притока целевого трафика. Платите только за реальные переходы.",
    icon: "zap",
    badge: "Директ",
  },
  {
    title: "SEO-продвижение",
    description: "Выводим ваш сайт в топ поисковой выдачи Яндекса и Google. Стабильный органический трафик без рекламного бюджета.",
    icon: "target",
    badge: "SEO",
  },
  {
    title: "Дизайн и полиграфия",
    description: "Разрабатываем дизайн любой сложности: баннеры, презентации, упаковку. Печатаем листовки, буклеты, визитки, билборды.",
    icon: "link",
    badge: "Дизайн",
  },
  {
    title: "Создание контента",
    description: "Пишем продающие тексты для сайтов и соцсетей. Снимаем фото и видео для рекламы, создаём сценарии роликов.",
    icon: "lock",
    badge: "Контент",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Полный спектр маркетинговых инструментов для роста вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}