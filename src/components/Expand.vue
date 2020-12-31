<template>
    <div :style="containerStyle()">
        <div
            v-for="(item, index) in items"
            :key="index"
            @click="activeIndex = index"
            :style="panelStyle(item, index)"
            class="panel"
        >
            <div :style="backgroundStyle(item, index)"></div>
            <div :style="gradientStyle(index)"></div>
            <h3 :style="titleStyle(index)">{{ item.title }}</h3>
            <p :style="textStyle(index)">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A consequuntur, cum cupiditate doloremque dolorum eius fuga
                fugiat illum ipsum laudantium molestias nihil non officia
                optio quos repellat sint veniam voluptatem.
            </p>
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
            height: {
                type: String,
                default: '80vh'
            },
            borderRadius: {
                type: String,
                default: '5px'
            },
            flex: {
                type: Number,
                default: 0.5
            },
            margin: {
                type: String,
                default: '10px'
            },
        },
        methods: {
            containerStyle () {
              return {
                  'display': 'flex',
                  'width': '90vw',
                  'background-color': 'indianred',
              }
            },
            panelStyle (item, index) {
                return {
                    'transform': 'translate3d(0, 0, 0)',
                    'overflow': 'hidden',
                    'position': 'relative',
                    'height': this.height,
                    'cursor': 'pointer',
                    'border-radius': this.borderRadius,
                    'margin': this.margin,
                    'flex': index === this.activeIndex ? '5 1 auto' : '0.8 1 auto',
                    'transition': 'all 0.7s ease-in',
                }
            },
            backgroundStyle (item, index) {
                return {
                    // Full size
                    'position': 'absolute',
                    'height': '100%',
                    'width': '100%',
                    'top': 0,
                    'left': 0,

                    // Background
                    'background-size': 'cover', // TODO size ok ??
                    'background-position': 'center center',
                    'background-repeat': 'no-repeat',
                    'background-image': item.background,
                    'filter': index === this.activeIndex ? 'grayscale(0)' : 'grayscale(65%)',

                    // Transition(s)
                    'transition': 'filter 0.5s ease',
                    //TODO: transparentize ?
                }
            },
            gradientStyle (index) {
                return {
                    'transform': index === this.activeIndex ?
                        'translateY(0)' :
                        'translateY(100px)',
                    'position': 'absolute',
                    'height': '100%',
                    'width': '100%',
                    'top': 0,
                    'left': 0,
                    'background':
                        index === this.activeIndex ?
                            'linear-gradient(to bottom, rgba(0,0,0,0) 20%,rgba(0,0,0,1) 95%)'
                            : '',
                    'transition': 'all 0.7s ease-in',
                    'opacity': index === this.activeIndex ? 1 : 0,
                }
            },
            titleStyle (index) {
                return {
                    'color': 'white',
                    'font-size': '24px',
                    'position': 'absolute',
                    'bottom': '20px',
                    'left': '20px',
                    'margin': 0,
                    'opacity': index === this.activeIndex ? 1 : 0,
                    'transition': 'opacity 0.3s ease-in 0.4s',
                }
            },
            textStyle (index) {
                return {
                    'color': 'white',
                    'font-size': '20px',
                    'position': 'absolute',
                    'top': '50%',
                    'margin': '0 10%',
                    'opacity': index === this.activeIndex ? 1 : 0,
                    'transition': index === this.activeIndex ?
                        'all 0.3s ease-in 0.8s' : // slow in
                        'opacity 0.1s ease-out 0s', // fast out
                    'transform': index === this.activeIndex ?
                        'translateY(0)' :
                        'translateY(25px)',
                }
            },
        }
    }
</script>

<style></style>