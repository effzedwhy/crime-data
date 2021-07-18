import React, { Fragment} from 'react'
import classes from './CrimeChart.module.css'

const CrimeChart = props => {

  const letter = Object.values(props.crimes)
  
  const total = letter.reduce((a, b) => a + b)
console.log(props.crimes)
  let percentage = []

  let num = 0
  while (num < letter.length) {
    percentage.push((letter[num] / total) * 100)
    num++
  }

  console.log(total)
  console.log(letter)

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

  const text1 = percentage[0].toFixed(0)
  const text2 = percentage[1].toFixed(0)
  const text3 = percentage[2].toFixed(0)
  const text4 = percentage[3].toFixed(0)
  const text5 = percentage[4].toFixed(0)
  const text6 = percentage[5].toFixed(0)
  const text7 = percentage[6].toFixed(0)
  const text8 = percentage[7].toFixed(0)
  const text9 = percentage[8].toFixed(0)
  const text10 = percentage[9].toFixed(0)
  const text11 = percentage[10].toFixed(0)
  const text12 = percentage[11].toFixed(0)
  const text13 = percentage[12].toFixed(0)
  const text14 = percentage[13].toFixed(0)

  console.log(text1)

  return (
    <Fragment>
      <div>
        <main>
          <section id='skills'>
            <article className={classes.skills}>
              <div className={classes['t-6']}>
                <p>
                  {text1}% -Anti-social Behaviour
                  <span></span>
                  <span style={width1} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text2}% -Bicycle Theft<span></span>
                  <span style={width2} className={classes.skills}></span>
                </p>
              </div>

              <div className={classes['t-6']}>
                <p>
                  {text3}% -Burglary<span></span>
                  <span style={width3} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text4}% -Criminal Damage Arson<span></span>
                  <span style={width4} className={classes.skills}></span>
                </p>
              </div>

              <div className={classes['t-6']}>
                <p>
                  {text5}% -Drugs<span></span>
                  <span style={width5} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text6}% -Other Theft<span></span>
                  <span style={width6} className={classes.skills}></span>
                </p>
              </div>

              <div className={classes['t-6']}>
                <p>
                  {text7}% - Possession of Weapons<span></span>
                  <span style={width7} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text8}% -Public Order<span></span>
                  <span style={width8} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text9}% - Robbery<span></span>
                  <span style={width9} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text10}% -Shoplifting<span></span>
                  <span style={width10} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text11}% -Theft from the person<span></span>
                  <span style={width11} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text12}% -Vehicle crime<span></span>
                  <span style={width12} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text13}% -Violence and sexual offences<span></span>
                  <span style={width13} className={classes.skills}></span>
                </p>
              </div>
              <div className={classes['t-6']}>
                <p>
                  {text14}% -Other crime<span></span>
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
