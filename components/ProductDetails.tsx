import { useState } from 'react'
import { AttrMap } from './AttrMap'
import { EditorModal } from './EditorModal'
import { RootState } from '../state/store'
import { useSelector } from 'react-redux'

export const ProductDetails = ({ mainColor }: any) => {
  const productData = useSelector((state: RootState) => state.product.value)

  const [showDescModal, setShowDescModal] = useState(false)
  const [description, setDescription] = useState(true)

  const editorDisplayHandler = () => {
    setShowDescModal(true)
  }

  const closeDescModal = (close: boolean) => {
    setShowDescModal(!close)
  }

  return (
    <>
      {showDescModal && (
        <EditorModal productData={productData} closeModal={closeDescModal} />
      )}
      <div className="flex items-center justify-between">
        <div className="mt-3 flex">
          <button
            className={`mr-4 rounded border ${
              description ? 'bg-yellow-500' : 'bg-gray-200'
            } px-4 py-2 text-sm hover:bg-yellow-500`}
            style={{ color: mainColor }}
            onClick={() => setDescription(true)}
          >
            Description
          </button>

          <button
            className={`mr-4 rounded border ${
              description ? 'bg-gray-200' : 'bg-yellow-500'
            } px-4 py-2 text-sm hover:bg-yellow-500`}
            style={{ color: mainColor }}
            onClick={() => setDescription(false)}
          >
            Attributes
          </button>
        </div>

        <button
          className="text-gray-500 hover:text-yellow-700"
          onClick={editorDisplayHandler}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
      </div>

      <div className="mt-3 flex">
        <p className="text-gray-700">
          {description ? (
            productData.description.startsWith('<img') ? (
              productData.description.split('</script>')[1]
            ) : (
              productData.description
            )
          ) : (
            <div>
              <div className="flex">
                <section className="md:mr-10">
                  <AttrMap
                    heading="Business Models"
                    attr={productData.businessModels}
                  />
                </section>

                <section>
                  <AttrMap heading="Categories" attr={productData.categories} />
                </section>
              </div>

              <ul className=" list-disc">
                <h3 className="my-2 font-semibold">TRL</h3>
                <li className="ml-3">{productData.trl.name}</li>
              </ul>
            </div>
          )}
        </p>
      </div>
    </>
  )
}
