import React, { useState } from 'react'

const PoliceApi = props => {
  const [crimes, setCrimes] = useState()
  const [dataError, setDataError] = useState()
  const [isLoading, setIsLoading] = useState()

  const url = props.onSetUrl

  const getData = async () => {
    const response = await fetch()

    if (!response.ok) {
      throw new Error('An error occured')
    }

    const data = await response.json()

    const getCrimes = []

    for (let key in data) {
      getCrimes.push({
        id: data[key],
        category: data[key].category
      })
    }
    setCrimes(getCrimes)
    console.log(crimes)
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

  return <div></div>
}

export default PoliceApi
