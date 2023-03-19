export default function Navbar() {
    return <nav className = "nav">
       < a href = "/" className = "site-title">Hydra Aquashop</a>
       <ul>
        <li className= "active">
            <a href = "/home">Home</a>
            </li>
        
        <li>
            <a href = "/allproducts">AllProducts</a>
        </li>
        <li>
            <a href = "/services">Services</a>
        </li>
        <li>
            <a href = "/about">AboutUs</a>
        </li>
        <li>
            <a href = "/contactus">ContactUs</a>
        </li>
       </ul>
    </nav>
}