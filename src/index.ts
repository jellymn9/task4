import express from "express"; //ts way for importing
import cors from "cors";
import { routes } from "./routes";

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