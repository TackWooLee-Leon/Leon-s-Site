import styles from './Landing.module.css'

export default function Landing() {
    return (
        <>

        {/* hero section */}
        <section id="about" className={styles.landingContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
                <img src="/images/picture.jpg" alt="My Picture"></img>
            </div>

            <div className={styles.introductionContainer}>
                
                {/* <div className={styles}></div> */}
                    <h2 id={styles.head}>Hi, my name is</h2>
                    <h1 id={styles.name}>Leon Lee.</h1>
                    <h1 id={styles.title}>Front-End Web Developer</h1>
                    {/* add "click to read more about me" after willing to learn */}
                    <p>
                        I'm a passionate Front-End Web Developer from Toronto, Canada.
                        {/* I'm from South Korea but I was born in China, so I know how to speak Mandarin, but ironically I don't speak 
                        Korean. (I know...)
                        I picked up programming about a year and half ago, since then I kept learning while I can and now I've built several projects
                        in vanilla JS and React JS.  */}
                    </p>
                    <div className={styles.logosContainer}>
                        <img src="/images/html.svg" alt="HTML Logo"></img>
                        <img src="/images/css.svg" alt="CSS Logo"></img>
                        <img src="/images/javascript.svg" alt="JS Logo"></img>
                        <img src="/images/react.svg" alt="React Logo"></img>
                        <img src="/images/github.svg" alt="GitHub Logo"></img>
                    </div>
                
            </div>
            </div>

            <div className={styles.curve}></div>
            <div className={styles.slope}></div>
            <div className={styles.stickman}></div>
        </section>
       
        </>
        
    )
}