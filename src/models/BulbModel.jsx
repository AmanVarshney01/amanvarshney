import {useGLTF} from "@react-three/drei";
import LightSwitch from "src/models/LightSwitch";

export default function BulbModel(props) {
    const { nodes, materials } = useGLTF("/Light bulb.glb");
    return (
        <>
            <group position={[-3,4,2]} scale={0.3} {...props} dispose={null}>
                <group position={[0, 2.4, 0]}>
                    <mesh
                        castShadow={true}
                        receiveShadow={true}
                        geometry={nodes.Light_1.geometry}
                        material={materials.clip}
                    >
                    </mesh>
                    <LightSwitch nodes={nodes} materials={materials} />
                </group>
                <mesh
                    castShadow={true}
                    receiveShadow={true}
                    geometry={nodes.cable.geometry}
                    material={materials.cable}
                    position={[0, 12, 0]}
                    scale={[1,3,1]}
                />
            </group>
        </>

    );
}

useGLTF.preload("/Light bulb.glb");