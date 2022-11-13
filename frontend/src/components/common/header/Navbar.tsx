import {Link} from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <nav>
      <div className={styles.mainComponent}>
        <section className={styles.title}>
          <Link to="/">Goal Setter</Link>
        </section>
        <section>
          <ul className={styles.navList}>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
