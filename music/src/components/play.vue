<template>
  <div class="play" v-show="playList.length>0">
    <!-- 播发页面 -->
    <transition name="nomal" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img width="100%" height="100%" :src="(currentSong.al && currentSong.al.picUrl) 
          || (currentSong.artists && currentSong.artists[0].img1v1Url)" alt="">
        </div>

        <!-- 播放页面的头部 -->
        <div class="top">
          <div class="back" @click="back">
            <i class="icon">&#xe8e2;</i>
          </div>
          <h1 class="title" v-html="currentSong.name"></h1>
          <h2 class="subtitle" v-html="(currentSong.ar && currentSong.ar[0].name) 
          || (currentSong.artists && currentSong.artists[0].name)">
          </h2>
        </div>

        <!-- 播放页面的内容 -->

      </div>
    </transition>

    <!-- 底部的播放器 -->
    <transition name="mini">
      <div class="mini-player" v-show="!fullScreen" @click="open">
        <div class="picture">
          <!-- 操作图片为旋转要先获取其DOM结构 -->
          <div class="imgWrapper" ref="miniWrapper">
            <img ref="miniInage" :class="cdCls" width="40" height="40" v-lazy="(currentSong.al && currentSong.al.picUrl) 
            || (currentSong.artists && currentSong.artists[0].img1v1Url)" >
          </div>
        </div>
        <div class="text">
          <h2 class="name">{{currentSong.name}}</h2>
          <p class="desc" v-html="(currentSong.ar && currentSong.ar[0].name) || 
          (currentSong.artists && currentSong.artists[0].name)"></p>
        </div>
        <!-- 播放按钮 -->
        <div class="control">
          <i class="icon icon-min" v-if="playing">&#xe60a;</i>
          <i class="icon icon-min" v-else>&#xe606;</i>
        </div>
        <!-- 下一首按钮 -->
        <div class="control">
          <i class="icon">&#xe718;</i>
        </div>
        <!-- 歌单按钮 -->
        <div class="control">
          <i class="icon">&#xe927;</i>
        </div>
        <!-- 底部一条杠进度条 -->
        <div class="bottom-progress-bar">
          <div class="bottom-progress" :style="{width:(currentTime/duration).toFixed(3)*100+'%'}"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'play',
  data() {
    return {
      fullScreen:false,
      playing:false,
      playList:[1],
      currentSong:{},
      cdCls:'play',
      currentTime:3,
      duration:4
  }
},
  methods: {
    open(){},
    back(){},
    enter(){},
    afterEnter(){},
    leave(){},
    afterLeave(){}

  },

}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function";
.play
  z-index 150
  .normal-player
    position fixed  //让这个页面占满整屏
    top 0
    left 0
    bottom 0
    right 0
    z-index 150
    background rgb(8,5,58)
    .background
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      opacity 0.6
      filter blur(20px)
    .top
      position relative
      margin-bottom 25px
      .back
        position absolute
        top 0
        left px2rem(12px)
        z-index 50
        .icon
          display block
          height px2rem(100px)
          line-height px2rem(100px)
          padding 0 px2rem(30px)
          font-size 22px
      .title
        width 70%
        margin 0 auto
        line-height px2rem(100px)
        text-align center
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 18px
        color #ffffff
      .subtitle
        line-height px2rem(40px)
        text-align center
        font-size 14px
        color #ffffff

  .mini-player
    display flex
    align-items center //y
    // justify-content center //x
    position fixed
    left 0
    bottom px2rem(5px)
    z-index 180
    width 100%
    height px2rem(105px)
    background #ea2448
    &.mini-enter-active,&.mini-leave-active
      transition all 0.4s
    &.mini-enter,&.mini-leave-to
      opacity 0
    .picture
      flex 0 0 px2rem(80px)
      width px2rem(80px)
      height px2rem(80px)
      padding 0 px2rem(20px) 0 px2rem(20px)
      .imgWrapper
        width 100%
        height 100%
        img 
          border-radius 50%
          &.play
            animation rotate 10s linear infinite
          &.pause
            animation-play-state paused 
    .text
      display flex
      flex-direction column //垂直布局
      justify-content center
      flex 1
      line-height px2rem(40px)
      overflow hidden
      .name
        margin-bottom 2px
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 12px
        color hsla(0,0%,100%,0.3)
    .control
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      text-align center
      padding 0 px2rem(20px)
      .icon
        font-size 30px
        color #ffffff
    .bottom-progress-bar
      position fixed
      left 0
      right 0
      bottom 0
      height px2rem(6px)
      background #f17498
      .bottom-progress
        height 100%
        background linear-gradient(#902541,#902444)
@keyframes rotate 
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)



</style>

