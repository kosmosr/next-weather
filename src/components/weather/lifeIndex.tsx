import { Droplets, Heart, Shirt, Umbrella, Wind } from 'lucide-react'

export const LifeIndex = () => {
  const indexes = [
    {
      icon: <Umbrella className="w-5 h-5" />,
      name: '雨伞指数',
      level: '不带伞',
      desc: '天气较好，不会降水，不需要带雨伞'
    },
    {
      icon: <Wind className="w-5 h-5" />,
      name: '晾晒指数',
      level: '适宜',
      desc: '天气不错，适合晾晒衣物'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      name: '穿衣指数',
      level: '较舒适',
      desc: '建议穿长袖衬衫和单裤'
    },
    {
      icon: <Shirt className="w-5 h-5" />,
      name: '运动指数',
      level: '较适宜',
      desc: '天气较好，户外运动注意防晒'
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      name: '洗车指数',
      level: '适宜',
      desc: '天气较好，适合洗车'
    }
  ];

  return (
    <div className="bg-white/20 rounded-xl backdrop-blur-sm">
      <div className="divide-y divide-white/10">
        {indexes.map((index, i) => (
          <div key={i} className="p-4 flex items-start">
            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg mr-3 text-white">
              {index.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/80 text-sm">{index.name}</span>
                <span className="text-white text-sm font-medium">{index.level}</span>
              </div>
              <p className="text-white/60 text-xs">{index.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
