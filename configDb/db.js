import { Sequelize } from "sequelize";

const conectarDb = new Sequelize('database_citas','root','Lxalarconla',{
    host:'localhost',
    dialect:'mysql',
    port: 3307
});

export default conectarDb;

