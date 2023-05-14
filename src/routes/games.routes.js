import {Router} from "express";
import {getGames, insertGame} from "../controllers/games.controller.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames);

export default gamesRouter;