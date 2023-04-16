"use client";
import {Text3D} from '@react-three/drei'

// import Scene from './Scene'


export default function NameText() {
    return (
        <Text3D position={[-6,-4,3]} font={"./Lato_Regular.json"} size={1} lineHeight={1} letterSpacing={0}>
            AMAN VARSHNEY
            <meshNormalMaterial />
        </Text3D>
    )
}