/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { AnimatePresence, motion } from "framer-motion";
import { download } from "../assets";
import config from "../config/config";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, DecalTypes, FilterTabs } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  Tab,
  FilePicker,
  CustomButton,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => {
                  return (
                    <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            key="custom"
            className="absolute top-5 right-5 z-10"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              customStyles={""}
              title="Go Back"
              handleClick={() => (state.intro = true)}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
