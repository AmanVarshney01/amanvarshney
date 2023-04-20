import { useGLTF } from "@react-three/drei";
import MovableDrawer from "@/app/MovableDrawer";

export default function DeskModel(props) {


    const { nodes } = useGLTF("/desk_w_assets.glb");
    return (
        <group {...props} dispose={null} scale={0.5} position={[5,-5,-8.6]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    {/*table*/}
                    <group position={[0, 3.96, 0]} scale={[13.91, 0.31, 5.65]}>
                        <mesh
                            castShadow={true}
                            receiveShadow={true}
                            geometry={nodes.pCube1_lambert1_0.geometry}
                            // material={materials.lambert1}
                        >
                            <meshStandardMaterial color={'#A1662F'} />
                        </mesh>
                    </group>
                    {/*last drawer*/}
                    <group position={[4.79, 0.88, 3.21]} scale={[4.18, 1.66, 4.58]}>
                        <mesh
                            castShadow={true}
                            receiveShadow={true}
                            geometry={nodes.pCube2_lambert1_0.geometry}
                            // material={materials.lambert1}
                        >
                        <meshStandardMaterial color={'#A1662F'} />
                    </mesh>
                    </group>
                    {/*middle drawer*/}
                    <group position={[4.79, 2.22, 1.89]} scale={[4.18, 1, 4.58]}>
                        <mesh
                            castShadow={true}
                            receiveShadow={true}
                            geometry={nodes.pCube3_lambert1_0.geometry}
                            // material={materials.lambert1}
                        >
                        <meshStandardMaterial color={'#A1662F'} />
                    </mesh>
                    </group>
                    {/*top drawer*/}
                    <MovableDrawer />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/desk_w_assets.glb");


