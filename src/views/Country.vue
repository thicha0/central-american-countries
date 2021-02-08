<template>
    <div>
        <!-- TODO Btn back to map -->
        <h1>{{ capitalizedTitle }}</h1>
        <expand-component
            :items="items"
            width="90vw"
            height="80vh"
        />
    </div>
</template>

<script>
    import ExpandComponent from '@/components/Expand.vue'
    
    import belize from '@/data/belize.json'
    import costarica from '@/data/costarica.json'
    import guatemala from '@/data/guatemala.json'
    import honduras from '@/data/honduras.json'
    import nicaragua from '@/data/nicaragua.json'
    import panama from '@/data/panama.json'
    import salvador from '@/data/salvador.json'

    export default {
        name: "Expand",
        components : {
            ExpandComponent
        },
        created () {
            this.countryName = this.$route.params.country
            switch (this.countryName) {
                case 'belize':
                    this.items = belize
                    break
                case 'costarica':
                    this.items = costarica
                    break
                case 'guatemala':
                    this.items = guatemala
                    break
                case 'honduras':
                    this.items = honduras
                    break
                case 'nicaragua':
                    this.items = nicaragua
                    break
                case 'panama':
                    this.items = panama
                    break
                case 'salvador':
                    this.items = salvador
                    break
                default:
                    this.$router.push('/')
            }
        },
        computed: {
            capitalizedTitle() {
                return this.countryName[0].toUpperCase() + this.countryName.substring(1)
            }
        },
        data: function () {
            return {
                countryName: '',
                items: [],
            }
        }
    }
</script>

<style scoped>

</style>