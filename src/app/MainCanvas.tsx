"use client";
import { Canvas } from '@react-three/fiber'
// import {OrbitControls, PerspectiveCamera, Text} from '@react-three/drei'
import NameText from "@/app/nameText";
import LaptopModel from "@/app/LaptopModel"
import NotebookModel from "@/app/NotebookModel"
import DeskModel from "@/app/DeskModel"
import BulbModel from "@/app/BulbModel"
import TorchModel from "@/app/TorchModel"
// import WindowModel from "@/app/WindowModel"
import Room from "@/app/room";
import {Suspense} from "react";


export default function MainCanvas () {
    return (
        <section className={"w-full h-screen"}>
            <Suspense fallback={<span className={"flex items-center justify-center text-xl font-medium"}><span>Loading...</span></span>}>
                <Canvas frameloop="demand" shadows camera={{
                    position: [0,0,18],
                    near: 1,
                    far: 100,
                    fov: 45,
                    aspect: 4/3
                }} >
                    {/*<perspectiveCamera position={[0,0,18]} near={1} far={100} fov />*/}
                    {/*rotation={[Math.PI / 6,0,0]}*/}
                    <group scale={1} position={[1,0,0]} rotation={[0, 0,0]}>
                        <NameText />
                        <Room />
                        <group position={[-3,0,0]}>
                            <LaptopModel />
                            <NotebookModel />
                            <DeskModel />
                        </group>
                        <BulbModel />
                        <TorchModel />
                        {/*<Text*/}

                        {/*    position={[0, 0, -9.9]}*/}
                        {/*    fontSize={1}*/}
                        {/*    color="black"*/}
                        {/*    anchorX="center"*/}
                        {/*    anchorY="middle"*/}
                        {/*>*/}
                        {/*    Text on Wall*/}
                        {/*</Text>*/}
                        {/*<WindowModel rotation={[0, -Math.PI / 2, 0]} position={[-9.6,0,-4.5]} scale={1.5} />*/}
                    </group>
                    <color attach={"background"} args={["#121212"]} />
                    {/*<OrbitControls />*/}
                </Canvas>
            </Suspense>
        </section>
    )
}