import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'

const MapComponent = ({ center }: { center: google.maps.LatLngLiteral }) => {
  const ref = useRef<any>(0)

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom: 3,
    })
  })

  return <div ref={ref} id="map" />
}

const StatusComp = ({ text }: { text: string }) => {
  return (
    <>
      <p className="text-sm text-gray-500">{text}</p>
    </>
  )
}
const render = (status: Status) => {
  const productAddress = useSelector(
    (state: RootState) => state.product.value.company.address
  )
  switch (status) {
    case Status.LOADING:
      return <StatusComp text="Loading..." />
    case Status.FAILURE:
      return <StatusComp text="Something went wrong" />
    case Status.SUCCESS:
      return (
        <MapComponent
          center={{
            lat: productAddress.latitude,
            lng: productAddress.longitude,
          }}
        />
      )
  }
}

const Map = () => {
  const mapsAPI = process.env.NEXT_PUBLIC_MAP_API
  const productAddress = useSelector(
    (state: RootState) => state.product.value.company.address
  )
  return (
    <Wrapper
      apiKey={mapsAPI || 'AIzaSyAFnTEjojzJI_e3dp7Iiz6R-Ce1t8E8fFw'}
      render={render}
    >
      <MapComponent
        center={{ lat: productAddress.latitude, lng: productAddress.longitude }}
      />
    </Wrapper>
  )
}

export default Map
