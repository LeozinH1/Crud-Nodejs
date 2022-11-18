import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "crud_user",
  password: "crud_pass",
  database: "crud_database",
  entities: ["./src/models/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log("🟢 Database connection ok!");
  })
  .catch((error) => console.log(error));

export default AppDataSource;
