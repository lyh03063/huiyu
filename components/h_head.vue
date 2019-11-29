<template>
  <div class="head-box">
      <div class="logo-box">
          <div class="logo-text">辉域</div>
          <div class="logo-remark">
              <div>网站建设行业</div>
              <div>优质供应商</div>
          </div>
          <div class="el-icon-menu menu-box"  @click="showNav" v-if="!showNavIndex"></div>
          <div class="el-icon-close close-box"   @click="closeNav" v-if="showNavIndex"></div>
          <div style="clear:both"></div>
      </div>
      <div class="nav-box">
          <ul>
              <li v-for="(item,index) in navList" :key="index" class="nav-text">
                  <nuxt-link :to="{name:item.url}" :class="activeIndex==index?'active':''">{{item.text}}</nuxt-link>
              </li>
          </ul>
      </div>
      <div class="move-nav-box" v-if="showNavIndex">
          <div v-for="(item,index) in navList" :key="index" class="move-nav-text-box">
              <nuxt-link :to="{name:item.url}">
              <div class="move-nav-text">{{item.text}}</div>
              <div class="move-nav-url">></div>
              <div style="clear:both"></div>
              </nuxt-link>
              </div>
              
      </div>
      <div style="clear:both"></div>
      <div style="height:10px;" v-if="movePage"></div>
  </div>
</template>

<script>

export default {
    props:['active'],
  data() {
    return {
        showNavIndex:false,
        movePage:false,
        activeIndex:this.active||0,
        navList:[
            {text:"首页",url:"index"},
            {text:"关于辉域",url:"about"},
            
            {text:"成功案列",url:"case_list"},
            {text:"网站价格",url:"contact"},
            {text:"常见问题",url:"problem_list"},
            {text:"联系我们",url:"contact"},
        ]
    };
  },
  methods: {
      showNav(){
          this.showNavIndex = true
      },
      closeNav(){
        this.showNavIndex = false
      }
  },
  mounted() {
      if (window.screen.width<1000) {
          this.movePage = true
      }
  }
};
</script>

<style scoped>
 .head-box{
     /* height: 60px; */
     background-color: white;
     padding-left: 10%;
     
 }
 .logo-box{
     float: left;
     line-height: 50px;
     /* display: flex; */
     padding-top:10px;
     padding-bottom: 8px;

 }
 .menu-box{
     float: right;
     line-height: 40px;
     font-size: 30px;
     margin-right: 10px;
     display: none;
     cursor: pointer;
 }
 .close-box{
     float: right;
     line-height: 40px;
     font-size: 30px;
     margin-right: 10px;
     display: none;
     cursor: pointer;
 }
 .logo-text{
     float: left;
     width: 70px;
     font-size: 25px;
     border-right: 1px solid gray;
     cursor: pointer;
 }
 .logo-remark{
     float: left;
     margin-left: 15px;
 }
 .nav-box{
     width: auto;
     padding-left: 20%;
 }
 .nav-text{
     line-height: 60px;
     display: inline-block;
     margin-left: 5%;
 }
  .nav-text a{
      font-size: 16px;
  }
  .active{
      color:tomato
  }
 .nav-text a:hover{
     color:tomato
 }
 .move-nav-box{
     display: none;
 }
 .move-nav-text-box{
     /* display: none; */
     padding-left: 10px;
     line-height: 50px;
     border-bottom: 1px solid #eeeeee;
     background-color: white;
     cursor: pointer;
 }
.move-nav-text{
    line-height: 50px;
    padding-left: 10px;
    float: left;
}
.move-nav-text:hover{
    color: tomato
}
.move-nav-url:hover{
    color: tomato
}
.move-nav-url{
    float: right;
    line-height: 50px;
    font-weight: 700;
    font-size: 18px;
    margin-right: 10px;
}
 @media screen and (max-width:1000px){
     .head-box{
         padding-left: 0px;
     }
      .logo-box{
          padding-left: 10px;
          background-color: black;
          color:white;
          width: 100%;
      }
      .nav-box{
          display: none;
      }
      .move-nav-box{
          display: block;
      }
      .menu-box{
          display: block;
      }
      .close-box{
          display: block;
      }
}
</style>
