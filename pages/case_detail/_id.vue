<template>
  <div class>
    <h_head active="10"></h_head>
    <div class="product-banner">辉域-案列详情</div>
    <div class="case-detail-box">
        <div class="case-detail-title">
            {{caseDetail.name}}
        </div>
        <div class="case-detail-explain">
            {{caseDetail.explain}}
        </div>
        <div v-if="caseDetail.isPhone" class="case-detail-img-list-box">
            <div class="case-detail-img-phone-box" v-for="(item,index) in caseDetail.imgList" :key="index" >
                <img :src="item" class="case-detail-img-phone"/>
            </div>
            <div style="clear:both"></div>
        </div>
        <div v-if="!caseDetail.isPhone" class="case-detail-img-list-box">
            <div class="case-detail-img-box" v-for="(item,index) in caseDetail.imgList" :key="index" >
                <img :src="item" class="case-detail-img"/>
            </div>
            <div style="clear:both"></div>
        </div>
  
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
    asyncData(route){
        let id = route.params.id-1
       let caseList=[
           {name:"唐球小程序",imgList:[
               'http://qn-dmagic.dmagic.cn/201912071640065858_f9340cad44def0304cbb99a5818aed4.jpg',
               'http://qn-dmagic.dmagic.cn/201912071643431616_02c9866ee1ebc7f78069f5a3628ca97.jpg',
               'http://qn-dmagic.dmagic.cn/201912071643624848_b9921dd7c681dfc0512813438ea1ef1.jpg',
               'http://qn-dmagic.dmagic.cn/201912071644551414_05a3248357f6e61e7a2e3fe36bccfe1.jpg'
           ],
           isPhone:true,
           explain:"唐球是一种新型的类似高尔夫的运动，这个小程序主要用于用户报名赛事，赛事数据保存查看，场馆数据保存查看，以及用户比赛数据的保存和查看，该项目包括小程序用户界面，以及后台管理数据pc端页面,小程序可以在微信中搜索唐球查看"},
           {name:"案件管理系统",imgList:[
               'http://qn-dmagic.dmagic.cn/201912071644455858_ee44860436eed51981250c88dc4ad8e.png',
               'http://qn-dmagic.dmagic.cn/201912071645782323_2be83e36202d3e16e93af089cc3c875.png',
               'http://qn-dmagic.dmagic.cn/201912071645125353_9a173bfa31bbdbef477414d9aafbf72.png',
           ],explain:"案件管理系统主要是用于管理律师案件数据的，包括案件基本数据，附件列表，进展列表。这个项目关键的地方是要进行权限设计，有两种管理员身份，普通会员，以及超级管理员，超级管理员可以查看所有案件包括查看所有消息会员，而普通会员只能看到和他自身有关系的消息以及案件"},
           {name:"龙庭空调",imgList:[
               'http://qn-dmagic.dmagic.cn/201912071833104747_728793765ba8a34478cde220acb5773.png',
               'http://qn-dmagic.dmagic.cn/20191207183690044_e6db2a89280230e84a36f0e37b58fb8.png',
               'http://qn-dmagic.dmagic.cn/201912071838774848_ae3e4f804fff60d00ae009886f3a06e.png',
           ],explain:"龙庭空调项目主要包括龙庭空调首页，产品列表，产品详情页，该页面采用服务端渲染技术，实现SEO优化"},
       ]
       let caseDetail = caseList[id]
        return {caseDetail}
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
    .case-detail-box{
        margin: 0 auto;
        width: 1200px;
    }
    .case-detail-title{
        text-align: center;
        font-size: 25px;
        line-height: 100px;
    }
    .case-detail-explain{
        font-size: 16px;
        line-height: 30px;
        color: gray;
    }
   .case-detail-img-phone{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        box-shadow: 0px 0px 10px  #888888;
    }
    .case-detail-img-phone-box{
        /* margin:20px 20px; */
        /* height: 900px;; */
        float: left;
        width:45%; 
        /* box-shadow: 0px 0px 10px 1px #888888; */
        padding: 40px 5%;
        margin: 20px 2.5%;
        border-radius: 10px;
    }
    .case-detail-img-list-box{
        margin:20px 20px;
    }
    .case-detail-img-box{
        /* padding: 40px 5%; */
        margin: 40px 20px;
        padding: 20px;
        box-shadow: 0px 0px 10px  #888888;
    }
    .case-detail-img{
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width:1200px){
        .case-detail-box{
        margin: 0 auto;
        width: 800px;
    }
     .case-detail-img-phone-box{
         width:50%; 
         margin: 20px 0%;
     }
     .case-detail-img-box{
         margin: 40px 10px;
     }
    }
    @media screen and (max-width:768px){
        .case-detail-box{
        margin: 0 10px;
        width: 100%
    }
     .case-detail-img-phone-box{
         width:100%; 
         margin: 20px 0%;
         padding: 0;
     }
     .case-detail-img-box{
         margin: 40px 0px;
     }
    }
</style>