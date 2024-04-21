const form = document.querySelector('.form')
const email = document.querySelector('.email')
const card = document.querySelector('.card')
const message = document.querySelector('.message')
const error = document.querySelector('.error')
const success = document.querySelector('#success')

form.onsubmit = (e) => {
    e.preventDefault()
    const input = email.value
    if (isEmail(input)){
        card.style.display = 'none'
        message.style.display = 'flex'
        error.innerHTML = ''
        email.value = ''
        email.classList.remove('invalid')
    }else{
        error.innerHTML = 'Valid email required'
        email.classList.add('invalid')
    }
}

success.onclick = () => {
    card.style.display = 'flex'
    message.style.display = 'none'
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}