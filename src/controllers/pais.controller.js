const paisService = require('../services/pais.service');
const crear = async (req, res)=>{
    try{
        const pais = await paisService.crearPais(req.body);
        res.status(201).json(pais);
    }catch(error){
        res.status(400).json({error: error.message});
    }

};
const listar = async (req, res)=>{
    const paiss = await paisService.listarPais();
    res.json(paiss);
};

//consultar un pais por id
const obtenerUno = async(req,res) =>{
    try{
        const {id} = req.params;
        const pais = await paisService.obtenerPaisPorId(id);
        if(!pais){
            return res.status(404).json({error:'Pais no encontrado'})
        }
        res.json(pais);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//actualizar
const actualizar = async(req, res)=>{
    try{
        const{id}= req.params;
        const paisActualizado = await paisService.actualizarPais(id, req.body);
        if(!paisActualizado){
            return res.status(404).json({error:'Pais no encontrado'});
        }
        res.json(paisActualizado);
    }catch(error){
        res.status(400).json({error:error.message});
    }
};

//Eliminar
const eliminar = async(req,res)=>{
    try{
        const{id}= req.params;
        const eliminar = await paisService.eliminarPais(id);
        if(!eliminar){
            return res.status(404).json({error:'Pais no encontrado'});
        }
        res.json({mensaje:'Pais eliminado correctamenta'});
    }catch(error){
        res.status(500).json({error:error.mensaje});
    }
};

module.exports ={
    crear,
    listar,
    obtenerUno,
    actualizar,
    eliminar
};
