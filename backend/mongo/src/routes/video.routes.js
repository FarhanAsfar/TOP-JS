import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { publishVideo, getAllVideos, getVideoById, deleteVideo} from "../controllers/video.controller.js";

const router = Router();

router.route("/publish-video").post(
    upload.fields([
        {
            name: "videoFile",
            maxCount: 1,
        },
        {
            name: "thumbnail",
            maxCount: 1,
        }
    ]),
    verifyJWT, publishVideo);

router.route("/all-videos").get(getAllVideos);

router.route("/get-video/:id").get(verifyJWT, getVideoById);

router.route("/delete-video/:id").delete(verifyJWT, deleteVideo);


export default router;