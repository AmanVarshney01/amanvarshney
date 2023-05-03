"use client";
import {Text3D} from '@react-three/drei'

// import Scene from './Scene'


export default function NameText() {
    return (
        <Text3D castShadow receiveShadow position={[-6.8,-5,0]} font={"./Lato_Regular.json"} size={1} lineHeight={1} letterSpacing={0}>
            AMAN VARSHNEY
            <meshStandardMaterial
                color={"#3C6997"}
                // color={"white"}
            />
        </Text3D>
    )
}