import { CONTACT } from "../constants"
import { motion } from "framer-motion"


const ContactSection = () => {
  return (
    <section className="container mx-auto py-16" id="contact">
        <motion.h2 initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay: 0.4}} className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</motion.h2>
        <div className="text-neutral-400">
            {CONTACT.map((detail) =>(
                <motion.p initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay:0.4}} key={detail.key} className="my-20 border-b-2 border-dotted border-neutral-700pb-12 text-center text-2xl tracking-tighter lg:text-3xl shadow-lg shadow-blue-400/50">
                    {detail.value}
                </motion.p>
            ))}
        </div>
    </section>
  )
}

export default ContactSection