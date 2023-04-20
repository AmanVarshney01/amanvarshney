import { useGLTF } from "@react-three/drei";

export default function NotebookModel(props) {
    const { nodes } = useGLTF("/exercise_book.glb");
    return (
        <group position={[12,-5,-4]} scale={15} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        geometry={nodes.Book_lambert1_0.geometry}
                        castShadow={true}
                    >
                        <meshStandardMaterial color={"#6689bf"} />
                    </mesh>
                    <mesh
                        geometry={nodes.Spine_lambert1_0.geometry}
                    >
                    <meshStandardMaterial color={"#eff3f8"} />
                </mesh>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/exercise_book.glb");