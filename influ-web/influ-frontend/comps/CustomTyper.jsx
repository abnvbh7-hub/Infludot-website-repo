import {motion} from "framer-motion"
import { LinearGradient } from 'react-text-gradients'

const convar = {
  hidden:{opacity:0, y:50},
  visible:{opacity:1,y:0,transition:{staggerChildren:0.04,ease:"easeout",duration:0.4,delayChildren:0.2}}
}

const lettervar = {
  hidden:{opacity:0},
  visible:{opacity:1}
}

export default function CustomTyper({text}){
 return( <motion.h3
    variants={convar}
    initial="hidden"
    whileInView="visible"
    className="maintypecustom">
    {
      text.split("").map((item,index)=>(
        <motion.span key={index} variants={lettervar}>
          <LinearGradient className="navltxt" gradient={['to left', '#fff ,#fff']}>
            {item}
          </LinearGradient>
           </motion.span>
      ))
    }
    {/*<span  className="cursor"> <LinearGradient className="navltxt" gradient={['to left', '#fff ,#eea2f2']}>|</LinearGradient></span>*/}


  </motion.h3>)

}