import {useState} from "react";
import {MeshStandardMaterial} from "three";

export default function LightSwitch({nodes, materials}) {
    const [isLightOn, setLightOn] = useState(true)

    return (
        <>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.Light_2.geometry}
                material={isLightOn ? new MeshStandardMaterial({color: '#ffffff'}) : new MeshStandardMaterial({color: '#b6b6b6'})}
                onClick={() => setLightOn(!isLightOn)}
            >
                <pointLight color={"#d9d9d9"} position={[0,-2,0]} intensity={isLightOn ? 1 : 0} castShadow={true} />
            </mesh>
            <ambientLight
                intensity={isLightOn ? 0.5 : 0.3}
                // color={"#223344"}
            />
            <style jsx global>
                {`
                  body {
                    color: ${isLightOn ? 'black' : 'white'};
                    background-color: ${isLightOn ? "#f2f2f2" : '#121212'};
                  }
                `}
            </style>
        </>
    )
}