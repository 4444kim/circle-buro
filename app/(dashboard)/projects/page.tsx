import ProjectSection from "@/app/components/shared/home/projectsSection/Project";
import styles from "./project.module.scss";

function ProjectsPage() {
  return (
    <div className={styles.projectWrapper}>
      <ProjectSection />
    </div>
  );
}

export default ProjectsPage;
