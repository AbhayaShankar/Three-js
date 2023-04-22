import { motion, AnimatePresence } from "framer-motion";
import { snapshot, useSnapshot } from "valtio";
import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import CustomButton from "../components/CustomButton";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&#39;S <br className="lg:block hidden" /> DO IT !
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your own unique and Tshirt design with our brand-new 3-D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own creative style
              </p>

              <CustomButton />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
