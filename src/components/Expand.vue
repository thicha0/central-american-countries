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
            <p :style="textStyle(index)">{{ item.text }}</p>
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
            // Data
            items: { // TODO validator
                type: Array,
                default: () => []
            },

            // Container
            width: {
                type: String,
                default: '90vw'
            },

            // Panel
            height: {
                type: String,
                default: '80vh'
            },
            borderRadius: {
                type: String,
                default: '20px'
            },
            margin: {
                type: String,
                default: '10px'
            },

            // Panel flex
            flexActive: {
                type: Number,
                default: 5
            },
            flexInactive: {
                type: Number,
                default: 0.8
            },
            flexTransitionDuration: {
                type: String,
                default: '1.4s'
            },

            // Background
            grayscaleInactive: {
                type: String,
                default: '65%'
            },

            // Title
            titleColor: {
                type: String,
                default: 'white'
            },
            titleSize: {
                type: String,
                default: '24px'
            },

            // Text
            textColor: {
                type: String,
                default: 'white'
            },
            textSize: {
                type: String,
                default: '20px'
            },
        },
        methods: {
            containerStyle () {
                return {
                    // Default
                    'display':    'flex',

                    // Props
                    'width':      this.width,
                }
            },
            panelStyle (item, index) {
                return {
                    // Default
                    'overflow':     'hidden',
                    'position':     'relative',
                    'cursor':       'pointer',

                    // Props
                    'height':           this.height,
                    'border-radius':    this.borderRadius,
                    'margin':           this.margin,

                    // Flex
                    'flex': index === this.activeIndex ?
                        this.flexActive + ' 1 auto' :
                        this.flexInactive + ' 1 auto',
                    'transition': 'flex ' + this.flexTransitionDuration + ' ease',
                }
            },
            backgroundStyle (item, index) {
                return {
                    // Full size
                    'position':     'absolute',
                    'height':       '100%',
                    'width':        '100%',
                    'top':          0,
                    'left':         0,

                    // Background
                    'background-size':      'cover', // TODO size ok ??
                    'background-position':  'center center',
                    'background-repeat':    'no-repeat',

                    // Props
                    'background-image':     item.background,
                    'filter': index === this.activeIndex ?
                        'grayscale(0)' :
                        'grayscale(' + this.grayscaleInactive + ')',

                    // Transition(s)
                    'transition':   'filter 1s ease',
                }
            },
            gradientStyle (index) {
                return {
                    // Full size
                    'position':     'absolute',
                    'height':       '100%',
                    'width':        '100%',
                    'top':          0,
                    'left':         0,

                    // Background
                    'background':
                        index === this.activeIndex ?
                            'linear-gradient(to bottom, rgba(0,0,0,0) 20%,rgba(0,0,0,1) 95%)'
                            : '',

                    // Transition
                    'opacity':      index === this.activeIndex ? 1 : 0,
                    'transform':    index === this.activeIndex ?
                        'translateY(0)' :
                        'translateY(100px)',
                    'transition':   'all 0.3s ease-in ' + this.flexTransitionDuration,
                }
            },
            titleStyle (index) {
                return {
                    // Default
                    'position':     'absolute',
                    'margin':       0,
                    'bottom':       '20px',
                    'left':         '20px',

                    // Props
                    'color':        this.titleColor,
                    'font-size':    this.titleSize,

                    // Transition
                    'opacity':      index === this.activeIndex ? 1 : 0,
                    'transition':   'opacity 0.3s ease-in 0.4s',
                }
            },
            textStyle (index) {
                return {
                    // Default
                    'position':     'absolute',
                    'top':          '50%',
                    'margin':       '0 10%',

                    // Props TODO
                    'color':        this.textColor,
                    'font-size':    this.textSize,

                    // Transition
                    'opacity':      index === this.activeIndex ? 1 : 0,
                    'transition':   index === this.activeIndex ?
                        // Slow in
                        'all 0.3s ease-in ' + this.flexTransitionDuration :
                        // Fast out
                        'opacity 0.1s ease-out 0s',
                    'transform':    index === this.activeIndex ?
                        'translateY(0)' :
                        'translateY(25px)',
                }
            },
        }
    }
</script>

<style></style>