import "./AddFrom.css"

function AddFrom({ title, setTitle, saveTask, editId, time, setTime, date, setDate, }) {

    return (
        <div className="addfrom-container">
            <h1 className="header">Task Management</h1>
            <form onSubmit={saveTask}>
                <div className="form-control">
                    {/* ///text */}
                    <input
                        type="text"
                        className="text-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                    </input>
                    {/* ///time */}
                    {/* <input
                        className="time-input"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}>
                    </input> */}
                    <input
                        className="time-input"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    {/* ///date */}
                    <input
                        className="date-input"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}>
                    </input>


                    <button type="submit" className="submit-btn" >
                        {editId ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddFrom