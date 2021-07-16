import React, { Fragment } from 'react'
import classes from './CrimeChart.module.css'

const width1 = { width: '50%' }
const width2 = { width: '50%' }
const width3 = { width: '50%' }
const width4 = { width: '50%' }
const width5 = { width: '50%' }
const width6 = { width: '50%' }
const width7 = { width: '50%' }
const width8 = { width: '50%' }
const width9 = { width: '50%' }
const width10 = { width: '50%' }
const width11 = { width: '50%' }
const width12 = { width: '50%' }
const width13 = { width: '50%' }
const width14 = { width: '50%' }

const CrimeChart = () => {
  return (
    <Fragment>
      <div>
        <main>
          <section id='skills' >
            <article className={classes.skills}>
              <div className={classes['t-6']}>
                <p>
                  Anti-social Behaviour
                  <span></span>
                  <span style={width1} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Bicycle Theft<span></span>
                  <span style={width2} className={classes.skills}></span>
                </p>
              </div>

              <div className={classes['t-6']}>
                <p>
                  Burglary<span></span>
                  <span style={width3} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Criminal Damage Arson<span></span>
                  <span style={width4} className={classes.skills}></span>
                </p>
              </div>

              <div className={classes['t-6']}>
                <p>
                  Drugs<span></span>
                  <span style={width5} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Other Theft<span></span>
                  <span style={width6} className={classes.skills}></span>
                </p>
              </div>

              <div className={classes['t-6']}>
                <p>
                  Possession of Weapons<span></span>
                  <span style={width7} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Public Order<span></span>
                  <span style={width8} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Robbery<span></span>
                  <span style={width9} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Shoplifting<span></span>
                  <span style={width10} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Theft from the person<span></span>
                  <span style={width11} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Vehicle crime<span></span>
                  <span style={width12} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Violence and sexual offences<span></span>
                  <span style={width13} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  Other crime<span></span>
                  <span style={width14} className={classes.skills}></span>
                </p>
              </div>
            </article>
          </section>
        </main>
      </div>
    </Fragment>
  )
}

export default CrimeChart
