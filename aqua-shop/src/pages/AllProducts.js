import React, {useState} from "react"
import searchbar from "./searchbar.css";
import data from './TemplateData.json';


export default function AllProducts(){
    const [searchTerm, setSearchTerm] = useState("");
    return (
    
    
    <div className ="Prod"> 
    <h1>PRODUCT CATEGORIES</h1>
    <>
    <div className= "templateContainer">
        <div className="searchInput_Container">
            <input id = "searchInput" type="text" placeholder="Search Here...." onChange={(event) =>{
                setSearchTerm(event.target.value);
                }}    />
        </div>
        <div className = "template_Container">
            {
                data
                .filter((val)=>{
                    if(searchTerm == ""){
                       return val;
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                })
                .map((val)=>{
                   return(
                    <div className = "template" key={val.id}>
                        <div className="img1">
                        <img src = {val.image} alt=""/>
                        </div>
                        <div className="imgtitle">
                        <h3>{val.title}</h3>
                        </div>
                        
                        </div>
                   ) 
                })
            }
        </div>
    </div>
    </>
    
    </div>
    

    
    )
}


