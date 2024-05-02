import { motion } from "framer-motion";
import { fadeIn } from "../data/Variants";
import Lottie from "lottie-react";
import Experience from "../assets/Experience.json";
import { Bio } from '../data/constants'

function WorkExp() {
  return (
    <div>
        <div id="about" className="bg-blue-50 lg:pl-[300px] h-auto">
            <div className="  lg:py-[60px] py-[50px] max-w-[1340px] w-[88%] mx-auto">
              {/* <div>
                <p className="text-lg font-thick pb-[10px]"></p>
              </div> */}
              <div>
                <motion.p
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="text-3xl font-bold pt-[40px] sm:pt-0 sm: pb-[40px]"
                >
                  - Experience
                </motion.p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-around mx-auto ">
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <Lottie style={{ width: 200 }} animationData={Experience} />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className=" max-w-[450px] w-[100%] shadow-xl p-[30px] bg-white rounded-md hover:transform hover:-translate-y-5 hover:transition-all hover:ease duration-300 "
                >
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <p className="pb-[1px] text-medium italic font-semibold text-yellow-600">
                        {Bio.moj} {Bio.yoj} - Present
                      </p>
                      <p className="text-xl pb-[20px] font-bold text-blue-950">
                        {Bio.roles}
                      </p>
                    </div>
                    <div className="text-xl font-semibold text-gray-600">
                      <p>- {Bio.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-normal text-base pt-[20px]">
                    {Bio.ExperienceDesc.map((exp, i) => {
                      return (
                          <li key={i}>{exp}</li>
                      );
                    })}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default WorkExp