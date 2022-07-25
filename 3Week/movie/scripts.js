/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function myFunction() {
    let title = document.getElementById("title").value;
    let storyline = document.getElementById("storyline").value;
    let picLink = document.getElementById("picLink").value;
    let review = document.getElementById("review").value;

    let movie = {title: title, storyline: storyline, picLink:picLink, review:review}
 
  axios.post('http://localhost:3000/reviews',movie)
  .then(response => {
      console.log(response);
    //  createCards(response.data)
  })
  .catch(error => console.error(error));
}


  const truncateString = (string = '', maxLength = 50) => 
  string.length > maxLength 
    ? `${string.substring(0, maxLength)}…`
    : string

   



function createCards(json) {
    for (const idx in json) {
        let element = json[idx];
        let img = document.createElement('img');
        img.src=element.picLink
        console.log(element);

        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector(".card-title").innerHTML = element.title;
        template.querySelector(".card-text").innerHTML = truncateString(element.storyline,200);
        //template.querySelector(".card-imag").appendChild(img);
        //template.querySelector(".card-review").innerHTML = element.review;

       let buttom = template.getElementById("readMoreButtom")
       buttom.setAttribute("data-bs-title", element.title),
       buttom.setAttribute("data-bs-text", element.storyline),
       buttom.setAttribute("data-bs-imag", element.picLink),
       buttom.setAttribute("data-bs-review", element.review)

        document.querySelector('#card-list').appendChild(template)
    }

}

var movieModal = document.getElementById('readMore')
movieModal.addEventListener('show.bs.modal', function (event) {
     // Button that triggered the modal
  var button = event.relatedTarget
    var modalTitle = movieModal.querySelector("#modal-title")
    modalTitle.innerHTML = button.getAttribute("data-bs-title")  
     movieModal.querySelector("#modal-text").innerHTML = button.getAttribute("data-bs-text")
     let picLink = movieModal.querySelector("#modal-picLink")
     picLink.setAttribute("src", button.getAttribute("data-bs-imag"))
     movieModal.querySelector("#modal-review").innerHTML = button.getAttribute("data-bs-review")

})

function fetchUsers(){
    axios.get('http://localhost:3000/reviews')
        .then(response => {
            console.log(response);
            createCards(response.data)
        })
        .catch(error => console.error(error));
}

fetchUsers();



  