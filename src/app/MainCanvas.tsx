"use client";
import { Canvas } from '@react-three/fiber'
// import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import NameText from "@/app/nameText";
import LaptopModel from "@/app/LaptopModel"
import NotebookModel from "@/app/NotebookModel"
import Room from "@/app/room";


export default function MainCanvas () {
    return (
        <section className={"w-full h-screen"}>
            <Canvas shadows camera={{
                position: [0,0,18],
                near: 1,
                far: 100,
                fov: 50
            }} >
                {/*rotation={[Math.PI / 6,0,0]}*/}
                <group scale={1} position={[-5,-1,0]} rotation={[0, 0,0]}>
                    <NameText />
                    <Room />
                    <LaptopModel />
                    <NotebookModel />
                </group>
                <color attach={"background"} args={["#121212"]} />
                <pointLight intensity={1} position={[4,5,5]} castShadow={true} />
                <ambientLight intensity={0.5} />
                {/*<OrbitControls />*/}
            </Canvas>
        </section>
    )
}