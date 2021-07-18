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
  robbery: 'Roberry',
  shoplifting: 'Shoplifting',
  'theft-from-the-person': 'Theft From The Person',
  'vehicle-crime': 'Vehicle Crime',
  'violent-crime': 'Voilent Crime',
  'other-crime': 'Other Crime'
}

const CrimeChart = ({ crimes }) => {
  const { total, ...stats } = crimes
  const getPercent = value => (value / (total || 1)) * 100
  const getText = value => value.toFixed(0)
  console.log(crimes)

  return (
    <Fragment>
      <div>
        <main>
          <section id='skills'>
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
          </section>
        </main>
      </div>
    </Fragment>
  )
}

export default CrimeChart
