"use client";
import {OrbitControls} from "@react-three/drei";
import LockModel from "src/models/LockModel";
import {useState} from "react";

export default function OrbitControlsSwitch() {

    const [isLock, setLock] = useState(true)

    return (
        <>
            <LockModel onClick={() => setLock(!isLock)} />
            {!isLock && (
                <OrbitControls
                    enableDamping
                    dampingFactor={0.05}
                    rotateSpeed={0.8}
                    zoomSpeed={0.5}
                    panSpeed={0.8}
                    minDistance={5}
                    maxDistance={20}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 8}
                    maxAzimuthAngle={Math.PI / 8}
                />
            )}
        </>
    )
}