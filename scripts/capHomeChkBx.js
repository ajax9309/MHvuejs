function capCheckBox(){
    let checkBoxs=document.querySelectorAll('.checkbox:checked')
    let search=document.getElementById('find')
    let data={
        [checkBoxs[0].name]:[],
        [search.find]:find.value
    }
    
    for (let each of checkBoxs){
        data[checkBoxs[0].name].push(each.value)
    }
    console.log(data)
}

const handleForm=(event)=>{
    event.preventDefault()
    capCheckBox()

}

let find=document.getElementById('search')
find.addEventListener('click',handleForm)