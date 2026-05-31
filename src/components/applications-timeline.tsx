import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Анализ и стратегия",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Изучаем ваш бизнес, конкурентов и целевую аудиторию. На основе данных разрабатываем чёткую маркетинговую стратегию с измеримыми целями.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Анализ рынка и конкурентов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Разработка позиционирования и УТП
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Формирование медиаплана и бюджета
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Запуск и продвижение",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Запускаем рекламные кампании в Яндекс.Директ, VK и Telegram. Настраиваем таргетинг с точным попаданием в вашу аудиторию и ведём соцсети.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Контекстная и таргетированная реклама
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              SMM: контент-план, публикации, сторис
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              SEO-оптимизация и рост органики
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Результат и масштаб",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Отслеживаем показатели, оптимизируем кампании и наращиваем присутствие бренда. Вы получаете отчёты и видите реальный рост бизнеса.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Ежемесячные отчёты с KPI
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Оптимизация бюджета и снижение стоимости лида
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Масштабирование успешных каналов
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="cases" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы работаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Прозрачный процесс от первой встречи до измеримого результата — без лишних слов и пустых обещаний.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}