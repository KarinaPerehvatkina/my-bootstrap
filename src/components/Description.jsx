import React from 'react'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <div>
      <div>
        <h1 className='col-md-8 offset-md-2'>Описание</h1>
      </div>

        <motion.img
        width={'5%'}
        src='/img/icon.png'
        alt=''

        animate={{rotate:360}}
        transition={{
          delay:1,
          duration:5,
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType: 'reverse',
        }}
        />

        <motion.img
        width={'5%'}
        src='/img/icon.png'
        alt=''

        animate={{rotate:360}}
        transition={{
          duration:5,
        }}

        whileHover={{
          scale:2,
          transition:{
            duration:2
          }
        }}  
        />

        <motion.img drag='x'
        width={'5%'}
        src='/img/icon.png'
        alt=''

        animate={{rotate:360}}
        transition={{
          duration:5,
        }}

        whileDrag={{
          scale:1.5,          
        }}  
        />
    </div>
    
  )
}

export default Description