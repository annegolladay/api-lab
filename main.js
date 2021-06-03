//const { default: axios } = require("axios")

// 1. Select the button using querySelector and save it to a variable
let residentBtn = document.querySelector('.residents')

// 2. Write a function that just console logs a string like ‘button clicked’
function residentFun() {
    console.log('Button clicked')
    axios
    .get('http://swapi.dev/api/planets/?search=Alderaan')
    .then(function(res) {
        for(let i = 0; i < res.data.results[0].residents.length; i++) {
            let url = res.data.results[0].residents[i]
            axios
            .get(url)
            .then(function())
        }
    })
}

// 3. Use addEventListener to attach the function you just wrote to a click event on the button

residentBtn.addEventListener('click', residentFun)


// 4. Open index.html in the browser (right click and copy path)



// 5. Click the button and check the console, if it’s working, move on to the next section