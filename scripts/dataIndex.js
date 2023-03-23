/*Funciones y loops */
//const events = data.events

async function showCardEvents() {
  try {
    let eventsApi = 'https://mh.up.railway.app/api/amazing-events'
    let fetchResp =  await fetch(eventsApi)
    let response = await fetchResp.json()
    arrayEvents=response.events
    let eventCards = []
    for (let each of arrayEvents) {
      let card = `
      <div class="card shadow-lg p-2 ps-0 pe-0 pt-0 m-2 col-3" style="width:250px">
        <img src="${each.image}" class="card-img-top card-img img-fluid" alt="${each.name}">
        <div class="card-body text-bg-dark text-center">
          <h5 class="card-title">${each.name}</h5>
          <p class="card-text">${each.description}</p>
        </div>
        <div class="card-footer text-center">
          <a href="./eventview.html?id=${each.id}" class="btn btn-danger">View details</a>
        </div>
      </div>
    `
      eventCards.push(card)
    }

    let eventcontainer = document.getElementById('cardscontainer')
    eventcontainer.innerHTML = eventCards.join('')

  } catch (err) {
    console.log(err);
  }

}

showCardEvents()
