import {Sequelize} from "sequelize";

// connect your database with Sequelize('name_db', 'user_db, 'pass_db', {options}) 
const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
});

export default db;