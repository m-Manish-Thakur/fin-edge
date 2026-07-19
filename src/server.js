const { env, initEnvs } = require("./config/env");
const connectDB = require("./config/db");
const app = require("./app");

const startServer = async () => {
  try {
    initEnvs();

    // await connectDB(env.MONGO_URI);

    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
