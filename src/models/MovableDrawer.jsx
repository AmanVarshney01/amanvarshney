import {useState} from "react";

export default function MovableDrawer ({nodes}) {

    const [isActive, setActive] = useState(false)

    return (
        <group position={[4.79, 3.23, isActive ? 3 : 0.6]} onClick={() => setActive(!isActive)}  scale={[4.18, 1, 4.58]}>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.pCube4_lambert1_0.geometry}
                // material={materials.lambert1}
            >
                <meshStandardMaterial color={'#A1662F'} />
            </mesh>
        </group>
    )
}