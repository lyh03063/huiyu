<template>
  <div class>
    <h_head active="2"></h_head>
     <h_case :caseList="caseList"></h_case>
     <h_foot></h_foot>
      <h_floatbar></h_floatbar>
  </div>
</template>

<script>
import h_head from '@/components/h_head'
import h_foot from '@/components/h_foot'
import h_floatbar from '@/components/h_floatbar'
import h_case from '@/components/h_case'
export default {
    components:{ h_head,h_foot,h_floatbar,h_case},
    asyncData(){
      
        let caseList = [
            {name:'唐球小程序',img:"",describe:"管理唐球运动的小程序",img:"http://www.vishining.com/u_file/instance/17_02_16/ddb4b803d1.jpg"},
            {name:'水果商城',img:"",describe:"响应式移动端水果商城",img:"http://qn-dmagic.dmagic.cn/201911291628963636_个人主页1-1.png"},
            {name:'案件管理系统',img:"",describe:"管理案件数据的功能性网站",img:"http://qn-dmagic.dmagic.cn/201911291627613232_龙庭空调.png"},
            {name:'信息管理系统',img:"",describe:"管理各种信息数据的功能性网站",img:"http://www.vishining.com/u_file/instance/19_05_07/79423b977f.jpg"},
            {name:'龙庭空调',img:"",describe:"龙庭空调的官网",img:"http://qn-dmagic.dmagic.cn/201911291627613232_龙庭空调.png"},
            {name:'唐球小程序',img:"",describe:"管理唐球运动的小程序",img:"http://www.vishining.com/u_file/instance/17_02_16/ddb4b803d1.jpg"},
            {name:'水果商城',img:"",describe:"响应式移动端水果商城",img:"http://www.vishining.com/u_file/instance/17_02_16/0f6691dbcc.jpg"},
            {name:'案件管理系统',img:"",describe:"管理案件数据的功能性网站",img:"http://www.vishining.com/u_file/instance/19_05_07/79423b977f.jpg"},
            {name:'信息管理系统',img:"",describe:"管理各种信息数据的功能性网站",img:"http://www.vishining.com/u_file/instance/19_05_09/2237572f17.jpg"},
        ]
        return { caseList }
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

</style>