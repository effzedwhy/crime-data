import React, { Fragment, useRef, useState } from 'react'
import classes from './Form.module.css'
import Geocode from 'react-geocode'
import API from '../../Utility/API'
Geocode.setApiKey('AIzaSyChf1wATZBL2PSzvuQxRZ1NkrMkiXpq038')
Geocode.setLanguage('en')
Geocode.setLocationType('ROOFTOP')

const Form = () => {
  const [input, setInput] = useState('')
  const [date, setDate] = useState('')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const ref = useRef()

  const onSelectChangeHandler = e => {
    const getDate = e.target.value
    setDate(getDate)
  }
  const onFormSubmitHandler = e => {
    e.preventDefault()
    const input = ref.current.value

    setInput(input)
    console.log(input)

    const location = input

    Geocode.fromAddress(location).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        setLatitude(lat)
        setLongitude(lng)
        console.log(date, lng, lat)
      },
      error => {
        console.error(error)
      }
    )
  }

  console.log(input, date)

  return (
    <Fragment>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={onFormSubmitHandler}>
          <label className={classes.formLocationLabel} for='location'>
            Location
          </label>
          <input
            placeholder='Search by location for e.g Manchester'
            className={classes.formLocationInput}
            id='location'
            ref={ref}
          ></input>
          <label className={classes.formDateLabel} for='date'>
            Select Month
          </label>
          <select
            className={classes.formDateSelect}
            id='date'
            onChange={onSelectChangeHandler}
          >
            <option value=''></option>
            <option value='2020-01'>Jan 2020</option>
            <option value='2020-02'>Feb 2020</option>
            <option value='2020-03'>Mar 2020</option>
            <option value='2020-04'>Apr 2020</option>
            <option value='2020-05'>May 2020</option>
            <option value='2020-06'>Jun 2020</option>
            <option value='2020-07'>Jul 2020</option>
            <option value='2020-08'>Aug 2020</option>
            <option value='2020-09'>Sep 2020</option>
            <option value='2020-10'>Oct 2020</option>
            <option value='2020-11'>Nov 2020</option>
            <option value='2020-12'>Dec 2020</option>
            <option value='2021-01'>Jan 2021</option>
            <option value='2021-02'>Feb 2020</option>
            <option value='2021-03'>Mar 2020</option>
            <option value='2021-04'>Apr 2020</option>
            <option value='2021-05'>May 2020</option>
            <option value='2021-06'>Jun 2020</option>
          </select>

          <button className={classes.formButton}>Get Crime Report</button>
        </form>
      </div>
      <API longitude={longitude} latitude={latitude} date={date} />
    </Fragment>
  )
}

export default Form
