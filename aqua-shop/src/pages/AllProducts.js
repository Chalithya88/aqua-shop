const foodpic = new URL("../images/aq7.jpg", import.meta.url)
const lightpic = new URL("../images/aq6.jpg", import.meta.url)
const filpic = new URL("../images/aq3.jpg", import.meta.url)
const ferpic = new URL("../images/aq4.jpg", import.meta.url)
const carepic = new URL("../images/aq5.jpg", import.meta.url)

export default function AllProducts(){
    return (
    <div className ="Prod">
    <h1>PRODUCT CATEGORIES</h1>
    
    <div className ="product">
        
        <div className = "food">
            <img src={foodpic} alt = "Descrption"/>
            <h1 className = "food1">Fish Food</h1>
        </div>

        
        <div className = "light">
            <img src={lightpic} alt = "Description"/>
            <h1 className = "light1">Lighting</h1>
        </div>

        <div className = "filter">
            <img src={filpic} alt = "Description"/>
            <h1 className = "fil1">Oxygen Filters</h1>
        </div>
        
    </div>
    
    <div className ="item">
    <div className = "fer">
            <img src={ferpic} alt = "Descrption"/>
            <h1 className = "fer1">Fertilizer</h1>
        </div>

        
        <div className = "care">
            <img src={carepic} alt = "Description"/>
            <h1 className = "care1">Fish Care</h1>
        </div>
    </div>
    </div>
    

    
    )
}