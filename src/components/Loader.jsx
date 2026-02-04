import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    exit: (i) => ({
      y: -100,
      opacity: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  const name = "AITEN"

  return (
    <motion.div 
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="loader-content">
        <div className="loader-text">
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="loader-letter"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div 
          className="loader-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
        <motion.p 
          className="loader-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Tech · Business · Arts
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
