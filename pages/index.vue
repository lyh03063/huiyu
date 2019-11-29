<template>
  <div class="app">
     <h_head></h_head>
     <h_banber></h_banber>
     <h_info></h_info>
     <h_case :caseList="caseList"></h_case>
     
     <h_problem_list :problemList="problemList"></h_problem_list>
     
     <h_course_intro></h_course_intro>
      <h_foot></h_foot>
      <h_floatbar></h_floatbar>
  </div>
</template>

<script>
import h_head from '@/components/h_head'
import h_banber from '@/components/h_banber'
import h_info from '@/components/h_info'
import h_case from '@/components/h_case'
import h_problem_list from '@/components/h_problem_list'
import h_course_intro from '@/components/h_course_intro'
import h_foot from '@/components/h_foot'
import h_floatbar from '@/components/h_floatbar'

export default{
  components:{ h_head, h_banber,h_info,h_case,h_problem_list,h_course_intro,h_foot,h_floatbar},
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
        let problemList = [
          {name:"网站制作设计的规范有哪些？",answer:"现在的网站设计圈子，基本上都有很多雷同，没有太多的新意，基本上都是相类似，新出来的页面设计基本上就是那些专业的设计师的盗版，换汤不换药，没有太多的新意。"},
          {name:"网站定制要注意哪些问题",answer:"网站定制要简洁，要理解用户进入你网站的终极目的。所以，网站建设一定要简答，当用户阅读网站的时分，假如要操作很多步才干到达最终页面，那麼，将会对网站友好度降低，会以为网站很简洁，所以网站定制越简洁越好。"},
          {name:"营销型网站怎么做才能更好？",answer:"营销型网站最重要的一种推广的方式借助于搜索引擎，如果网站的前台网页以及后台的网站地图在设计的时候都能够充分的考虑作用，而且设计的比较完善，就说明与搜索引擎的关系已经关联好了。这样一来，既能够尽快的实现网站的优化，还能够节省时间，提高设计的效率。"},
          {name:"网站制作设计的规范有哪些？",answer:"在找商城网站建设企业的时候，要留意别太年轻的企业，起码要创立多年的网站建设公司，这种公司都是有一定的项目能力的，在商城网站建设后的服务能够有所保障。例如在中后期购物商城营运期间，突然出现问题，商城网站建设企业的反馈速率是非常关键的，假如拖拖拉拉几天都难以解决的话，那对顾客而言财产损失是很大的。由于互联网技术给我们衣食住行的带来的便利，很多公司陆续开始商城网站建设来涌入互联网经济的商业市场。可是如今，传统意义的互联网经济商业服务早已被阿里和京东等大型网购平台掌控，那么那种的公司合适搭建自己的商城网站呢?最先，众所周知，大中小型公司是最合适搭建的自己的商城网站的，由于我们晓得，小企业会由于本身资源和人才资源的不足选择依托在较大的服务平台来开展自己的电商运营，因为在那些服务平台上，小企业不需要投入太多人力与物力。就可以得到相对较高的回报。"},
        ]
        return { caseList,problemList}
    },
  data(){
    return {}
  }
}
</script>

<style scoped>
   .app{
     /* background-color: gray; */
     height: 1000px;
   }
</style>