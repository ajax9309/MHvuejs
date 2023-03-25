const { createApp } = Vue
const api = 'https://mh.up.railway.app/api/amazing-events'
const app = createApp({
    data() {
        return {
            events: [],
            categories:[],
            checkbox:[],
            textbar:"",
            filtered:[]
        }
    },
    created() {
        this.showChecksCards()
    },
    methods: {
        // async showCardEvents() {
        //     try {
        //         let fetchResp = await fetch(api)
        //         let response = await fetchResp.json()
        //         this.events = response.events
        //         //console.log(response);


        //     } catch (err) {
        //         console.log(err);
        //     }

        // },
        async showChecksCards() {
            try {
                let fetchResp = await fetch(api+'?time=past')
                let response = await fetchResp.json()
                let eventcat = response.events
                this.filtered=eventcat
                this.events = response.events
                //console.log(eventcat);
                category = eventcat.map(each=>each.category)
                category = [...new Set(category)]
                //console.log(category);
                this.categories=category

            } catch (err) {
                console.log(err);
            }
        },
        filterInfo(){
            this.filtered= this.events.filter(each=>{
                return (each.description.toLowerCase().includes(this.textbar.toLowerCase().trim()) || each.name.toLowerCase().includes(this.textbar.toLowerCase().trim())) && (this.checkbox.length===0 || this.checkbox.includes(each.category))
            })
            //console.log(this.filtered);
        }
    }

})

app.mount('#appvue')