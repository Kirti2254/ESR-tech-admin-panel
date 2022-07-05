import { MailOutline, PermIdentity, AccessTime, Publish, } from '@material-ui/icons';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react'
import '../testimonials/Testimonials.css';
import {Link} from 'react-router-dom';

const Testimonials = () => {
  return (
    <div className='testimonial'>
        <div className='testimonialTitleContainer'>
            <h1 className='testimonialTitle'>Edit Testimonial</h1>
            <Link to ="/newtestimonial">
            
            <button className='testimonialAddButton'>Create</button>
            </Link>
        </div>
        <div className='testimonialContainer'>
            <div className='testimonialUpdate'>
                <form className='testimonailUpdateForm'>
                      <div className='testimonialUpdateLeft'>
                          <div className='testimonialUpdateItem'>
                            <label>Blog Title</label>
                            <TextareaAutosize
                        maxRows={4}
                  aria-label="maximum height"
                    placeholder="Title"
                    style={{ width: 600}}
                         />
                          </div> 

                           <div className='testimonialUpdateItem'>
                            <label>Comment</label>
                                <TextareaAutosize
                        maxRows={4}
                  aria-label="maximum height"
                    placeholder="Overview"
                    style={{ width: 600}}
                         />
                          </div>


                             <div className='testimonialUpdateItem'>
                            <label> New Comment</label>
                                <TextareaAutosize
                        maxRows={4}
                  aria-label="maximum height"
                    placeholder="Content"
                    style={{ width: 600}}
                         />
                          </div>

{/* 
                      <div className="testimonialUpdateItem">
          <label>Author</label>
          <select className="newAuthorSelect" name="author" id="author">
           <option value="ESR">ESR</option>
            <option value="Ravi Dhungel">Ravi Dhungel</option>
            <option value="Shashi Dhungel">Shashi Dhungel</option>
          </select>
        </div> */}


                   <div className="testimonialUpdateItem">
          <label>Change Photo:</label>
          <div className='blogThumbnailUpload'>
                             <label htmlFor="file">
                  <Publish className="blogUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "Choose Photo" }} />
              </div>
        </div>

    
                         
                      </div>
                       <div className='testimonialUpdateRight'>
                        <div className='testimonialUpdateUpload'>
                            <img  className='testimonialUpdateImg' src='data:image/png;base64,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'
                            />
                             <label htmlFor="file">
                  <Publish className="testimonialUpdateIcon" />
                </label>
              </div>
              {/* <button className="testimonialUpdateButton">Update</button> */}
                        </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;