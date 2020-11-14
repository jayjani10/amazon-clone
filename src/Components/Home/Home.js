import React from 'react';
import './Home.css';
import Product from '../Products/Product';


function Home() {
    return (
                // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="IMAGE" />
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="Diwali.jpg" alt="background_image" />
            

                <div className="home__row">
                    <Product title="mamaearth Winter Essential Kit for Babies. (Deeply Nourishing Body Wash - 200ml 
                    Moisturizing Daily Lotion - 200ml 
                    Gentle Cleansing Shampoo - 200ml
                    Berry Blast Toothpaste – 50gm
                    Anti-Mosquito Fabric Roll-On – 8ml
                    Plant-Based Laundry Detergent – 200ml
                    Milky Soft Face Cream – 60ml
                    Baby Backpack Bag)"
                    id="129867876"
                    image="winter_care.jpg"
                    price={999}
                    rating={4}/>
                    
                    <Product title="PLUM Acne-Fighting Combo. A 3-step regime to fight acne & acne-spots at every stage, comprising our bestselling pore cleansing face wash."
                    id="341986345"
                    image="plum_kit.jpg"
                    price={1199.99}
                    rating={5}/>
                </div>

                <div className="home__row">
                
                    <Product title="ReadGear Optical RGB MouseRedgear A-15 Wired Gaming Mouse with RGB, Semi-Honeycomb Design and Upto 6400 dpi for Windows PC Gamers."
                    id="748545622"
                    image="redgear_mouse.jpg"
                    price={349.00}
                    rating={2}/>
                   
                   <Product title="ASUS TUF Gaming A15 Laptop 15.6'' FHD 144Hz Ryzen 7 4800H, GTX 1650Ti 4GB Graphics (8GB RAM/1TB HDD + 256GB NVMe SSD/Windows 10/Bonfire Black/2.30 Kg), FA506II-HN153T"
                   id="946683754"
                    image="ASUS_A15.jpg"
                    price={64999}
                    rating={5}/>
                   
                    
                    <Product title="Samsung Galaxy Smart Watch"
                    id="674837546"
                    image="Samsung_Smart_Watch.jpg"
                    price={24999}
                    rating={4}/>
                </div>

                <div className="home__row">
                    <Product title="SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor, 1ms, NVIDIA G-SYNC & FreeSync, QLED (LC49G95TSSNXZA)"
                    id="245533366"
                    image="odyssey.jpg"
                    price={120717.14}
                    rating={3}/>
                </div>
            </div>
        </div>
    )
}

export default Home
