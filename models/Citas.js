import conectarDb from "../configDb/db.js";
import { DataType, DataTypes } from "sequelize";

const citas = conectarDb.define('citas',{
    nombre_medico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default citas;