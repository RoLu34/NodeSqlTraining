import Sequelize from "sequelize";

const db = {
    host: "localhost",
    user: "trainer",
    password: "password",
    database: "training"
}

const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    dialect: "mysql"
});

export default sequelize;
