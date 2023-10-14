import React from 'react'

const Header = () => {
    return (
        <header>
            <h1 className='to-do-list-heading'>TO-DO-LIST</h1>
            <div className='description'>
                <h6>*To <b>Delete</b> the <b><i>Task</i></b>. Click on the <i>Task</i> and Press on the <b>Clear Completed</b> Button.</h6>
            </div>
        </header>
    );
}

export default Header;