const inspic = new URL("../images/c1.jpg", import.meta.url)
const aqpic = new URL("../images/c2.jpg", import.meta.url)
const vetpic = new URL("../images/c4.jpg", import.meta.url)
const maipic = new URL("../images/aq2.jpg", import.meta.url)


export default function Services(){
    return(
    <div className ="Serve">
    <h1>SERVICES</h1>
    
    <div className ="serv">
        
        <div className = "ins">
            <img src={inspic} alt = "Descrption"/>
            <h1 className = "ins1">Installation</h1>
        </div>

        
        <div className = "aq">
            <img src={aqpic} alt = "Description"/>
            <h1 className = "aq1">Aquarium Designs</h1>
        </div>

        <div className = "vet">
            <img src={vetpic} alt = "Description"/>
            <h1 className = "vet1">Fish Vet Services</h1>
        </div>
        
    </div>
    
    <div className ="serv2">
    <div className = "mai">
            <img src={maipic} alt = "Descrption"/>
            <h1 className = "mai1">Maintenance</h1>

            <p className = "para"> 
            Cleans and maintains fish aquariums, which includes 
            performing water testing, medicating tanks, filling water bottles, 
            removing dead fish, feeding fish, acclimating new fish, and 
            delivering products to the customer for their use. </p>
        </div>

        
    </div>
    </div>
    

    
    )
}