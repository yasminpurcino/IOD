function coinbaseConverter (response)

{

//let responseObj=JSON.parse(response)
let venuesArray=response.venues
let nameArray = []

console.log(venuesArray)
for (const element of venuesArray) {
  nameArray.push({id:element.id, name:element.name})  ;
}   

// push that ino a new array object 

return nameArray

}


module.exports = {
    
    coinbaseConverter
    
}