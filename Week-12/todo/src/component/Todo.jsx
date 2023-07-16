import { useState, useEffect } from 'react';

import Task from './Task';


function Todo () {

  let [tasks, setTasks] = useState([{
    id: 1,
    title: 'Task 1',
    discription: 'This is task 1',
    done: false,
    timeStamp: Date.now()
  }, {
    id: 2,
    title: 'Task 2',
    discription: 'This is task 2',
    done: true,
    timeStamp: Date.now()
  }]);

  const handleNewTask = () => {
    setTasks((old) => {
      return [
        ...old,
        {
          id: Date.now(),
          title: 'title',
          discription: 'description',
          done: false
        }
      ]
    });
  }

  useEffect(() => {
    
  }, [tasks]);


  return (
    <>
    <div className='m-auto p-auto container divide-y-2 divide-gray-400 hover:divide-y-4 mt-4'>
      <div>
        <h1 className='text-3xl text-center'>Todo List</h1>
      </div>
      <div className='m-2 p-2'>
        <div className='flex justify-end mx-2 px-2'>
          <button type='button' className='bg-indigo-400 rounded-md p-2 mb-1' onClick={handleNewTask}>
            New Task
          </button>
        </div>
        {tasks.map((task) => {
          if (!task.done) {
            return (<Task key={task.id} task={task} setTasks={setTasks} className='my-2'/>)
          }
          return null;
        })}
      </div>
      <div className='m-2 p-2'>
        {tasks.map((task) => {
          if (task.done) {
            return (<Task key={task.id} task={task} />)
          }
          return null;
        })}
      </div>
    </div>
    </>
  )
}

export default Todo;