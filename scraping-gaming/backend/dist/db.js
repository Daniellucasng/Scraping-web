"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
// Configuración de conexión a la base de datos
const db = mysql2_1.default.createConnection({
    host: process.env.DB_HOST || "bubowvxkj0hflntsfybz-mysql.services.clever-cloud.com",
    user: process.env.DB_USER || "u6krmwhvslwzzrrp",
    password: process.env.DB_PASSWORD || "IiI5rgt3KE6j1dIPcCAO",
    database: process.env.DB_NAME || "bubowvxkj0hflntsfybz",
});
// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error("❌ Error conectando a la base de datos:", err);
        return;
    }
    console.log("✅ Conectado a MySQL");
});
exports.default = db;
