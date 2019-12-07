<template>
  <div class="case-list-box">
    <div class="case-list-title">客户案列</div>
    <div class="case-main">
      <div  v-for="(item,index) in caseList" :key="index" >
        <div v-if="index<=3?true:index<=6?movePage:smallpage" class="case-box">
        <el-image class="img-box" :src="item.img" :preview-src-list="srcList" ></el-image>
        <!-- <div class="img-box" :style="{'background-image': `url(${item.img})`}"></div> -->
        <div class="img-title">
          <nuxt-link :to="item.path">
          <div style="float:left">{{item.name}}</div>
          <div style="float:right;">></div>
          <div style="clear:both"></div>
          </nuxt-link>
        </div>
        <div class="img-describe">{{item.describe}}</div>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <div style="height:20px;"></div>
  
  </div>
</template>

<script>
export default {
  props: ["caseList"],
  data() {
    return {
        smallpage:true,
        movePage:true,
        srcList:[
            "http://qn-dmagic.dmagic.cn/201911291632465858_唐球.png",
            "http://qn-dmagic.dmagic.cn/201911291632054040_水果商城2-2.jpg",
            "http://qn-dmagic.dmagic.cn/201911291628963636_个人主页1-1.png",
            "http://qn-dmagic.dmagic.cn/201911291627613232_龙庭空调.png"
        ]
    };
  },
  methods: {
    aaa() {}
  },
  created() {},
  mounted() {
    if (window.screen.width<1200) {
        if (window.screen.width<768) {
          this.movePage = false
            this.smallpage = false
        }else{
            this.movePage = false
        }
        
    }
  }
};
</script>

<style scoped>
.case-list-box {
  /* height: 500px; */
  background-color: #eeeeee;
  padding: 0 10%;
}
.case-list-title {
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
}
.case-box {
  float: left;
  padding: 20px 1.67%;
  width: 33.3%;
  /* background-color: yellow; */
  height: 300px;
  margin-bottom: 30px;
}
.img-title {
  font-size: 18px;
  font-weight: 700;
}
.img-title div {
  line-height: 30px;
}
.img-title a div:hover {
  color: red;
  cursor: pointer;
}
.img-describe {
  line-height: 30px;
  color: gray;
}
.img-box {
  height: 250px;
  width: 100%;
}
.img-box {
  /* background-size: 100%; */
}
@media screen and (max-width:1200px){
    .case-list-box{
        padding:0 10px;
    }
    .case-box{
        width: 50%;
    }
}
@media screen and (max-width:768px){
    .case-list-box{
        padding:0 10px;
    }
    .case-box{
        width: 100%;
    }
}
</style>