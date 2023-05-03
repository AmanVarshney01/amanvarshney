import { useGLTF } from "@react-three/drei";

export default function BedModel(props) {
    const { nodes, materials } = useGLTF("/Bed Single.glb");
    return (
        <group rotation={[0,Math.PI,0]} scale={7} position={[7,-5,-2]} {...props} dispose={null}>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.bedSingle_2.geometry}
                // material={materials.carpetWhite}
            >
                <meshStandardMaterial color={'#fefefd'} />
            </mesh>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.bedSingle_2_1.geometry}
                // material={materials.wood}
            >
                <meshStandardMaterial color={'#8b5a2b'} />
            </mesh>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.bedSingle_2_2.geometry}
                material={materials.metal}
            />
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.bedSingle_3.geometry}
                material={materials.metal}
            />
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.bedSingle_3_1.geometry}
                material={materials.carpetWhite}
            />
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.bedSingle_3_2.geometry}
                material={materials.wood}
            />
            {/*<mesh*/}
            {/*    castShadow*/}
            {/*    receiveShadow*/}
            {/*    geometry={nodes.cover_1.geometry}*/}
            {/*    material={materials.carpet}*/}
            {/*/>*/}
            {/*<mesh*/}
            {/*    castShadow*/}
            {/*    receiveShadow*/}
            {/*    geometry={nodes.cover_1_1.geometry}*/}
            {/*    material={materials.carpetWhite}*/}
            {/*/>*/}
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.pillow.geometry}
                // material={materials.carpetWhite}
            >
                <meshStandardMaterial color={'#8d8d8d'} />
            </mesh>
        </group>
    );
}

useGLTF.preload("/Bed Single.glb");