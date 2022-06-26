import "reflect-metadata"
import { Category } from "../modules/cars/entities/Category";
import { CreateCategories1656201025703 } from "./migrations/1656201025703-CreateCategories";
import {DataSource} from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  logging: false,
  entities: [Category],
  migrations: [CreateCategories1656201025703],
  subscribers: [], 
})

export function createConnection(host = "database"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}