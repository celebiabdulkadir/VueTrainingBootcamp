<script setup>
// import NewsKeyword from '../NewsKeyword/NewsKeyword.vue';
const props = defineProps(['content'])

</script>

<template>
<div v-for="item in props.content" :key="item">
  <div class="headlineTitle"  >{{item.title}}</div>
  <div class = "description"  > {{item.description}}</div>
  <img class="imageUrl"   :src="item.image_url"  alt="" >
  <div class = "pubDate" > Publish Date : {{item.pubDate}}</div>
  <a  class = "newsUrl"  :href="item.link"  target="_blank"> Complete Article</a>
</div>
</template>

<style scoped>

  .headlineTitle {
  font-weight: bold;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:left;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: left;
  }

.description {
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:left;

  padding-top: 8px;
  padding-bottom: 8;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: left;
}

.imageUrl {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:left;
  border-radius: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: left;

}
.pubDate {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:left;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: left;
}
.newsUrl {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:left;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 15px;
  margin-top: 8;
  margin-bottom: 15px;
}
/* 
.root {
    position: relative;
}
.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    width: 100% ;
    height: 100% ;
    display: flex ;
    justify-content: center;
    align-items: center;
    

}
.modal > div {
    background-color: black;
    padding: 50px ;
    border-radius: 10px;
} */
</style>