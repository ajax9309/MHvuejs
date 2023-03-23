function capContacForm(){
    let name=document.getElementById('name')
    let email=document.getElementById('email')
    let message=document.getElementById('message')
    let objForm={
        name:name.value,
        email:email.value,
        message:message.value
    }
    console.log(objForm)
    return objForm
}

const handleForm=(event)=>{
    event.preventDefault()
    capContacForm()
    Swal.fire({
        title: '<strong>Message Sended</u></strong>',
        icon: 'success',
        html:
          '<span>Name:</span>'+'<br>'+
          '<span>Email:</span>'+'<br>'+
          '<span>Name:</span>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        timer:8000,  
      })
}

let btnSubmitForm=document.getElementById('btnSubmit')
btnSubmitForm.addEventListener('click',handleForm)

//  Swal.fire({
//      title: '<strong>HTML <u>example</u></strong>',
//      icon: 'info',
//      html:
//        'You can use <b>bold text</b>, ' +
//        '<a href="//sweetalert2.github.io">links</a> ' +
//        'and other HTML tags',
//      showCloseButton: true,
//      showCancelButton: true,
//      focusConfirm: false,
//      confirmButtonText:
//        '<i class="fa fa-thumbs-up"></i> Great!',
//    })
  