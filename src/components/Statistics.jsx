import React from 'react'
import shoppingBag  from "../../public/images/shopping-bag.svg";
import  settings  from "../../public/images/settings.svg";
import  shoppingCart  from "../../public/images/shopping-cart.svg";
import  user  from "../../public/images/users.svg";
import SattisticsCard from './SattisticsCard'
import StatisticsData from './staticData.js'
// const StatisticsData = [
//   {
//     imgSvg: shoppingBag,
//     num: "80K",
//     title: "Our buyers",
//     desc: "Follow a hashtag growth total posts, videos and images.",
//   },
//   {
//     imgSvg: settings,
//     num: "90K",
//     title: "Project completed",
//     desc: "Follow a hashtag growth total posts, videos and images.",
//   },
//   {
//     imgSvg:shoppingCart,
//     num: "80%",
//     title: "Happy buyers",
//     desc: "Follow a hashtag growth total posts, videos and images.",
//   },
//   {
//     imgSvg: user,
//     num: "50+",
//     title: "Team members",
//     desc: "Follow a hashtag growth total posts, videos and images.",
//   },
// ];
function Statistics() {
  return (
    <div className=' h-[40vh] flex justify-center items-center gap-4 px-[120px] '>
        {StatisticsData.map((element,index)=>{
            return <SattisticsCard key={index} img={element.imgSvg} num={element.num} title={element.title} desc={element.desc}/>
        })}
    </div>
  )
}
export default Statistics
