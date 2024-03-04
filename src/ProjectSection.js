import styles from './ProjectSection.module.css'
import projectsList from './Components/ProjectsList';
import ProjectsDisplay from './Components/ProjectsDisplay';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export default function ProjectSection({info}) {
    console.log(info);
    return (
      <div className={styles.projectSection}>
            <h1 data-aos="fade-right" data-aos-duration="500" id="projects" className={styles.projectHeader}>Projects</h1>
          <div className={styles.projectsGrid}>
            {projectsList.map((item)=> {
            return (<ProjectsDisplay info={item} key={item.name}/>)
        })}
          </div>
        
      </div>
    )
}