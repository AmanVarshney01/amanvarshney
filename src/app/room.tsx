export default function Room () {
    return (
        <group>
            <mesh receiveShadow={true} position={[0,5,-10]}>
                <planeGeometry  args={[20,20]}/>
                <meshStandardMaterial color={"#889ebb"} />
            </mesh>
            <mesh receiveShadow={true} position={[-10,5,0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[20,20]}/>
                <meshStandardMaterial color={"#889ebb"} />
            </mesh>
            <mesh receiveShadow={true} position={[0,-5,0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[20,20]}/>
                <meshStandardMaterial color={"#C8CBCB"} />
            </mesh>
        </group>
    )
}