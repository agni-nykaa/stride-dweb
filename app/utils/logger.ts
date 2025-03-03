const isBrowser = typeof window !== 'undefined';
const logFilePath = !isBrowser
  ? process.env.LOG_FILE_PATH || 'app.log'
  : 'app.log';

interface Logger {
  info: (message: string, ...optionalParams: any[]) => void;
  warn: (message: string, ...optionalParams: any[]) => void;
  error: (message: string, ...optionalParams: any[]) => void;
  debug: (message: string, ...optionalParams: any[]) => void;
}

let logger: Logger;
let loggerInitialized: Promise<void>;

if (isBrowser) {
  logger = {
    info: (message: string, ...optionalParams: any[]) => {
      console.info(message, ...optionalParams);
    },
    warn: (message: string, ...optionalParams: any[]) => {
      console.warn(message, ...optionalParams);
    },
    error: (message: string, ...optionalParams: any[]) => {
      console.error(message, ...optionalParams);
    },
    debug: (message: string, ...optionalParams: any[]) => {
      if (process.env && process.env.NODE_ENV === 'development') {
        console.debug(message, ...optionalParams);
      }
    },
  };
  loggerInitialized = Promise.resolve();
} else {
  loggerInitialized = import('winston').then((winston) => {
    const winstonLogger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
          ({ timestamp, level, message, ...meta }) =>
            `${timestamp} [${level}]: ${message} ${
              Object.keys(meta).length ? JSON.stringify(meta) : ''
            }`,
        ),
      ),
      transports: [
        new winston.transports.File({ filename: logFilePath }),
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ],
    });

    logger = {
      info: winstonLogger.info.bind(winstonLogger),
      warn: winstonLogger.warn.bind(winstonLogger),
      error: winstonLogger.error.bind(winstonLogger),
      debug: winstonLogger.debug.bind(winstonLogger),
    };
  });
}

export { logger, loggerInitialized };
