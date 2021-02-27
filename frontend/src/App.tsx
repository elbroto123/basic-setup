import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { TaskDefinition } from "./ObjectDefinitions/TaskDefinition"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState<TaskDefinition[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer: TaskDefinition[] = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8080/tasks");
    const data: TaskDefinition[] = await res.json();

    return data;
  }

  // Fetch task
  const fetchTask = async (id: number) => {
    const res = await fetch(`http://localhost:8080/tasks/${id}`);
    const data: TaskDefinition = await res.json();

    return data;
  }

  // Add Task
  const addTask = async (task: TaskDefinition) => {
    console.log(task);
    const res = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task)
    });

    const data: TaskDefinition = await res.json();

    setTasks([...tasks, data]);
  }

  // Delete Task
  const deleteTask = async (id: number) => {
    const resFromServer = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "DELETE"
    })

    // If the server responds with true remove the entry from the state
    if(resFromServer){
      setTasks(tasks.filter((task) => {
        return task.id !== id
      }))
    }
  }

  // Toggle Reminder
  const toggleReminder = async (id: number) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => {
      if(task.id === id){
        task.reminder = data.reminder;
      }
      return task;
    }))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} title="hello title" showAdd={showAddTask} ></Header>
        <Route path="/" exact render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask}></AddTask>}
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
            </>
          )} />
        <Route path="/about" component={About} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
