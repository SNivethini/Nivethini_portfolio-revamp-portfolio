import { motion } from "framer-motion";
import { fadeIn } from "../data/Variants";
import Lottie from "lottie-react";
import Skill from "../assets/Skill.json";

function Skills() {
  return (
    <div>
        <div
            id="skill"
            className=" w-[88%] max-w-[1340px]  lg:pl-[300px] pt-[60px] lg:py-[60px] h-auto mx-auto   text-blue-950"
          >
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-2xl pl-[30px] "
            >
              {" "}
              SKILLS and <span className="font-bold text-blue-700">TOOLS</span>
            </motion.p>
            <div className="flex flex-col items-center md:flex-row md:justify-around md:items-center lg:pl-[50px] py-[40px] mb-[10px] ">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className=""
              >
                <Lottie style={{ width: 250 }} animationData={Skill} />
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="mt-[60px] max-w-[300px] w-[100%]  md:mt-[30px] lg:w-[50%] md:w-[50%] h-[200px] text-blue-950  relative "
              >
                <p className="absolute top-[10px] left-[10px] font-extrabold text-2xl">
                  HTML
                </p>
                <p className="absolute left-[60px]  top-[104px]  font-bold text-lg">
                  CSS
                </p>
                <p className="absolute sm:left-[140px] left-[100px] top-[-35px] font-bold text-2xl">
                  JAVASCRIPT
                </p>
                <p className="absolute left-[130px]  top-[90px] text-medium font-medium">
                  TailwindCSS
                </p>
                <p className="absolute md:left-[260px] left-[190px]  top-[60px] font-extrabold text-xl">
                  ReactJS
                </p>
                <p className="absolute top-[130px]  left-[80px] text-lg font-bold">
                  GIT
                </p>
                <p className="absolute left-[180px]  top-[40px]  text-lg font-bold">
                  npm
                </p>
                <p className=" absolute left-[200px] md:left-[240px] text-lg font-bold">
                  Babel
                </p>
                <p className=" absolute top-[100px] md:left-[290px] left-[220px] text-medium font-medium">
                  SQL
                </p>
                <p className="absolute left-[150px]  top-[170px] text-medium font-medium">
                  API
                </p>
                <p className="absolute left-[140px]  top-[130px] text-medium font-medium">
                  Styled components
                </p>
                <p className="absolute left-[60px]  top-[170px] text-medium font-medium">
                  SASS
                </p>
                <p className="absolute left-[20px]  top-[130px] text-lg font-bold">
                  JSX
                </p>
                <p className="absolute left-[120px]  top-[20px]">splunk</p>
                <p className="absolute left-[60px] top-[-15px] ">UNIX</p>
                <p className="absolute left-[35px]  top-[59px] text-lg font-bold">
                  Visual studio
                </p>
              </motion.div>
            </div>
          </div>
    </div>
  )
}

export default Skills