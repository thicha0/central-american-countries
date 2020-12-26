<template>
    <div class="container">
        <div @click="setActive($event.currentTarget)" class="panel active" style="background-image: url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
            <h3>Explore The World</h3>
        </div>
        <div @click="setActive($event.currentTarget)" class="panel" style="background-image: url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
            <h3>Wild Forest</h3>
        </div>
        <div @click="setActive($event.currentTarget)" class="panel" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')">
            <h3>Sunny Beach</h3>
        </div>
        <div @click="setActive($event.currentTarget)" class="panel" style="background-image: url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')">
            <h3>City on Winter</h3>
        </div>
        <div @click="setActive($event.currentTarget)" class="panel" style="background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
            <h3>Mountains - Clouds</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Expand",
        methods: {
            setActive (panel) {
                let panels = document.querySelectorAll('.panel')
                panels.forEach(panel => {
                    panel.classList.remove('active')
                })
                panel.classList.add('active')
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
    }

    .panel {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 80vh; /* customizable */
        border-radius: 5px; /* customizable */
        color: #fff; /* customizable */
        cursor: pointer;
        flex: 0.5; /* customizable */
        margin: 10px; /* customizable */
        position: relative;
        -webkit-transition: all 700ms ease-in; /* Custom ? */
    }

    .panel h3 { /* Slot */
        font-size: 24px;
        position: absolute;
        bottom: 20px;
        left: 20px;
        margin: 0;
        opacity: 0;
    }

    .panel.active {
        flex: 5; /* customizable */
    }

    .panel.active h3 {
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s; /* Custom ? */
    }

    @media (max-width: 480px) { /* ?? */
        .container {
            width: 100vw;
        }

        .panel:nth-of-type(4),
        .panel:nth-of-type(5) {
            display: none;
        }
    }
</style>