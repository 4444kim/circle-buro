import { setRequestLocale } from "next-intl/server";
import ProjectSection from "@/app/components/shared/home/projectsSection/Project";
import styles from "./project.module.scss";
import { PROJECTS } from "@/app/lib/constants";

type Props = { params: Promise<{ locale: string }> };

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className={styles.projectWrapper}>
      <ProjectSection PROJECTS={PROJECTS} />
    </div>
  );
}
