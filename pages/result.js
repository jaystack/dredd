import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'



export default function Home() {
  const [result, setResult] = useState([]);

  const loadResult = async () => {
    const response = await fetch('/api/result');
    const result = await response.json();
    calculate(result)

    const r = Object.keys(result).map(k => ({name: k, ...result[k] })).sort(function(a, b) {
        return b._avg - a._avg;
    });

    setResult(r);
  }

  const calculate = (result) => {
    Object.keys(result).map((team) => {
      const avgSum = 0;
      Object.keys(result[team]).map((scoreItem) => {
        const scoreSum = 0;
        Object.keys(result[team][scoreItem]).map((judge) => {
          scoreSum += result[team][scoreItem][judge]
        })
        result[team][scoreItem]._avg = scoreSum / Object.keys(result[team][scoreItem]).length
        avgSum += result[team][scoreItem]._avg
      })
      result[team]._avg = avgSum / Object.keys(result[team]).length
    })

  }

  useEffect(() => {
    setInterval(() => loadResult(), 3000)
    
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Result</title>
      </Head>

      <main className={styles.main}>
      {
        result &&
          <>
          <h1 className={styles.title}>
            Team Live Summary
          </h1>
          <ul>
          {result.map(team => {
            return <li>{team.name} {Math.round(team._avg * 1000) / 1000}</li>
          })}
          </ul>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </>
      }
      </main>

    </div>
  )
}
