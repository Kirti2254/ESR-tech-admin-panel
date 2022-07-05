import React from 'react'
import './NewBlog.css';

const NewBlog = () => {
  return (
    <div className='newBlog'>
   <h1 className='newBlogTitle'>New User</h1>
   
   <form className="newBlogForm">
        <div className="newBlogItem">
          <label>Username</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="newBlogItem">
          <label>Full Name</label>
          <input type="text" placeholder="Fullname" />
        </div>
        <div className="newBlogItem">
          <label>Email</label>
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div className="newBlogItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newBlogItem">
          <label>Admin</label>
          <div className="newBlogGender">
            <input type="radio" name="admin" id="Yes" value="yes" />
            <label for="yes">Yes</label>
            <input type="radio" name="admin" id="No" value="no" />
            <label for="admin">No</label>
          </div>
        </div>
        <div className="newBlogItem">
          <label>Active</label>
          <select className="newBlogSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newBlogButton">Create</button>
      </form>
    
    </div>
  )
}

export default NewBlog;