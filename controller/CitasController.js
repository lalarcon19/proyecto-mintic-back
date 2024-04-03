import Citas from "../models/Citas"

export const getAllCitas = async (req, res) =>{
    try {
        const citas = await Citas.findAll
    } catch (error) {
        res.json({msg: error,mensaje})
    }
}

export const getCita = async(req, res) =>{
    try {
        const citas = await Citas.findAll({
            where:{id:req.parans.id}
        });

        res.json(citas[0]);
        
    } catch (error) {
        res.json({msg:error,mensaje})
    }
}

export const agregarCitas = async(req, res) =>{
    try {
        await Citas.create(req.body);
        rea.json({msg: "se agrego una cita"})

    } catch (error) {
        res.json({msg:error,mensaje})  
    }
}

export const modificarCita = async(req, res) =>{
    try {
        await Citas.update(req.body, {
            where:{id: req.parans.id}
        })
        res.json({msg: "se modifico una cita"})
        
    } catch (error) {
        res.json({msg:error,mensaje}) 
    }
}

export const eliminarCita = async(req, res) =>{
    try {
        await Citas.destroy({
            where:{id: req.parans.id}
        })
        res.json({msg: "se elimino una cita"})
        
    } catch (error) {
        res.json({msg:error, mensaje})
    }
}