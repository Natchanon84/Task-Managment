import "./Header.css"

function Header () {

    return(
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>

            <div className="theme-container">
                <span>Day</span>
                <span className="icon">Switch</span>
            </div>
        </header>
    )
}

export default Header