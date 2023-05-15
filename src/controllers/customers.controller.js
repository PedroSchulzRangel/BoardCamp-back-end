import {db} from "../database/database.connection.js";

export async function getCustomers(req, res) {
    try{
        const resultCustomers = await db.query(`SELECT * FROM customers;`);

        res.send(resultCustomers.rows);

    } catch(error){
        res.status(500).send(error.message);
    }
}

export async function getCustomersById(req, res){
    res.send("getCustomersById");
}

export async function insertCustomer(req, res){
    res.send("insertCustomer");
}

export async function updateCustomer(req, res){
    res.send("updateCustomer");
}

