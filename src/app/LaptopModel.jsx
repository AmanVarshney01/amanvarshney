import { useGLTF } from "@react-three/drei";
import {useState} from "react";

export default function LaptopModel(props) {

    const [isOpen, setOpen] = useState(false)

    const { nodes, materials } = useGLTF("/laptop.glb");
    return (
        <group {...props} dispose={null} position={[15,-5,-6]} rotation={[0, -Math.PI / 3, 0]} scale={0.1} onClick={() => setOpen(!isOpen)}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[0, 0.98, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Frame_ComputerFrame_0.geometry}
                            material={materials.ComputerFrame}
                            castShadow={true}
                        />
                    </group>
                    <group
                        position={[0, 0.65, -10.3]}
                        rotation={[isOpen ? -Math.PI : -Math.PI / 1.8 , 0, -Math.PI]}
                        scale={[100, 100, 88.24]}
                    >
                        <mesh
                            geometry={nodes.Screen_ComputerScreen_0.geometry}
                            material={materials.ComputerScreen}
                            castShadow={true}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/laptop.glb");
