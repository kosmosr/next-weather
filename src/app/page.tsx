import { ChevronDown, ChevronUp, MapPin, Sun } from 'lucide-react'
import { dynamicHourlyForecast as HourlyForecast, dynamicWeeklyForecast as WeeklyForecast } from '@/app/dynamic'
import WeatherMetrics from '@/components/weather/weatherMetrics'
import { LifeIndex } from '@/components/weather/lifeIndex'

export default function Home() {
  return (
    <div
      className="bg-black/80 flex flex-col h-screen font-[family-name:var(--font-geist-sans)] ">
      {/*Header*/}
      <div className="flex text-lg gap-2.5 px-5 py-4">
        <MapPin className="text-white" />
        <span className="text-white font-bold">成都</span>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-8">
        {/*Temperature */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col text-white justify-between gap-2">
            <span className="text-7xl">24°</span>
            <span className="text-2xl text-white/80">多云</span>
            <div className="flex gap-5">
              <div className="flex items-center gap-1">
                <ChevronUp size={13} strokeWidth={4} />
                <span className="text-base font-light">18°</span>
              </div>
              <div className="flex items-center gap-1">
                <ChevronDown size={13} strokeWidth={4} />
                <span className="text-base font-light">30°</span>
              </div>
            </div>
          </div>
          <div>
            <Sun size={140} className="text-white" />
          </div>
        </div>
        <div className="space-y-6 mt-6">
          {/*Other weather metrics*/}
          <WeatherMetrics />
          <div className="flex flex-col gap-2">
            <span className="text-white/80">每小时预报</span>
            <HourlyForecast />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white/80">未来预报</span>
            <WeeklyForecast />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white/80">生活指数</span>
            <LifeIndex />
          </div>
        </div>
      </div>
    </div>
  )
}
