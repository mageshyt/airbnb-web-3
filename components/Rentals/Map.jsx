import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
const style = {
  wrapper: 'bg-[#202020]  h-[99.5%] overflow-hidden w-[100%] rounded-2xl',
}

const RentalsMap = ({ cords, google }) => {
  const [selectLocation, setSelectLocation] = useState({})
  console.log({ selectLocation })
  //! getting center
  const center = getCenter(cords)
  //! view state
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  })
  console.log({ cords })
  return (
    <div className={style.wrapper}>
      <ReactMapGL
        mapStyle="mapbox://styles/magesh007/cks0ibo5b3pjy17pex5lf5cyz"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {/* Markers */}
        {cords.map((places, index) => {
          const { lat, lng } = places
          return (
            <div key={index}>
              <Marker
                offsetLeft={-20}
                offsetTop={-10}
                longitude={lng}
                latitude={lat}
              >
                <p
                  onClick={() => {
                    setSelectLocation(places)
                  }}
                  role="img"
                  className=" cursor-pointer text-2xl "
                  aria-label="push-pin"
                >
                  🏨
                </p>
              </Marker>
            </div>
          )
        })}
      </ReactMapGL>
    </div>
  )
}

export default RentalsMap

// {
//   cords.map((position, index) => {
//     return (
//       <div key={index}>
//         <Marker
//           offsetLeft={-20}
//           offsetTop={-10}
//           longitude={long}
//           latitude={lat}
//         />
//       </div>
//     )
//   })
// }
