import React, { Fragment, useState } from 'react'
import classes from './Form.module.css'
import GetLocation from '../../Utility/GetLocation'
import { useForm } from 'react-hook-form'

const Form = () => {
  const [input, setInput] = useState('')

  const [apiDate, setApiDate] = useState('')

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      location: '',
      date: ''
    },
    criteriaMode: 'all'
  })

  const onSubmit = () => {
    setApiDate(getValues('date'))
    setInput(getValues('location'))
    reset({ location: '', date: '' })
  }

  return (
    <Fragment>
      <div className={classes.formContainer}>
        <h1>Find out the category of crimes in your location</h1>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={classes.formLocationLabel} htmlfor='location'>
            Location
          </label>
          <input
            className={classes.formLocationInput}
            type='text'
            placeholder='Search by location for e.g Manchester'
            aria-required='true'
            {...register('location', {
              required: true,
              validate: value => {
                if (!value) {
                  return 'Please enter a location'
                }
                return true
              }
            })}
          ></input>
          {errors.location && (
            <p className={classes.error}>{errors.location.types.validate}</p>
          )}
          <label className={classes.formDateLabel} htmlfor='date'>
            Select Month
          </label>
          <select
            className={classes.formDateSelect}
            aria-labelledby='Pick a date'
            aria-required='true'
            {...register('date', {
              required: true,
              validate: value => {
                if (!value) {
                  return 'Please select a month'
                }
                return true
              }
            })}
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
          {errors.date && (
            <p className={classes.error}>{errors.date.types.validate}</p>
          )}
          <button
            className={classes.formButton}
            type='submit'
            onClick={() => {
              trigger()
            }}
          >
            Get Crime Report
          </button>
        </form>
      </div>
      <GetLocation location={input} date={apiDate} />
    </Fragment>
  )
}

export default Form
