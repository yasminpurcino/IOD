
let nameCounter = 0, airtistCounter = 0;
const data=[{name:"bob", age:23}, {name:"alice",age:39}]


console.log("initializing")
function addCard() {
    console.log("adding")
    const template = document.getElementById("card-template").content.cloneNode(true);
    
    template.querySelector('.card-title').innerText = 'My Card Title';
    template.querySelector('.card-text').innerText = 'lorem ipsum ble bla';
    document.querySelector('#card-list').appendChild(template);
    }
    if ('content' in document.createElement('template')) {
    addCard();

    }

    const artist={
name:"Van Gogh",
portfolio:[
{title:"portrait",

url:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},

{title:"sky",

url:"https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"},

]
}