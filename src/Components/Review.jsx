
import { REVIEW } from '../constants'
import xaviour from "../assets/salah.jpg"
import customer1 from "../assets/review1.webp"
import customer2 from "../assets/review2.webp"
import customer3 from "../assets/kalilinux.jpeg"
import customer4 from "../assets/route-fifty-lead-image.jpeg"
import {motion} from "framer-motion"

const containerVariants ={
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8
        }
    }

}

const ItemVairants ={
    hidden: {opacity:0, y:20},
    show: { opacity:1, y: 0, transition: {
        duration: 0.5
    }}
}


const Review = () => {
  return (
    <section className='container mx-auto mb-8 mt-12' id='review'>
        <motion.div initial="hidden" whileInView="show" viewport={{once: false}} variants={containerVariants} className='flex flex-col'>
            <motion.p variants={ItemVairants} viewport={{once: false}} transition={{duration:0.8, delay:0.4}} className='mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[2.5rem]'>
                {REVIEW.content}
            </motion.p>
            <motion.div variants={ItemVairants} className='flex items-center justify-center gap-6 '>
                <img src={xaviour} alt={REVIEW.name} width={80} height={80}  className='rounded-full border '/>

                <div className='tracking-tighter'>
                        <h6>{REVIEW.name}</h6>
                    <p className='text-sm text-neutral-500 '>
                        {REVIEW.profession}
                    </p>
                </div>
            </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" variants={ItemVairants} viewport={{once: false}} className='mt-14 flex flex-col items-center justify-center gap-2 md:flex-row '>

            {[customer1, customer2, customer3, customer4].map((customer, index) =>(
                <motion.img variants={ItemVairants} key={index} src={customer} alt={customer} className='h-[300px] w-[200px] rounded-r-3xl rounded-tl-3xl object-cover shadow-lg shadow-blue-500/50' />
            ))}
        </motion.div>
    </section>
  )
}

export default Review