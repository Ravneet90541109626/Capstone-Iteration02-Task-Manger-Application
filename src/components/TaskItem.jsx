// src/components/TaskItem.jsx
import PropTypes from 'prop-types';

const TaskItem = ({ task }) => {
  return <li>{task}</li>;
};

// PropTypes validation
TaskItem.propTypes = {
  task: PropTypes.string.isRequired,  // Expecting a string prop for each task
};

export default TaskItem;
