<template>
  <div
    class="containerExpand"
    :style="containerStyle()"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="panel"
      :style="panelStyle()"
      @click="activeIndex === index ? activeIndex = null : activeIndex = index"
    >
      <div
        class="background"
        :style="{ backgroundImage: item.background }"
        :title="item.alt"
      />
      <div class="gradient" />
      <h1 class="title">
        {{ item.title }}
      </h1>
      <p
        class="text"
        v-html="item.text"
      />
    </div>
  </div>
</template>

<script>
    export default {
        name: "ExpandablePanel",
        props: {
            items: {
                type: Array,
                default: () => []
            },
            width: {
                type: String,
                default: '90vw'
            },
            height: {
                type: String,
                default: '80vh'
            },
        },
        data () {
            return {
                activeIndex: null,
            }
        },
        methods: {
            containerStyle () {
                return {
                    'width': this.width,
                }
            },
            panelStyle () {
                return {
                    'height': this.height,
                }
            },
        }
    }
</script>
