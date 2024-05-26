import conectarDb from "../configDb/db.js";
import { DataTypes } from "sequelize";

const pacientes = conectarDb.define('pacientes', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identificacion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default pacientes;