import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SideBar } from '../components/Sidebar'
import { useFetchData } from '../services'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../state/store'
import { AttrMap } from '../components/AttrMap'
import { updateProduct } from '../state/productSlice'
import Map from '../components/Map'
import { UserProfile } from '../components/UserProfile'
import { ProductDetails } from '../components/ProductDetails'

const Product = () => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState(true)
  const [data] = useFetchData('https://api-test.innoloft.com/product/6781/')

  const mainColor = useSelector(
    (state: RootState) => state.config.value.mainColor
  )

  const productData = useSelector((state: RootState) => state.product.value)

  useEffect(() => {
    data && dispatch(updateProduct(data))
  }, [data])

  return (
    <>
      <div className="relative">
        <SideBar />
        {Object.keys(productData).length !== 0 && data && (
          <main className="mt-6 md:ml-40 md:flex">
            <section className="m-3 grow md:w-2/3">
              <section className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-600 p-2 md:p-6">
                <div className="relative h-48 w-full ">
                  <Image
                    src={productData.picture}
                    alt={`${productData.name} image`}
                    layout="fill"
                    objectFit="contain"
                    className="z-0"
                  />
                </div>
              </section>

              <div>
                <h3
                  className="mt-3 text-2xl font-semibold"
                  style={{ color: mainColor }}
                >
                  {productData.name}
                </h3>
              </div>

              <p className="text-sm text-gray-500">{productData.type.name}</p>

              <ProductDetails mainColor={mainColor} />
            </section>

            <section className="m-3 md:ml-2 md:w-1/3 ">
              <UserProfile productData={productData} />

              <div className="my-5 rounded-md border border-yellow-600 p-2 text-sm text-gray-400 md:p-4">
                {/* For some reason, I was unable to add my card to GCP to use the API */}
                <p>
                  <span className="text-yellow-800">!WARNING: </span>
                  You must enable Billing on the Google Cloud Project to use
                  Maps API
                </p>

                {/* <Map /> */}
              </div>
            </section>
          </main>
        )}
      </div>
    </>
  )
}
export default Product
