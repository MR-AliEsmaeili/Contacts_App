import styles from "./Header.module.css";
import imp from "../assets/fav.webp";
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>
          <p>اپلیکیشن مدیریت مخاطبین</p>
          <img src={imp} />
        </h2>
      </div>
    </>
  );
};

export default Header;
