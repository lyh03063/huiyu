<template>
  <div class>
    <h_head active="1"></h_head>
    <div class="product-banner">关于辉域</div>
    <div style="height:20px;"></div>
    <div class="about-text">辉域建站是深圳市辉域科技有限公司旗下H5网站建设品牌</div>   
    <div class="about-text">有顶级的开发团队，一直专注于网站建设领域</div>
    <div class="about-text">选择我们，为您提供最优质的服务</div>
    <h_info></h_info>
    <h_course_intro></h_course_intro>
     <h_foot></h_foot>
      <h_floatbar></h_floatbar>
  </div>
</template>

<script>
import h_head from '@/components/h_head'
import h_foot from '@/components/h_foot'
import h_info from '@/components/h_info'
import h_floatbar from '@/components/h_floatbar'
import h_case from '@/components/h_case'
import h_course_intro from '@/components/h_course_intro'
export default {
    components:{ h_head,h_foot,h_floatbar,h_info,h_course_intro},
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
    .about-text{
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        
    }
 
</style>