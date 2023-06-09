"use client";
import { Canvas } from '@react-three/fiber'
// import {OrbitControls, PerspectiveCamera, Text} from '@react-three/drei'
import NameText from "@/components/nameText";
import LaptopModel from "@/models/LaptopModel"
import NotebookModel from "@/models/NotebookModel"
import DeskModel from "@/models/DeskModel"
import BulbModel from "@/models/BulbModel"
import TorchModel from "@/models/TorchModel"
import BedModel from "@/models/BedModel"
import OrbitControlsSwitch from "@/components/OrbitControlsSwitch";
// import LockModel from "@/app/LockModel"
// import WindowModel from "@/app/WindowModel"
import Room from "@/components/room";
import {Suspense} from "react";
// import {OrbitControls} from "@react-three/drei";


export default function MainCanvas () {
    return (
        <section className={" lg:w-full lg:h-[100svh] h-[50vh]"}>
            <Suspense fallback={<span className={"flex items-center justify-center text-2xl font-medium h-full w-full"}><span>Loading...</span></span>}>
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
                        <BedModel />
                        <OrbitControlsSwitch />
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
                        {/*<directionalLight castShadow={true} color="" intensity={0.1} position={[10, 1, 0]} />*/}
                    </group>
                    <color attach={"background"} args={["#121212"]} />
                </Canvas>
            </Suspense>
        </section>
    )
}