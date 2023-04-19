import React from "react";
import { useGLTF } from "@react-three/drei";

export default function NotebookModel(props) {
    const { nodes, materials } = useGLTF("/exercise_book.glb");
    return (
        <group position={[12,-5,-4]} scale={10} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        geometry={nodes.Book_lambert1_0.geometry}
                        material={materials.lambert1}
                    />
                    <mesh
                        geometry={nodes.Spine_lambert1_0.geometry}
                        material={materials.lambert1}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/exercise_book.glb");