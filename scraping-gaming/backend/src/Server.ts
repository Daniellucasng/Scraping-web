import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from 'express';

dotenv.config();
const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost', 'http://localhost:80','https://scrapingweb.vercel.app','scrapingweb.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

//scrapingweb.vercel.app
// Headers adicionales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db: mysql.Connection;

function handleDisconnect() {
  db = mysql.createConnection({
    host: process.env.DB_HOST || "bubowvxkj0hflntsfybz-mysql.services.clever-cloud.com",
    user: process.env.DB_USER || "u6krmwhvslwzzrrp",
    password: process.env.DB_PASSWORD || "IiI5rgt3KE6j1dIPcCAO",
    database: process.env.DB_NAME || "bubowvxkj0hflntsfybz",
  });

  db.connect(err => {
    if (err) {
      console.error("Error al conectar a MySQL:", err);
      setTimeout(handleDisconnect, 2000); // Reintenta en 2 segundos
    } else {
      console.log("Conectado a MySQL");
    }
  });

  db.on("error", err => {
    console.error("Error en la conexión MySQL:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.warn("Conexión perdida. Reconectando...");
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

//ping de monitoreo
app.get("/ping", (req, res) => {
  res.send("pong");
});


//endpoints
app.get("/mouse", (req, res) => {
  db.query(
    "SELECT id_mouse AS id, name_mouse AS nombre, price_mouse AS precio, tienda FROM mouse",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/keyboard", (req, res) => {
  db.query(
    "SELECT id_keyboard AS id, name_keyboard AS nombre, price_keyboard AS precio, tienda FROM keyboard",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/cam", (req, res) => {
  db.query(
    "SELECT id_cam AS id, name_cam AS nombre, price_cam AS precio, tienda FROM cam",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/cases", (req, res) => {
  db.query(
    "SELECT id_cases AS id, name_cases AS nombre, price_cases AS precio, tienda FROM cases",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/cpu", (req, res) => {
  db.query(
    "SELECT id_CPU AS id, name_CPU AS nombre, price_CPU AS precio, tienda FROM cpu",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/disk", (req, res) => {
  db.query(
    "SELECT id_disk AS id, name_disk AS nombre, price_disk AS precio, tienda FROM disk",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/earphones", (req, res) => {
  db.query(
    "SELECT id_earphones AS id, name_earphones AS nombre, price_earphones AS precio, tienda FROM earphones",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/graphic_card", (req, res) => {
  db.query(
    "SELECT id_graphic_card AS id, name_graphic_card AS nombre, price_graphic_card AS precio, tienda FROM graphic_card",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/laptop", (req, res) => {
  db.query(
    "SELECT id_laptop AS id, name_laptop AS nombre, price_laptop AS precio, tienda FROM laptop",
    (err, results) => {
      if (err) {
        console.error("Error al obtener laptops:", err);
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/microphone", (req, res) => {
  db.query(
    "SELECT id_microphone AS id, name_microphone AS nombre, price_microphone AS precio, tienda FROM microphone",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/monitor", (req, res) => {
  db.query(
    "SELECT id_monitor AS id, name_monitor AS nombre, price_monitor AS precio, tienda FROM monitor",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/motherboard", (req, res) => {
  db.query(
    "SELECT id_motherboard AS id, name_motherboard AS nombre, price_motherboard AS precio, tienda FROM motherboard",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});

app.get("/mousepad", (req, res) => {
  db.query(
    "SELECT id_mousepad AS id, name_mousepad AS nombre, price_mousepad AS precio, tienda FROM mousepad",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/ram", (req, res) => {
  db.query(
    "SELECT id_ram AS id, name_ram AS nombre, price_ram AS precio, tienda FROM ram",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/fuentesp", (req, res) => {
  db.query(
    "SELECT id_fuenteP AS id, name_fuenteP AS nombre, price_fuenteP AS precio, tienda FROM fuentep",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});
app.get("/ssd", (req, res) => {
  db.query(
    "SELECT id_disk AS id, name_disk AS nombre, price_disk AS precio, tienda FROM disk",
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: results });
    }
  );
});


const PORT: number = parseInt(process.env.PORT || "3001", 10);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// Añade esto al final de server.ts, antes del app.listen

app.get("/search", (req: Request, res: Response): void => {
  const searchTerm = req.query.term as string;
  if (!searchTerm) {
    res.status(400).json({ error: "Search term is required" });
    return;
  }

  // Lista de todas las tablas a buscar (corregida)
  const tables = [
    { table: "cam", nameField: "name_cam", priceField: "price_cam", idField: "id_cam" },
    { table: "cases", nameField: "name_cases", priceField: "price_cases", idField: "id_cases" },
    { table: "cpu", nameField: "name_CPU", priceField: "price_CPU", idField: "id_CPU" },
    { table: "disk", nameField: "name_disk", priceField: "price_disk", idField: "id_disk" },
    { table: "earphones", nameField: "name_earphones", priceField: "price_earphones", idField: "id_earphones" },
    { table: "fuentep", nameField: "name_fuenteP", priceField: "price_fuenteP", idField: "id_fuenteP" },
    { table: "graphic_card", nameField: "name_graphic_card", priceField: "price_graphic_card", idField: "id_graphic_card" },
    { table: "keyboard", nameField: "name_keyboard", priceField: "price_keyboard", idField: "id_keyboard" },
    { table: "laptop", nameField: "name_laptop", priceField: "price_laptop", idField: "id_laptop" },
    { table: "microphone", nameField: "name_microphone", priceField: "price_microphone", idField: "id_microphone" },
    { table: "monitor", nameField: "name_monitor", priceField: "price_monitor", idField: "id_monitor" },
    { table: "motherboard", nameField: "name_motherboard", priceField: "price_motherboard", idField: "id_motherboard" },
    { table: "mouse", nameField: "name_mouse", priceField: "price_mouse", idField: "id_mouse" },
    { table: "mousepad", nameField: "name_mousepad", priceField: "price_mousepad", idField: "id_mousepad" },
    { table: "ram", nameField: "name_ram", priceField: "price_ram", idField: "id_ram" },
  ];

  // Definir tipo para los resultados
  interface ProductResult {
    id: number;
    nombre: string;
    precio: number;
    tienda: string;
    tipo: string;
  }

  // Crear promesas para todas las consultas
  const queries = tables.map(table => {
    return new Promise<ProductResult[]>((resolve, reject) => {
      const query = `SELECT ${table.idField} AS id, ${table.nameField} AS nombre, 
                    ${table.priceField} AS precio, tienda, '${table.table}' AS tipo 
                    FROM ${table.table} 
                    WHERE ${table.nameField} LIKE ?`;
      
      db.query(query, [`%${searchTerm}%`], (err, results: unknown) => {
        if (err) return reject(err);
        resolve(results as ProductResult[]);
      });
    });
  });

  // Ejecutar todas las consultas en paralelo
  Promise.all(queries)
    .then((resultsArrays) => {
      res.json({ data: resultsArrays.flat() });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});



