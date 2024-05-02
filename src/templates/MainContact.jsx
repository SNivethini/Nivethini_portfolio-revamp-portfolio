/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Contact } from "./Contact";
import { fadeIn } from "../data/Variants";
import Lottie from "lottie-react";
import Cont from "../assets/Cont.json";

import { Bio } from "../data/constants";

function MainContact() {
  return (
    <div>
        <div
          id="contact"
          className="pl-[30px] lg:pl-[300px]  text-blue-950 pt-[60px] pb-[30px] lg:py-[60px] bg-blue-50 pr-[30px]"
        >
          <div className="flex-col items-center justify-between w-[88%] max-w-[1340px] mx-auto flex md:flex-row  ">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="max-w-[550px]"
            >
              <p className="text-medium sm:text-lg font-thick pb-[10px]">
                - LET'S CONNECT
              </p>
              <p className="text-lg md:text-3xl font-bold md:pb-[40px] flex items-center">
                Get in touch{" "}
                <span>
                  <Lottie style={{ width: 200 }} animationData={Cont} />
                </span>
              </p>
              <p>{Bio.contactDesc}</p>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="max-w-[400px] w-[100%] md:w-[50%] sm:flex sm:justify-center pt-[20px]"
            >
              <Contact />
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default MainContact