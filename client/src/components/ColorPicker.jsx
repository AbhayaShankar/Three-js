import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-[10px]">
      <SketchPicker
        color={snap.color}
        onChange={(color) => (state.color = color.hex)}
        disableAlpha
        presetColors={[
          "#B47AEA",
          "#639FAB",
          "#9649CB",
          "#84A59D",
          "#FDCA40",
          "#545677",
          "#06BA63",
          "#595959",
          "#90C9E7",
          "#FFFCF9",
          "#A4A9AD",
          "#F15156",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
