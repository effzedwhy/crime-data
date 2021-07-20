import React, { Fragment } from 'react'
import classes from './CrimeChart.module.css'

const labels = {
  'anti-social-behaviour': 'Anti-social Behavior',
  'bicycle-theft': 'Bicycle Theft',
  burglary: 'Burglary',
  'criminal-damage-arson': 'Criminal Damage Arson',
  drugs: 'Drugs',
  'other-theft': 'Other Theft',
  'possession-of-weapons': 'Posession Of Weapons',
  'public-order': 'Public Order',
  robbery: 'Robbery',
  shoplifting: 'Shoplifting',
  'theft-from-the-person': 'Theft From The Person',
  'vehicle-crime': 'Vehicle Crime',
  'violent-crime': 'Violent Crime',
  'other-crime': 'Other Crime'
}

const CrimeChart = ({ crimes, input, date }) => {
  const { total, ...stats } = crimes
  const getPercent = value => (value / (total || 1)) * 100
  const getText = value => Math.round(value.toFixed(0))
  console.log(crimes)

  const months = {
    '01': 'January',
    '02': 'Feburary',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }

  const selectedMonth = date.slice(5)
  const dateText = Object.keys(months).map(month =>
    month === selectedMonth ? Object.values(months[month]) : null
  )

  const year = date.slice(0, 4)

  console.log(dateText)

  return (
    <Fragment>
      <div>
        <main>
          <section id='skills'>
            <h2>{input}</h2>
            <h3>
              {dateText}
              &nbsp;
              {year}
            </h3>
            {crimes.total === 0 ? (
              <p>No results found.</p>
            ) : (
              <article className={classes.skills}>
                {Object.keys(stats).map(key => (
                  <div className={classes['t-6']} key={key}>
                    <p>
                      {getText(getPercent(stats[key]))}% - {labels[key]}
                      <span></span>
                      <span
                        style={{ width: getPercent(stats[key]) + '%' }}
                        className={classes.skills}
                      ></span>
                    </p>
                  </div>
                ))}
              </article>
            )}
          </section>
        </main>
      </div>
    </Fragment>
  )
}

export default CrimeChart
