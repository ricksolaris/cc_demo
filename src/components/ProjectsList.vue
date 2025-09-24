<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

// 项目列表数据
const projects = [
  {
    id: 1,
    title: '黄金矿工-极客版',
    description: '黄金矿工游戏的极客版本，具有现代化UI和交互效果',
    imageUrl: 'https://picsum.photos/seed/game1/600/400',
    status: '已审核'
  },
  {
    id: 2,
    title: '极客名片',
    description: '个人数字名片，具有动态效果和响应式设计',
    imageUrl: 'https://picsum.photos/seed/card1/600/400',
    status: '已审核'
  }
];

// 上传新作品功能
const uploadNewProject = () => {
  // 这里可以实现上传新作品功能
  alert('上传新作品功能待实现');
};
</script>

<template>
  <section id="projects" class="w-full space-y-6">
    <!-- 标题和操作栏 -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-tech-blue to-tech-purple flex items-center justify-center">
          <i class="fas fa-folder-open text-white"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-white mb-1">我的作品</h2>
          <p class="text-gray-400 text-sm">展示你的创作成果</p>
        </div>
      </div>
      
      <button 
        @click="uploadNewProject"
        class="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-tech-blue to-tech-purple rounded-xl hover:opacity-90 transition-all hover:shadow-lg hover:shadow-tech-blue/20"
      >
        <i class="fas fa-upload"></i>
        <span>上传新作品</span>
      </button>
    </div>
    
    <!-- 项目列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :imageUrl="project.imageUrl"
        :status="project.status"
      />
    </div>
    
    <!-- 空状态提示（当没有项目时显示） -->
    <div v-if="projects.length === 0" class="text-center py-16 glass-effect rounded-3xl">
      <div class="w-20 h-20 mx-auto mb-4 text-gray-500">
        <i class="fas fa-folder-open text-5xl"></i>
      </div>
      <h3 class="text-xl font-bold text-white mb-2">暂无作品</h3>
      <p class="text-gray-400 mb-6">上传你的第一个作品，展示你的创作才华</p>
      <button 
        @click="uploadNewProject"
        class="px-5 py-2.5 bg-gradient-to-r from-tech-blue to-tech-purple rounded-xl hover:opacity-90 transition-all"
      >
        立即上传
      </button>
    </div>
  </section>
</template>

<style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  h2 {
    font-size: 2rem !important;
  }
  
  .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem !important;
  }
  
  .flex-wrap {
    flex-direction: column;
    align-items: flex-start !important;
  }
  
  .w-10 {
    width: 8rem !important;
    height: 8rem !important;
  }
}
</style>