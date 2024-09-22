import {COURSES} from "../constants"
import CourseCard from "./CourseCard"
import {motion} from "framer-motion"

const Course = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once: false}} transition={{duration:0.6, delay:0.3}} className="mb-2 text-center text-3xl tracking-tighter lg:text-4xl">
            Our Courses
        </motion.h2>
        <div  className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {COURSES.map((project, index) =>(
                <CourseCard key={index} project={project}/>
            ))}
        </div>
    </section>
  )
}

export default Course