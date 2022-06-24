import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'



export default function Home() {
  const [judges, setJudges] = useState([]);
  const [judge, setJudge] = useState(null);
  const [cluster, setCluster ] = useState(null);
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState(null);
  const [scoreItems, setScoreItems] = useState([]);

  
  const loadJudgesList = async () => {
    const response = await fetch('/api/judges');
    const result = await response.json();
    result = result.sort(function(a, b) {
      return b.name < a.name?1:-1;
  });
    setJudges(result);
  }

  const selectJudge = async (j, c) => {
    setJudge(j)
    setCluster(c)

    const response = await fetch('/api/teams');
    const result = await response.json();    
    const teams = result.filter(t => t.cluster === c);
    setTeams(teams);
  }

  const selectTeam = async(t) => {
    setTeam(t);
    const response = await fetch('/api/scoreitems');
    const result = await response.json();
    setScoreItems(result)
  }

  const unselectTeam = async () => {
    setTeam(null)
  }

  const setScore = async(si, s) => {
    //si: score item
    //s: score
    fetch('/api/scoreitems', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({scoreItem:si, score:s, team, judge})})
  }

  useEffect(() => {
    loadJudgesList()
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Judge Dredd</title>
      </Head>

      <main className={styles.main}>
        {
        !judge &&
          <>
          <h1 className={styles.title}>
            Welcome to Judge Dredd Application
          </h1>
          <h2>Your Assesments Starts Now</h2>
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
            {teams.length && !team && 
            <>
            <h3>Select Team</h3>
            <ul>
              {teams.map(t => <li key={t.team}><a onClick={(e) => selectTeam(t.team)}>{t.team}</a></li>)}
            </ul>
            </>
            }
            {team && scoreItems.length &&
            <>
            <h3>Set Scores</h3>
            <h4>Team {team}</h4>
            <ul>
              {scoreItems.map(s => <li key={s}><span style={{width:200}}>{s}</span>
                <input 
                onChange={(e) => setScore(s, e.target.value)}
                placeholder='1..5' min={1} max={5} type="number" style={{width:50}}/></li>)}
            </ul>
            <a onClick={unselectTeam}>Go Back</a>
            </>
            }

          </> 
        }
      </main>

    </div>
  )
}
