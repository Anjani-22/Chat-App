const corsOptions = {
  origin: "http://localhost:5173", // Adjust for your frontend origin
  methods: "GET,POST,PUT,DELETE", // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

const corsMiddleware = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", corsOptions.origin);
  res.setHeader("Access-Control-Allow-Methods", corsOptions.methods);
  res.setHeader("Access-Control-Allow-Headers", corsOptions.allowedHeaders);
  next(); // Pass control to the next middleware or route handler
};

export default corsMiddleware;
