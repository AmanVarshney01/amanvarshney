"use client";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'

export default function Home() {
  return (
      <>
          <main className="z-10">
              <h1 className={""}>Aman Varshney</h1>
          </main>
          <div className={"fixed h-screen w-screen top-0 left-0 z-0"}>
              <Suspense fallback={null}>
                  <Canvas shadows flat linear>
                      <Scene />
                      <OrbitControls />
                  </Canvas>
              </Suspense>
          </div>
      </>
  )
}
