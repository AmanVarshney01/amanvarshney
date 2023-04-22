import {useGLTF} from "@react-three/drei";
import {useState} from "react";

export default function TorchModel(props) {
    const { nodes, materials } = useGLTF("/Flashlight.glb");
    const [isLightOn, setLightOn] = useState(false)
    return (
        <>
            <group onClick={() => setLightOn(!isLightOn)} scale={0.06} position={[-7,-4.80,-7]} rotation={[0, -Math.PI / 1.3, 0]} {...props} dispose={null}>
                <mesh
                    castShadow={true}
                    receiveShadow={true}
                    geometry={nodes.Flashlight_1.geometry}
                    material={materials.FlashlightMat}
                />
                <mesh
                    castShadow={true}
                    receiveShadow={true}
                    geometry={nodes.Flashlight_1_1.geometry}
                    material={materials["03___Default"]}
                />
                <mesh
                    castShadow={true}
                    receiveShadow={true}
                    geometry={nodes.Flashlight_1_2.geometry}
                    material={materials["02___Default"]}
                >
                    {/*<pointLight intensity={isLightOn ? 1 : 0} position={[0,8,-18]}/>*/}
                </mesh>
                <spotLight

                    angle={Math.PI / 5}
                    // rotation={[0,Math.PI/ 2,0]}
                    position={[0,40,65]}
                    distance={0}
                    decay={2}
                    color="white"
                    intensity={isLightOn ? 2 : 0}
                    castShadow={true}
                    penumbra={0.2}
                />
            </group>
        </>

    );
}

useGLTF.preload("/Flashlight.glb");