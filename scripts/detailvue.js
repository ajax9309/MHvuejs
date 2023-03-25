const { createApp } = Vue
const api = 'https://mh.up.railway.app/api/amazing-events'
const app = createApp({
    data() {
        return {
            eventDetail: [],
        }
    },
    created() {
        this.viewDetail()
    },
    methods: {
        async viewDetail() {
            let query = location.search
            let param = new URLSearchParams(query)
            //console.log(param)
            let idQuery = param.get('id')
            //console.log(idQuery)
            try {
                let fetchResp = await fetch(api)
                response = await fetchResp.json()
                let events = response.events
                events = events.find(each=>each.id===idQuery)
                //console.log(events);
                this.eventDetail = events
                //console.log(this.eventDetail);
            } catch (err) {
                console.log(err);
            }
        }
    }
})
app.mount('#appvue')