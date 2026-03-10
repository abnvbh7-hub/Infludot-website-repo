import {motion, useScroll,useTransform} from "framer-motion";
import {useNavigate} from "react-router-dom";


export default function Footer(){

  const nav = useNavigate()

  const convar = {
    hidden:{opacity:0,x:50},
    visible:{opacity:1,x:0,transition:{staggerChildren:0.3,duration:0.3,ease:"easeIn"}}
  }

  const itemVar = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

 return(
    <>
      

    <motion.div className="footer" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0,transition:{duration:0.3,ease:"easeIn"}}}>
      <motion.div className="footer-mc">
        <motion.div className="footer-c1">
          <motion.img className="footer-logo" variants={convar} initial="hidden" whileInView="visible" src="/influ-dot-logo.png"/>
          <motion.div className="footer-logotxt" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}>Join InfluDot to connect with top creators, <br/>boost your reach, and drive real results through <br/>smart influencer marketing.</motion.div>
        </motion.div>
        <motion.div className="footer-c2" variants={convar} initial="hidden" whileInView="visible" >
          <motion.div className="footerc2x" variants={itemVar}>QUICK LINKS</motion.div>
          <motion.div className="footerc2y" variants={itemVar} onClick={()=>nav('/')}>Home</motion.div>
           <motion.div className="footerc2y" variants={itemVar} onClick={()=>nav('/about')}>About</motion.div>
           <motion.div className="footerc2y" variants={itemVar} onClick={()=>nav('/features')}>Features</motion.div>
           <motion.div className="footerc2y" variants={itemVar} onClick={()=>nav('/contact')}>Contact</motion.div>
        </motion.div>
        <motion.div className="footer-c2" variants={convar} initial="hidden" whileInView="visible" >
          <motion.div className="footerc2x" variants={itemVar}>POLICIES</motion.div>
          <motion.div className="footerc2y" variants={itemVar} onClick={()=>nav('/privacy-policy')}>Privacy Policy</motion.div>
           <motion.div className="footerc2y" variants={itemVar} onClick={()=>nav('/tandc')}>Terms & Conditions</motion.div>
           <motion.div className="footerc2y" variants={itemVar} onClick={()=>nav('/refund')}>Refund Policy</motion.div>
           <motion.div className="footerc2y" variants={itemVar} onClick={()=>nav('/cancel')}>Cancellation Policy</motion.div>
        </motion.div>

        <motion.div className="footer-c2" variants={convar} initial="hidden" whileInView="visible" >
          <motion.div className="footerc2x" variants={itemVar}>OUR LOCATION</motion.div>
          <motion.div className="footerc2y" variants={itemVar}>+91 9059910137</motion.div>
           <motion.div className="footerc2y" variants={itemVar}> Infludottecnologies@gmail.com</motion.div>
           <motion.div className="footerc2y" variants={itemVar}> 
             Venture Development Center, GITAM, Gandhinagar Campus,<br/>Rushikonda</motion.div>
        </motion.div>

        <motion.div className="footer-c2" variants={convar} initial="hidden" whileInView="visible" >
         <div className="flmc">
          <motion.div className="footerc2y" variants={itemVar}><a href="https://www.instagram.com/infludot_/"><img className="flc" src="/instagram2.png"/> </a></motion.div>
          <motion.div className="footerc2y" variants={itemVar}><a href="tel:+919059910137"><img className="flc" src="/phone-call.png"/></a></motion.div>
          <motion.div className="footerc2y" variants={itemVar}><a href="mailto:Infludottecnologies@gmail.com "><img className="flc" src="/email.png"/></a></motion.div>
           </div>
        </motion.div>


      </motion.div>
    </motion.div>

    </>
  )
}