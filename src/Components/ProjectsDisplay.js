import styles from './ProjectsDisplay.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function ProjectsDisplay({info}) {
    console.log(info);
    return (
        <section id="projects" className={styles.projectContainer}>
            <div data-aos-duration="700" data-aos="fade-up" className={styles.projectInformation}>
                    <img className={styles.projectImg} src={info.src} alt={info.alt}></img>
                
                <div className={styles.projectDescriptionWrapper}>
                    <h1 className={styles.projectName}>{info.name}</h1>
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