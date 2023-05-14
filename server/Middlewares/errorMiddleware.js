import { logger } from "../Utilities/Logger.js";

export const errorHandler = (err, req, res, _) => {
  logger.error(`An error happened  : ${err} `);
  return res.status(400).json({ errors: err.message });
};
