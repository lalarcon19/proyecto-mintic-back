import express from 'express'
import cors from 'cors'
import { Sequelize } from 'sequelize';
import conectarDb from './configDb/db.js';
import citasRoutes from './routes/RoutersCitas.js';
import pacientesRouters from './routes/RoutersPacientes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/citas', citasRoutes )
app.use('/pacientes',pacientesRouters)

try {
    await conectarDb.authenticate();
    console.log('conexion a base de datos con exito.');
  } catch (error) {
    console.error('error al conectar base de datos', error);
  }

app.get('/',(req, res)=>{
    res.send('Hola mundo')
})

const port = process.env.port || 3000
app.listen(port, () =>{
    console.log("servidor conectado http://localhost:3000/")
})

