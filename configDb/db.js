import { Sequelize } from "sequelize";

const conectarDb = new Sequelize('database_citas','root','',{
    host:'localhost',
    dialect:'mysql',
});

export default conectarDb;

