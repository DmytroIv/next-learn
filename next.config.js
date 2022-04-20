const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  let dbConnection = null;

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    dbConnection = {
      mongodb_username: 'user',
      mongodb_password: 'password',
      mongodb_clustername: 'cluster',
      mongodb_database: 'cluster',
    };
  }

  return {
    reactStrictMode: true,
    images: {
      domains: ['www.w3schools.com'],
    },
    env: dbConnection,
  };
};
