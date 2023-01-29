import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import DeliveryCards from "./DeliveryCards"
import DeliveryCardCarousel from "./DeliveryCardCarousel";

// redux
import { useSelector } from "react-redux";
import DiveleryCards from "./DeliveryCards";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.restaurants
  );

  useEffect(() => {
    reduxState && setRestaurantList(reduxState);
  }, [reduxState]);

  return (
    <>
         <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in NCR (Delhi)
      </h1>
      <DeliveryCardCarousel/>
      <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
        </div>
      <div className="flex justify-start flex-wrap">
        <DeliveryCards
          bg="red"
          image="https://b.zmtcdn.com/data/pictures/0/18457050/bdd1c6c2a3c3930b5858858d281fba01.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        />
        <DeliveryCards
          bg="red"
          image="https://b.zmtcdn.com/data/pictures/chains/4/844/7bf043df21a0b583dd8b14df36352fec_o2_featured_v2.jpg?output-format=webp"
        />
        <DeliveryCards
          bg="red"
          image="https://b.zmtcdn.com/data/pictures/chains/3/19253173/7aae8602e6092ffaa0a5b70fc7307bf8_o2_featured_v2.jpeg?output-format=webp"
        />
        <DeliveryCards
          bg="red"
          image="https://b.zmtcdn.com/data/pictures/8/5578/f32bd49ca4314ce07c5caccf69e8563e_o2_featured_v2.jpg?output-format=webp"
        />
        <DeliveryCards
          bg="blue"
          image="https://b.zmtcdn.com/data/pictures/chains/1/931/567f0aa1ed15e11377a52d0514013f6e_o2_featured_v2.jpg"
        />
        <DeliveryCards
          bg="blue"
          image="https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg"
        />
        <DeliveryCards
          bg="blue"
          image="https://b.zmtcdn.com/data/pictures/chains/0/311880/0735544778f8778535444777e0fba03a_o2_featured_v2.jpg"
        />
        <DeliveryCards
          bg="red"
          image="https://b.zmtcdn.com/data/pictures/1/19519551/c04e3370bd2caeae6588358caf212d45_o2_featured_v2.jpg"
        />
        <DeliveryCards
          bg="blue"
          image="https://b.zmtcdn.com/data/pictures/3/20522543/37750871991fc4a1dfb8c9013cab2498_o2_featured_v2.jpg"
        />
        <DeliveryCards
          bg="blue"
          image="https://b.zmtcdn.com/data/pictures/3/18757043/d3a1fbc8a36f25d06071f84e3dfd8107_o2_featured_v2.jpg"
        />
        <DeliveryCards
          bg="blue"
          image="https://b.zmtcdn.com/data/pictures/chains/0/18416840/297e6c82fbf1b14832189765dd0bdcc5_o2_featured_v2.jpg"
        />
        <DeliveryCards
          bg="blue"
          image="https://b.zmtcdn.com/data/pictures/chains/9/300749/b9c760bd153007b0dc8ff4cec17f3ee7_o2_featured_v2.jpg"
        />
      </div>
    </>
  );
};

export default Delivery;

// {
//   _id: "124ksjf435245jv34fg3",
//   isPro: true,
//   isOff: true,
//   name: "Nathu's Sweets",
//   restaurantReviewValue: "3.7",
//   cuisine: [
//     "Mithai",
//     "South Indian",
//     "Chinese",
//     "Street Food",
//     "Fast Food",
//     "Desserts",
//     "North Indian",
//   ],
//   averageCost: "450",
// },
// {
//   _id: "sdffdsadadsfadfadsfadsf",
//   isPro: true,
//   isOff: false,
//   name: "Master Koii's",
//   restaurantReviewValue: "4.6",
//   cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
//   averageCost: "600",
// },
// {
//   _id: "124ksjf435245jfdfv34fg3",
//   isPro: true,
//   isOff: true,
//   name: "Nathu's Sweets",
//   restaurantReviewValue: "3.7",
//   cuisine: [
//     "Mithai",
//     "South Indian",
//     "Chinese",
//     "Street Food",
//     "Fast Food",
//     "Desserts",
//     "North Indian",
//   ],
//   averageCost: "450",
// },
