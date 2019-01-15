<template>
  <div class="login-comt">
    <div class="lihon-dv">
      <h3 class="title">请登录</h3>
      <el-form :label-position="labelPosition" label-width="80px" >
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="parsswrod"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="dla" @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
//import $axios from 'axios'
export default {
    
  data() {
    return {
      labelPosition: "right",
        parsswrod:"",
        username:"",
    }
  },
  methods:{
      login(){
        
          //$axios.post('/users/login',{
            this.$axios.post('users/login',{
              parsswrod:this.parsswrod,
              username : this.username
          }).then(result => {
                console.log(124)
              console.log(result.data)
          }).catch(err => {
              console.dir(err)
          })
      }
  }
};
</script>
<style lang="less" >
.login-comt {
  .lihon-dv {
    width: 900px;
    height: 400px;
    border: 1px #aaa solid;
    border-radius: 10px;
    margin: 100px auto;
    padding-top: 80px;
    padding-left:180px;
    .el-input__inner {
      width: 70%;
      height: 50px;
    }
    .el-form-item__label {
      font-size: 16px;
      font-weight: bold;
    }
    .title {
         width: 70%;
      font-size: 24px;
      font-weight: bold;
      padding-bottom: 15px;
      text-align: center;
    }
    .dla{
        margin-left: 260px;
        width: 150px;
        height: 60px;
        font-size: 25px;
    }
  }
}
</style>
