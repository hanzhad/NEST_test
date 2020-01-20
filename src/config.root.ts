import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const environment = process.env.NODE_ENV || 'development';

export const configModule = ConfigModule.forRoot(
  {
    envFilePath: `${environment}.env`,
    isGlobal: true,
  },
);

export const dbConnection = MongooseModule.forRoot(
    process.env.MONGO_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
