import Porta from "@/components/Porta";

export default function Home() {
  return (
   <div style={{display:"flex"}}>
    <Porta selecionada={true}></Porta>
    <Porta selecionada={false}></Porta>

    
   </div>
  )
}
