import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Work.css'

const Work = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const experiences = [
    {
      id: 1,
      title: 'Yale Young Global Scholars',
      category: 'Academic Achievement',
      year: '2024',
      description: 'Selected for the prestigious YYGS program with a full scholarship, joining exceptional students from around the world to explore global challenges and leadership.',
      image: 'YYGS'
    },
    {
      id: 2,
      title: 'Silicon Valley Visit',
      category: 'Tech Exploration',
      year: '2024',
      description: 'Explored the heart of innovation—visiting tech giants, startup incubators, and experiencing firsthand the culture that drives technological revolution.',
      image: 'SV'
    },
    {
      id: 3,
      title: 'Jewelry Business',
      category: 'Entrepreneurship',
      year: '2023 - Present',
      description: 'Founded and run my own jewelry business, designing elegant pieces that blend classic aesthetics with modern sensibility. Each piece tells a story.',
      image: 'JWL'
    }
  ]

  return (
    <section id="journey" className="section work" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="work-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Experiences & Ventures</h2>
        </motion.div>

        <div className="experiences-grid">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="experience-image">
                <div className="image-placeholder">
                  <span className="placeholder-abbr">{exp.image}</span>
                  <span className="placeholder-hint">Add Photo</span>
                </div>
              </div>
              <div className="experience-content">
                <div className="experience-meta">
                  <span className="experience-category">{exp.category}</span>
                  <span className="experience-year">{exp.year}</span>
                </div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.div 
          className="gallery-section"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="gallery-title">Gallery</h3>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="gallery-item">
                <div className="gallery-placeholder">
                  <span className="gallery-number">0{num}</span>
                  <span className="gallery-hint">Photo</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
