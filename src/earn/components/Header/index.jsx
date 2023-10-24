import styles from "./index.module.css";
import Link from "next/link";
import { Button, Menu, MenuItem, Popover } from "@mui/material";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_left}>
        <img
          src="/Header_title.png"
          alt=""
          className={styles.header_icon}
        ></img>
        <ul className={styles.header_menu}>
          <li>
            <Link href="">Trade</Link>
          </li>
          <li>
            <Link href="">Earn</Link>
          </li>
          <li>
            <Link href="">Statistics</Link>
          </li>
          <li>
            <Link href="">Documentation</Link>
          </li>
        </ul>
      </div>
      <div className={styles.header_right}>
      <Button className={styles.header_btn1}></Button>
      <Button className={styles.header_btn2}></Button>
      <img src="/Header_setting.png" alt="" className={styles.header_setting}></img>

      </div>
    </div>
  );
};

export default Header;
