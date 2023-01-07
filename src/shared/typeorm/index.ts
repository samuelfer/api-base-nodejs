import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api_base_node',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Connected successfull');
  })
  .catch(error => console.log(error));
