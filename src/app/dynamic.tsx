'use client'
import dynamic from 'next/dynamic'

export const dynamicTempChart = dynamic(() => import('@/app/chart'), { ssr: false })

export const dynamicHourlyForecast = dynamic(() => import('@/components/weather/hourlyForecast'), { ssr: false })

export const dynamicWeeklyForecast = dynamic(() => import('@/components/weather/weeklyForecast'), { ssr: false })
