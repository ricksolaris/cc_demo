<script setup lang="ts">
import { ref } from 'vue';

// 定义组件内部状态
const activeTab = ref('personalInfo');

// 切换标签页
const switchTab = (tab: string) => {
  activeTab.value = tab;
};

// 编辑个人资料
const editProfile = () => {
  alert('编辑个人资料功能待实现');
};

// 联系我功能
const contactMe = () => {
  alert('联系我功能待实现');
};
</script>

<template>
  <div class="glass-effect rounded-3xl p-8 card-hover relative tech-pattern overflow-hidden">
    <!-- 装饰性背景效果 -->
    <div class="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-tech-blue/20 to-transparent rounded-full blur-3xl"></div>
    <div class="absolute -left-16 -bottom-16 w-64 h-64 bg-gradient-to-br from-tech-purple/20 to-transparent rounded-full blur-3xl"></div>
    
    <!-- 主内容区域 -->
    <div class="relative z-10 space-y-8">
      <!-- 用户头像和基本信息 -->
      <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        <!-- 用户头像 -->
        <div class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-tech-blue to-tech-purple flex items-center justify-center shadow-lg shadow-tech-purple/20 animate-pulse-glow">
          <i class="fas fa-user-tie text-4xl md:text-5xl text-white"></i>
        </div>
        
        <!-- 用户基本信息 -->
        <div class="text-center md:text-left space-y-3">
          <h2 class="text-3xl font-bold text-white">久溢</h2>
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm">
            <span class="text-tech-blue font-semibold">程序员</span>
            <span class="text-gray-400">|</span>
            <span class="text-gray-400">2191626</span>
            <span class="text-gray-400">|</span>
            <span class="text-gray-400">教练</span>
          </div>
          
          <!-- 用户能力标签 -->
          <div class="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            <div class="px-4 py-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all">
              <span class="text-white text-sm">AI编程</span>
            </div>
            <div class="px-4 py-1.5 bg-tech-blue/20 hover:bg-tech-blue/30 rounded-full border border-tech-blue/30 transition-all">
              <span class="text-tech-blue text-sm">全栈开发</span>
            </div>
            <div class="px-4 py-1.5 bg-tech-purple/20 hover:bg-tech-purple/30 rounded-full border border-tech-purple/30 transition-all">
              <span class="text-tech-purple text-sm">UI设计</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex flex-wrap gap-4 justify-center md:justify-start">
        <button 
          @click="editProfile"
          class="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all flex items-center gap-2"
        >
          <i class="fas fa-edit"></i>
          <span>编辑资料</span>
        </button>
        <button 
          @click="contactMe"
          class="px-5 py-2.5 bg-gradient-to-r from-tech-blue to-tech-purple rounded-xl hover:opacity-90 transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-tech-blue/20"
        >
          <i class="fas fa-envelope"></i>
          <span>联系我</span>
        </button>
      </div>
      
      <!-- 标签页切换 -->
      <div class="flex border-b border-white/10">
        <button 
          @click="switchTab('personalInfo')"
          :class="['py-3 px-5 font-medium text-sm transition-all', activeTab === 'personalInfo' ? 'text-white border-b-2 border-tech-blue' : 'text-gray-400 hover:text-white']"
        >
          个人信息
        </button>
        <button 
          @click="switchTab('myWorks')"
          :class="['py-3 px-5 font-medium text-sm transition-all', activeTab === 'myWorks' ? 'text-white border-b-2 border-tech-blue' : 'text-gray-400 hover:text-white']"
        >
          我的作品 (2)
        </button>
      </div>
      
      <!-- 标签页内容 -->
      <div v-if="activeTab === 'personalInfo'" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 个人信息表单 -->
        <div class="space-y-4">
          <div class="space-y-1">
            <label class="text-gray-400 text-sm">用户名</label>
            <p class="text-white">久溢</p>
          </div>
          <div class="space-y-1">
            <label class="text-gray-400 text-sm">ID</label>
            <p class="text-white">2191626</p>
          </div>
          <div class="space-y-1">
            <label class="text-gray-400 text-sm">角色</label>
            <p class="text-white">教练</p>
          </div>
          <div class="space-y-1">
            <label class="text-gray-400 text-sm">注册时间</label>
            <p class="text-white">2025-09-24</p>
          </div>
        </div>
        
        <!-- 社交媒体链接 -->
        <div class="space-y-4">
          <div class="space-y-1">
            <label class="text-gray-400 text-sm">个人主页</label>
            <p class="text-tech-blue hover:underline cursor-pointer">https://cc_demo.vercel.com</p>
          </div>
          <div class="space-y-1">
            <label class="text-gray-400 text-sm">GitHub</label>
            <p class="text-tech-blue hover:underline cursor-pointer">github.com/ricksolaris</p>
          </div>
          <div class="space-y-1">
            <label class="text-gray-400 text-sm">LinkedIn</label>
            <p class="text-tech-blue hover:underline cursor-pointer">linkedin.com/in/ricksolaris</p>
          </div>
          <div class="space-y-1">
            <label class="text-gray-400 text-sm">电子邮箱</label>
            <p class="text-white">dognqian3@qq.com</p>
          </div>
        </div>
      </div>
      
      <!-- 我的作品标签页内容 -->
      <div v-else-if="activeTab === 'myWorks'" class="text-center py-8 text-gray-400">
        <p>点击下方"我的作品"区域查看详细信息</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 玻璃拟态效果 */
.glass-effect {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(28, 28, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .p-8 {
    padding: 2rem !important;
  }
  
  .w-32 {
    width: 12rem !important;
    height: 12rem !important;
  }
  
  .text-3xl {
    font-size: 2.5rem !important;
  }
  
  .grid-cols-2 {
    grid-template-columns: 1fr !important;
  }
}
</style>