import express from "express";
import {
  saveMailController,
  getEmails,
  toggleStarredEmails,
  moveEmailsToBin,
  deleteEmails,
} from "../controller/mailController.js";

const routes = express.Router();

routes.post("/save", saveMailController);
routes.get("/emails/:type", getEmails);
routes.post("/save-draft", saveMailController);
routes.post("/bin", moveEmailsToBin);
routes.post("/starred", toggleStarredEmails);
routes.delete("/delete", deleteEmails);

export default routes;
