import React, { useState } from 'react'
import PoliceApi from './PoliceApi'
import Geocode from 'react-geocode'
Geocode.setApiKey('AIzaSyChf1wATZBL2PSzvuQxRZ1NkrMkiXpq038')
Geocode.setLanguage('en')
Geocode.setLocationType('ROOFTOP')

const GetLocation = ({ location, date }) => {
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')

  if (!location || !date) {
    return null
  }
  Geocode.fromAddress(location).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location
      setLatitude(lat)
      setLongitude(lng)
    },
    error => {
      console.error(error)
    }
  )
  console.log(date)
  return (
    <PoliceApi
      longitude={longitude}
      latitude={latitude}
      date={date}
      input={location}
    />
  )
}

export default GetLocation
