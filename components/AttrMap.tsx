interface AttrSchema {
  id: number
  name: string
}

interface PropShema {
  heading: string
  attr: AttrSchema[]
}

export const AttrMap = ({ heading, attr }: PropShema) => {
  return (
    <>
      <h3 className="my-2 font-semibold">{heading}</h3>
      <ul className=" list-disc">
        {attr.map((attr: AttrSchema) => (
          <li key={attr.id} className="ml-3">
            {attr.name}
          </li>
        ))}
      </ul>
    </>
  )
}
