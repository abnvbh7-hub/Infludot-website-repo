import {motion, useScroll,useTransform} from "framer-motion";
import { useState, useEffect } from "react";
import { LinearGradient } from "react-text-gradients";
import Counter from "../comps/counter.jsx"
import Brands from "../comps/lotfiles/Brands.json";
import Influencers from "../comps/lotfiles/Influencers.json";
import Campaigns from "../comps/lotfiles/Campaigns.json";
import Reach from "../comps/lotfiles/Reach.json";
import Lottie from "lottie-react";
import arrow from "../comps/lotfiles/arrow.json";

export default function Stats(){
  
  const { scrollYProgress } = useScroll();

  // Smooth scale from 0.95 → 1
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.6], [0.95, 1, 1]);

  
  const varcon = {
    hidden: { opacity: 0, y: 60 },
    visible:{opacity:1, y:0,transition:{staggerChildren:0.4,duration:0.8,ease:"easeout"}}
  }
  const varitem ={
    hidden: { opacity: 0, y: 60 },
    visible:{opacity:1, y:0,transition:{duration:0.8,ease:"easeout"}}
  }

  const statdata =[
    {
      "title":"Influencers",
      "count":150,
      "suffix":"+",
      "animation":Influencers  
    },
    {
      "title":"Brands",
      "count":400,
      "suffix":"+",
      "animation":Brands
    },
    {
      "title":"Campaigns",
      "count":200,
      "suffix":"+",
      "animation":Campaigns
    },
    {
      "title":"Reach",
      "count":200,
      "suffix":"M+",
      "animation":Reach
    }
      
      
  ]
  
  return (
    <>
      <div className="infstatarrow">
        <Lottie animationData={arrow} className="arrowlot"/>
      </div>
    <motion.div className="stat-mc" variants={varcon} style={{scale}}>
      {
        statdata.map((item,index)=>{
          return(
          <motion.div className="stat-card" variants={varitem} key={index}>
            <Lottie animationData={item.animation} autoplay loop className="stat-lottie"/>
            <motion.div className="stat-card1" variants={varitem}>{item.title}</motion.div>
            <motion.div className="stat-card2" variants={varitem}><Counter end={item.count} suffix={item.suffix}/></motion.div>
          </motion.div>)
        })
      }
    </motion.div>
    </>
  )
}