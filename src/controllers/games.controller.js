import {db} from "../database/database.connection.js"

export async function getGames(req, res) {
    res.send("getGames");
}
export async function insertGame(req, res) {
    res.send("insertGame");
}