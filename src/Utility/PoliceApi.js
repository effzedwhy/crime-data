import React, { useState, useEffect } from 'react'
import CrimeChart from '../Components/Charts/CrimeChart'

const PoliceApi = ({ date, longitude, latitude }) => {
  const [dataError, setDataError] = useState()
  const [isLoading, setIsLoading] = useState()
  const [crimes, setCrimes] = useState({
    'anti-social-behaviour': 0,
    'bicycle-theft': 0,
    burglary: 0,
    'criminal-damage-arson': 0,
    drugs: 0,
    'other-theft': 0,
    'possession-of-weapons': 0,
    'public-order': 0,
    robbery: 0,
    shoplifting: 0,
    'theft-from-the-person': 0,
    'vehicle-crime': 0,
    'violent-crime': 0,
    'other-crime': 0
  })

  let url = `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`
  console.log(date, longitude, latitude, url)
  if (!date || !longitude || !latitude) {
    url = ''
  }

  console.log(url)
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('An error occured')
      }

      const data = await response.json()

      for (let crimeSet of data) {
        crimes[crimeSet.category]++
        console.log(crimeSet.category)
      }
      console.log(crimes)

      setIsLoading(false)
    }

    try {
      getData()
    } catch (error) {
      setDataError(error.message)
    }
  }, [crimes, url])

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
      <CrimeChart crimes={crimes} />
    </div>
  )
}

export default PoliceApi
