import styles from './Projects.module.css'

export default function Projects({info}) {
    console.log(info);
    return (

        <div className={styles.container}>
            
            <div className={styles.projectCard}>
                <img src={info.src} alt={info.alt}></img>
                <div className={styles.wrapper}>
                    <p> {info.description} </p>
                    <span>GitHub Repo</span>
                </div>
            </div>
        </div>

        
    )
}