import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [hideNav, setHideNav] = useState(false);
  const nav = useNavigate();

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 50) {
        setHideNav(true);   // Hide if not at top
      } else {
        setHideNav(false);  // Show only near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Framer Motion variants for navbar sliding
  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hidden: {
      y: -120, // adjust based on navbar height in your CSS
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Framer Motion variants for nav items (optional)
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="navbar-mc" // use your CSS
      variants={navVariants}
      animate={hideNav ? "hidden" : "visible"}
    >
      <img className="nav-logo" src="/influ-dot-logo.png" />

      <motion.div
        className="nav-itemcon"
        initial="initial"
        animate="animate"
      >
        {["Home", "About", "Features", "Contact"].map((item) => (
          <motion.div
            key={item}
            className="nav-item"
            variants={itemVariants}
            onClick={() =>
              nav(
                item.toLowerCase() === "home"
                  ? "/"
                  : `/${item.toLowerCase()}`
              )
            }
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      <div className='nav-login'>
        <LinearGradient
          className="navltxtn"
          gradient={['to left', '#17acff ,#ff68f0']}
        >
          <a href="https://infludot.com/web/" target="_blank">
          LOGIN</a>
        </LinearGradient>
      </div>
    </motion.div>
  );
}
