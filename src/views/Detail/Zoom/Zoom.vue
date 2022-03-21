<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="mouseMove"></div>
    <div class="big">
      <img :src="imgUrl" :style="{ left: X * -2 + 'px', top: Y * -2 + 'px' }" />
    </div>
    <div
      class="mask"
      ref="mask"
      :style="{ left: X + 'px', top: Y + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["skuImageList"],
  data() {
    return {
      currentIndex: 0,
      X: 0,
      Y: 0,
    };
  },
  computed: {
    imgUrl() {
      return this.skuImageList[this.currentIndex].imgUrl;
    },
  },
  methods: {
    mouseMove(event) {
      let mask = this.$refs.mask;
      this.X = event.offsetX - mask.offsetWidth / 2;
      this.Y = event.offsetY - mask.offsetHeight / 2;
      if (this.X < 0) this.X = 0;
      if (this.Y < 0) this.Y = 0;
      if (this.X > mask.offsetWidth) this.X = mask.offsetWidth;
      if (this.Y > mask.offsetHeight) this.Y = mask.offsetHeight;
    },
  },
  mounted() {
    this.$bus.$on("changeImg", (index) => {
      this.currentIndex = index;
    });
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
