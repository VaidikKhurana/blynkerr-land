import Head from 'next/head';
import styles from '../styles/Easter.module.css';

export default function page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Easter Fun Page</title>
        <meta name="description" content="A fun-filled Easter-themed page with interactive elements and surprises!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>🎉 Welcome to the Easter Fun Page! 🐰</h1>

        <p className={styles.description}>
          Enjoy a collection of fun activities, games, and surprises for Easter! 🌸
        </p>

        <div className={styles.grid}>
          <a href="#eggHunt" className={styles.card}>
            <h2>Egg Hunt &rarr;</h2>
            <p>Click to find hidden Easter eggs around the page!</p>
          </a>

          <a href="#jokes" className={styles.card}>
            <h2>Easter Jokes &rarr;</h2>
            <p>Laugh out loud with some egg-cellent jokes!</p>
          </a>

          <a href="#facts" className={styles.card}>
            <h2>Fun Facts &rarr;</h2>
            <p>Learn some fun and quirky facts about Easter!</p>
          </a>

          <a href="#game" className={styles.card}>
            <h2>Mini Game &rarr;</h2>
            <p>Play an Easter-themed mini game right in your browser!</p>
          </a>
        </div>

        <div id="eggHunt" className={styles.section}>
          <h2>🐣 Easter Egg Hunt</h2>
          <p>Find the hidden eggs around the page. Click on them to reveal surprises!</p>
        </div>

        <div id="jokes" className={styles.section}>
          <h2>😂 Easter Jokes</h2>
          <ul>
            <li>Why don’t eggs tell jokes? They’d crack each other up!</li>
            <li>What kind of music do bunnies like? Hip-hop!</li>
          </ul>
        </div>

        <div id="facts" className={styles.section}>
          <h2>📚 Fun Easter Facts</h2>
          <ul>
            <li>The largest Easter egg ever made was over 25 feet high and weighed over 8,000 pounds!</li>
            <li>Easter is celebrated on the first Sunday after the full moon following the March equinox.</li>
          </ul>
        </div>

        <div id="game" className={styles.section}>
          <h2>🎮 Mini Game</h2>
          <p>Play our Easter-themed catch-the-egg game! Coming soon...</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Easter Fun Page. Made with ❤️ for Easter enthusiasts.</p>
      </footer>
    </div>
  );
}
