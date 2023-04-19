export default function Room () {
    return (
        <group>
            <mesh receiveShadow={true} position={[15,5,-10]}>
                <planeGeometry  args={[50,20]}/>
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh receiveShadow={true} position={[-10,5,0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[20,20]}/>
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh receiveShadow={true} position={[10,-5,0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[40,20]}/>
                <meshStandardMaterial color={"white"} />
            </mesh>
        </group>
    )
}