<template>
  <div class>
    <h_head active="5"></h_head>
    <div class="product-banner">联系我们</div>
    <!-- <div style="height:20px;"></div> -->
    <div class="contact-main">
        <div class="contact-box">
            <div class="img-box el-icon-phone-outline"></div>
            <div class="text-box">电话</div>
            <div class="remark-box">
                <div>13691916429</div>
                <div>19864865950</div>
            </div>
        </div>
        <div class="contact-box">
            <div class="img-box el-icon-message"></div>
            <div class="text-box">邮箱</div>
            <div class="remark-box">
                <div>654029036@qq.com</div>
                <div>3158644822@qq.com</div>
            </div>
        </div>
        <div class="contact-box">
            <div class="img-box el-icon-chat-dot-round"></div>
            <div class="text-box">微信</div>
            <div >
                <div class="remark-img">
                <img src="http://www.dmagic.cn/images/IconS/IconS_2567.png" class="remark-img"/>
                </div>
            </div>
        </div>
        <div class="contact-box">
            <div class="img-box el-icon-position"></div>
            <div class="text-box">地址</div>
            <div class="remark-box">
                <div> 广东省深圳市龙岗区平湖街道</div>
                <div>平安大道茗萃园3期金楚原地产二楼码帮科技</div>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
     <h_foot></h_foot>
      <h_floatbar></h_floatbar>
  </div>
</template>

<script>
import h_head from '@/components/h_head'
import h_foot from '@/components/h_foot'
import h_floatbar from '@/components/h_floatbar'
export default {
    components:{ h_head,h_foot,h_floatbar},
    asyncData(){
     
    },
  data() {
    return {
    };
  },
  methods: {
    
  },
  created() {
  }
};
</script>

<style scoped>
    .contact-main{
        background-color: #eeeeee;
        /* height: 500px;; */
        padding: 0 10%;
    }
    .contact-box{
        float: left;
        width: 15%;
        margin: 50px 5%;
        height: 250px;
        padding: 20px 0;
        background-color: white;
        border-radius: 20px;
    }
    .img-box{
        width: 100%;
        height: 80px;
        margin-top: 10px;
        font-size: 80px;
        line-height: 80px;
        text-align: center;
    }
    .text-box{
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        color: gray;
        margin-top:-5px;
        margin-bottom: 10px;
    }
    .remark-box div{
        text-align: center;
        line-height: 30px;
        padding:0 10px;
    }
    .remark-img{
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }
    @media screen and (max-width:1700px){
        .contact-box{
            width: 20%;
            margin: 50px 2.5%;
        }

    }
    @media screen and (max-width:1400px){
        .contact-box{
            width: 23%;
            margin: 50px 1%;
        }
    }
    @media screen and (max-width:1200px){
        .contact-box{
            width: 40%;
            margin: 50px 5%;
        }
    }
    @media screen and (max-width:768px){
        .contact-main{
            padding:0 15px;
        }
        .contact-box{
            width: 45%;
            margin: 50px 2.5%;
        }
    }
</style>