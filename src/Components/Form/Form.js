import React, { Fragment, useRef, useState } from 'react'
import classes from './Form.module.css'
import GetLocation from '../../Utility/GetLocation'

const Form = () => {
  const [input, setInput] = useState('')
  const [date, setDate] = useState('')
  const [apiDate, setApiDate] = useState('')
  const [inputTouched, setInputTouched] = useState(false)

  const ref = useRef()
  const enteredInputIsValid = input.trim() !== '' //not empty
  const nameInputIsInvalid = !enteredInputIsValid && inputTouched
  const onSelectChangeHandler = e => {
    setDate(e.target.value)
    setApiDate(e.target.value)
    console.log(apiDate)
  }

  const onChangeHandler = () => {
    let input = ref.current.value
    setInput(input)
    console.log(input)
  }

  const inputBlurHandler = event => {
    setInputTouched(true)
  }
  const onFormSubmitHandler = e => {
    e.preventDefault()
    if (!enteredInputIsValid) {
      //if empty
      return
    }
    console.log(input, date)
  }

  const inputIsInvalid = nameInputIsInvalid
    ? `${classes.formLocationInput} ${classes.invalid}`
    : `${classes.formLocationInput} `

  console.log(input, apiDate)

  return (
    <Fragment>
      <div className={classes.formContainer}>
        <h1>Find out the category of crimes in your location</h1>
        <form className={classes.form} onSubmit={onFormSubmitHandler}>
          <label className={classes.formLocationLabel} htmlfor='location'>
            Location
          </label>
          <input
            className={inputIsInvalid}
            type='text'
            placeholder='Search by location for e.g Manchester'
            id='location'
            onBlur={inputBlurHandler}
            onChange={onChangeHandler}
            ref={ref}
          ></input>
          {nameInputIsInvalid && (
            <p className='error-text'>Please enter a location.</p>
          )}
          <label className={classes.formDateLabel} htmlfor='date'>
            Select Month
          </label>
          <select
            className={classes.formDateSelect}
            id='date'
            onChange={onSelectChangeHandler}
            value={date}
          >
            <option value=''>Select</option>

            <option value='2020-05'>May 2020</option>
            <option value='2020-06'>Jun 2020</option>
            <option value='2020-07'>Jul 2020</option>
            <option value='2020-08'>Aug 2020</option>
            <option value='2020-09'>Sep 2020</option>
            <option value='2020-10'>Oct 2020</option>
            <option value='2020-11'>Nov 2020</option>
            <option value='2020-12'>Dec 2020</option>
            <option value='2021-01'>Jan 2021</option>
            <option value='2021-02'>Feb 2021</option>
            <option value='2021-03'>Mar 2021</option>
            <option value='2021-04'>Apr 2021</option>
            <option value='2021-05'>May 2021</option>
            <option value='2021-06'>Jun 2021</option>
          </select>
          {/* <button className={classes.formButton} type='submit'>
            Get Crime Report
          </button> */}
        </form>
      </div>
      <GetLocation location={input} date={apiDate} input={input} />
    </Fragment>
  )
}

export default Form
