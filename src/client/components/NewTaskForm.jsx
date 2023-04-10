import createTask from "@wasp/actions/createTask";
import { useState } from "react";

const NewTaskForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const description = e.target.description.value;
      e.target.reset();
      setLoading(true);
      await createTask({ description });
      setLoading(false);
    } catch (err) {
      window.alert("Error: " + err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="inline-flex justfiy-between bg-yellow-400 p-4 drop-shadow-md rounded-xl">
      <input 
        name="description"
        type="text"
        placeholder="I need to..."
        defaultValue=""
        className="basis-3/4 bg-white border-transparent rounded mt-1 focus:border-gray-500 focus:bg-white focus:ring-0"
      />
      <span className="flex justify-center basis-1/4 ml-2">
        <input 
          type="submit"
          value="+"
          disabled={loading}
          className={`disabled:opacity-25 disabled:cursor-not-allowed text-center cursor-pointer mt-2 ml-1 text-base font-bold rounded-xl bg-white p-2 px-4 transition-all drop-shadow hover:bg-gray-200 active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-100`}
        />
      </span>
    </form>
  )
}

export default NewTaskForm;