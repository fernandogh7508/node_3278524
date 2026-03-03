const departamentoService = require('../services/departamento.service');
const crear = async (req, res)=>{
    try{
        const departamento = await departamentoService.crearDepartamento(req.body);
        res.status(201).json(departamento);
    }catch(error){
        res.status(400).json({error: error.message});
    }

};
const listar = async (req, res)=>{
    const departamentos = await departamentoService.listarDepartamento();
    res.json(departamentos);
};

//consultar un departamento por id
const obtenerUno = async(req,res) =>{
    try{
        const {id} = req.params;
        const departamento = await departamentoService.obtenerDepartamentoPorId(id);
        if(!departamento){
            return res.status(404).json({error:'Departamento no encontrado'})
        }
        res.json(departamento);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//actualizar
const actualizar = async(req, res)=>{
    try{
        const{id}= req.params;
        const departamentoActualizado = await departamentoService.actualizarDepartamento(id, req.body);
        if(!departamentoActualizado){
            return res.status(404).json({error:'Departamento no encontrado'});
        }
        res.json(departamentoActualizado);
    }catch(error){
        res.status(400).json({error:error.message});
    }
};

//Eliminar
const eliminar = async(req,res)=>{
    try{
        const{id}= req.params;
        const eliminar = await departamentoService.eliminarDepartamento(id);
        if(!eliminar){
            return res.status(404).json({error:'Departamento no encontrado'});
        }
        res.json({mensaje:'Departamento eliminado correctamenta'});
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
