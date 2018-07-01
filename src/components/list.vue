<template>
  <div class="content">
    <ul>
      <a class="item" v-for="item in article" :href="item.url">
        <div class="content-left">
          <div class="content-mid">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </div>
          <div class="content-footer">
            <span class="author">taizi</span>&nbsp;
            <span class="like-num">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zan"></use>
                  </svg>22
            </span>&nbsp;
            <span class="comment">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                  </svg>24
            </span>
          </div>
        </div>
        <div class="content-right">
          <img :src="item.imgSrc" alt="">
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "list",
      props:[
        'article'
      ]
    }
</script>

<style scoped>
  .content{
    margin-top: 20px;
  }
  .item{
    width: 100%;
    height: 100px;
    display: flex;
    padding: 5px;
    border-top: 1px solid #d0d0d0;
    box-sizing: border-box;
  }
  .content-left{
    width: 75%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    text-align: left;
  }
  .content-mid{
    width: 95%;
    height: 69px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content-mid h2{
    font-size: 18px;
    line-height: 25px;
    color: #2f2f2f;
    font-weight: 700;
  }
  .content-mid p{
    font-size: 13px;
    color: #999999;
    line-height: 21px;
  }
  .content-footer{
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #787878;
  }
  .content-right{
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-right img{
    width: 90%;
    height: 90%;
    display: block;
  }
</style>
