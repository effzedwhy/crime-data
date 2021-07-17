import React, { useState, useEffect } from 'react'
import CrimeChart from '../Components/Charts/CrimeChart'
let A = 0
let B = 0
let C = 0
let D = 0
let E = 0
let F = 0
let G = 0
let H = 0
let I = 0
let J = 0
let K = 0
let L = 0
let M = 0
let N = 0

const API = ({ date, longitude, latitude }) => {
  // const [getCrimes, setGetCrimes] = useState([])
  const [dataError, setDataError] = useState()
  const [isLoading, setIsLoading] = useState()

  let url = `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}&date=${date}`
  console.log(date, longitude, latitude, url)
  if (!date || !longitude || !latitude) {
    url = null
  }
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('An error occured')
      }

      const data = await response.json()

      const getCrime = []

      for (let crimeSet of data) {
        getCrime.push({ getCrime: crimeSet.category })
      }

      for (let crime of getCrime) {
        switch (crime.getCrime) {
          case 'anti-social-behaviour':
            A += 1
            break
          case 'bicycle-theft':
            B += 1
            break
          case 'burglary':
            C += 1
            break
          case 'criminal-damage-arson':
            D += 1
            break
          case 'drugs':
            E += 1
            break
          case 'other-theft':
            F += 1
            break
          case 'possession-of-weapons':
            G += 1
            break
          case 'public-order':
            H += 1
            break
          case 'robbery':
            I += 1
            break
          case 'shoplifting':
            J += 1
            break
          case 'theft-from-the-person':
            K += 1
            break
          case 'vehicle-crime':
            L += 1
            break
          case 'violent-crime':
            M += 1
            break
          case 'other-crime':
            N += 1
            break
          default:
        }
      }

      console.log(A, B, C, D, E, F, G, H, I, J, K, L, M, N)
      setIsLoading(false)
    }
    try {
      getData()
    } catch (error) {
      setIsLoading(false)
      setDataError(error.message)
    }
  }, [url])

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
      <CrimeChart
        A={A}
        B={B}
        C={C}
        D={D}
        E={E}
        F={F}
        G={G}
        H={H}
        I={I}
        J={J}
        K={K}
        L={L}
        M={M}
        N={N}
      />
    </div>
  )
}

export default API
