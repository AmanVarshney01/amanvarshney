import {useGLTF} from "@react-three/drei";
import {useState} from "react";

export default function TorchModel(props) {
    const { nodes, materials } = useGLTF("/Flashlight.glb");
    const [isLightOn, setLightOn] = useState(false)
    return (
            <group onClick={() => setLightOn(!isLightOn)} scale={0.08} position={[-8,-4.7,-8]} rotation={[0, -Math.PI / 1.5, -Math.PI / 8]} {...props} dispose={null}>
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
                    <spotLight

                        angle={Math.PI / 6}
                        position={[0, 0, -5]}
                        rotation={[0,Math.PI /2,0]}
                        distance={0}
                        decay={2}
                        color="white"
                        intensity={isLightOn ? 2 : 0}
                        castShadow={true}
                    />
                    <pointLight intensity={isLightOn ? 1 : 0} position={[0, 5,-15]}/>
                </mesh>
            </group>
    );
}

useGLTF.preload("/Flashlight.glb");