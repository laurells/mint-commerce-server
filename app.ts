import express from "express";
// import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

// Enable CORS
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
// Set HTTP Hseaders
app.use(helmet());

// Set Rate Limit
const limiter = rateLimit({
  windowMs: 7 * 60 * 1000, // 7 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



export default app;
