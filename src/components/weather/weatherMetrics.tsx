import { LucideIcon, Thermometer, Waves, Wind } from 'lucide-react'

interface WeatherMetricProps {
  icon: LucideIcon
  value: string
  label: string
}

// 天气图标大小
const WEATHER_METRIC_ICON_SIZE = 25

const WeatherMetric = ({ icon: Icon, value, label }: WeatherMetricProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon size={WEATHER_METRIC_ICON_SIZE} className="text-white/70" />
      <span className="text-white text-base">{value}</span>
      <span className="text-gray-100 text-sm">{label}</span>
    </div>
  )
}

const WeatherMetrics = () => {
  const metrics = [
    { icon: Thermometer, value: '30°', label: '体感温度' },
    { icon: Wind, value: '54/优', label: '空气质量' },
    { icon: Waves, value: '100%', label: '湿度' }
  ]

  return (
    <div className="flex bg-white/20 rounded-3xl px-7 py-5 justify-between">
      {metrics.map((metric, index) => (
        <WeatherMetric key={index} {...metric} />
      ))}
    </div>
  )
}

export default WeatherMetrics
