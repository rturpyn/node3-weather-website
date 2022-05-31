// Client Side Javascript
// Fetch API isn't available for server side

// .then = promise api | async await

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
// ID uses #
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// Event Listener
weatherForm.addEventListener('submit', (e)=> {
// Don't refresh the form
// Keep user entered data
// Don't flash the form
    e.preventDefault()

    messageOne.textContent='Loading...'
    messageTwo.textContent=''

    const location = search.value

    const url = '/weather?address=' + encodeURIComponent(location.trim())

    fetch(url).then((response) =>{
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {   
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})