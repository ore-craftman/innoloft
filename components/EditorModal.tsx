import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProduct } from '../state/productSlice'
import { PutData } from '../services'

interface PropSchema {
  productData: any
  closeModal: Function
}

export const EditorModal = ({ productData, closeModal }: PropSchema) => {
  //   const [show, setShow] = useState(showModal)

  const dispatch = useDispatch()
  const [descriptionData, setDescriptionData] = useState(
    productData.description.startsWith('<img')
      ? productData.description.split('</script>')[1]
      : productData.description
  )
  const updateHandler = () => {
    const newData = { ...productData, description: descriptionData }
    dispatch(updateProduct(newData))
    closeModal(true)
    PutData('https://api-test.innoloft.com/product/6781', newData)
  }

  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Edit Description
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  <textarea
                    cols={60}
                    rows={10}
                    className="overflow-y-auto overflow-x-hidden"
                    value={descriptionData}
                    onChange={(e) => setDescriptionData(e.target.value)}
                  ></textarea>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-nowrap bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              onClick={updateHandler}
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              onClick={() => closeModal(true)}
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
