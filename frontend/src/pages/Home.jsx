import { FaSearch } from "react-icons/fa";
import BASE_URL from "../components/BASE_URL";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import axios from "axios";
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home=()=>{

        const [search, setSearch] = useState("");
        const [Data, setData] = useState([]);
        const [id, setId] = useState("");

        let valid_Vehicle,Invalid_Vehicle;
        const handleSubmit=async(e)=>{
            e.preventDefault();
        //                }

        // const getData=async()=>{
            try{
                const api = `${BASE_URL}/addvehicle`; 
                const response = await axios.get(api);
                setData(response.data);
                console.log(response.data);
              
            }catch(error){
                console.log(error);
            }
        }
        // useEffect(()=>{
        //     getData()
        // },[])

// console.log(Data);

const ans = Data.map((key)=>key.vehiclenumber);
console.log(ans);

let Right,Wrong,empty;
if(ans.includes(search)){
    console.log("ok");
    if(ans.findIndex((key)=>key===search)!==-1){
        console.log("yes");
        valid_Vehicle = Data.filter((key)=>key.vehiclenumber===search);
        console.log(valid_Vehicle);
        Right=<><p id="validIcon"> <GiConfirmed/></p>
               <p>Valided</p>
               <p>Vehicle Detail's Found</p> </>
    }else{
        console.log("No");
        Invalid_Vehicle = Data.filter((key)=>key.vehiclenumber!==search);
    Wrong=<><p id="validIcon"> <MdCancel/></p>
    <p>Not Valided</p>
    <p>Vehicle Detail's Not Found</p> </>
    }
}
// else if(ans.findIndex((key)=>key===search)!==-1){
//         console.log("no");
        
// }
else{
        empty="";
}




    return(
        <>

        <div id="search">
            <input type="text" placeholder="Enter Vehicle Number" name="vehiclenumber" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={handleSubmit}><FaSearch/></button> <br />


        </div>

        <div id="invalid">
           {Wrong}
        </div>
        <div id="valid">
           {Right}
        </div>
        
        <div>
            {empty}
        </div>

        </>
    )
}
export default Home;