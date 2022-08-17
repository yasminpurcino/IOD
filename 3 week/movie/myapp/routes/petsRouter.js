var express = require('express');
var router = express.Router();
const SwaggerPetstore = require('swagger_petstore');


router.get('/pet', (req, res) => {
    //   calcController.addNumbers(req, res)


    var defaultClient = SwaggerPetstore.ApiClient.instance;

    // Configure OAuth2 access token for authorization: petstore_auth
    var petstore_auth = defaultClient.authentications['petstore_auth'];
    petstore_auth.accessToken = "YOUR ACCESS TOKEN"

    var api = new SwaggerPetstore.PetApi()

    var body = new SwaggerPetstore.Pet(); // {Pet} Pet object that needs to be added to the store


    var callback = function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully.');
            res.send(data)

        }
    };
    let pet = api.getPetById(1, callback);
    console.log(pet);


})

module.exports = router;  