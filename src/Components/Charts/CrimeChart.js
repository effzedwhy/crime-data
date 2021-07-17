import React, { Fragment } from 'react'
import classes from './CrimeChart.module.css'

const CrimeChart = API => {
  const { A, B, C, D, E, F, G, H, I, J, K, L, M, N } = API
  const total = A + B + C + D + E + F + G + H + I + J + K + L + M + N

  const letter = [A, B, C, D, E, F, G, H, I, J, K, L, M, N]
  let percentage = []

  let num = 0
  while (num < letter.length) {
    percentage.push((letter[num] / total) * 100)
    num++
  }

  console.log(total, A)

  const width1 = { width: `${percentage[0]}%` }
  const width2 = { width: `${percentage[1]}%` }
  const width3 = { width: `${percentage[2]}%` }
  const width4 = { width: `${percentage[3]}%` }
  const width5 = { width: `${percentage[4]}%` }
  const width6 = { width: `${percentage[5]}%` }
  const width7 = { width: `${percentage[6]}%` }
  const width8 = { width: `${percentage[7]}%` }
  const width9 = { width: `${percentage[8]}%` }
  const width10 = { width: `${percentage[9]}%` }
  const width11 = { width: `${percentage[10]}%` }
  const width12 = { width: `${percentage[11]}%` }
  const width13 = { width: `${percentage[12]}%` }
  const width14 = { width: `${percentage[13]}%` }
  console.log(width1, width2, width3)
  return (
    <Fragment>
      <div>
        <main>
          <section id='skills'>
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
