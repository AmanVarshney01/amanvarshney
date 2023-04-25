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
                material={isLightOn ? materials.light : new MeshStandardMaterial({color: 'white'})}
                onClick={() => setLightOn(!isLightOn)}
            >
                <pointLight position={[0,-2,0]} intensity={isLightOn ? 1 : 0} castShadow={true} />
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