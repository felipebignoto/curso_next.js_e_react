import Titulo from "../../components/titulo";

export default function usandoTitulo() {
    return (
        <div>
            <Titulo
                principal="pagina de cadastro"
                secundario="incluir, alterar, excluir"
            />

            <Titulo
                principal="pagina de login"
                secundario="informe email e senha"
                pequeno ={true}
            />
        </div>
    )
}