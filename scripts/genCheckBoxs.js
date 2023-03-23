async function genCheckBoxs(tag_id) {
    try {
        let eventsApi = 'https://mh.up.railway.app/api/amazing-events'
        let fetchResp = await fetch(eventsApi)
        let response = await fetchResp.json()
        //console.log(response)
        let category= catNoRepeat(response.events)
        //console.log(category)
        
        let catcontainer = document.querySelector(tag_id)
        category = category.map(each => {
            return `
                <div class="p-1 pe-3">
                    <label class="text-primary" for="${each}">${each}</label>
                    <input onClick="capData()" class="checkbox ps-2" type="checkbox" name="${each}" value="${each}" id="${each}">
                </div>
             `
        })
        
        catcontainer.innerHTML = category.join('')

    } catch (err) {
        console.log(err);

    }

}
genCheckBoxs('#categorycontainer')