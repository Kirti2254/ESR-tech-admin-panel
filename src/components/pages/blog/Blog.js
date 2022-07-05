import { MailOutline, PermIdentity, AccessTime, Publish, } from '@material-ui/icons';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react'
import '../blog/Blog.css';
import {Link} from 'react-router-dom';

const Blog = () => {
  return (
    <div className='blog'>
        <div className='blogTitleContainer'>
            <h1 className='blogTitle'>Change Blog</h1>
            <Link to ="/newblog">
            
            <button className='blogAddButton'>Create</button>
            </Link>
        </div>
        <div className='blogContainer'>
            <div className='blogUpdate'>
                <form className='blogUpdateForm'>
                      <div className='blogUpdateLeft'>
                          <div className='blogUpdateItem'>
                            <label>Title</label>
                            <TextareaAutosize
                        maxRows={4}
                  aria-label="maximum height"
                    placeholder="Title"
                    style={{ width: 600}}
                         />
                          </div> 

                           <div className='blogUpdateItem'>
                            <label>Slug</label>
                         <TextareaAutosize
                        maxRows={4}
                  aria-label="maximum height"
                    placeholder="Slug"
                    style={{ width: 600}}
                         />
                          </div>

                           <div className='blogUpdateItem'>
                            <label>Overview</label>
                                <TextareaAutosize
                        maxRows={4}
                  aria-label="maximum height"
                    placeholder="Overview"
                    style={{ width: 600}}
                         />
                          </div>


                             <div className='blogUpdateItem'>
                            <label>Content</label>
                                <TextareaAutosize
                        maxRows={4}
                  aria-label="maximum height"
                    placeholder="Content"
                    style={{ width: 600}}
                         />
                          </div>


                      <div className="blogUpdateItem">
          <label>Author</label>
          <select className="newAuthorSelect" name="author" id="author">
           <option value="ESR">ESR</option>
            <option value="Ravi Dhungel">Ravi Dhungel</option>
            <option value="Shashi Dhungel">Shashi Dhungel</option>
          </select>
        </div>


                   <div className="blogUpdateItem">
          <label>Thumbnail:</label>
          <div className='blogThumbnailUpload'>
                             <label htmlFor="file">
                  <Publish className="blogUpdateIcon" />
                </label>
                <input type="file" id="file"/>
              </div>
              <div className='blogUpdateUpload'>
                          
                             <label htmlFor="file">
                  <Publish className="blogUpdateIcon" />
                </label>
              </div>
              
        </div>   
        <button className="blogUpdateButton">Update</button>
                      </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Blog;