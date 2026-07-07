import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PopularMeals.css";

import bowl from "../../assets/images/bowl.jpeg";
import jeeraRice from "../../assets/images/jeera-rice.jpg";
import mixVeg from "../../assets/images/mix-veg.jpg";
import paneer from "../../assets/images/paneer.jpg";
import salad from "../../assets/images/salad.jpeg";
import shahiPaneer from "../../assets/images/shahi-paneer.jpg";
import thali from "../../assets/images/thali.jpeg";
import mockup from "../../assets/images/mockup.jpeg";

const meals = [
  {
    image: paneer,
    title: "Paneer Butter Masala",
    price: "₹150",
    description: "Rich and creamy paneer cooked with authentic Indian spices.",
  },
  {
    image: thali,
    title: "Veg Thali",
    price: "₹180",
    description: "Complete home-style meal with dal, sabzi, rice and chapati.",
  },
  {
    image: mixVeg,
    title: "Mix Veg Curry",
    price: "₹140",
    description: "Fresh seasonal vegetables prepared with traditional flavours.",
  },
  {
    image: shahiPaneer,
    title: "Shahi Paneer",
    price: "₹170",
    description: "Soft paneer cubes served in rich creamy gravy.",
  },
  {
    image: jeeraRice,
    title: "Jeera Rice",
    price: "₹120",
    description: "Fragrant basmati rice tempered with cumin and herbs.",
  },
  {
    image: bowl,
    title: "Healthy Bowl",
    price: "₹160",
    description: "Balanced bowl packed with fresh vegetables and nutrition.",
  },
  {
    image: salad,
    title: "Fresh Salad",
    price: "₹90",
    description: "Seasonal vegetables served fresh every day.",
  },
  {
    image: mockup,
    title: "Daily Special",
    price: "₹199",
    description: "Chef's special home-style meal prepared fresh daily.",
  },
];

const PopularMeals = () => {
  return (
    <section className="popular-meals" id="meals">

      <h2>Popular Home-Style Meals</h2>

      <p className="section-subtitle">
        Freshly cooked every day using quality ingredients and authentic homemade recipes.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        spaceBetween={30}
        breakpoints={{
            320: {
            slidesPerView: 1,
         },
            768: {
            slidesPerView: 2,
         },
            1024: {
            slidesPerView: 3,
         },
        }}
      >

        {meals.map((meal, index) => (

            <SwiperSlide key={index}>

                <div className="meal-card">

                    <img src={meal.image} alt={meal.title} />

                    <div className="meal-content">

                        <h3>{meal.title}</h3>

                        <p>{meal.description}</p>

                        <div className="meal-bottom">

                            <span>{meal.price}</span>

                            <a href="#cta" className="meal-btn">
                                Available in App
                            </a>

                        </div>

                    </div>

                </div>

            </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
};

export default PopularMeals;