const { createApp } = Vue
const api = 'https://mh.up.railway.app/api/amazing-events'
const app = createApp({
    data() {
        return {
            events: [],
            categories:[]
        }
    },
    created() {
        this.showCardEvents()
        this.genCheckBoxs()
    },
    methods: {
        async showCardEvents() {
            try {
                let fetchResp = await fetch(api)
                let response = await fetchResp.json()
                this.events = response.events
                //console.log(response);


            } catch (err) {
                console.log(err);
            }

        },
        async genCheckBoxs() {
            try {
                let fetchResp = await fetch(api)
                let response = await fetchResp.json()
                //this.categories = response.events
                console.log(categories);
                //category = categories.map(each=>each.category)

                //console.log(response);


            } catch (err) {
                console.log(err);
            }
        }
    }

})

app.mount('#appvue')