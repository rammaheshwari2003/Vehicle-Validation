import { useEffect, useState } from "react";
import BASE_URL from "../components/BASE_URL";
import axios from "axios";

const Display=()=>{

        const [data, setData] = useState([]);

        const getData = async()=>{
        try {
            const api = `${BASE_URL}/addvehicle`;
            const response = await axios.get(api);
            setData(response.data);
        } catch (error) {
            console.log(error);   
        }
    }

    useEffect(()=>{
        getData();
    },[])

    let sno=1;
    const ShowData = data.map((key)=>{
        return(
            <tr align="center">
                <td>{sno++}</td>
                <td>{key.vehiclenumber}</td>
                <td>{key.vehicletype}</td>
                {/* <td>{key.flatno}</td> */}
                <td>{key.rcnumber}</td>
                <td>{key.vehicleownername}</td>
                <td>{key.vehicleownercontact}</td>
                {/* <td>{key.alternatecontact}</td> */}
                {/* <td>{key.email}</td> */}
                <td>{key.address}</td>
                <td>{key.flatownername}</td>
                <td>{key.flatownercontact}</td>
                <td>{key.validdate}</td>
            </tr>  
        )
    })
    


    console.log(data);
    

    return(
        <>

    <table border={2}>
        <tr>
            <th>S.No</th>
            <th>Vehicle Number</th>
            <th>Vehicle Type</th>
            {/* <th>Flat Number</th> */}
            <th>RC Number</th>
            <th>Vehicle Owner Name</th>
            <th>Vehicle Owner Contact</th>
            {/* <th>Alternate Contact</th> */}
            {/* <th>Email</th> */}
            <th>Address</th>
            <th>Flat Owner Name</th>
            <th>Flat Owner Contact</th>
            <th>Valid Date</th>
        </tr>
        {ShowData}
    </table>

        
        </>
    )
}
export default Display;