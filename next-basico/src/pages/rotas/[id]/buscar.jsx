import { useRouter } from "next/router"

export default function Buscar(){

    const router = useRouter()
    console.log(router)
    const codigo = router.query.codigo

    return (
        <div>
            <h1>Buscar / {codigo}</h1>
        </div>
    )
}