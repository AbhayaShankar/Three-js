import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={100}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={20}
        intensity={0.75}
        ambient={0.25}
        position={[5, 5, -12]}
      />
      <RandomizedLight
        amount={4}
        radius={8}
        intensity={0.35}
        ambient={0.75}
        position={[-5, 5, -5]}
      />
      <RandomizedLight
        amount={4}
        radius={20}
        intensity={0.02}
        ambient={0.02}
        position={[5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
