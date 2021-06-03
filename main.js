//const { default: axios } = require("axios")

// 1. Select the button using querySelector and save it to a variable
let residentBtn = document.querySelector('.residents')

// 2. Write a function that just console logs a string like ‘button clicked’
function residentFun() {
    console.log('Button clicked')
    axios
    .get('http://swapi.dev/api/planets/?search=Alderaan')
    
    .then(function(res) {
        //console.log(res)
        for(let i = 0; i < res.data.results[0].residents.length; i++) {
            let url = res.data.results[0].residents[i]
            axios
            .get(url)
            .then(function(res) {
                let hTwoEl = document.createElement('h2')
                hTwoEl.textContent = res.data.name
                document.querySelector('body').appendChild(hTwoEl)
            })
        }
    })
}

// 3. Use addEventListener to attach the function you just wrote to a click event on the button

residentBtn.addEventListener('click', residentFun)


// 4. Open index.html in the browser (right click and copy path)

// 5. Click the button and check the console, if it’s working, move on to the next section

//making a request
// Now you’ll modify the function to make an axios call to SWAPI

// Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation)

// Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs.

// In the loop, make another get request for each URL in the array.

// You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.