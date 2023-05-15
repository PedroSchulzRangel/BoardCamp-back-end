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
    const {id} = req.params;
    
    try{
        const resultCustomerById = await db.query(`SELECT * FROM customers WHERE id=$1;`, [id]);
        
        if(!resultCustomerById.rows[0]) return res.sendStatus(404);

        res.send(resultCustomerById.rows[0]);
        
    } catch(error){
        res.status(500).send(error.message);
    }
}

export async function insertCustomer(req, res){
    res.send("insertCustomer");
}

export async function updateCustomer(req, res){
    res.send("updateCustomer");
}

