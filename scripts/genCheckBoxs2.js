// function genCheckBoxs2(tag_id,category){
//     let catcontainer=document.querySelector(tag_id)
//     category=category.map(each=>{
//         return `
//         <div class="p-1 pe-3">
//             <label for="${each}">${each}</label>
//             <input onClick="capData2()" class="checkbox ps-2" type="checkbox" name="${each}" value="${each}" id="${each}">
//         </div>
//         `
//     })
    
//     catcontainer.innerHTML=category.join('')
// }
// genCheckBoxs2('#categorycontainer',catNoRepeat(pastfilter))

async function genCheckBoxs2(tag_id) {
    try {
        let eventsApi = 'https://mh.up.railway.app/api/amazing-events?time=past'
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
                <input onClick="capData2()" class="checkbox ps-2" type="checkbox" name="${each}" value="${each}" id="${each}">
                </div>
             `
        })
        
        catcontainer.innerHTML = category.join('')

    } catch (err) {
        console.log(err);

    }

}
genCheckBoxs2('#categorycontainer')