const producto=require("../models/productos")  
const fetch = (url) =>import('node-fetch').then(({default:fetch})=>fetch(url));//Usurpación del require


//Ver la lista de productos
exports.getProducts=async(req,res,next)=>{
const productos= await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductById= async (req,res,next)=>{
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
        })
    }
    res.status(200).json({
        success:true,
        message: "Aqui debajo encuentras informacion sobre tu producto:",
        product
    })
}
//Update un producto

exports.updateProduct=async(req,res,next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
        })
    }
    //Si el objeto si existia, entonces si ejecuto la actualización
    product=await producto.findByIdAndUpdate (req.params.id, req.body,{
        new:true,//Valido solo los atributos nuevos o actualizados
        runValidators: true
    });
    //Respondo ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product

    })

}

//Eliminar un producto
exports.deleteProduct=async(req,res,next) =>{
    const product= await producto.findById(req.params.id) 
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({//Si el objeto no existe, el return termina el metodo
            success: false,
            message: "No encontramos ese producto"
        })
    }
    await product.deleteOne();//Elimina el proceso
    res.status(200).json({
        success:true,
        message: "Producto eleminado correctamente"
    })
}

//Crear nuevo producto /api/productos
exports.newProduct = async(req,res,next) =>{
    const product= await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductos(); Llamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductoPorID('65485597738e940112803fa3'); probamos el metodo con un id
