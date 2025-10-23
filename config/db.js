import Sequelize from "sequelize";

const db = {
    host: "localhost",
    user: "trainer",
    password: "password",
    name: "training"
}

const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    dialect: "mysql",
    logging: console.log
});

export default sequelize;
