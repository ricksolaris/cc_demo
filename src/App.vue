<script setup lang="ts">
import Header from './components/Header.vue';
import UserInfo from './components/UserInfo.vue';
import ProjectStats from './components/ProjectStats.vue';
import ProjectsList from './components/ProjectsList.vue';

// 页面挂载后的处理
import { onMounted } from 'vue';

onMounted(() => {
  // 鼠标移动效果
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // 类型断言为HTMLElement
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
</script>

<template>
  <div class="min-h-screen bg-dark-bg text-white font-chinese">
    <!-- 顶部导航栏 -->
    <Header />
    
    <!-- 主内容区域 - 采用Bento Grid精细布局 -->
    <main class="max-w-7xl mx-auto p-6 md:p-8 space-y-8 pt-12 pb-24">
      <!-- 页面标题 -->
      <div class="flex items-center space-x-3">
        <button class="text-gray-400 hover:text-white transition-colors">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="text-3xl font-bold text-gradient">个人中心</h1>
      </div>
      
      <!-- Bento Grid 布局 -->
      <div class="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <!-- 用户信息卡片 - 占据较大空间 -->
        <div class="lg:col-span-2 xl:col-span-3">
          <UserInfo />
        </div>
        
        <!-- 项目统计卡片 -->
        <div class="lg:col-span-2 xl:col-span-3">
          <ProjectStats />
        </div>
        
        <!-- 作品列表区域 - 占据全部宽度 -->
        <div class="lg:col-span-4 xl:col-span-6">
          <ProjectsList />
        </div>
      </div>
    </main>
    
    <!-- 页脚 -->
    <footer class="py-8 px-4 text-center text-gray-500 text-sm border-t border-white/10 mt-12">
      <p>© 2025 AI编程出海训练营 - 久溢的个人作品集</p>
    </footer>
  </div>
</template>

<style scoped>
/* 渐变文本效果 */
.text-gradient {
  background: linear-gradient(135deg, var(--tech-blue), var(--tech-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 响应式调整 */
@media (max-width: 768px) {
  h1.text-gradient {
    font-size: 2rem !important;
  }
}

/* 全局背景模式已在style.css中使用工具类实现 */</style>
