"use client";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'

export default function Home() {
  return (
      <>
          <main className="flex flex-row">
              <div className={""}>
                  <h1 className={""}>Aman Varshney</h1>
              </div>
              <div className={"w-1/2"}>
                  <Suspense fallback={null}>
                      <Canvas shadows flat linear>
                          <Scene />
                          <OrbitControls />
                      </Canvas>
                  </Suspense>
              </div>
          </main>
      </>
  )
}
