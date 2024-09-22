import {motion} from "framer-motion"
const CourseCard = ({project}) => {
  return (
    <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.8, delay:0.4}} className="shadow-lg shadow-blue-500/50 rounded-3xl" >
        <img src={project.image} alt={project.title} className="rounded-3xl p-2"/>

        <div className='p-4'>
            <motion.h3 transition={{duration:0.8, delay:5}} className='mb-2 text-2xl font-bold tracking-tighter'>
                {project.title}
            </motion.h3>
            <p className='text-sm'>{project.description}</p>
        </div>
    </motion.div>
  )
}

export default CourseCard