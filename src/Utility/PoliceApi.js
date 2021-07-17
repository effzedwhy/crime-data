import React, { useState } from 'react'
import CrimeChart from '../Components/Charts/CrimeChart'

const PoliceApi = ({ date, longitude, latitude }) => {
  const [getCrimes, setGetCrimes] = useState([])
  const [dataError, setDataError] = useState()
  const [isLoading, setIsLoading] = useState()

  const urls = [
    `https://data.police.uk/api/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/anti-social-behaviour?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/bicycle-theft?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/burglary?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/criminal-damage-arson?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/drugs?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/other-theft?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/possession-of-weapons?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/public-order?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/robbery?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/shoplifting?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/theft-from-the-person?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/vehicle-crime?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/violent-crime?lat=${latitude}&lng=${longitude}&date=${date}`,
    `https://data.police.uk/api/other-crime?lat=${latitude}&lng=${longitude}&date=${date}`
  ]

  const url = urls.map(url => url)

  const getData = async () => {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('An error occured')
    }

    const data = await response.json()

    setGetCrimes(data.length)
    console.log(getCrimes)
    setIsLoading(false)
  }
  try {
    getData()
  } catch (error) {
    setIsLoading(false)
    setDataError(error.message)
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading crime data...</p>
      </section>
    )
  }

  if (dataError) {
    return (
      <section>
        <p>{dataError}</p>
      </section>
    )
  }

  return (
    <div>
      <CrimeChart getCrimes={getCrimes} />
    </div>
  )
}

export default PoliceApi
