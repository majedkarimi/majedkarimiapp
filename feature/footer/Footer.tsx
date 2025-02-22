import React from "react";
import style from "./footer.module.css";
import MAJED from "@/data/majed";
const Footer = () => {
  const { information } = MAJED;
  return (
    <div className={style.footer}>
      <div className={style.inner}>
        <div className="flex flex-col gap-1">
          <div className="copyright">
            <span>Copyright © 2025 Majed Karimi. All rights reserved.</span>
          </div>
          <div className={style.information}>
            {/* <div className={style.mobile}>
              <span>Phone:</span>
              <a href={`tel:+98${props.phone}`}>{`0${props.phone}`}</a>
            </div> */}
            <div className={style.email}>
              <span>Email:</span>
              <a href={`mailto: ${information.email}`}>{information.email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
