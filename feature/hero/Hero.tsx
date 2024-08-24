import style from "./hero.module.scss";
import { infoType } from "@/types/info";
import { scrollTosection } from "@/helpers/healper";
import Image from "next/image";
import MAJED from "@/data/majed";
const Hero = () => {
  const { information } = MAJED;
  return (
    <section className={`${style.hero} `}>
      <div className={`${style.inner} animate-hero`}>
        <div className={style["animate-inner"]}>
          <div className={style.title}>
            <div className={style.name}>
              <h1>{information.full_name}</h1>
              <div className={style.info}>
                <p>{information.description}</p>
              </div>
            </div>
          </div>
          <div className={style["user-game"]}>
            <Image
              src={information.hero}
              alt="Majed Karimi"
              height={300}
              width={437}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
