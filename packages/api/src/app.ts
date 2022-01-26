import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import faker from "@faker-js/faker";

const app = express();
const port = 3001;

const users = [...Array(25).keys()].map(() => ({
  id: faker.datatype.uuid(),
  ...faker.helpers.userCard(),
  avatar: faker.image.avatar(),
  active: faker.datatype.boolean(),
}));

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default app;
