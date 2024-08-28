import express from "express";
import { expressMiddleware } from '@apollo/server/express4';
import createGraphqlServer from "./graphql";

async function Server() {
  const app = express();
  const PORT = 8000;
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("server okk !!");
  });

  app.use('/graphql', expressMiddleware(await createGraphqlServer()))


  app.listen(PORT, () => {
    console.log(`Server Has Started at ${PORT}`);
  });
}

Server();
