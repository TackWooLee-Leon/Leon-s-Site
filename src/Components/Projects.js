import styles from './Projects.module.css'

export default function Projects({info}) {
    console.log(info);
    return (

        <section id="projects" className={styles.projectContainer}>
            <h1 className={styles.projectName}>{info.name}</h1>
            <div className={styles.projectInformation}>
                <img className={styles.projectImg} src={info.src} alt={info.alt}></img>
                <div className={styles.wrapper}>
                    <p> {info.description} </p>
                    <div className={styles.repo}>
                        <img src="/images/github.svg" alt="GitHub Logo"></img>
                        <span><a href={info.href} target="_blank">GitHub Repo</a></span>
                    </div>
                </div>
            </div>
        </section>

        
    )
}