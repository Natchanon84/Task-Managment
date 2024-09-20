import "./Item.css"

function Item({ data, deleteTask, editTask, toggleCompleted }) {
    // ฟังก์ชันสำหรับจัดรูปแบบเวลา
    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const date = new Date();
        date.setHours(hours, minutes);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); // ใช้ hour12: true เพื่อแสดง AM/PM
    };

    return (
        <div className="list-item">
            <div className="checkbox-taskContainer">
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={data.completed}
                    onChange={() => toggleCompleted(data.id)}
                />
                <p className={`title ${data.completed ? "completed" : ""}`}>{data.title}</p>
            </div>

            <div className="time-dateContainer">
                <p className="time">Time: {formatTime(data.time)}</p> {/* แสดงเวลาในรูปแบบ HH:MM AM/PM */}
                {/* วันเดือนปีแบบไทย */}
                <p className="date">Date: {new Date(data.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>

            <div className="button-container">
                <button className="btn" onClick={() => editTask(data.id)}>
                    {/* <img src="public/edit.svg" /> */}
                    <p>Edit</p>
                </button>
                <button className="btn" onClick={() => deleteTask(data.id)}>
                    {/* <img src="public/delete.svg" /> */}
                    <p>Delete</p>
                </button>
            </div>
        </div>
    )
}

export default Item;
