import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity";

createConnection("development")
  .then(async (connection) => {
    // let user = new User();
    // user.firstName = "justin";
    // user.lastName = "cremer";
    // user.age = 23;

    // connection.manager
    // .save(user)
    // .then((user) => console.log(`User ${user.id} has been saved.`));

    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
  })
  .catch((error) => console.log(error));
