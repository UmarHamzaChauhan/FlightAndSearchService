const dotnet = require('dotenv');

dotnet.config();
module.exports = {
  PORT:process.env.PORT
}