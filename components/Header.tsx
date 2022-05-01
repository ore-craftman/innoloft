import Image from 'next/image'
import Link from 'next/link'
import { RootState } from '../state/store'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../state/navSlice'

interface PropSchema {
  mainColor: string
  logo: string
}

export const Header = ({ mainColor, logo }: PropSchema) => {
  const dispatch = useDispatch()
  const displayMenu = useSelector((state: RootState) => state.nav.value)

  const toggleHandler = (e: any) => {
    e.preventDefault()
    dispatch(toggle(!displayMenu))
  }

  return (
    <section style={{ backgroundColor: mainColor }}>
      <header className="container mx-auto py-1">
        <div className=" flex justify-between">
          <Link href="/">
            <a>
              <Image src={logo} width="180px" height="50px" />
            </a>
          </Link>
          <button className="md:hidden" onClick={toggleHandler}>
            <i className="bi bi-list pr-4 text-lg font-bold text-white"></i>
          </button>
        </div>
      </header>
    </section>
  )
}
