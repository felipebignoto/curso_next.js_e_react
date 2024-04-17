import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

export default function MenuLateral() {
  return (
    <aside className="dark:bg-gray-900 text-gray-700 bg-gray-200 flex flex-col">
      <div className="flex flex-col h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800  items-center justify-center">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem icone={IconeCasa} url="/" texto="Inicio" />
        <MenuItem icone={IconeAjustes} url="/ajustes" texto="Ajustes" />
        <MenuItem icone={IconeSino} url="/notificacoes" texto="Novidades" />
      </ul>
      <ul className="">
        <MenuItem
          icone={IconeSair}
          onClick={() => console.log('logout')}
          texto="Sair"
          clasName="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white"
        />
      </ul>
    </aside>
  )
}
