
import Pacientes from "../models/Pacientes.js"

export const getAllPacientes = async (req, res) =>{
    try {
        const pacientes = await Pacientes.findAll();
        res.json(pacientes);
    } catch (error) {
        res.json({msg: error.mensaje})
    }
}

export const getPaciente = async(req, res) =>{
    try {
        const pacientes = await Pacientes.findAll({
            where: { id:req.params.id }
        });
        res.json(pacientes[0]);
    } catch (error) {
        res.json({msg:error.mensaje})
    }
}

export const agregarPaciente = async(req, res) =>{
    try {
        await Pacientes.create(req.body);
        res.json({msg: "Se agrego un paciente"});
    } catch (error) {
        res.json({msg:error})  
    }
}

export const modificarPaciente = async(req, res) =>{
    try {
        await Pacientes.update(req.body, {
            where:{id: req.parans.id}
        });
        res.json({ msg: "Se modificó un paciente correctamente" });
    } catch (error) {
        res.json({msg:error.mensaje}) 
    }
}

export const eliminarPaciente = async(req, res) =>{
    try {
        await Pacientes.destroy({
            where: { id: req.parans.id }
        })
        res.json({msg: "se elimino un paciente"});
    } catch (error) {
        res.json({msg:error.mensaje});
    }
}




