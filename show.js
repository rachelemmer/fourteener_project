

fetch('http://localhost:3000/mountains/')
.then(response => response.json())
.then(mountains => mountains.forEach(mountain => {
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
    }))

    
