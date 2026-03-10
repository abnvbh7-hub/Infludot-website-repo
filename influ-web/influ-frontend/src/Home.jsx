import {
  motion,
  useScroll,
  useTransform,
  useInView,
  scale,
} from "framer-motion";
import NavBar from "../comps/Nav.jsx";
import Stats from "../comps/Stats.jsx"
import { useRef, useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import CustomTyper from "../comps/CustomTyper.jsx";
import Search from "../comps/lotfiles/glass.json";
import msgicon from "../comps/lotfiles/msgicon.json";
import shakehand from "../comps/lotfiles/shakehand.json";
import marketing from "../comps/lotfiles/marketing.json";
import Lottie from "lottie-react";
import NavTyper from "../comps/Navlg.jsx";
import chatlottie from "../comps/lotfiles/chatlottie.json";
import ChatBlock from "../comps/Chatblock.jsx";
import arrow from "../comps/lotfiles/arrow.json";
import Footer from "../comps/Footer.jsx";
import Counter from "../comps/counter.jsx"

export default function Home(){

  const { scrollYProgress } = useScroll();
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const [chat, setChat] = useState(false);
  const[cd,setCD] = useState([])
  const[bd,setBD] = useState([])


  const sg = useTransform(scrollYProgress, [0.2,0.5,1], [0.7,0.96,0.8]);

  const { scrollYProgress: sectionProgress1 } = useScroll({
    target: sectionRef1,
    offset: ["start end", "center center"],
  });

  const { scrollYProgress: sectionProgress2 } = useScroll({
    target: sectionRef2,
    offset: ["start end", "center center"],
  });


  async function fetchCreators() {
    try {
      const res = await fetch(
        "https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/getcreator"
      );
      const data = await res.json();

      if (data.status === "success") {
        setCD(data.data);
        console.log(data.data)
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchBrands() {
    try {
      const res = await fetch(
        "https://3f628bdc-736f-4f5e-a6fe-5b2f896e121d-00-1u09q7zfqw32o.sisko.replit.dev/getbrand"
      );
      const data = await res.json();

      if (data.status === "success") {
        setBD(data.data);
        console.log(data.data)
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchBrands();
    fetchCreators();
  }, []);




  const vidscale = useTransform(scrollYProgress, [0, 0.6,0.8], [0.8, 1,0.8])

  const color1 = useTransform(scrollYProgress, [0, 1], ["#f9e3fb", "#eea2f2"]);
  const color2 = useTransform(scrollYProgress, [0, 1], ["#eea2f2", "#f9e3fb"]);
  const bg = useTransform(
    [color1, color2],
    ([c1, c2]) => `linear-gradient(270deg, ${c1}, ${c2})`,
  );

  // HERO (global scroll is OK here)
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1.07, 0.8]);

  // SECTION-based scales (THIS IS THE FIX)
  const sectionScale1 = useTransform(sectionProgress1, [0, 0.5,1], [0.8, 1,0.9]);
  const sectionScale2 = useTransform(sectionProgress2, [0, 0.8,1], [0.7, .96,0.9]);

  const convar = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.4, duration: 0.8, ease: "easeout" },
    },
  };

  const lettervar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return(
    <>
       <NavBar />
    
    <main>
      <Lottie
        animationData={chatlottie}
        autoPlay={true}
        loop={true}
        onClick={() => setChat(true)}
        className="chatlot"
        initialSegment={[35, 120]}
      />
      {chat ? (
        <div className="chatoverlay">
          <ChatBlock onClick={() => setChat(false)} />
        </div>
      ) : null}
      <div className="hmc">
      <motion.div
        className="typercon"
        style={{ scale: heroScale }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <NavTyper texts={["INFLUDOT."]} />
        <motion.div
          className="tagcon"
          variants={convar}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="tagline" variants={lettervar}>
            Creators,
          </motion.div>
          <motion.div className="tagline" variants={lettervar}>
            Brands,
          </motion.div>
          <motion.div className="tagline" variants={lettervar}>
            <u>United.</u>
          </motion.div>
        </motion.div>
        <motion.div
          className="tagconmini"
          variants={convar}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="taglinemini" variants={lettervar}>
            Discover
          </motion.div>
          <motion.div className="taglinemini" variants={lettervar}>
            the perfect influencers{" "}
          </motion.div>
          <motion.div className="taglinemini" variants={lettervar}>
            to elevate your brand and connect with your audience.
          </motion.div>
          <motion.div className="taglinemini" variants={lettervar}>
            Join our platform to
          </motion.div>
          <motion.div className="taglinemini" variants={lettervar}>
            collaborate, grow, and succeed together.{" "}
          </motion.div>
        </motion.div>
        <motion.div
          className="download-now"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
        >
          <LinearGradient
            className="downtxt"
            gradient={["to left", "#17acff ,#ff68f0"]}
          >
            DOWNLOAD NOW
          </LinearGradient>
        </motion.div>
        </motion.div>
        </div>
      <div className="influconwrap">
        <div className="inhcon">
          <div className="infheadingarrow">
            <Lottie animationData={arrow} className="arrowlot"/>
          </div>
          <div className="infheading">OUR CREATORS</div>
         
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="influcon"
          style={{ scale: vidscale }}>
          {
            cd.map((item,index)=>(
              <a href={item.inflink} target="_blank"><motion.div className="creatoritems" variants={convar} key={item.infid || index}>
                 <div className="blurdiv"></div>
                <video autoPlay muted loop className="reelvid">
                  <source src= {item.infvid} />
                </video>
                <div className="istatmc">
                  <div className="isr1">
                    <img className="insicon" src="/instagram.png"/>
                  </div>
                   <div className="isr1txt">  <LinearGradient
                       className="downtxt"
                       gradient={["to left", "#17acff ,#ff68f0"]}
                     >{item.infname}</LinearGradient></div>
                   <Counter end={item.infreach} suffix={item.infsuff}/>
                </div>
              </motion.div></a>
            ))
          }
        </motion.div>
      </div>
      <div className="influconwrap">
        <div className="inhcon">
          <div className="infheadingarrow">
            <Lottie animationData={arrow} className="arrowlot"/>
          </div>
          <div className="infheading">OUR BRANDS</div>

        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="influcon"
          style={{ scale: vidscale }}>
          {
            bd.map((item,index)=>(
              <motion.div className="brandcard" variants={convar} key={item.bid || index}>
                <img className="bimg" src={item.bimg}/>
              </motion.div>
              
            ))
          }      
        </motion.div>
        <Stats/>
      </div>
      <motion.div
        ref={sectionRef2}
        className="typercon2"
        style={{ scale: sectionScale2 }}
        variants={convar}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div
          className="hiwmc"
          variants={convar}
          initial="hidden"
          whileInView="visible"
        >
          <CustomTyper text={"HOW"} />
          <CustomTyper text={"IT"} />
          <CustomTyper text={"WORKS"} />
        </motion.div>
        <motion.div variants={convar} className="hwccon">
          <motion.div variants={lettervar} className="hwc1">
            <Lottie
              animationData={Search}
              autoPlay={true}
              loop={true}
              initialSegment={[20, 50]}
              className="glassicon"
            />

            <motion.div className="hwctxt" variants={lettervar}>
              Brands find perfect influencers. Influencers showcase their
              talent.
            </motion.div>
          </motion.div>
          <motion.div variants={lettervar} className="hwc1">
            {" "}
            <Lottie
              animationData={msgicon}
              autoPlay={true}
              className="msgicon"
              loop={true}
              initialSegment={[20, 100]}
            />
            <motion.div className="hwctxt" variants={lettervar}>
              Initiate conversations, negotiate terms, and build
              relationships.
            </motion.div>
          </motion.div>
          <motion.div variants={lettervar} className="hwc1">
            {" "}
            <Lottie
              animationData={shakehand}
              autoPlay={true}
              className="shakeicon"
              loop={true}
              initialSegment={[55, 140]}
            />
            <motion.div className="hwctxt" variants={lettervar}>
              Launch campaigns, manage contracts, and achieve marketing goals.
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="typercon"
        variants={convar}
        initial="hidden"
        whileInView="visible"
        style={{ scale: sg }}
      >
        <motion.div variants={lettervar} className="wcu-con">
          <CustomTyper className="wcu" text={"WHY"} />
          <CustomTyper className="wcu" text={"CHOOSE"} />
          <CustomTyper className="wcu" text={"US"} />
        </motion.div>
        <div className="reslotcon">
          <motion.div className="lottiecon" variants={lettervar}>
            <Lottie
              animationData={marketing}
              autoPlay={true}
              loop={true}
              className="h3lot"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="reslotv2"
          >
            <motion.div
              className="wcuhead"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Discover the smarter way to market through influencers
            </motion.div>
            <motion.h4 className="wcuh">
              {" "}
              <LinearGradient
                className="hmti"
                gradient={["to left", "#17acff ,#ff68f0"]}
              >
                ✓
              </LinearGradient>
              <u>Reach the Right Audience</u>
            </motion.h4>
            <motion.div className="wcutg" variants={lettervar}>
              Grow your brand organically through high-performing, authentic
              influencer-generated content.
            </motion.div>
            <motion.h4 className="wcuh">
              <LinearGradient
                className="hmti"
                gradient={["to left", "#17acff ,#ff68f0"]}
              >
                ✓
              </LinearGradient>
              <u>Grow Your Business Faster</u>
            </motion.h4>
            <motion.div className="wcutg" variants={lettervar}>
              Scale your brand with data-driven campaigns that convert. From
              startups to enterprises, we support every stage of growth.
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    
    </main>
      <Footer/>
      </>
  )
}