import styles from './ProjectSection.module.css'
import projectsList from './Components/ProjectsList';
import ProjectsDisplay from './Components/ProjectsDisplay';

export default function ProjectSection({info}) {
    console.log(info);
    return (
      <div className={styles.projectSection}>
            <h1 className={styles.projectHeader}>Projects</h1>
          <div className='projectsGrid'>
            {projectsList.map((item)=> {
            return (<ProjectsDisplay info={item} key={item.name}/>)
        })}
        </div>
      </div>
    )
}