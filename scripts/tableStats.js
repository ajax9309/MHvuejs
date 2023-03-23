let eventsApi = 'https://mh.up.railway.app/api/amazing-events'

async function statsT1(){
    try{
        let fetchResp =  await fetch(eventsApi+'?time=past')
        let response = await fetchResp.json()
        pastEvents=response.events
        let mapstat=pastEvents.map(each=>{
            let obj={
                name: each.name,
                percent: 100*each.assistance/each.capacity
            }
            return obj
        }).sort((e1,e2)=>e1.percent - e2.percent)

        let fetchResp1 =  await fetch(eventsApi)
        let response1 = await fetchResp1.json()
        allEvents=response1.events
        let topcap= allEvents.map(each=>{
            let objt={
                name: each.name,
                cap: each.capacity
            }
            return objt
        }).sort((ev1,ev2)=>ev1.cap-ev2.cap)

        document.getElementById('t1').innerHTML=tmpT1(mapstat[mapstat.length-1],mapstat[0],topcap[topcap.length-1])

    }catch(err){
        console.log(err);
    }
}
statsT1()


async function statsT2(){
    try{
        let fetchResp =  await fetch(eventsApi+'?time=upcoming')
        let response = await fetchResp.json()
        upcEvents=response.events
        upcCat=upcEvents.map(each=>each.category)
        upcCat=new Set(upcCat)
        upcCat=[...upcCat]
        let eventCat=upcCat.map(each=>upcEvents.filter(e=>e.category===each))
        
        eventCat=eventCat.map(each=>{return each.reduce(
                (acc,value)=>{
                    let sum={
                        estTot: acc.estTot+value.estimate,
                        capTot: acc.capTot+value.capacity,
                        revenue: value.estimate*value.price+acc.revenue,
                        estPerc: 100*(acc.estTot/acc.capTot),
                        cat: value.category
                       }
                       //console.log(sum);
                    return sum
                },
                {estTot:0,
                 capTot:0,
                 revenue:0,
                 estPerc:0,
                 cat:''
                }
            )
        })

        document.getElementById('t2').innerHTML=eventCat
        .map(each=>tmpT2(each.cat,each.revenue,each.estPerc)).join('')

    }catch(err){
        console.log(err)
    }
}
statsT2()


async function statsT3(){
    try{
        let fetchResp =  await fetch(eventsApi+'?time=past')
        let response = await fetchResp.json()
        pastEvents=response.events
        pastCat=pastEvents.map(each=>each.category)
        pastCat=new Set(pastCat)
        pastCat=[...pastCat]
        let eventCat=pastCat.map(each=>pastEvents.filter(e=>e.category===each))
        
        eventCat=eventCat.map(each=>{return each.reduce(
                (acc,value)=>{
                    let sum={
                        asTot: acc.asTot+value.assistance,
                        capTot: acc.capTot+value.capacity,
                        revenue: value.assistance*value.price+acc.revenue,
                        asPerc: 100*(acc.asTot/acc.capTot),
                        cat: value.category
                       }
                       //console.log(sum);
                    return sum
                },
                {asTot:0,
                 capTot:0,
                 revenue:0,
                 asPerc:0,
                 cat:''
                }
            )
        })

        document.getElementById('t3').innerHTML=eventCat
        .map(each=>tmpT3(each.cat,each.revenue,each.asPerc)).join('')

    }catch(err){
        console.log(err)
    }
}
statsT3()

function tmpT1(up,dw,top){
    return`
        <tr class="align-middle text-center">
            <td>"${up.name}" : ${up.percent.toFixed(2)} % </td>
            <td>"${dw.name}" : ${dw.percent.toFixed(2)} % </td>
            <td>"${top.name}" : ${top.cap.toLocaleString("en-US")}</td>
        </tr>
    `
}

function tmpT2(cat,rev,est){
    return`
        <tr class="align-middle text-center">
            <td>${cat}</td>
            <td>$${rev.toLocaleString("en-US")}</td>
            <td>${est.toFixed(2)} %</td>
        </tr>
    `
}

function tmpT3(cat,rev,est){
    return`
        <tr class="align-middle text-center">
            <td>${cat}</td>
            <td>$${rev.toLocaleString("en-US")}</td>
            <td>${est.toFixed(2)} %</td>
        </tr>
    `
}


