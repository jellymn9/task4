import express from "express"; //ts way for importing
import cors from "cors";
import { routes } from "./routes";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

const dataSource = new DataSource({ //it does not support async so we will use then since it is top level (check if this is Node's thing!!)
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "0505m.l.",
    database: "node_admin",
    entities: [
        User
    ],
    logging: false,
    synchronize: true
    // ... options ...
});

function isPromise(value: any) { //should be moved to some helper folder or something like it
    return Boolean(value && typeof value.then === 'function');
};

//console.log("dataSource type:", isPromise(dataSource), "now dataSource.initialize():", isPromise(dataSource.initialize()));

dataSource.initialize().then( () => {
    console.log("dataSource has been initialized")

    const app = express();
    app.use(express.json());
    app.use(cors({
        origin: ["http://localhost:3000"]
    }));

    routes(app);

    // app.get("/", (req, res) => {
    //     res.send("Hello World");
    // });

    app.listen(8080, () => {
        console.log("listening to port 8080");
    });

    console.log("bla hello");
});
// dataSource.then( connection => {
// });


// load entities, establish db connection, sync schema, etc.
//await dataSource.connect()
