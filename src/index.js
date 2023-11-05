import app from "./app.js";
import { connecDB } from "./db.js";

connecDB();
app.listen(4000);
console.log('Server on port', 4000);