interface AuthInputProps {
  label: string
  valor: any
  tipo?: 'text' | 'password' | 'email'
  obrigatorio?: boolean
  valorMudou: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none
                `}
      />
    </div>
  )
}
