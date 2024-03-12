import React, {useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const ref = useRef(null)
const isInview = useInView

interface Props{
  children: JSX.Element,
  width: "fit-content"
}

const Reveal = ({children, width= "fit-content"}: Props) => {
  return (
    <div style={{position:'relative', width, overflow: 'hidden'}}>
        <motion.div
        variants={{
            hidden:{opacity: 0, y: 75},
            visible: {opacity: 1, y: 0}
        }}
        initial= "hidden"
        animate= "visible"
        transition={{duration: 1, delay: 0.25}}
        >
        {children}
        </motion.div>
      
    </div>
  )
}

export default Reveal
