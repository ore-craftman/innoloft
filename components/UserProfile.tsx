import Image from 'next/image'

export const UserProfile = ({ productData }: any) => {
  return (
    <div className="flex items-center justify-around rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-600  p-2 md:p-4">
      <Image
        src={productData.user.profilePicture}
        height="120px"
        width="120px"
        className="rounded-full"
      />

      <div>
        <p className="mt-1 text-white">{`${productData.user.firstName} ${productData.user.lastName}`}</p>
        <p className=" text-sm text-white">{productData.company.name}</p>
      </div>
    </div>
  )
}
