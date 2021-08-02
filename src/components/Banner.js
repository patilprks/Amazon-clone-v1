import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div className="relative ">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
            <div>
                <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/AugART21_PC_hero_1x_3days-to-go._CB645199309_.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
            </div>
            </Carousel>
        </div>
    )
}

export default Banner
