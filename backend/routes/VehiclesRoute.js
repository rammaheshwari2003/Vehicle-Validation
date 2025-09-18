const express=require("express");
const route = express.Router();

const vehicleController=require("../controllers/VehiclesController");

route.post("/addvehicle",vehicleController.AddVehicle);


module.exports=route;