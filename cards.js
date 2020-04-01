const nameForm = document.querySelector('.search-box')
const difficultyForm = document.querySelector('.difficulty-box')
let filteredMountains = []


fetch('http://localhost:3000/mountains/')
    .then(response => response.json())
    .then(mountains => {
        createMountainCards(mountains)
        filteredMountains = mountains
    })


function createMountainCards(mountains) {
    const ul = document.querySelector(".Mountains")
    ul.innerHTML = '';
    mountains.forEach(mountain => {
        const li = document.createElement('li')
        mountain.routes.forEach(route => {

        li.innerHTML = `  
            <div class="front">
                <img src="${mountain.image}" alt="${mountain.name}" style="width:100%">
                <h1 class="card-title">${mountain.name}</h1>
            </div>
            <div class="back">
                <h1 class="back-card-mt">${mountain.name}</h1>
                <h3 class="back-card-mt">Rank: #${mountain.rank}</h3>
                <h3 class="back-card-mt">Elevation: ${mountain.elevation}</h3>
                <p>Standard Route: ${route.name}</p>
                <p>Trailhead: ${route.trailhead}</p>
                <p>Difficulty: ${route.difficulty}</p>
                <p>Gain: ${route.gain} feet</p>
                <p>Length: ${route.length} miles</p>
            </div>
        `   
        ul.append(li)
        li.addEventListener('click', event => {
            li.classList.toggle('is-flipped')
        li.addEventListener('mouseover', event => {
            
        })
        })  
        })
    })
}


nameForm.addEventListener('input', event => {
    event.preventDefault()
    const term = event.target.value.toLowerCase()
    let searchResult = filteredMountains.filter(filteredMountain => {
        return filteredMountain.name.toLowerCase().includes(term)
    })
    createMountainCards(searchResult)
})

difficultyForm.addEventListener('change', event => {
    let selectedClass = document.querySelector('select').value;
    let classResult = filteredMountains.filter(filteredMountain => {
        let routes = filteredMountain.routes.filter(route => {
            return route.difficulty == selectedClass
        })
        return routes.length > 0 ? filteredMountain : null 

    })
    createMountainCards(classResult)
})