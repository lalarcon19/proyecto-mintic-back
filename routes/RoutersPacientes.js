import express from 'express';
import {getAllPacientes, getPaciente, agregarPaciente, modificarPaciente, eliminarPaciente} from '../controller/PacientesController.js'

const router = express.Router();
router.get('/', getAllPacientes);
router.get('/:id', getPaciente);
router.post('/', agregarPaciente);
router.put('/:id', modificarPaciente);
router.delete('/:id', eliminarPaciente)
export default router;