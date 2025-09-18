import { useState } from "react";
import BASE_URL from "../components/BASE_URL";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const AddVehicle =()=>{

    const [input, setInput] = useState({});

    const handleInput=(e)=>{
        let {name,value}= e.target;
        setInput({...input,[name]:value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

    try {
        const api = `${BASE_URL}/vehicle/addvehicle`;
        const response = await axios.post(api,input);
        console.log(response);
        setInput({});
        toast.success("Vehicle Added Successfully");
    } catch (error) {
        console.log(error);
        
    }
}

    return(
        <>
         <br />
        <h1 style={{textAlign:"center",color:""}}>Add Vehicle</h1>

        <form id="addvehicle" onSubmit={handleSubmit}>
            <input type="text" placeholder="Vehicle Number" name="vehiclenumber" onChange={handleInput} required/> <span id="star">*</span> <br />
            <select name="vehicletype" onChange={handleInput} required> 
                <option>Select</option>
                <option value="Bike">Bike</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Auto Rickshaw">Auto Rickshaw</option>
            </select>  <span id="star">*</span> <br />

            <input type="text" placeholder="Vehicle Owner Name" name="vehicleownername" onChange={handleInput} required/> <span id="star">*</span> <br />
            <input type="text" placeholder="Flat No." name="flatno" onChange={handleInput} required/> <span id="star">*</span> <br />
            <input type="text" placeholder="DL / RC Number" name="rcnumber" onChange={handleInput} required/> &nbsp;&nbsp; <br />
            <input type="number" placeholder="Vehicle Owner Contact" name="vehicleownercontact" onChange={handleInput} required/> <span id="star">*</span> <br />
            <input type="number" placeholder="Alternate Contact" name="alternatecontact" onChange={handleInput} /> &nbsp;&nbsp;<br />
            <input type="email" placeholder="Email" name="email" onChange={handleInput}/> &nbsp;&nbsp; <br />
            <input type="text" placeholder="Permanent Address" name="address"onChange={handleInput} required/> <span id="star">*</span> <br />
            <input type="text" placeholder="Flat Owner Name" name="flatownername" onChange={handleInput} required/> <span id="star">*</span> <br />
            <input type="number" placeholder="Flat Owner Contact" name="flatownercontact" onChange={handleInput} required/> <span id="star">*</span> <br />
            <input type="date" name="validdate" onChange={handleInput} required/> <span id="star">*</span><br />

            <button type="submit">Submit</button>


        </form>
        <ToastContainer/>
        </>
    )
}

export default AddVehicle;