import NavBar from "../comps/Nav.jsx";
import Footer from "../comps/Footer.jsx";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { LinearGradient } from "react-text-gradients";
import shakehand from "../comps/lotfiles/shakehand.json";
import ChatBlock from "../comps/Chatblock.jsx";
import chatlottie from "../comps/lotfiles/chatlottie.json";
import {useState} from "react";
import Brands from "../comps/lotfiles/Brands.json";
import Influencers from "../comps/lotfiles/Influencers.json";
import Campaigns from "../comps/lotfiles/Campaigns.json";
import Reach from "../comps/lotfiles/Reach.json";
import data from "../comps/lotfiles/data.json"

// Custom Lottie animations
/*import rocketAnim from "../comps/lotfiles/rocket.json";
import graphAnim from "../comps/lotfiles/graph.json";
import networkAnim from "../comps/lotfiles/network.json";
import chatAnim from "../comps/lotfiles/chat.json";
import campaignAnim from "../comps/lotfiles/campaign.json";
import shieldAnim from "../comps/lotfiles/shield.json";*/

const features = [
  {
    title: "Skyrocket Your Reach",
    desc: "Amplify your influence with smart tools designed to expand your audience effortlessly.",
    /*anim: rocketAnim,*/
    anim:Reach,
    gradient: ["#ff6ec4", "#7873f5"]
  },
  {
    title: "Insightful Analytics",
    desc: "Track campaigns, measure growth, and optimize strategies with deep insights.",
      anim:data,
    /*anim: graphAnim,*/
    gradient: ["#17acff", "#ff68f0"]
  },
  {
    title: "Seamless Connections",
    desc: "Connect with brands and creators who truly match your style and goals.",
    /*anim: networkAnim,*/
      anim:Influencers,
    gradient: ["#ff9a6c", "#ffc36c"]
  },
  {
    title: "Interactive Collaboration",
    desc: "Chat, share content, and co-create campaigns in a fully integrated environment.",
    /*anim: chatAnim,*/
      anim:Brands,
    gradient: ["#6c197c", "#c6238d"]
  },
  {
    title: "Launch Campaigns Fast",
    desc: "Set up, deploy, and monitor campaigns in minutes with intuitive tools.",
    /*anim: campaignAnim,*/
      anim:Campaigns,
    gradient: ["#ff68f0", "#17acff"]
  },
  {
    title: "Safe & Trusted",
    desc: "Operate with confidence with secure transactions and verified partners.",
    /*anim: shieldAnim,*/
      anim:shakehand,
    gradient: ["#17ffb0", "#2a9d8f"]
  },
];

export default function Features() {

  const[chat,setChat] = useState(false)
  return (
    <>
      <NavBar />
      <main className="features-page">
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
        <motion.div
          className="features-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="features-header">
            <LinearGradient
              className="features-title"
              gradient={["to right", "#ff6ec4,#7873f5"]}
            >
              EXPLORE OUR CREATIVE FEATURES
            </LinearGradient>
            <p className="features-sub">
              Tools and experiences designed to help creators shine and brands thrive.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                  boxShadow: `0 15px 45px rgba(0,0,0,0.35)`,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="feature-lottie">
                  <Lottie animationData={feature.anim} loop={true} />
                </div>
                <h3
                  className="feature-heading"
                  style={{
                    background: `linear-gradient(45deg, ${feature.gradient[0]}, ${feature.gradient[1]})`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {feature.title}
                </h3>
                <p className="feature-desc">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
