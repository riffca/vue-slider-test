<template>
  <div class="page">
    <div class="header links">
      <a
        href="#"
        :key="index"
        v-for="text, index in ['home', 'about us', 'contact us']">
        {{text}}
      </a>
    </div>
    <div class="carousel">
      <carousel :perPageCustom="[[0, 1], [768, 3]]">
        <slide :key="index" v-for="image, index in imageSrcs">
          <img class="slide-image" :src="image"/>
        </slide>
      </carousel></div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { Carousel, Slide },
  data(){
    return {
      imageSrcs: [
        require("root/images/slide_picturie_1.jpg"),
        require("root/images/slide_picturie_2.jpg"),
        require("root/images/slide_picturie_3.jpg"),
        require("root/images/slide_picturie_4.jpg"),
        require("root/images/slide_picturie_5.jpg"),
        require("root/images/slide_picturie_6.jpg")
      ]
    };
  }
}

</script>

<style scoped>

.page {
  padding-top: 100px;
  height: 100vh;
  padding-bottom: 20px;
}

.header {
  position: fixed;
  top: 0;
  z-index: 1000;
}

.links {
  width: 100%;
  text-align: left;
  background: #ecececcf;
}

.links a {
  display: inline-block;
  font-size: 1.3rem;
  padding: 1.2rem .4rem;
  width: 220px;
  background: #ea3434;
  margin: 1px;
  cursor: pointer;
  color: white;
  text-decoration: none;
}

.links a:hover {
   background: #ecececcf;
   border: 1px solid grey;
   color: black;
}

@media screen and (max-width: 768px) {

  .page {
    padding-top: 240px;
  }

  .VueCarousel-pagination {
    display: none !important;
  }

  .carousel {
    margin-top: 1rem;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
  }

  .links a {
    padding: 1rem .1rem;
    padding-left: 2rem;
    width:  100%;
    display: flex;
  }

  .slide-image {
    max-width: 90vw;
  }

}

.slide-image {
  height: auto;
  width: 300px;
}

.carousel {
  margin: 1rem auto 0 auto;
  max-width: 960px;
}

.carousel .VueCarousel-inner {
  justify-content: center;
}


</style>
