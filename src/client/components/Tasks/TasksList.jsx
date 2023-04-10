import Task from "./Task";

const TasksList = ({ tasks }) => {
  const tasksToRender = tasks ? tasks.filter(task => !task.isDone) : null

  if (!tasksToRender || !tasksToRender.length){
    return (
      <p className="underline text-gray-500 break-normal self-center m-4">
        Start adding to your list by typing in the space above!
      </p>
    );
  }
  return (
    <div id="taskList" className="max-w-sm sm:max-w-5xl overflow-auto p-4">
      {tasksToRender.map((task, index) => 
        <Task task={task} key={index} />
      )}
    </div>
  )
};

export default TasksList;