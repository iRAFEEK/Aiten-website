import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const highlights = [
    { icon: '◇', title: 'Yale Young Global Scholars', desc: 'Full Scholarship Recipient 2024' },
    { icon: '✦', title: 'Silicon Valley Explorer', desc: 'Tech Industry Immersion' },
    { icon: '○', title: 'Jewelry Entrepreneur', desc: 'Founder & Designer' }
  ]

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-col"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <div className="placeholder-inner">
                  <span className="placeholder-icon">✦</span>
                  <span className="placeholder-label">Portrait</span>
                </div>
              </div>
              <div className="image-accent-line"></div>
              <div className="image-accent-dot"></div>
            </div>
          </motion.div>

          <motion.div 
            className="about-content-col"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-subtitle">About Me</span>
            <h2 className="about-title">
              Where curiosity meets
              <span className="title-accent"> ambition</span>
            </h2>
            
            <div className="about-text-wrapper">
              <p className="about-text">
                I'm Aiten, a high school sophomore with an insatiable curiosity for technology 
                and a deep love for creative expression. My journey has taken me from coding 
                my first programs to walking through the innovation hubs of Silicon Valley.
              </p>
              <p className="about-text">
                When I'm not exploring the world of computer science, you'll find me designing 
                elegant jewelry pieces for my business, performing on stage, or creating music. 
                I believe that the intersection of technology and art is where magic happens.
              </p>
              <p className="about-text">
                Being selected as a Yale Young Global Scholar on a full scholarship was a 
                defining moment—it showed me that dreams, when pursued with dedication, 
                become reality.
              </p>
            </div>

            <div className="about-signature">
              <span className="signature-text">Aiten</span>
              <span className="signature-line"></span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="highlights-section"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <motion.div 
                key={i} 
                className="highlight-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              >
                <span className="highlight-icon">{item.icon}</span>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
