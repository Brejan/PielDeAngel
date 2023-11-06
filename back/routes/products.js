const express=require("express")
const router=express.Router();

//Traemos la respuesta json desde el controaldor
const {getProducts, newProduct, getProductById}= require("../controllers/productsController")

//Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts)
//establecemos la ruta 
router.route('/producto/nuevo').post(newProduct);
//Ruta para consultar por Id
router.route('/producto/:id').get(getProductById);

module.exports=router;

