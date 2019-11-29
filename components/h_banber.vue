<template>
  <div class v-if="showbanber">
    <el-carousel indicator-position="outside" height="440px" v-if="!showMovePage">
      <el-carousel-item v-for="item in arrImg" :key="item.url">
        <div class="img-box" :style="{'color':`#f00`,'background-image':`url(${item.url})`}"></div>
        <!-- <el-image  :src="item.url" ></el-image> -->
      </el-carousel-item>
    </el-carousel>
    <el-carousel indicator-position="outside" :height="bannerHeight" v-if="showMovePage">
      <el-carousel-item v-for="item in arrImg" :key="item.url">
        <div class="img-box" :style="{'color':`#f00`,'background-image':`url(${item.url})`}"></div>
        <!-- <el-image  :src="item.url" ></el-image> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>





<script>
export default {
  data() {
    return {
      showbanber:false,
      showMovePage:false,
      bannerHeight:'170px',
      arrImg: [
      { url: "http://pwff5uqxs.bkt.clouddn.com/mabang_baner2.jpg" },
        { url: "http://www.mobiletrain.org/page/img/html5/banner_pic1.jpg" }]
      
    };
  },
  methods: {
    aaa() {}
  },
  mounted() {
    if (window.screen.width<769) {
      this.showMovePage  = true
      this.arrImg=[
        { url: "http://www.mobiletrain.org/d/file/about/money/7a83c36fbc27feba3795223e4a162b6f.jpg" },
        { url: "http://img.mp.itc.cn/upload/20161107/6f6c5e40f2a94115ba1b3d87a23b73d6_th.jpg" }
      ]
    }
    if (window.screen.width<769&&window.screen.width>600) {
      this.bannerHeight = '260px'
    }else if (window.screen.width<=600&&window.screen.width>530) {
      this.bannerHeight = '240px'
    }else if (window.screen.width<=530&&window.screen.width>460) {
      this.bannerHeight = '220px'
    }
    else if (window.screen.width<=460&&window.screen.width>400) {
      this.bannerHeight = '200px'
    }else if (window.screen.width<400) {
      this.bannerHeight = '180px'
    }
    this.showbanber = true
  }
};
</script>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img-box {
  width: 100%;
  height: 100%;
  background-position: center center;
}
@media screen and (max-width:768px){
  .img-box{
    background-size: 100%;
    background-repeat: no-repeat;
  }
}
</style>
