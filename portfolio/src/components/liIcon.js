import React from 'react'
import { motion, useScroll} from 'framer-motion'

const LiIcon = ({reference}) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    );
  return (
    <figer className='absolute left-0 stroke-dark'>
        <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className='stroke-primary stroke-1 fill-none'/>
            <motion.circle cx="75" cy="50" r="20" className='fill-light stroke-[5px]'
            style={{
                pathLength: scrollYProgress,
            }}
            />
            <circle cx="75" cy="50" r="10" className='animate-pulse fill-primary stroke-1'/>
        </svg>
    </figer>
  )
}

export default LiIcon