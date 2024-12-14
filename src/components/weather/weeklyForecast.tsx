'use client'
import { ChevronDown, ChevronUp, Cloud, CloudRain, CloudSun, Sun } from 'lucide-react'
import { useState } from 'react'

const WeeklyForecast = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const forecasts = [
    { dayOfWeek: '昨天', date: '12月11日', maxTemp: 11, minTemp: 3, weather: 'cloudy-rain' },
    { dayOfWeek: '今天', date: '12月12日', maxTemp: 10, minTemp: 4, weather: 'cloudy-rain' },
    { dayOfWeek: '周五', date: '12月13日', maxTemp: 9, minTemp: 3, weather: 'sunny' },
    { dayOfWeek: '周六', date: '12月14日', maxTemp: 11, minTemp: 0, weather: 'partly-cloudy' },
    { dayOfWeek: '周日', date: '12月15日', maxTemp: 12, minTemp: 1, weather: 'sunny' },
    { dayOfWeek: '周一', date: '12月16日', maxTemp: 11, minTemp: 4, weather: 'cloudy-rain' },
    { dayOfWeek: '周二', date: '12月17日', maxTemp: 8, minTemp: 4, weather: 'partly-cloudy' }
  ]

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case 'sunny':
        return <Sun className="w-6 h-6 text-white" />
      case 'cloudy-rain':
        return <CloudRain className="w-6 h-6 text-white" />
      case 'cloudy':
        return <Cloud className="w-6 h-6 text-white" />
      case 'partly-cloudy':
        return <CloudSun className="w-6 h-6 text-white" />
      default:
        return <Sun className="w-6 h-6 text-white" />
    }
  }

  const TempBar = ({ minTemp, maxTemp }: { minTemp: number, maxTemp: number }) => {
    const MIN_TEMP = 0
    const MAX_TEMP = 40
    const totalWidth = MAX_TEMP - MIN_TEMP

    // Calculate positions
    const rangeStart = ((minTemp - MIN_TEMP) / totalWidth) * 100
    const rangeWidth = ((maxTemp - minTemp) / totalWidth)

    return (
      <div className="flex h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-blue-400" style={{
        width: `${rangeWidth * 400}px`
      }}>
      </div>
    )
  }

  const visibleForecasts = isExpanded ? forecasts : forecasts.slice(0, 5);

  return (
    <div className="bg-white/20 px-4 py-2 rounded-xl w-full max-w-md backdrop-blur-sm">
      {visibleForecasts .map((forecast, index) => (
        <div key={index}
             className="flex items-center justify-between first:pt-1 last:pb-0 py-3.5 border-b border-white/10 last:border-0">
          <div className="flex flex-col w-25">
            <span className="font-medium">{forecast.dayOfWeek}</span>
            <span className="text-sm text-white/70">{forecast.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white text-sm w-4">{forecast.maxTemp}°</span>
            <TempBar minTemp={forecast.minTemp} maxTemp={forecast.maxTemp} />
            <span className="text-white/70 text-sm w-4">{forecast.minTemp}°</span>
          </div>
          <div className="w-6">
            {getWeatherIcon(forecast.weather)}
          </div>
        </div>
      ))}

      {forecasts.length > 5 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-full mt-1.5 mb-1.5 py-1.5 text-white/80 hover:text-white transition-colors"
        >
          {isExpanded ? (
            <div className="flex items-center gap-1">
              <span className="text-sm">收起</span>
              <ChevronUp className="w-4 h-4" />
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <span className="text-sm">显示更多</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          )}
        </button>
      )}
    </div>
  )
}

export default WeeklyForecast
