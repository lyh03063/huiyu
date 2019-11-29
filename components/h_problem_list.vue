<template>
  <div class="problem-list-box">
      <div class="problem-list-title">网站建设常见问题</div>
      <div class="problem-main" >
        <div class="problem-box" v-for="(item,index) in problemList" :key="index" :class="index==problemList.length-1?'end':''"> 
          <div class="problem-title">{{item.name}}</div>
          <div class="problem-answer">{{item.answer}}</div>
        </div>
      </div>
      <div style="height:20px;"></div>
        <hr/>
  </div>
</template>

<script>
export default {
    props:["problemList"],
  data() {
    return {
    };
  },
  methods: {
    aaa() {}
  },
  created() {
  }
};
</script>

<style scoped>
  .problem-list-box{
    margin-top:20px;
    padding:0 10%;
  }
  .problem-list-title{
    text-align: center;
    font-size: 25px;
    line-height: 50px;
  }
  .problem-box{

    line-height: 30px;
    border-bottom: 1px solid #eeeeee;
  }
  .problem-title{
    line-height: 50px;
    font-size: 22px;
  }
  .problem-answer{
    color: gray;
    margin-bottom: 10px;
  }
  .end{
    border:0px;
  }
</style>