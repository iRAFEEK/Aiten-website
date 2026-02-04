import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPercent = (clientX / innerWidth - 0.5) * 20
      const yPercent = (clientY / innerHeight - 0.5) * 20
      
      heroRef.current.style.setProperty('--mouse-x', `${xPercent}px`)
      heroRef.current.style.setProperty('--mouse-y', `${yPercent}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-gradient"></div>
        <div className="hero-sparkles">
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={i}
              className="sparkle"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{ 
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2 + i * 0.5, 
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-intro">
          <motion.p 
            className="hero-label"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Tech Enthusiast · Entrepreneur · Artist
          </motion.p>
        </div>

        <h1 className="hero-title">
          <div className="title-line">
            <motion.span
              custom={0}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              Hello, I'm
            </motion.span>
          </div>
          <div className="title-line accent">
            <motion.span
              custom={1}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              Aiten
            </motion.span>
          </div>
          <div className="title-line subtitle-line">
            <motion.span
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="hero-subtitle-text"
            >
              Dreamer & Creator
            </motion.span>
          </div>
        </h1>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          A high school student passionate about computer science, jewelry design, 
          music, and theater. Building dreams one line of code and one pearl at a time.
        </motion.p>

        <motion.div 
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="hero-scroll">
            <span className="scroll-text">Discover</span>
            <div className="scroll-line">
              <motion.div 
                className="scroll-dot"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
          
          <div className="hero-badge">
            <div className="badge-icon">✦</div>
            <span>YYGS 2024 Scholar</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-placeholder"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="image-frame">
          <div className="placeholder-content">
            <span className="placeholder-icon">✦</span>
            <span className="placeholder-text">Photo</span>
          </div>
        </div>
        <div className="image-decoration"></div>
      </motion.div>
    </section>
  )
}

export default Hero
