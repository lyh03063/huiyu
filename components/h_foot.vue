<template>
  <div class>
    <div data-server-rendered="true" class="foot-page-box">
      <p class="foot-page-bar"></p>
      <div class="foot-page-inner">
        <div class="foot-page-link-box">
          <nuxt-link :to="{name:'index'}" class="foot-page-link">首页</nuxt-link >
           <nuxt-link :to="{name:'about'}" class="foot-page-link"  >关于辉域</nuxt-link>
           <nuxt-link :to="{name:'case_list'}" class="foot-page-link">成功案列</nuxt-link>
           <nuxt-link :to="{name:'problem_list'}"  class="foot-page-link">常见问题</nuxt-link>
           <nuxt-link :to="{name:'contact'}"  class="foot-page-link">联系我们</nuxt-link>
        </div>
        <p class="H5 OF2 CL1"></p>
        <div class="foot-page-other-box">
          <span class="foot-text B">公司电话：0755-28223854 19864865950</span>
          <span class="foot-text">地址：深圳市龙岗区平湖街道茗萃园3期商铺</span>
          <div class="LH_20">
            <span class="foot-text">
              <a
                target="_blank"
                href="http://www.miitbeian.gov.cn/"
                style="color:#999"
              >粤ICP备19090549号</a>
            </span>
            <span class="foot-text">Copyright © 2016–2018</span>
            <span class="foot-text">
              版权所有：深圳市码帮科技咨询有限公司
              主体证件号：91440300MA5FELNBX6
            </span>
          </div>
          <br>
        </div>
      </div>
      <p class="H10 OF2 CL1"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "0000模块名称"
    };
  },
  methods: {
    aaa() {}
  },
  created() {}
};
</script>

<style scoped>
.foot-page-box {
  background-color: #f3f3f3;
  width: 100%;
  overflow: hidden;
}
.foot-page-bar {
  height: 3px;
  overflow: hidden;
  background-image: url(//www.dmagic.cn/images/IconS/IconS_940.png);
  background-repeat: no-repeat;
  margin-bottom: 10px;
  background-position: center 0px;
  background-color: #ccc;
}
.foot-page-inner {
  clear: both;
  text-align: center;
  padding: 0 20px;
}
.foot-page-link {
  display: inline-block;
}

.foot-page-link-box {
  line-height: 20px;
}
.foot-page-other-box {
  line-height: 20px;
  color: #999;
}
.foot-text {
  display: inline-block;
}

.foot-page-box .foot-page-link:link,
.foot-page-box .foot-page-link:visited {
  margin-right: 10px;
  color: #666;
}
.foot-page-box .foot-page-link:link:hover,
.foot-page-box .foot-page-link:visited:hover {
  color: #f90;
}

/*菜单文本之间增加竖线*/
.foot-page-link:not(:last-child):after {
  content: "|";
  margin-left: 10px;
  color: #ccc;
}
</style>
