<template>
  <el-container style="border: 1px solid #eee; ">
    <el-header style="text-align: right; font-size: 12px">
      <common-header />
    </el-header>
    <el-divider style="margin:0"></el-divider>

    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <common-sider />
      </el-aside>
    <el-container>
      <el-main>
        <!-- <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address"> </el-table-column>
        </el-table> -->
        <router-view></router-view>
      </el-main>
      <el-footer>
        @copyright 2021
      </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonSider from '../components/CommonSider.vue'

export default defineComponent({
  components: {
    // 'icon-menu': Menu
    CommonHeader,
    CommonSider,
  },
  setup() {
  },
})
</script>

<style>
.el-footer{
    font-size: 20px;
    color:gray;
    margin-top: 10px;
}
</style>

