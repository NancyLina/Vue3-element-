<template>
    
        <div class="page-logo">
            <img class="img" src="../assets/logo.png" alt="标识" />
            <span class="text"> 演示平台</span>
        </div>
        <div class="head-right">
          <div class="search">
            &nbsp;
            <el-icon style="margin-top:8px;"><search /></el-icon>
            &nbsp;
            <input class="input-search" v-model="input" placeholder="搜索" />
          </div>
          <div class="blank"> 
            
          </div>
        </div>
            <!-- <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
                <el-menu-item index="1">Processing Center</el-menu-item>
                <el-menu-item index="2">Workspace</el-menu-item>
                <el-menu-item index="3">Orders</el-menu-item> -->
            <!-- <el-sub-menu index="2">
            <template #title>Workspace</template> -->
            <!-- <el-menu-item index="2-1">item one</el-menu-item> -->
            <!-- <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
            </el-sub-menu> -->
            <!-- </el-sub-menu> -->
            <!-- <el-menu-item index="3" disabled>Info</el-menu-item> -->
        <!-- </el-menu> -->
    
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Message, Menu, Setting } from '@element-plus/icons'

export default defineComponent({
  components: {
    Message,
    Setting,
    'icon-menu': Menu,
  },
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      handleSelect,
      input: ref(''),
    }
  },
})
</script>

<style>
.el-header {
  /* background-color: #b3c0d1; */
  color: var(--el-text-color-primary);
  line-height: 60px;
  padding: 0 !important;
}
.el-menu-demo{
    width:550px;
    float: right;
}

.page-logo{
    margin: 12px 30px;
    float:left; 
}
.img{
    width: 35px;    
}

.text{
    font-size: 18px;
    position: absolute;
    top:5px;
}
.head-right{
  float:right;
}
.search{
  display: inline-block;
  border: gray 1px solid;
  border-radius: 10px;
  margin-top: 15px;
  height:30px;
  line-height: 30px;
}
.input-search{
  border: none;
  /* 重点是 outline: none;  */
  outline: none;
}
.blank{
  display: inline-block;
  width: 40px;
}

</style>