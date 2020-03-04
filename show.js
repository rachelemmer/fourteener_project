fetch('http://localhost:3000/mountains/')
    .then(response => response.json())
    .then(mountains => createMountainCards(mountains))


function createMountainCards(mountains) {
    mountains.forEach(mountain => {
        console.log(mountain)
        let li = document.createElement('li')
        let ul = document.querySelector(".Mountains")
        li.innerHTML = `  
            <img src="${mountain.image}" alt="${mountain.name}" style="width:100%">
            <div class="container">
                <a class="card-title" href='activity.html?id=${mountain.id}'>${mountain.name}</a>
            </div>
        `   
        ul.append(li)
    })
}

const nameForm = document.querySelector('.form-box')
const formData = new FormData(nameForm)

nameForm.addEventListener('submit', event => {
    event.preventDefault()
    const name = formData.get('name')
    console.log(name)
})