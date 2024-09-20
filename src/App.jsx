import "./App.css"
import { useState } from "react"
import AddFrom from "./components/AddFrom"
import Header from "./components/Header"
import Item from "./components/Item"
import CalendarComponent from './components/Calendar';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Solve a Rubik's cube", time: "08:00", date: "2024-01-01", completed: false },
        { id: 2, title: "Watch a documentary", time: "09:00", date: "2024-01-01", completed: false },
        { id: 3, title: "Organize pantry", time: "10:00", date: "2024-01-01", completed: false }
    ])

    const [title, setTitle] = useState('')
    const [time, setTime] = useState('08:00')
    const [date, setDate] = useState('2024-09-20')
    const [editId, setEditId] = useState(null)

    function deleteTask(id) {
        const result = tasks.filter(item => item.id !== id)
        setTasks(result)
    }

    function saveTask(event) {
        event.preventDefault()
        if (!title) {
            alert("Please enter information.")
        } else if (editId) {
            const updateTask = tasks.map(item => {
                if (item.id === editId) {
                    return { ...item, title: title, time: time, date: date }
                }
                return item;
            })
            setTasks(updateTask)
            setEditId(null)
            setTitle('')
            setTime('08:00')
            setDate('2024-09-20')
        } else {
            const newTask = {
                id: Math.floor(Math.random() * 1000),
                title: title,
                time: time,
                date: date,
                completed: false
            }
            setTasks([...tasks, newTask])
            setTitle('')
            setTime('08:00')
            setDate('20-09-2024')
        }
    }

    function editTask(id) {
        setEditId(id)
        const editTask = tasks.find(item => item.id === id)
        setTitle(editTask.title)
        setTime(editTask.time)
        setDate(editTask.date)
    }

    function toggleCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className="App">
            {/* <Header /> */}
            <div className="container">
                <AddFrom title={title} setTitle={setTitle} time={time} setTime={setTime} date={date} setDate={setDate} saveTask={saveTask} editId={editId} />

                <section className="itemTask-container">
                    {tasks.map(data => (
                        <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} toggleCompleted={toggleCompleted} />
                    ))}
                </section>
            </div>
            <CalendarComponent />
        </div>
    )
}

export default App
