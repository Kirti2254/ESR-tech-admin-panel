import React from 'react'
import '../newtestimonial/NewTestimonial.css';

const NewTestimonial = () => {
return (
    <div className="newTestimonial">
      <h1 className="addTestimonialTitle">New Testimonial</h1>
      <form className="addTestimonialForm">
        <div className="addTestimonialItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addTestimonialItem">
          <label>New Content</label>
          <input type="text" placeholder="What's your view?" />
        </div>
        <div className="addTestimonialItem">
          <label>Profile Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="addTestimonialItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addTestimonialButton">Create</button>
      </form>
    </div>
  );
}

export default NewTestimonial;