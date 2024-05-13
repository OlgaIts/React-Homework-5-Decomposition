import styles from "./NavMenu.module.scss";

interface NavMenuProps {
  list: string[];
}

export const NavMenu = ({list}: NavMenuProps) => {
  return (
    <ul className={styles.wrap}>
      {list.map((item) => (
        <li key={item}>
          <a href='#'>{item}</a>
        </li>
      ))}
    </ul>
  );
};
