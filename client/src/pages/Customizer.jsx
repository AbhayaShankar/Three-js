import { useState, useEffect } from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { AnimatePresence, motion } from "framer-motion";
import { download } from "../assets/download.png";
import config from "../config/config";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, DecalTypes, FilterTabs } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

const Customizer = () => {
  return <div>Customizer</div>;
};

export default Customizer;
