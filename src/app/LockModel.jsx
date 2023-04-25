
import { useGLTF } from "@react-three/drei";

export default function LockModel(props) {
    const { nodes} = useGLTF("/Simple Padlock.glb");
    return (
        <group scale={1.2} position={[-6,-4.6,-9.8]} rotation={[0,-Math.PI/2, Math.PI / 6]} {...props} dispose={null}>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.group331019317.geometry}
                // material={materials.mat16}
            >
                <meshStandardMaterial color={'#862e07'} />
            </mesh>
            <mesh
                geometry={nodes.group871613733.geometry}
                // material={materials.mat15}
            >
                <meshStandardMaterial color={'#4b4949'} />
            </mesh>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.group1013003272.geometry}
                // material={materials.mat17}
            >
                <meshStandardMaterial color={'#CED2D7'} />
            </mesh>
        </group>
    );
}

useGLTF.preload("/Simple Padlock.glb");