import dotenv from 'dotenv';

dotenv.config();

const port = process.env.API_PORT;
const secret = process.env.JWT_SECRET;

const gcpConfig = {
  bucketName: process.env.BUCKET_NAME,
  credentialsUrl: process.env.CREDENTIALS_URL,
  projectId: process.env.PROJECT_ID,
};

const mongo = {
  url: process.env.MONGO_URI,
};

const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  production: process.env.NODE_ENV === 'production',
};

export { port, gcpConfig, mongo, secret, env };
