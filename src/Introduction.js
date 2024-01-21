import styles from './Introduction.module.css'

export default function Introduction() {
    return (
        <div id={styles.introductionContainer}>
            <div className={styles.imgContainer}>
                <img src="/images/picture.jpg" alt="My Picture"></img>
            </div>
            <h1 className={styles.header}>
                Front-End Web Developer
            </h1>
            {/* add "click to read more about me" after willing to learn */}
            <p>
                Hi, my name is Tack Woo Lee but you can call me Leon. I'm a passionate Front-End Web Developer from Toronto, Canada. 
                I'm from South Korea but I was born in China, therefore I know how to speak Mandarin, but ironically I don't speak 
                Korean. (I know...)
                I picked up programming about a year and half ago, since then I kept learning while I can and now I've built several projects
                in vanilla JS and React JS. 
            </p>
            <span>
                technologies
            </span>
        </div>
    )
}