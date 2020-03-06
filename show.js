const nameForm = document.querySelector('.search-box')
const difficultyForm = document.querySelector('.difficulty-box')
let filteredMountains = []


fetch('http://localhost:3000/mountains/')
    .then(response => response.json())
    .then(mountains => {
        createMountainCards(mountains)
        filteredMountains = mountains
        console.log(filteredMountains)
    })


function createMountainCards(mountains) {
    const ul = document.querySelector(".Mountains")
    ul.innerHTML = '';
    mountains.forEach(mountain => {
        const li = document.createElement('li')
        
        li.innerHTML = `  
            
                <img src="${mountain.image}" alt="${mountain.name}" style="width:100%">
                <div class="container">
                    <a class="card-title" href='mountain.html?id=${mountain.id}'>${mountain.name}</a>
                </div>
        `   
        ul.append(li)
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