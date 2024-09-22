import { CUSINES } from "../constants"
import {motion} from "framer-motion"

const containerVariants = {
    hidden: { opacity:0 },
    show: { opacity: 1,
        transition:{ staggerChildren: 1,

        }
    }
}

const ItemVairants = {
    hidden: { opacity: 0, y: 20},
    show: { opacity: 1, y: 0,
        transition: {
            duration: 0.4,
            
        }
    }
}

const Expertise = () => {
  return (
    <section id="expertise">
        <motion.h2 initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay:0.3}} className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">Our Expertise</motion.h2>
        <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{once: false}} className="container mx-auto px-4 ">
            {CUSINES.map ((cusine, index) =>(
                <motion.div key={index} className="flex items-center border-b-4
                border-dotted border-neutral-700-40 py-2 " variants={ItemVairants} viewport={{once: false}}>
                    <div className="flex-shrink-0 pr-8 text-2xl">
                        {cusine.number}
                    </div>
                    <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay:0.3}} className="w-1/3 flex-shrinl-0 ">
                    <img src={cusine.image} alt={cusine.title} className="h-auto rounded-3xl " />
                    </motion.div>

                    <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay:0.3}} className="pl-3">
                        <h3  className="text-2xl uppercase tracking-tighter text-rose-300 lg-tracking tai ">
                            {cusine.title}

                        </h3>
                        <motion.p initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay:0.3}} className="mt-4 text-lg traceimg">
                            {cusine.description}
                        </motion.p>
                    </motion.div>

                </motion.div>
                    
            ))}
        </motion.div>
    </section>
  )
}

export default Expertise