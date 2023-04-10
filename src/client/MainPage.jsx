import logout from "@wasp/auth/logout";
import getTasks from "@wasp/queries/getTasks";
import { useQuery } from "@wasp/queries";

import NewTaskForm from "./components/NewTaskForm";
import TasksList from "./components/Tasks/TasksList";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import "./Main.css"

const MainPage = ({ user }) => {
  const { data: tasks, isFetching, error } = useQuery(getTasks);
  const usernameHeaderText = `${user.username}'s To-do List`.toUpperCase()

  return (
    <div className="h-full">
      <div id="layout-wrapper" className="h-full">
        <div id="navigation-bar" className="flex justify-between box-border min-h-16 h-16 max-h-16 bg-yellow-400 drop-shadow-md">
        <h1 className="self-center font-bold mb-2 pl-4 text-xl md:text-2xl">{usernameHeaderText}</h1>
          <div className="h-full flex justify-center">
            <button 
              onClick={logout} 
              className="font-bold px-4 h-full transition-all hover:bg-yellow-500 active:bg-yellow-600"
            >
              Logout
              <ArrowRightOnRectangleIcon className="inline h-6 w-6 mb-1 ml-1"/> 
            </button>
          </div>
        </div>
        <div id="content-wrapper" className="h-full box-border flex justify-center">
          <main id="content" className="flex-none flex flex-col overflow-clip self-center min-w-32 w-30 max-w-xs sm:w-3/4 md:max-w-5xl min-h-20 h-3/4 max-h-80 sm:max-h-96 mb-4 bg-gray-200 rounded-xl drop-shadow-xl">
            <NewTaskForm />

            
            {tasks && <TasksList tasks={tasks}/>}
            {isFetching && <p>Fetching data...</p>}
            {error && <p>An error occurred + {error}</p>}
          </main>
        </div>
      </div>
    </div>
    )
}


export default MainPage;
