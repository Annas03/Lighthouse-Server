const {createServer} = require('@lhci/server');

console.log('Starting server...');
createServer({
  port: process.env.PORT,
  storage: {
    storageMethod: 'sql',
    sqlDialect: 'sqlite',
    sqlDatabasePath: 'db.sqlite',
  },
}).then(({port}) => console.log('LHCI listening on port', port));