import Link from 'next/link'
import { RootState } from '../state/store'
import { useSelector } from 'react-redux'

export const SideBar = () => {
  const displayMenu = useSelector((state: RootState) => state.nav.value)

  return (
    <aside
      className={`absolute left-0 top-0 ${
        !displayMenu && 'hidden'
      } z-10 w-40 border-r border-gray-200 bg-white px-2 pl-4 md:block md:bg-gray-100`}
      style={{ height: '91vh' }}
    >
      <div>
        <h3 className="mt-4 text-lg font-bold text-indigo-700 md:mt-0">
          Navigation
        </h3>
      </div>

      <ul className="mt-3 ml-3 list-disc">
        <li>
          <Link href="/">
            <a
              className={`my-1 block hover:text-blue-700 active:text-blue-800`}
            >
              Main
            </a>
          </Link>
        </li>

        <li>
          <Link href="/product">
            <a className="my-1 block hover:text-blue-700 active:text-blue-800">
              Product
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  )
}
