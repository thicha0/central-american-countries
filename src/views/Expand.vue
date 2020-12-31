<template>
    <div>
        <h1>Expand</h1>
        <expand-component :items="items"></expand-component>
    </div>
</template>

<script>
    import ExpandComponent from '@/components/Expand.vue'

    export default {
        name: "Expand",
        components : {
            ExpandComponent
        },
        data: function () {
            return {
                items: [
                    {
                        title: 'Explore the world',
                        background: 'url(\'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\')'
                    },
                    {
                        title: 'Wild Forest',
                        background: 'url(\'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\')'
                    },
                    {
                        title: 'Sunny Beach',
                        background: 'url(\'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80\')'
                    },
                    {
                        title: 'City on Winter',
                        background: 'url(\'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80\')'
                    },
                    {
                        title: 'Mountains - Clouds',
                        background: 'url(\'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\')'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>