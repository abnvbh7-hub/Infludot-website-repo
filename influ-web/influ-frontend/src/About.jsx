import NavBar from "../comps/Nav.jsx";
import Footer from "../comps/Footer.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef,useEffect, useState} from "react";
import { LinearGradient } from "react-text-gradients";
import CustomTyper from "../comps/CustomTyper.jsx"; 
import Typer from "../comps/Typewriter.jsx";
import testimonials from "../comps/lotfiles/testimonials.json";
import ChatBlock from "../comps/Chatblock.jsx";
import chatlottie from "../comps/lotfiles/chatlottie.json";
import Lottie from "lottie-react";

export default function About() {

  const sectionRef1 = useRef(null);
  const [chat, setChat] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef1,
    offset: ["start end", "end start"],
  });

  const scalex = useTransform(scrollYProgress, [0,0.5, 1], [1, 1,0.7]);
  const scaley = useTransform(scrollYProgress, [0,0.8, 1], [0.6, 1,0.9]);

  // Container animation
  const convar = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Child animation
  const lettervar = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
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
        
        <motion.div className="topcon">
        <Typer text={"ABOUT"} className="aboutus" />
        <Typer text={"US"} className="aboutus" />
          </motion.div>
        <motion.div
          ref={sectionRef1}
          className="typercon3"
          style={{ scale:scalex }}
          variants={convar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="customtpc" variants={lettervar}>
            <CustomTyper text={"Bridging"} />
            <CustomTyper text={"Brands"} />
            <CustomTyper text={"&"} />
            <CustomTyper text={"Influencers"} />
          </motion.div>

          <motion.div className="hm2p" variants={lettervar}>

            <motion.div className="tagconmini2" variants={convar}>
              <motion.div className="taglinemini2" variants={lettervar}>
                InfluDot is a dynamic influencer marketing platform designed to
                connect brands with the right creators. Our mission is to make
                campaign management easier, more impactful, and accessible for
                businesses of all sizes. With a focus on trust, efficiency, and
                real engagement, we simplify the journey from outreach to
                results.
              </motion.div>
            </motion.div>

            <motion.div className="tagcon" variants={convar}>
              <div className="tl2con">
                {[
                  "Connect seamlessly with a curated network of verified influencers across multiple niches.",
                  "Easily launch, manage, and track your influencer campaigns from one powerful dashboard.",
                  "Grow your brand organically through high-performing, authentic influencer-generated content.",
                  "Start your campaigns with zero upfront costs — pay only when you collaborate.",
                ].map((text, index) => (
                  <motion.div key={index} className="tagline2" variants={lettervar}>
                    <LinearGradient
                      className="hmti"
                      gradient={["to left", "#17acff ,#ff68f0"]}
                    >
                      ✓
                    </LinearGradient>{" "}
                    {text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            

          </motion.div>

        </motion.div>
        <motion.div className="typercon3x" style={{scale:scaley}}>
          <motion.div className="ftcon"> <LinearGradient
            className="ftext"
            gradient={["to left", "#17acff ,#ff68f0"]}
          >
            OUR TEAM
          </LinearGradient></motion.div>
          <motion.div className="founder-mc">
            <motion.div className="founder-card">
              <img className="founder-img" src="/ganesh.jpg" alt="Founder" />
              <div className="finfo-con">
                <div className="fih">Allada Uma Ganesh</div>
                <div className="fih2">Founder & CEO</div>
                <div className="fih2">Phone: +91 9059910137</div>
              </div>
            </motion.div>
            <motion.div className="founder-card">
              <img className="founder-img" src="/karthik.jpg" alt="Founder" />
              <div className="finfo-con">
                <div className="fih">Karthik Thammisetty</div>
                <div className="fih2">Co-Founder</div>
                 <div className="fih2">Phone: +91 8809036369</div>
              </div>
            </motion.div>
            <motion.div className="founder-card">
              <img className="founder-img" src="/jayna.jpg" alt="Founder" />
              <div className="finfo-con">
                <div className="fih">Jayna</div>
                <div className="fih2">Co-Founder</div>
                 <div className="fih2">Phone: +91 6301743573</div>
              </div>
            </motion.div>
            <motion.div className="founder-card">
              <img className="founder-img" src="/allada-kumari.jpg" alt="Founder" />
              <div className="finfo-con">
                <div className="fih">Allada Kumari</div>
                <div className="fih2">Director</div>
                <div className="fih2">Phone: +91 8341229667</div>
              </div>
            </motion.div>      <motion.div className="founder-card">
              <img className="founder-img" src="/naga-shiva.jpg" alt="Founder" />
              <div className="finfo-con">
                <div className="fih">Naga Shiva</div>
                <div className="fih2">Director</div>
                <div className="fih2">Phone: +91 8328072893</div>
              </div>
            </motion.div> 
          </motion.div>

        </motion.div>

        <div className="typercon3x">
          <motion.div className="ftcon"> <LinearGradient
            className="ftext"
            gradient={["to left", "#17acff ,#ff68f0"]}
          >
            TESTIMONIALS
          </LinearGradient></motion.div>
          <div className="testimc">
            <div className="testimc2">What our users say !</div>
          </div>

          <Lottie
            animationData={testimonials}
            className="testimicon"/>
          <motion.div className="itestcon" variants={convar} initial="hidden" whileInView="visible">


            <motion.div className="itest" variants={lettervar}>
              “InfluDot makes it easy for creators like me to find real, paid collaborations without the hassle. I’ve worked with amazing brands and built long-term partnerships — all in one platform!”
            </motion.div>
            <motion.div className="itest" variants={lettervar}>
              “InfluDot made it effortless to find creators who truly align with our brand voice. Our campaigns now feel more authentic and deliver better engagement.”
            </motion.div>
            <motion.div className="itest" variants={lettervar}>
              “InfluDot made it effortless to find creators who truly align with our brand voice. Our campaigns now feel more authentic and deliver better engagement.”
            </motion.div>
            <motion.div className="itest" variants={lettervar}>“As an influencer, I’ve never had such a smooth experience. InfluDot helps me connect with the right brands and manage everything in one place.”
            </motion.div>



          
          </motion.div>        
        
        </div>
        
      </main>

      <Footer />
    </>
  );
}
