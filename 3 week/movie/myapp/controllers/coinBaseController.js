var apiHelper = require('../makeApi/api_helper');
var converter = require('../responseConverter/converter');

function getAtms (req, res){
    console.log("Bye")
    apiHelper.make_api_call("https://coinmap.org/api/v1/venues/").then(response =>{
        console.log(response)
       let atms = converter.coinbaseConverter (response)
       res.json ((atms))
    }).catch(error =>{
        res.send(error)
    })
}


module.exports = {
    
    getAtms

}

