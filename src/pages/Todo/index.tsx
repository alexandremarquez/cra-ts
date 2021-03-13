import React from 'react';
import {
  Container,
  StyledForm,
  StyledInput,
  StyledInputSubmit,
} from './styles';

interface TaskType {
  [key: string]: string;
}

const Todo: React.FC = () => {
  const [editTask, setEditTask] = React.useState('');
  const [tasks, setTasks] = React.useState<TaskType>({});

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const randomkey = Math.floor(Math.random() * Date.now());

    setTasks(prevState => ({
      ...prevState,
      [randomkey]: editTask,
    }));
  }
  function handleChange(
    e: React.SyntheticEvent & { target: HTMLInputElement },
  ) {
    e.preventDefault();
    setEditTask(e.target.value);
  }
  return (
    <Container>
      <h2>Todo App</h2>
      <ul>
        <li>Creating object tasks with dynamic keys.</li>
        <li>Render tasks with Object.keys().</li>
      </ul>
      <h2>Todo App</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          id="newtask"
          type="text"
          name="newtask"
          placeholder="Add new task"
          onChange={handleChange}
        />
        <StyledInputSubmit type="submit" value="Add" />
      </StyledForm>
      <div>
        <h2>Tasks</h2>
        <ul>
          {Object.keys(tasks).map(key => (
            <li key={key}>{tasks[key]}</li>
          ))}
          {/* {tasks.map(task => (
          <p key={task}>{task}</p>
        ))} */}
        </ul>
      </div>
    </Container>
  );
};

export default Todo;
