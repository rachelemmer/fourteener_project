const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/mountains/${id}`)
    .then(response => response.json())
    .then(mountain => {
        const div = document.querySelector('.container')

        let img = document.querySelector('img')
        img.src = mountain.image
        div.append(img)

        let h1 = document.querySelector('h1')
        h1.innerText = mountain.name

        let mountain_list = document.querySelector('.mountain-info')
        mountain_list.innerHTML = `
            <h2>Peak Information</h2>
            <li>Elevation: ${mountain.elevation} feet</li>
            <li>Rank: #${mountain.rank}</li>
        `
        div.append(mountain_list)
        
        mountain.routes.forEach(route => {

            let route_list = document.querySelector('.route-info')
            route_list.innerHTML = `
            <h2>Route Information</h2>
            <li>Standard Route: ${route.name}</li>
            <li>Trailhead: ${route.trailhead}</li>
            <li>Difficulty: Class ${route.difficulty}</li>
            <li>Gain: ${route.gain} feet</li>
            <li>Length: ${route.length} miles</li>
            `
        div.append(route_list)
        })
    })