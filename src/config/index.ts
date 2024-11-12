// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export const config = {
  JWT_SECRET_TOKEN: process.env.JWT_SECRET,
  DOMAIN_FE: process.env.DOMAIN_FE,
  AUTH_0_DOMAIN: process.env.AUTH_0_DOMAIN,
  AUTH_0_CLIENT_ID: process.env.AUTH_0_CLIENT_ID,
  AUTH_0_CLIENT_SECRET: process.env.AUTH_0_CLIENT_SECRET,
  DOMAIN: process.env.DOMAIN,
};
