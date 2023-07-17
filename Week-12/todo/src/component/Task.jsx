import { useState, useEffect } from 'react';


function Task ({task, setTasks}) {

  const [isEditMode, setIsEditMode] = useState(false);

  let taskCss = '';

  if (task.done) {
    taskCss = {
      successColor: 'bg-lime-100'
    }
  }

  const handleDeleteTask = (id) => {
    console.log('delete id', id);
    setTasks((old) => {
      console.log(old.filter((task) => {
        return task.id !== id;
      }));
      return old.filter((task) => {
        return task.id !== id;
      })
    });
  }

  const handleEdit = (e, newTask) => {
    e.preventDefault();
    setIsEditMode(false);

    setTasks((old) => {
      return old.map((task) => {
        if (task.id === newTask.id) {
          return {
            ...task,
            title: task.title,
            discription: task.discription
          }
        }
        return task;
      })
    });
  }

  const handleDoneTask = (doneTask) => {
    setTasks((old) => {
      return old.map((task) => {
        if (task.id === doneTask.id) {
          return {
            ...task,
            done: true
          }
        }
        return task;
      })
    });
  }

  useEffect(() => {
    console.log(isEditMode);
  }, [isEditMode]);
  


  return (
  <div className={`border-2 flex flex-col ${taskCss.successColor} my-1` }>
      {isEditMode ? (
        <>
          <div>
          <form onBlur={(e) => handleEdit(e, task)} className='flex flex-col my-1'>
            <input type="text" defaultValue={task.title} onChange={(e) => task.title = e.target.value} className='p-2 border-0 focus:outline-0'/>
            <input type="text" defaultValue={task.discription} onChange={(e) => task.discription = e.target.value} className='p-2 focus:outline-0'/>
          </form>
          </div>
        </>
      ) : (
        <>
          <span className="p-2">{task.title}</span>
          <span className="p-2">{task.discription}</span>
        </>
      )}
      <div className="flex flex-row justify-end mx-2 ">
      {
        !task.done &&
        <>
          {!isEditMode && (
            <button type="button" className="bg-sky-500 rounded-md p-2 mb-1 mx-2" onClick={() => {handleDoneTask(task)}}> Done </button>
          )}
          <button type="button" className="bg-sky-500 rounded-md p-2 mb-1 mx-2 align-middle w-10" onClick={() => setIsEditMode(true)}> <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-12.023-7.083c-1.334 3.916-1.48 4.232-1.48 4.587 0 .527.46.749.749.749.352 0 .668-.137 4.574-1.493zm1.06-1.061 3.846 3.846 8.824-8.814c.195-.195.293-.451.293-.707 0-.255-.098-.511-.293-.706-.692-.691-1.742-1.741-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z" fill-rule="nonzero"/></svg> </button>
        </>
      }
        {/* Delete button */}
        <button type="button" className="bg-sky-500 rounded-md p-2 mb-1 mx-2 align-middle w-10" onClick={() => handleDeleteTask(task.id)}> <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg> </button>
      </div>
  </div>)
}

export default Task;
