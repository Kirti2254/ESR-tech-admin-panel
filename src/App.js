
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
import NewTestimonial from './components/pages/newtestimonial/NewTestimonial';
//import FormInput from './components/pages/loginpage/FormInput';
import LoginPage from './components/pages/loginpage/LoginPage';
import routes from './routes'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
        
        <Routes>
        {routes.map(el => {
          if(el.feature === 'loginPage') {
            return(
              <Route 
                {...el}
              />
            )
          }
          return (
            <Route 
              element = {
              <>
                <Topbar />
                <div className='container'>
                  <Sidebar />
                  {el.element}
                </div>
              </>
              }
              path={el.path}
            />
          )
        })}
        {/* <Route exact element={<LoginPage />} path="/"/>  */}
        {/* <Route exact element = {<FormInput/>} path = "/"/> */}
        {/* <Route element={
          <>
            <Topbar/>
            <div className='container'>
              <SideBar />
              <UserList/>
            </div>
          </>
        } path='/users'/>
        <Route element={<User />} path='/user/:userId'/>
        <Route element={<NewUser />} path='/newuser'/>
        <Route element={<BlogList />} path='/blogs'/>
        <Route element={<Blog />} path='/blog/:blogsId'/>
        <Route element={<NewBlog />} path='/newblog'/>
        <Route element={<TestimonialsList />} path='/testimonials'/>
        <Route element={<Testimonials />} path='/testimonial/:testimonialsId'/>
        <Route element={<NewTestimonial />} path='/newtestimonial'/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
