<template>
  <div class='box'>
    <div class="topFace">
      <div class="avatar">
        <span>Zerob13.in</span>
        <img src="/images/logo.png" alt="LOGO">
      </div>
    </div>
    <div class="leftFace">
      <div>
        <span class="title">Life</span>
        <div class="link-wrap">
          <a href="http://blog.zerob13.in"><i class="icon-pen"></i></a>
          <a href="http://weibo.com/zerob13"><i class="icon-sina-weibo"></i></a>
          <a href="http://twitter.com/zerob13"><i class="icon-twitter"></i></a>
        </div>
      </div>
    </div>
    <div class="rightFace">
      <div>
        <span class="title">Geek</span>
        <div class="link-wrap">
          <a href="http://github.com/zerob13"><i class="icon-github3"></i></a>
          <a href="http://www.linkedin.com/pub/lingfeng-yang/2b/113/335"><i class="icon-linkedin2"></i></a>
          <a href="mailto:zerob13@gmail.com"><i class="icon-paperplane"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  module.exports = {
    replace: true
  }
</script>

<style lang="sass">
  .box {
    position: absolute;
    left: 50%;
    top: 250px;
    margin-left: -200px;
  }
  
  .title {
    display: block;
    font-size: 2.5rem;
    text-align: center;
    color: #fafafa;
    text-shadow: 2px 2px 4px #888888;
  }
  
  a {
    display: inline-block;
    font-size: 2rem;
  }
  
  .link-wrap {
    display: flex;
    justify-content: space-around;
    margin-top: 2%;
    width: 100%;
    i {
      display: block;
    }
  }
  
  .rightFace,
  .leftFace,
  .topFace {
    > div {
      padding: 10px;
      width: 180px;
      height: 180px;
    }
    position: absolute;
  }
  
  .leftFace {
    transform: skew(0deg, 30deg);
    background-color: #ccc;
  }
  
  .rightFace {
    left: 200px;
    background-color: #ddd;
    transform: skew(0deg, -30deg);
  }
  
  .topFace {
    img {
      display: inline-block;
      height: 100%;
      border-radius: 100%;
      transform: rotate(-45deg);
    }
    div {
      transform: skew(0deg, -30deg) scale(1, 1.16);
      background-color: #eee;
      font-size: 0.862em;
    }
    transform: rotate(60deg);
    top: -158px;
    left: 100px;
  }
</style>
