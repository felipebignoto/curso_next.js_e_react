import Estilo from "@/components/Estilo";

 export default function usandoEstilo(){
    return (
        <div>
            <Estilo numero={-9} color="#2d2" direita={true}/>
            <Estilo numero={8} color="#000" />
        </div>
    )
 }