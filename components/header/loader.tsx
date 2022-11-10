
import React from 'react'
import styles from './loader.module.scss'
import {motion} from 'framer-motion'

const loaderVariants = {
     animationOne: {
          x: [-20, 20], // it will start up and down
          y: [0, -30], // it will start from 0 point to up direction
     transition: {
          x: {
               yoyo: Infinity, // it will repeat the x[-20, 20] again
          duration: 0.5
          },
          y: {
               yoyo: Infinity,
               duration: 0.25,
               ease: 'easeOut'
          }
     }
     }
}

const loader = () => {
   
  return (
    <>
     <motion.div className={styles.loader}
      variants={loaderVariants} animate="animationOne"
     >
     </motion.div> 
    </>
  )
}

export default loader
