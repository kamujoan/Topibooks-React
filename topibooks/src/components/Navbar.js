import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Switch } from '@material-ui/core';
import Cookies from 'js-cookie';



export default function Navbar({ darkMode, dispatch}) {
  const [open, setOpen] = useState(false);
  const darkModeChanger = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        TopiBooks
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/all-books" className={styles.link}>
            All Books
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/romance" className={styles.link}>
            Romance
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/dystopian" className={styles.link}>
            Dystopian
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/classics" className={styles.link}>
            Classics
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/motivational" className={styles.link}>
            Motivational
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/kids" className={styles.link}>
            Children
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/african" className={styles.link}>
            African
          </Link>
        </li>
      </ul>
      <Switch
        checked={darkMode}
        onChange={darkModeChanger}
        className={styles.switch}
      >
        DarkMode
      </Switch>

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? '0px' : '-50vw' }}
      >
        <li className={styles.menuItem}>
          <Link to="/" className={styles.linkItem}>
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/all-books" className={styles.linkItem}>
            All Books
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/romance" className={styles.linkItem}>
            Romance
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/dystopian" className={styles.linkItem}>
            Dystopian
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/classics" className={styles.linkItem}>
            Classics
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/motivational" className={styles.linkItem}>
            Motivational
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/kids" className={styles.linkItem}>
            Children
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/african" className={styles.linkItem}>
            African
          </Link>
        </li>
      </ul>
    </div>
  );
}
