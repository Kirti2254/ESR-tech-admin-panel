import React, { useState } from 'react'
import './NewBlog.css';
// import { DatePicker, Radio, Space } from 'antd';
// const { RangePicker } = DatePicker;
const NewBlog = () => {

  // const [size, setSize] = useState('middle');

  // const handleSizeChange = (e) => {
  //   setSize(e.target.value);
  // };

  return (
    <div className='newBlog'>
   <h1 className='newBlogTitle'>New Blog</h1>
   
   <form className="newBlogForm">
        <div className="newBlogItem">
          <label>Blog Name</label>
          <input type="text" placeholder="Blogname" />
        </div>
        <div className="newBlogItem">
          <label>Author Name</label>
          <input type="text" placeholder="Fullname" />
        </div>
        <div className="newBlogItem">
          <label>Email</label>
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div className="newBlogItem">
          <label>Blog Content</label>
          <input type="password" placeholder="password" />
        </div>
        
        <div className="newBlogItem">
          <label>Active</label>
          <select className="newBlogSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {/* <Space direction="vertical" size={12}>
            <Radio.Group value={size} onChange={handleSizeChange}>
        
        <Radio.Button value="middle">middle</Radio.Button>
      
      </Radio.Group>
      <DatePicker size={size} />
      
      <RangePicker size={size} />
      
          </Space> */}
        </div>
        <button className="newBlogButton">Create</button>
      </form>
      <div className="newBlogPhoto">
          {/* <label>Admin</label> */}
          {/* <div className="newBlogGender">
            <input type="radio" name="admin" id="Yes" value="yes" />
            <label for="yes">Yes</label>
            <input type="radio" name="admin" id="No" value="no" />
            <label for="admin">No</label>
          </div> */}
          <label>Image:</label>
          <input type="file" id="file" />
        </div>
    
    </div>
  )
}

export default NewBlog;