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
    const {name, phone, cpf, birthday} = req.body;

    try{
        const cpfAlreadyExists = await db.query(`SELECT * FROM customers WHERE cpf=$1;`, [cpf]);

        if(cpfAlreadyExists.rows[0]) return res.sendStatus(409);

        await db.query(`INSERT INTO customers
            (name,phone,cpf,birthday)
            VALUES ($1,$2,$3,$4);`,[name, phone, cpf, birthday]);

        res.sendStatus(201);

    } catch(error){
        res.status(500).send(error.message);
    }
}

export async function updateCustomer(req, res){
    const {id} = req.params;

    const {name, phone, cpf, birthday} = req.body;

    try{
        const idExists = await db.query(`SELECT * FROM customers WHERE id=$1;`,[id]);

        if(!idExists.rows[0]) return res.sendStatus(404);

        await db.query(`UPDATE customers SET name=$2,phone=$3,cpf=$4,birthday=$5 WHERE id=$1;`,[id, name, phone, cpf, birthday]);

        res.sendStatus(200);
        
    } catch(error){
        res.status(500).send(error.message);
    }
}

