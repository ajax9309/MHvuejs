let query = location.search
let param = new URLSearchParams(query)
//console.log(param)
let idQuery = param.get('id')
//console.log(idQuery)

function genCardDetails(id) {
    if (id.assistance) {
        return `
            <div>
            <div class="card m-2" style="max-width: 950px;">        
                <div class="row g-0">
                    <div class="col-md-4">
                        <img id="imgdetails" src="${id.image}" class="rounded-start img-fluid" alt="${id.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${id.name}</h5>
                            <p class="card-text">${id.description}</p>
                        </div>
                        <div class="card-footer text-muted d-flex justify-content-between">
                            <div><span>Price: ${id.price}</span></div>
                            <div><span>Assistance: ${id.assistance}</span></div>
                            <div><span>Place: ${id.place}</span></div>
                            <div><span>Capacity: ${id.capacity}</span></div>
                        </div>
                    </div>        
                </div>
            </div>
                <div class="d-grid gap-2 mt-2 mb-1 ms-2 me-2">
                    <a href="./pastevents.html" class="btn btn-primary" type="button">Go Back</a>
                </div>             
            </div>     
            `
    } else {
        return `
            <div>
            <div class="card m-2" style="max-width: 950px;">        
                <div class="row g-0">
                    <div class="col-md-4">
                        <img id="imgdetails" src="${id.image}" class="rounded-start img-fluid" alt="${id.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${id.name}</h5>
                            <p class="card-text">${id.description}</p>
                        </div>
                        <div class="card-footer text-muted d-flex justify-content-between">
                            <div><span>Price: ${id.price}</span></div>
                            <div><span>Estimate: ${id.estimate}</span></div>
                            <div><span>Place: ${id.place}</span></div>
                            <div><span>Capacity: ${id.capacity}</span></div>
                        </div>
                    </div>        
                </div>
            </div>
                <div class="d-grid gap-2 mt-2 mb-1 ms-2 me-2">
                    <a href="./upcomingevent.html" class="btn btn-primary" type="button">Go Back</a>
                </div>             
            </div>   
            `
    }

}

async function showDetail(tag_id, id) {
    try {
        let eventsApi = 'https://mh.up.railway.app/api/amazing-events'
        let fetchResp = await fetch(eventsApi)
        let response = await fetchResp.json()
        arrayEvent = response.events
        let container = document.querySelector(tag_id)
        id = arrayEvent.find(each => each.id == id)
        //console.log(id)
        let details = genCardDetails(id)
        //console.log(details)
        container.innerHTML = details
    } catch (err) {
        console.log(err);
    }
}
showDetail('#containerdetail', idQuery)