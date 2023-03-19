const fish1pic = new URL("../images/f1.jpg", import.meta.url)
const fish2pic = new URL("../images/f2.jpg", import.meta.url)
const fish3pic = new URL("../images/f3.jpg", import.meta.url)
const fish4pic = new URL("../images/f4.jpg", import.meta.url)


export default function Home(){
    return (
        <div className ="footer">
            
        <h1>ALL YOUR AQUARIUM NEEDS 
            AT ONE PLACE!</h1>
        
        <div className = "pet">
            <h3> PET FISH</h3>
        </div>

        <div className ="fishy">
        
        <div className = "fish1">
            <img src={fish1pic} alt = "Description"/>
            <h1 className = "gold">Gold Fish</h1>
            <p className= "price">Rs.1999/-</p>
            <button>Add To Cart</button>
        </div>

        
        <div className = "fish2">
            <img src={fish2pic} alt = "Description"/>
            <h1 className = "gourami">Gourami</h1>
            <p className= "price">Rs.999/-</p>
            <button>Add To Cart</button>
        </div>

        <div className = "fish3">
            <img src={fish3pic} alt = "Description"/>
            <h1 className = "guppy">Guppy</h1>
            <p className= "price">Rs.1499/-</p>
            <button>Add To Cart</button>
        </div>

        <div className = "fish4">
            <img src={fish4pic} alt = "Description"/>
            <h1 className = "platy">Platy</h1>
            <p className= "price">Rs.899/-</p>
            <button>Add To Cart</button>
        </div>
        
    </div>

    

        </div>


    

    ) 
}