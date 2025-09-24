<script setup lang="ts">
import { defineProps } from 'vue';

// 定义组件属性
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  status: string;
}

defineProps<ProjectCardProps>();

// 预览项目功能
const previewProject = () => {
  // 这里可以实现项目预览功能
  alert('预览项目功能待实现');
};

// 编辑项目功能
const editProject = () => {
  // 这里可以实现项目编辑功能
  alert('编辑项目功能待实现');
};

// 删除项目功能
const deleteProject = () => {
  // 这里可以实现项目删除功能
  if (confirm('确定要删除这个项目吗？')) {
    alert('删除项目功能待实现');
  }
};
</script>

<template>
  <div class="glass-effect rounded-3xl overflow-hidden card-hover relative tech-pattern transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-tech-blue/10">
    <!-- 背景装饰效果 -->
    <div class="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-tech-purple/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    
    <!-- 项目图片 -->
    <div class="relative h-56 overflow-hidden">
      <img 
        :src="imageUrl" 
        alt="项目截图" 
        class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
      
      <!-- 渐变遮罩 -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
      
      <!-- 项目状态标签 -->
      <div class="absolute top-4 right-4 px-3 py-1 bg-tech-blue bg-opacity-90 rounded-full text-white text-xs font-medium transition-all hover:scale-105 shadow-lg shadow-tech-blue/20">
        {{ status }}
      </div>
      
      <!-- 图片悬停效果增强 -->
      <div class="absolute inset-0 bg-gradient-to-br from-tech-blue/10 to-tech-purple/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
    </div>
    
    <!-- 项目信息 -->
    <div class="p-6 space-y-4 relative z-10">
      <h3 class="text-xl font-bold text-white transition-all hover:text-tech-blue group-hover:text-tech-blue">
        {{ title }}
        <span class="inline-block transform transition-transform duration-300 group-hover:translate-x-1"></span>
      </h3>
      <p class="text-gray-300 text-sm line-clamp-2 leading-relaxed">{{ description }}</p>
      
      <!-- 项目操作按钮 -->
      <div class="flex flex-wrap items-center justify-between pt-2 gap-3">
        <div class="flex space-x-3">
          <button 
            @click="previewProject"
            class="px-3 py-1.5 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg text-white text-sm transition-all hover:shadow-md flex items-center gap-1.5"
          >
            <i class="fas fa-eye"></i> 预览
          </button>
          <button 
            @click="editProject"
            class="px-3 py-1.5 bg-gradient-to-r from-tech-purple/20 to-tech-blue/20 hover:from-tech-purple/30 hover:to-tech-blue/30 rounded-lg text-white text-sm transition-all hover:shadow-md flex items-center gap-1.5 border border-tech-purple/20"
          >
            <i class="fas fa-edit"></i> 编辑
          </button>
        </div>
        
        <button 
          @click="deleteProject"
          class="p-1.5 bg-white bg-opacity-5 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-400 transition-all"
          aria-label="删除项目"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
      
      <!-- 额外信息：项目评分和日期 -->
      <div class="flex flex-wrap items-center justify-between text-xs text-gray-500 pt-2 border-t border-white/5 gap-2">
        <div class="flex items-center gap-1">
          <i class="fas fa-calendar-alt"></i> 最近更新: 2025-09-24
        </div>
        <div class="flex items-center gap-1">
          <i class="fas fa-star text-yellow-500"></i> 4.8/5.0
        </div>
      </div>
    </div>
    
    <!-- 悬停时的装饰效果 -->
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tech-blue/5 to-tech-purple/5 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
    
    <!-- 顶部装饰线 -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue to-tech-purple opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
  </div>
</template>

<style scoped>
/* 卡片悬停效果增强 */
.card-hover:hover {
  box-shadow: 
    0 15px 30px -10px rgba(0, 122, 255, 0.2),
    0 15px 30px -10px rgba(175, 82, 222, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* 按钮交互动画 */
button {
  transition: all 0.25s ease;
  transform: translateY(0);
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

/* 标题渐变效果 */
.text-white:hover {
  text-shadow: 0 0 10px rgba(0, 122, 255, 0.3);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .h-56 {
    height: 14rem !important;
  }
  
  .p-6 {
    padding: 1.5rem !important;
  }
  
  .text-xl {
    font-size: 1.25rem !important;
  }
}

@media (max-width: 480px) {
  .h-56 {
    height: 12rem !important;
  }
  
  .p-6 {
    padding: 1.25rem !important;
  }
  
  .flex {
    flex-direction: column;
    align-items: stretch !important;
    gap: 1rem !important;
  }
  
  .space-x-3 {
    flex-direction: row;
    gap: 0.75rem !important;
  }
}
</style><style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  .glass-effect {
    margin-bottom: 1rem;
  }
  
  .h-56 {
    height: 40vh;
  }
}
</style>