import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? "")
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (<Entrada  className="mb-4" texto="Código" valor={id} somemteLeitura />) : false } 
            <Entrada className="mb-4" texto="Nome" tipo="text" valor={nome} valorMudou={setNome} />
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} />

            <div className="flex justify-end mt-7">
                <Botao cor="blue" clasName="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}