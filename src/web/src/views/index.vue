<template>
  <section class="index-warp">
    <header class="header">
      咸恩静的老公
      <span class="header-desc">别问，问就六妞都是我的！</span>
    </header>
    <nav>
      <ul class="nav">
        <li>学习任务</li>
        <li>有生之年</li>
        <li>伙伴链接</li>
      </ul>
    </nav>
    <ul class="tag-list">
      <li class="tag">php</li>
      <li class="tag">webpack</li>
      <li class="tag">算法</li>
      <li class="tag">css</li>
      <li class="tag">js</li>
    </ul>
    <div class="article-list">
      <div class="article">
        <div class="tag">webpack | 前端</div>
        <p class="title">低调的标题</p>
        <p class="desc">描述描述杀杀杀杀杀杀杀杀杀</p>
        <p class="time">2019-10-20</p>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/views/layout/header.vue";
import { commonsAjax } from "@/utils/requery";
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  mounted() {
    commonsAjax("/api/test", "", "get")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="stylus" scoped>
.index-warp {
  width: 700px;
  margin: 0 auto;
  height: 100%;

  .header {
    padding-top: 60px;
    font-weight: bold;
    font-size: 26px;

    .header-desc {
      margin-left: 20px;
      font-size: 15px;
      font-weight: 400;
      color: #BFBFC0;
    }
  }

  .nav {
    margin-top: 20px;

    li {
      display: inline-block;
      padding: 8px 10px;
      font-size: 14px;
      cursor: pointer;
      background: #ffffff;
    }

    li:hover {
      background: #3385FF;
      color: #fff;
    }

    & > li + li {
      margin-left: 10px;
    }
  }

  .tag-list {
    margin-top: 20px;

    li {
      display: inline-block;
      padding: 5px;
      cursor: pointer;
      font-size: 12px;
      background: #ECEDEE;
      color: #B9B9BA;
    }
  }

  .article-list {
    .article {
      padding: 30px;
      margin-top: 20px;
      cursor: pointer;
      background: #ffffff;
      min-height: 200px;
      border-radius: 8px;

      .tag {
        width: 150px;
        background: #E7F3FF;
        color: #4AA1FC;
        text-align: center;
        border-radius: 30px;
        height: 30px;
        font-weight: 600;
        line-height: 30px;
        border-radius: 30px;
      }

      .title {
        margin-top: 10px;
        font-size: 28px;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .desc {
        margin-top: 10px;
        
      }

      .time {
      }
    }

    .article:hover {
      box-shadow: 0 0 2px #ccc;
    }
  }
}
</style>

