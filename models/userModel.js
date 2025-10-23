import { DataTypes, Model } from "sequelize";

import sequelize from "../config/db.js";

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT
        },
        avatar_url: {
            type: DataTypes.STRING(255)
        }
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true
    }
)

sequelize.sync()
    .then(() => {
        console.log("User table has been created.");
    })
    .catch((error) => {
        console.error("Error creating User table:", error);
    });

export default User;