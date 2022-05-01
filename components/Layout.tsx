import { Header } from './Header'
import { useFetchData } from '../services'
import { updateConfig } from '../state/configSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

interface PropShema {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: PropShema) => {
  const dispatch = useDispatch()

  const [data] = useFetchData(
    process.env.NEXT_PUBLIC_APP_ID
      ? 'https://api-test.innoloft.com/configuration/2'
      : 'https://api-test.innoloft.com/configuration/1'
  )

  useEffect(() => {
    data && dispatch(updateConfig(data))
  }, [])

  return (
    <>
      {data && <Header logo={data.logo} mainColor={data.mainColor} />}
      <div className="container mx-auto md:px-4">{children}</div>
    </>
  )
}
