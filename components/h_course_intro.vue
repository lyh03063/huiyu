<template>
  <div class="width-layout">
    
    <div
      class="FS16 TAC LH30 PB20 PT20"
    >辉域科技拥有行内顶尖的开发团队，有1000+客户长期合作，快捷完成各种响应式移动式建站，选择我们，为您提供最优质的的服务</div>
    <div class="TAC">
      <el-carousel :interval="4000" type="card"  :height="bannerHeight">
        <el-carousel-item v-for="(item,index) in arrImg" :key="index">
          <h3 class="medium"><el-image  :src="item.url" ></el-image></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerHeight:'200px',
      arrImg: [
        { url: "http://img.sccnn.com/bimg/339/07100.jpg" },
        { url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2831673121,1090390181&fm=15&gp=0.jpg" },
        { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2112582435,1556935404&fm=15&gp=0.jpg" },
        // { url: "000" },
        // { url: "000" }
      ]
    };
  },
  methods: {
    aaa() {}
  },
  mounted() {
    if (window.screen.width<769&&window.screen.width>600) {
      this.bannerHeight = '100px'
    }else if (window.screen.width<=600&&window.screen.width>530) {
      this.bannerHeight = '85px'
    }else if (window.screen.width<=530&&window.screen.width>460) {
      this.bannerHeight = '80px'
    }
    else if (window.screen.width<=460&&window.screen.width>400) {
      this.bannerHeight = '63px'
    }else if (window.screen.width<400) {
      this.bannerHeight = '56px'
    }
  }
};
</script>

<style scoped>
.width-layout {
    width: 1200px;
    margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
@media screen and (max-width:768px){
  .width-layout{
    width: 100%;
    height: 100%;
    padding: 0px 20px;
  }
  .big-title{
    margin-top:20px;
    font-size: 23px;
    line-height: 30px;
  }
  .intro-img{
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item >>> h3{
  line-height: 20px;
}
</style>
