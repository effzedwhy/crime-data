import React from 'react'
import Form from './Components/Form/Form'
import CrimeChart from './Components/Charts/CrimeChart'
import Header from './Components/Header/Header'

function App () {
  return (
    <div className='App'>
      <Header />
      <Form />
      <CrimeChart />
    </div>
  )
}

export default App
