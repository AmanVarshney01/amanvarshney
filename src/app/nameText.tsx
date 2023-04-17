"use client";
import {Text3D} from '@react-three/drei'

// import Scene from './Scene'


export default function NameText() {
    return (
        <Text3D castShadow receiveShadow position={[-8,-5,0]} font={"./Lato_Regular.json"} size={1.3} lineHeight={1} letterSpacing={0}>
            AMAN VARSHNEY
            <meshStandardMaterial color={"#f26a8d"}/>
        </Text3D>
    )
}