import React from 'react';
import Header from './Header';
import Product from './Product';
import HomeBanner from "./home_banner.jpg";
import Bag from "./bag.jpg";
import Microwaveoven from "./microwaveoven.jpg";
import Paperback from "./paperback.jpg";
import Smartspeaker from "./smartspeaker.jpg";
import Appleipadpro from "./appleipadpro.jpg";
import Samsungmonitor from "./samsungmonitor.jpg";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
        <Header />
        <div className="home">
            <div className="home__container">
                <img src={HomeBanner} alt="" className="home__image" />
            </div>
            <div className="home__row">
                <Product
                    id={101}
                    title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                    price={11.96}
                    rating={5}
                    image={Bag}
                />
                <Product
                    id={102} 
                    title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                    price={239.0}
                    rating={4}
                    image={Microwaveoven}
                />
            </div>
            <div className="home__row">
                <Product
                    id={103} 
                    title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                    price={199.99}
                    rating={3}
                    image={Paperback}
                />
                <Product
                    id={105} 
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image={Smartspeaker}
                />
                <Product
                    id={106} 
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image={Appleipadpro}
                />
            </div>
            <div className="home__row">
                <Product
                    id={107} 
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image={Samsungmonitor}
                />
            </div>
        </div>
    </React.Fragment>
  );
}
export default Home;
