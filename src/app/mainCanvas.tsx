"use client";
import { Canvas } from '@react-three/fiber'
// import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import NameText from "@/app/nameText";
import Room from "@/app/room";


export default function MainCanvas () {
    return (
        <section className={"w-full h-screen"}>
            <Canvas shadows  camera={{
                position: [0,0,18],
                near: 1,
                far: 100,
                fov: 50
            }} >
                {/*rotation={[Math.PI / 6,0,0]}*/}
                <group scale={1} position={[-5,-1,0]} rotation={[0, 0,0]}>
                    <NameText />
                    <Room />
                </group>
                {/*<mesh castShadow receiveShadow position={[0,-5,0]}>*/}
                {/*    <boxGeometry  />*/}
                {/*    <meshStandardMaterial color={"red"}/>*/}
                {/*</mesh>*/}
                {/*<directionalLight position={[5, 5, 5]} intensity={0.5} shadow-mapSize={1024} castShadow />*/}
                <color attach={"background"} args={["#121212"]} />
                <pointLight intensity={1} position={[4,5,5]} castShadow={true} />
                <ambientLight intensity={0.5} />
                {/*<PerspectiveCamera*/}
                {/*    name="1"*/}
                {/*    makeDefault={true}*/}
                {/*    far={1000}*/}
                {/*    near={1}*/}
                {/*    fov={45}*/}
                {/*    position={[0,-10,20]}*/}
                {/*    rotation={[0, 0,0]}*/}
                {/*    scale={1}*/}
                {/*/>*/}
                {/*<color attach={"background"} args={["#ffffff"]} />*/}
                {/*<Scene />*/}
                {/*<OrbitControls />*/}
            </Canvas>
        </section>
    )
}