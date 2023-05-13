import {db} from "../database/database.connection.js"

export async function getCustomers(req, res) {
    res.send("getCustomers");
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

