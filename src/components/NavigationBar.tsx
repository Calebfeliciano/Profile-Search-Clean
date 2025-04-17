import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/saved"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Shortlisted Profiles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
