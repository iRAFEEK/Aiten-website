import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' }
  ]

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Let's Connect</span>
          <h2 className="contact-title">
            Have an idea or
            <span className="title-accent"> opportunity?</span>
            <br />Let's talk
          </h2>
          
          <motion.p 
            className="contact-text"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Whether it's a collaboration, a project idea, or just wanting to say hello—
            I'd love to hear from you. Let's create something beautiful together.
          </motion.p>

          <motion.a 
            href="mailto:hello@aiten.com" 
            className="contact-email"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            hello@aiten.com
          </motion.a>

          <motion.div 
            className="contact-cta"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="mailto:hello@aiten.com" className="magnetic-btn">
              <span>Say Hello</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footer-content">
            <div className="footer-left">
              <span className="footer-name">Aiten</span>
              <span className="footer-title">Dreamer & Creator</span>
            </div>
            
            <nav className="footer-social">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="footer-right">
              <span className="footer-copyright">© 2024</span>
              <span className="footer-tagline">Dream · Create · Inspire</span>
            </div>
          </div>
          
          <div className="footer-bottom">
            <span className="footer-badge">YYGS '24 Scholar</span>
            <span className="footer-divider">✦</span>
            <span className="footer-badge">Entrepreneur</span>
            <span className="footer-divider">✦</span>
            <span className="footer-badge">Artist</span>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}

export default Contact
