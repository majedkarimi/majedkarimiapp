"use client";
import { useEffect } from "react";
import style from "./projects.module.css";
import ProjectItem from "./ProjectItem";
import { placeHolder } from "@/types/common";
import Placeholder from "@/components/placeHolder/Placeholder";
import MAJED from "@/data/majed";
const Projects = () => {
  return (
    <section className={style.project} id="projects">
      <div className={`${style.inner} container`}>
        <>
          <div className={style.head}>
            <div className={style.name}>
              <h3>Projects.</h3>
            </div>
            <div className={style.desc}>
              <p>Selected Projects</p>
            </div>
          </div>
          <div className={style.items}>
            {MAJED.projects?.map((item) => (
              <ProjectItem {...item} key={item.id} />
            ))}
            <div>hiii</div>
          </div>
        </>
      </div>
    </section>
  );
};

export default Projects;
