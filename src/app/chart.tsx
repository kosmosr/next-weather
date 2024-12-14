'use client'
import { Line, LineChart, XAxis, YAxis } from 'recharts'
import { Cloud, Sun } from 'lucide-react'

const TempChart = () => {
  const data = [
    { time: '现在', temp: 10, weather: 'sun', windSpeed: '3km/h' },
    { time: '22:00', temp: 9, weather: 'cloud', windSpeed: '5km/h' },
    { time: '23:00', temp: 8, weather: 'cloud', windSpeed: '4km/h' },
    { time: '00:00', temp: 6, weather: 'cloud', windSpeed: '6km/h' },
    { time: '01:00', temp: 6, weather: 'cloud', windSpeed: '7km/h' },
    { time: '02:00', temp: 8, weather: 'cloud', windSpeed: '5km/h' },
    { time: '03:00', temp: 15, weather: 'cloud', windSpeed: '4km/h' },
    { time: '04:00', temp: 10, weather: 'cloud', windSpeed: '3km/h' },
    { time: '05:00', temp: 19, weather: 'cloud', windSpeed: '5km/h' },
    { time: '06:00', temp: 1, weather: 'cloud', windSpeed: '6km/h' },
    { time: '07:00', temp: 10, weather: 'cloud', windSpeed: '4km/h' },
    { time: '08:00', temp: 15, weather: 'cloud', windSpeed: '3km/h' },
    { time: '09:00', temp: 20, weather: 'cloud', windSpeed: '5km/h' }
  ]

  const CustomDot = (props: any) => {
    const { cx, cy } = props
    return (
      <g>
        <circle cx={cx} cy={cy} r={4} fill="white" />
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          fill="white"
          fontSize="14"
        >
          {`${props.payload.temp}°`}
        </text>
        {/*<text x={cx} y={cy + 15} fontSize="14" fill="white" textAnchor="middle" >test</text>*/}
      </g>
    )
  }

  const CustomTick = (props: any) => {
    const { x, y, payload } = props
    const WeatherIcon = payload.value === '现在' ? Sun : Cloud


    return (
      <g transform={`translate(${x},${y})`}>
        <WeatherIcon className="w-4 h-4 text-white" x={-15} y={-40} />
        <text
          x={0}
          y={-2}
          textAnchor="middle"
          fill="white"
          fontSize="13"
        >
          {data.find(item => item.time === payload.value)?.windSpeed}
        </text>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="white"
          fontSize="14"
        >
          {payload.value}
        </text>
      </g>
    )
  }

  return (
    <div className="h-48 w-full bg-white/10 rounded-xl   p-4">
      <div className="overflow-auto scrollbar-hide">
        <div className="h-48 w-[900px]">
          <LineChart data={data} width={850} height={182} margin={{ top: 0, right: 20, bottom: 20, left: 10 }}>
            {/* 虚线从图表区域开始，不会超过图标 */}
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={<CustomTick />}
              interval={0}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis hide={true} />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="white"
              strokeWidth={2}
              dot={<CustomDot />}
              isAnimationActive={false}
            />
          </LineChart>
        </div>
      </div>
      <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }

          .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
      `}</style>
    </div>
  )
}

export default TempChart
