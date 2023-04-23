import { proxy } from "valtio";

// Similar to like React context : Whatever we define inside this can be used anywhere in our component and store and update state as we require
const state = proxy({
  // If currently displaying Home or not
  intro: true,

  // Color
  color: "#0C7489",

  // Boolean value for if we are currently displaying logo on out tshrit or not
  isLogoTexture: true,

  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
