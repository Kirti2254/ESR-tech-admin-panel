import React from 'react'
import './NewUser.css';

const NewUser = () => {
  return (
    <div className='newUser'>
   <h1 className='newUserTitle'>New User</h1>




   <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Fullname" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
         <div className="newUserItem">
          <label>Admin</label>
          <select className="newUserSelect" name="admin" id="admin">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="newUserItem">
          <label> Confirm Password</label>
          <input type="confirm password" placeholder="confirm password"
             
           />
        </div>



        
      
        <button className="newUserButton">Create</button>
      </form>
    
    </div>
  )
}

export default NewUser