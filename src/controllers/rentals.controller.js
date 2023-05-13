import {db} from "../database/database.connection.js"

export async function getRentals(req, res) {
    res.send("getRentals");
}

export async function insertRental(req, res) {
    res.send("insertRental");
}

export async function finishRental(req, res) {
    res.send("finishRental");
}

export async function deleteRental(req, res) {
    res.send("deleteRental");
}

