import {Router} from "express";
import {getCustomers,
    getCustomersById,
    insertCustomer,
    updateCustomer} from "../controllers/customers.controller.js";
//import {validateSchema} from "../middlewares/validateSchema.middleware.js";
//import {customersSchema} from "../schemas/customers.schema.js"

const customersRouter = Router();

customersRouter.get("/customers",getCustomers);
customersRouter.get("/customers/:id",getCustomersById);

export default customersRouter;
