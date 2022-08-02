function createCards(json) {
    for (const element in json) {
        console.log(json[element])

        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector(".card-title").innerHTML = json[element].title;
        template.querySelector(".card-text").innerHTML = json[element].body;
        document.querySelector('#card-list').appendChild(template)}
    }

        const fetchUsers = () => {
            axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                .then(response => {
                    console.log(response);
                    createCards (response.data)
                })
                .catch(error => console.error(error));
        };
    
        fetchUsers();