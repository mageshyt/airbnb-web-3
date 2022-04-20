import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
const style = {
  wrapper: 'bg-[#202020]  h-[99.5%] overflow-hidden w-[100%] rounded-2xl',
}

const RentalsMap = ({ cords, item }) => {
  const [selectLocation, setSelectLocation] = useState({})
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
  return (
    <div className={style.wrapper}>
      <ReactMapGL
        mapStyle="mapbox://styles/magesh007/cks0ibo5b3pjy17pex5lf5cyz"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {/* Markers */}
        {!!cords &&
          cords.map((places, index) => {
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
                    className=" animate-bounce cursor-pointer text-2xl "
                    aria-label="push-pin"
                  >
                    🏨
                  </p>
                </Marker>
                {/* Popup */}
                {selectLocation.lat === places.lat && (
                  <Popup
                    latitude={lat}
                    longitude={lng}
                    closeButton={true}
                    closeOnClick={false}
                    dynamicPosition={true}
                    onClose={() => setSelectLocation({})}
                    anchor="top"
                  >
                    <div className="h-[280px] w-[290px]">
                      {item.map((item, index) => {
                        {
                          if (selectLocation.lat === item.lat) {
                            return (
                              <div className=" center flex-col space-y-2">
                                <span className="text-sm">{item.title}</span>
                                <img
                                  src={item.img}
                                  className="h-[250px] w-[250px] rounded-xl "
                                />
                              </div>
                            )
                          }
                        }
                      })}
                    </div>
                  </Popup>
                )}
              </div>
            )
          })}
      </ReactMapGL>
    </div>
  )
}

export default RentalsMap
