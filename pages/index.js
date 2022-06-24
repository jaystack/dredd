import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'



export default function Home() {
  const [judges, setJudges] = useState([]);
  const [judge, setJudge] = useState(null);
  const [cluster, setCluster ] = useState(null);

  
  const loadJudgesList = async () => {
    const response = await fetch('/api/judges');
    const result = await response.json();
    setJudges(result);
  }

  const selectJudge = async (j, c) => {
    setJudge(j)
    setCluster(c)

    
  }

  useEffect(() => {
    loadJudgesList()
  }, []);

  const pickJudge = async (j) => {
    setJudge(j)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Judge Dredd</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Judge Dredd
        </h1>
        {
        !judge &&
          <>
          <h3>Who Are You?</h3>
          <ul>
          {judges.map(
            ({name, cluster}) => <li key={name}><a href="#" onClick={e => selectJudge(name, cluster)}>{name}</a></li>
          )}
          </ul>
          </>
        }
        {
          judge &&
          <>
            <h3>Welcome Judge {judge}</h3>
          </> 
        }
      </main>

    </div>
  )
}
