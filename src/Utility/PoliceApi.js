import React, { useState, useEffect } from 'react'
import CrimeChart from '../Components/Charts/CrimeChart'

const PoliceApi = ({ date, longitude, latitude, input }) => {
  
  const [dataError, setDataError] = useState()
  const [isLoading, setIsLoading] = useState()
  const [crimes, setCrimes] = useState({
    total: 0,
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

  if (!date || !longitude || !latitude) {
    url = ''
  }

  useEffect(() => {
    if (!url) return
    const getData = async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('An error occured')
      }
 
      const data = await response.json()
    
      const clone = {
        total: 0,
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
      }
      for (let crimeSet of data) {
        clone[crimeSet.category]++
      }
      clone.total = Object.keys(clone).reduce(
        (total, key) => total + clone[key],
        0
      )

      setIsLoading(false)
      setCrimes(clone)
    }

    try {
      setIsLoading(true)
      getData()
    } catch (error) {
      setDataError(error.message)
    }
  }, [url, dataError])

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
      <CrimeChart crimes={crimes} input={input} date={date} />
    </div>
  )
}

export default PoliceApi
