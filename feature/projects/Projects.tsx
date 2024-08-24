"use client";
import { useEffect } from "react";
import style from "./projects.module.css";
import ProjectItem from "./ProjectItem";
import { placeHolder } from "@/types/common";
import Placeholder from "@/Components/placeHolder/Placeholder";
const Projects = () => {
  return (
    <section className={style.project} id="projects">
      <div className={`${style.inner} container`}>
        {false ? (
          <div className="flex flex-wrap justify-center items-center gap-8 w-full">
            <Placeholder type={placeHolder.CARD} number={3} />
          </div>
        ) : (
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
              {/* {data?.map((item) => (
                <ProjectItem {...item} key={item.id} />
              ))} */}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
