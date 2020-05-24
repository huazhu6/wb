<template>
  <div class="home">
    <!-- 左边导航菜单 -->
    <div class=" left">
      <el-row class="tac">
        <el-col :span="12">
          <h5>默认菜单</h5>
          <el-menu
            background-color='#ccc'
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">花猪</el-menu-item>
                <el-menu-item index="1-2">汤圆</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!-- 右边 -->
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
    .home{
      display:flex;
      height:100%;
    }
    .left{
      height: 100%;
      width:230px;
      background: #ccc;
    }
    .right{
      width :1px;
      flex-grow :1;
      background: olivedrab;
    }
    .el-col{
      width: 100% !important;
    }
</style>
