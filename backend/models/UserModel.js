import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

// create field table on database
const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

// generate table on database
(async()=>{
    await db.sync();
})();