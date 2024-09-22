import { SOCIAL_MEDIA_LINKS } from "../constants"
import { motion } from "framer-motion" 

const Footer = () => {
  return (
   <div className="mb-8 mt-20 ">
       <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay:0.4}} className="flex items-center justify-center gap-8 ">
            {SOCIAL_MEDIA_LINKS.map((link, index ) =>(
                <a key={index} href={link.href} target="-blank" rel="nooper noreferrer" className="shadow-lg shadow-blue-500/50">
                    {link.icon}
                </a>
            ))}
       </motion.div>
       <motion.p initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay:0.4}} className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy;compileTab. All rights reserved
       </motion.p>
   </div>
  )
}

export default Footer