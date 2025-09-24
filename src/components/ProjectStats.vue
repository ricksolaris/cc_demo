<script setup lang="ts">
// 项目统计数据
const stats = [
  {
    title: '项目总数',
    value: '2',
    icon: 'code',
    color: 'from-tech-green to-tech-teal',
    animation: 'float',
    description: '已完成的项目数量'
  },
  {
    title: '完成率',
    value: '100%',
    icon: 'check-circle',
    color: 'from-tech-orange to-tech-pink',
    animation: 'pulse-glow',
    description: '所有项目的完成情况'
  },
  {
    title: '贡献度',
    value: '高',
    icon: 'star',
    color: 'from-tech-purple to-tech-blue',
    animation: 'float',
    description: '在团队中的贡献程度'
  }
];
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div 
      v-for="stat in stats" 
      :key="stat.title"
      class="glass-effect rounded-3xl p-6 card-hover relative overflow-hidden tech-pattern transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-tech-blue/10"
    >
      <!-- 背景装饰效果 -->
      <div class="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
      <div class="absolute inset-0 opacity-5 pointer-events-none">
        <i :class="`fas fa-${stat.icon} text-[120px] text-white/10 absolute -top-20 -right-20`"></i>
      </div>
      
      <div class="text-center space-y-4 relative z-10">
        <!-- 统计图标 - 添加动画效果 -->
        <div :class="`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center animate-${stat.animation} shadow-lg shadow-white/10`">
          <i :class="`fas fa-${stat.icon} text-2xl text-white`"></i>
        </div>
        
        <!-- 统计数值 -->
        <div>
          <div class="text-3xl font-black text-white transition-all hover:scale-110 duration-300 inline-block group-hover:scale-110">
            {{ stat.value }}
            <span class="relative inline-block">
              <span class="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-30 transform -skew-x-6"></span>
            </span>
          </div>
          <div class="text-sm text-gray-400 mt-1">{{ stat.title }}</div>
        </div>
        
        <!-- 装饰线 - 模拟数据流动效果 -->
        <div class="line-chart mt-2"></div>
        
        <!-- 统计描述 -->
        <div class="text-xs text-gray-500 mt-3 px-4">
          {{ stat.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 装饰线动画效果 */
.line-chart {
  position: relative;
  height: 40px;
  overflow: hidden;
}

.line-chart::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--tech-blue-color, #007AFF), transparent);
  animation: data-flow 3s linear infinite;
}

/* 数据流动动画 */
@keyframes data-flow {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}

/* 鼠标悬停时的卡片效果增强 */
.card-hover:hover {
  box-shadow: 
    0 10px 30px -15px rgba(0, 122, 255, 0.2),
    0 10px 30px -15px rgba(175, 82, 222, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* 数值悬停效果增强 */
.text-white:hover {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .glass-effect {
    padding: 1.5rem;
  }
  
  .grid {
    gap: 1rem;
  }
  
  .text-3xl {
    font-size: 2rem !important;
  }
  
  .w-16 {
    width: 3.5rem !important;
    height: 3.5rem !important;
  }
  
  .text-2xl {
    font-size: 1.25rem !important;
  }
}

@media (max-width: 480px) {
  .p-6 {
    padding: 1.25rem !important;
  }
  
  .text-3xl {
    font-size: 1.75rem !important;
  }
}
</style>