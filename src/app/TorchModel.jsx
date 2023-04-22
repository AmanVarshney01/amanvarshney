import {useGLTF} from "@react-three/drei";
import {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";

export default function TorchModel(props) {
    const { nodes, materials } = useGLTF("/Flashlight.glb");
    const lightRef = useRef()
    const [isLightOn, setLightOn] = useState(false)
    useFrame(() => {
        // lightRef.current.position.set(0, -6, 0)
        lightRef.current.target.position.set(10, -6, 30)
    })
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
                        ref={lightRef}
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