<script setup lang="ts">
// 导航菜单项
const navItems = [
  { name: '关于', href: '#about' },
  { name: '经验', href: '#experience' },
  { name: '技能', href: '#skills' },
  { name: '作品', href: '#projects' },
  { name: '联系', href: '#contact' }
];

// 平滑滚动功能
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <!-- 顶部导航栏 - 玻璃拟态效果 -->
  <nav class="sticky top-0 z-50 flex justify-between items-center py-4 px-4 md:px-8 lg:px-12 glass-effect backdrop-blur-xl border-b border-white/10 transition-all duration-300">
    <div class="text-2xl font-bold text-gradient">
      <span class="inline-block animate-pulse-glow">Portfolio</span>
    </div>
    
    <!-- 桌面导航 -->
    <div class="hidden md:flex space-x-8">
      <button 
        v-for="item in navItems" 
        :key="item.name"
        @click="scrollToSection(item.href.substring(1))"
        class="text-gray-400 hover:text-white transition-colors duration-300 relative group"
      >
        {{ item.name }}
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue to-tech-purple transition-all duration-300 group-hover:w-full"></span>
      </button>
    </div>
    
    <!-- 用户信息 -->
    <div class="flex items-center space-x-4">
      <div class="hidden md:flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full transition-all hover:bg-white/10">
        <span class="text-white font-medium">久溢</span>
        <span class="text-xs text-gray-400">2191626</span>
      </div>
      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-tech-blue to-tech-purple flex items-center justify-center shadow-lg shadow-tech-purple/20 hover:shadow-tech-purple/30 transition-all duration-300">
        <i class="fas fa-user text-white"></i>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* 导航栏样式 */
nav {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

nav::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.02), transparent);
  transform: translateX(-100%);
  transition: transform 1s ease-in-out infinite;
}

nav:hover {
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* 渐变文本效果 */
.text-gradient {
  background: linear-gradient(135deg, var(--tech-blue), var(--tech-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 响应式调整 */
@media (max-width: 768px) {
  nav {
    padding: 1.2rem;
  }
  
  .text-gradient {
    font-size: 1.3rem;
  }
}
</style>