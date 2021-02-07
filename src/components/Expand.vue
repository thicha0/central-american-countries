<template>
    <div class="container" :style="containerStyle()">
        <div
            v-for="(item, index) in items"
            :key="index"
            @click="activeIndex === index ? activeIndex = null : activeIndex = index"
            class="panel"
            :style="panelStyle(item, index)"
        >
            <div class="background" :style="{ backgroundImage: item.background }"></div>
            <div class="gradient"></div>
            <h3 class="title">{{ item.title }}</h3>
            <p class="text">{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Expand",
        data () {
            return {
                activeIndex: null,
            }
        },
        props: {
            items: { // TODO validator
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

<style></style>