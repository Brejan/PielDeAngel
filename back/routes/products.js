const express=require("express")
const router=express.Router();

//Traemos la respuesta json desde el controaldor
const {getProducts, newProduct}= require("../controllers/productsController")

//Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts)
//establecemos la ruta 
router.route('/producto/nuevo').post(newProduct);

module.exports=router;

