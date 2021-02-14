import { startServer } from './app/server';
import { mongoConfig, rootConfig } from './app/util/config';
import { connectToMongo } from './app/util/data/mongo.adapter';
import { logger } from './app/util/logger';

enum processExitCodes {
  ok = 1,
  hadledError = 2,
  uncaughtException = 3,
}

async function init() {
  try {
    logger.dump(rootConfig);
    if (mongoConfig.connect) {
      await connectToMongo();
      logger.info('Mongo dB should be connected');
    }
    const server = await startServer(rootConfig);
    logger.http(`Server started ${JSON.stringify(server.address())}`);
  } catch (error) {
    logger.fatal(error);
    process.exit(processExitCodes.hadledError);
  }
}
process.on('uncaughtException', (error: Error) => {
  logger.fatal(error);
  process.exit(processExitCodes.uncaughtException);
});

init();
