import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Passions.css'

const Passions = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const passions = [
    {
      id: 1,
      title: 'Computer Science',
      icon: '⟨/⟩',
      description: 'From algorithms to AI, I love exploring how code can solve real-world problems and create beautiful experiences.',
      details: ['Web Development', 'Problem Solving', 'Tech Innovation']
    },
    {
      id: 2,
      title: 'Music',
      icon: '♪',
      description: 'Music is my language of emotion. Whether performing or composing, it allows me to express what words cannot.',
      details: ['Performance', 'Composition', 'Expression']
    },
    {
      id: 3,
      title: 'Acting & Theater',
      icon: '◐',
      description: 'The stage is where I transform. Acting teaches empathy, presence, and the art of storytelling.',
      details: ['Stage Performance', 'Character Study', 'Storytelling']
    },
    {
      id: 4,
      title: 'Jewelry Design',
      icon: '◇',
      description: 'Creating wearable art that combines elegance with meaning. Each piece is a small treasure with its own story.',
      details: ['Design', 'Craftsmanship', 'Business']
    }
  ]

  return (
    <section id="passions" className="section passions" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="passions-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">What Drives Me</span>
          <h2 className="section-title">My Passions</h2>
        </motion.div>

        <div className="passions-grid">
          {passions.map((passion, i) => (
            <motion.div
              key={passion.id}
              className="passion-card"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="passion-header">
                <span className="passion-icon">{passion.icon}</span>
                <span className="passion-number">0{i + 1}</span>
              </div>
              
              <h3 className="passion-title">{passion.title}</h3>
              <p className="passion-description">{passion.description}</p>
              
              <ul className="passion-details">
                {passion.details.map((detail, j) => (
                  <li key={j} className="passion-detail">{detail}</li>
                ))}
              </ul>

              <div className="passion-image-placeholder">
                <span className="passion-placeholder-icon">✦</span>
                <span className="passion-placeholder-text">Photo</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          className="quote-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <blockquote className="quote">
            <span className="quote-mark">"</span>
            <p className="quote-text">
              The future belongs to those who believe in the beauty of their dreams.
            </p>
            <cite className="quote-author">— Eleanor Roosevelt</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default Passions

