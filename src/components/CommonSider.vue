<template>
      <el-menu :default-openeds="['1', '2','3']">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><picture-filled /></el-icon>导航一
          </template>
            <router-link to="/mainpage/upload" class="router-link"><el-menu-item index="1-1">上传图片</el-menu-item></router-link>
            <router-link to="/mainpage/nav2" class="router-link"><el-menu-item index="1-2">选项 2</el-menu-item></router-link>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><upload-filled /></el-icon>导航二
          </template>
            <router-link to="/mainpage/nav1" class="router-link"><el-menu-item index="2-1">选项 1</el-menu-item></router-link>
            <router-link to="/mainpage/nav2" class="router-link"><el-menu-item index="2-2">选项 2</el-menu-item></router-link>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><management /></el-icon>导航三
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="3-4">
            <template #title>Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref ,computed} from 'vue'

export default defineComponent({
  name:'CommonSider',
  
  setup() {
    
  },
})
</script>

<style>
.el-menu{
  height: 100%;
}
.router-link {
  text-decoration:none;
}
</style>
