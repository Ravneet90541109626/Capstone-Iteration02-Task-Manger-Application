// src/components/Navbar.jsx
import PropTypes from 'prop-types';  // Import PropTypes

const Navbar = ({ setSection }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setSection('home')}>Home</li>
        <li onClick={() => setSection('tasks')}>Tasks</li>
        <li onClick={() => setSection('about')}>About</li>
        <li onClick={() => setSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

// PropTypes validation
Navbar.propTypes = {
  setSection: PropTypes.func.isRequired,
};

export default Navbar;
