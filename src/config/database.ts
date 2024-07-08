import { CarAccident } from "../entity/carAccident.entity";

const SnakeNamingStrategy =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('./snake-naming.strategy').SnakeNamingStrategy;

export default () => ({
  databaseConfig: {
    type: 'oracle',
    entities: [CarAccident],
    synchronize: false,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
    host: process.env.HOST,
    port: +process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    sid: process.env.SID,
  },
});
