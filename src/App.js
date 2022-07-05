
import './App.css';
import Topbar from './components/top-bar/Topbar';
import SideBar from './components/sidebar/Sidebar';
import Home from './components/pages/Home/Home';
import UserList from './components/pages/userList/UserList';
import User from './components/pages/user/User';
import NewUser from '../src/components/pages/newUserPage/NewUser';
import Blog from '../src/components/pages/blog/Blog';
import BlogList from './components/pages/blogs/BlogList';
import NewBlog from './components/pages/newBlogPage/NewBlog';
import TestimonialsList from './components/pages/testimonialsList/TestimonialsList';
import Testimonials from './components/pages/testimonials/Testimonials';
import { BrowserRouter as 
  Router, 
  Switch, 
  Route,
  Routes,
BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <div className='container'>
        <SideBar/>
        <Routes>
        <Route exact element={<Home />} path="/"/> 
        <Route element={<UserList />} path='/users'/>
        <Route element={<User />} path='/user/:userId'/>
        <Route element={<NewUser />} path='/newuser'/>
         <Route element={<BlogList />} path='/blogs'/>
        <Route element={<Blog />} path='/blog/:blogsId'/>
        <Route element={<NewBlog />} path='/newblog'/>
        <Route element={<TestimonialsList />} path='/testimonials'/>
        <Route element={<Testimonials />} path='/testimonial/:testimonialsId'/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
