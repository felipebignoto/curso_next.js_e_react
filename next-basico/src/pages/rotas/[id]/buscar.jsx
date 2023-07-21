import { useRouter } from "next/router"

export default function buscar(){

    const router = useRouter()
    console.log(router)
    const codigo = router.query.codigo

    return (
        <div>
            <h1>Buscar / {codigo}</h1>
        </div>
    )
}