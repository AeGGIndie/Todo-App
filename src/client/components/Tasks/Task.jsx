import updateTask from "@wasp/actions/updateTask";

const Task = ({ task }) => {
  const handleIsDoneChange = async (e) => {
    try {
      await updateTask({
        taskId: task.id,
        data: { isDone: e.target.checked }
      });
    } catch(err){
      window.alert("Error while updating task: ", err.message);
    }
  }
  return (
    <div className="flex mx-1 my-2 py-2 border-b-2 border-b-gray-50">
      <input 
        type="checkbox" 
        id={task.id}
        checked={task.isDone}
        onChange={handleIsDoneChange}
        className={`mt-1 text-yellow-400 border-transparent transition-all cursor-pointer hover:bg-yellow-400 checked:bg-yellow-500 focus:ring-yellow-500 rounded-3xl`}
      />
      <span className=" font-medium ml-2 mb-2 px-1 w-full">
        {task.description}
      </span>
    </div>
    
  )
};

export default Task;