const abpic = new URL("../images/ma4.jpg", import.meta.url)

export default function AboutUs(){
    return (
        (
            <div className ="about">
            <h1>ABOUT US</h1>
            <div className = "content">
            <h2>
            A significant player in the online aquarium product market 
            with a long history of success in Sri Lanka is Hydra Aqua Shop Malabe. 
            Our online store currently caters to both experienced aquarists and newcomers 
            who are looking for high-quality supplies at competitive prices. 
            We supply high-quality aquarium supplies and animals through our store, 
            which has a physical presence as well as an online one. Fish food, filter media, 
            filters, water conditioners and treatments, medications, livestock, tools, 
            and other necessities for your aquarium are all stuff we stock and supply.
            </h2>
            <div className = "ab">
            <img src={abpic} alt = ""/>
            
            </div>
            </div>
            </div>
        
            
            )

    ) 
}