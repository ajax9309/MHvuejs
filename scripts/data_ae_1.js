
// let eventCat = []
// data.events.forEach(each => {
//   if (!eventCat.includes(each.category)) {
//     eventCat.push(each.category)
//   }
// })

// async function catNoRepeat() {

//   try {

//     let eventsApi = 'https://mh.up.railway.app/api/amazing-events'
//     let fetchResp = await fetch(eventsApi)
//     let response = await fetchResp.json()
//     //console.log(response);
//     upcevent= response.events
//     console.log(upcevent);

//     let eventCat = []
//     upcevent.forEach(each => {
//       if (!eventCat.includes(each.category)) {
//         eventCat.push(each.category)
//         console.log(eventCat);
//       }
//     })
//     return eventCat

//   } catch (err) {
//     console.log(err);
//   }

// }

function catNoRepeat(arraycat) {
  let eventCat = []
  arraycat.forEach(each => {
    if (!eventCat.includes(each.category)) {
      eventCat.push(each.category)
    }
  })
  return eventCat
}

//catNoRepeat()