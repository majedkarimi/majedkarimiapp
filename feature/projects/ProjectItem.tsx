import React from "react";
import style from "./projects.module.css";
import Image from "next/image";
import { projectsType } from "@/types/projects";
const ProjectItem: React.FC<projectsType> = (props) => {
  return (
    <div className={`${style.item} `}>
      <div className={style.title}>
        <div className={style.source}>
          <Image
            src={props.source_code_img}
            alt={props.name}
            width={40}
            height={40}
          />
        </div>
        <a
          href={props.source_code_link}
          target="_blank"
          className={style.image}
        >
          <span>{props.name}</span>
        </a>
      </div>
      <div className={style.info}>
        <p>{props.description}</p>
      </div>
      <div className={style.tags}>
        {props.tags.map((item, index) => (
          <span className={style.tag} key={index}>{`${item}`}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
