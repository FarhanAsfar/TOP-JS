import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/add-comment/:id").post(verifyJWT, addComment);
router.route("/delete-comment/:id").delete(verifyJWT, deleteComment);

router.route("/edit-comment/:id").put(verifyJWT, editComment);

export default router;