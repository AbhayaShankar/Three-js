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

  // state for file uplaod:
  const [file, setFile] = useState("");

  // State for AI prompt:
  const [prompt, setPrompt] = useState("");

  // state for if the AI is currently geenrating images or not.
  const [generatingImg, setGeneratingImg] = useState(false);

  // State specifying which tab is curreblty active,  is it colorPicker, Aipicker or filePicker
  const [activeEditorTab, setActiveEditorTab] = useState("");

  // State
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show Tab Content depending upon the activeTab (Tab when clicked.)
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            setGeneratingImg={setGeneratingImg}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      // call an api to our backend to generate an AI image...
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;

      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
    }

    // after setting the state, activeFilterTab to be updated to update the UI.

    setActiveFilterTab((prev) => {
      return {
        ...prev,
        [tabName]: !prev[tabName],
      };
    });
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

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
                    <Tab
                      key={tab.name}
                      tab={tab}
                      handleClick={() => setActiveEditorTab(tab.name)}
                    />
                  );
                })}
                {generateTabContent()}
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
              customStyles="w-fit px-4 py-2.5 font-bold text-sm tracking-[1px]"
              title="Go Back"
              handleClick={() => (state.intro = true)}
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
