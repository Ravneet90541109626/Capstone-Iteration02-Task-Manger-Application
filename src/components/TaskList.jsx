// src/components/TaskList.jsx
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
};

// PropTypes validation
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,  // Array of strings for tasks
};

export default TaskList;
