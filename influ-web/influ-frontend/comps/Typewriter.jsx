import {motion} from "framer-motion"
import { LinearGradient } from 'react-text-gradients'

const convar = {
  hidden:{opacity:0, y:50},
  visible:{opacity:1,y:0,transition:{staggerChildren:0.1,ease:"easeout",duration:0.7,delayChildren:0.2}}
}

const lettervar = {
  hidden:{opacity:0},
  visible:{opacity:1}
}

export default function Typer({text}){
 return( <motion.h3
    variants={convar}
    initial="hidden"
    whileInView="visible"
    className="maintype">
    {
      text.split("").map((item,index)=>(
        <motion.span key={index} variants={lettervar}> <LinearGradient className="navltxt" gradient={['to left',  "#17acff ,#ff68f0"]}>
          {item}
        </LinearGradient>

        </motion.span>
      ))
    }
  {  /*<span  className="cursor"> <LinearGradient className="navltxt" gradient={['to left', '#fff ,#eea2f2']}>|</LinearGradient></span>*/
}

  </motion.h3>)

}