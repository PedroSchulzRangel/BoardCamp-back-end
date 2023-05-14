import {db} from "../database/database.connection.js"

export async function getGames(req, res) {
    try{
        const resultGames = await db.query(`SELECT * FROM games;`);

        res.send(resultGames.rows);

    } catch(error){
        res.status(500).send(error.message);
    }
}
export async function insertGame(req, res) {
    res.send("insertGame");
}