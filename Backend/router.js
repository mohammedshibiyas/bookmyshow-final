import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/display").post(controller.addtask);
router.route("/movies").get(controller.getdata);
router.route("/moviedetails/:id").post(controller.getDetails);
router.route("/deltask/:id").delete(controller.delMovie);
router.route("/editmovie/:id").patch(controller.edit)

    // res.status(200).send("this is controller"))
export default router;