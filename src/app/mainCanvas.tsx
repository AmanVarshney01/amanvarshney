"use client";
import { Canvas } from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import NameText from "@/app/nameText";


export default function MainCanvas () {
    return (
        <section className={"w-full h-screen"}>
            <Canvas>

                <NameText />

                <ambientLight />
                <pointLight position={[10,10,10]} />
                <PerspectiveCamera
                    name="1"
                    makeDefault={true}
                    far={1000}
                    near={1}
                    fov={45}
                    position={[0,0,20]}
                    rotation={[0, 0, 0]}
                    scale={1}
                />
                {/*<Scene />*/}
                <OrbitControls />
            </Canvas>
        </section>
    )
}