import styles from "./Greetings.module.css"

export function Greetings() { 
    return(
      <div>
        <h1 className={styles.Head}>Hello People</h1>
        <h2 className={styles.App}>I Love React</h2> 
        <p>I love coding in react</p>
      </div>
    )
  }
