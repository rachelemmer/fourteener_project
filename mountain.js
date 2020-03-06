const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/mountains/${id}`)
    .then(response => response.json())
    .then(mountain => {
        let h1 = document.createElement('h1')
        h1.innerText = mountain.name
        let h2 = document.createElement('h2')
        h2.innerText = mountain.routes
        document.body.append(h1,h2)
    })