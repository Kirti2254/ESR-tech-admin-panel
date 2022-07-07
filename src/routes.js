import Blog from "./components/pages/blog/Blog";
import BlogList from "./components/pages/blogs/BlogList";
import LoginPage from "./components/pages/loginpage/LoginPage";
import NewBlog from "./components/pages/newBlogPage/NewBlog";
import NewTestimonial from "./components/pages/newtestimonial/NewTestimonial";
import NewUser from "./components/pages/newUserPage/NewUser";
import Testimonials from "./components/pages/testimonials/Testimonials";
import TestimonialsList from "./components/pages/testimonialsList/TestimonialsList";
import User from "./components/pages/user/User";
import UserList from "./components/pages/userList/UserList";

const routes = [
    {
        path: '/',
        exact: true,
        element: <LoginPage />,
        feature: 'loginPage'
    },
    {
        path: '/users',
        exact: false,
        element: <UserList />,
        feature: 'userList'
    },
    {
        path: '/user/:userId',
        exact: false,
        element: <User />,
        feature: 'user'
    },
    {
        path: '/newuser',
        exact: false,
        element: <NewUser />,
        feature: 'newuser',
    },
    {
        path: '/blogs',
        exact: false,
        element: <BlogList />,
        feature: 'bloglist'
    },
    {
        path: '/blog/:blogsId',
        exact: false,
        element: <Blog />,
        feature: 'blog'
    }, 
    {
        path: '/newblog',
        exact: false,
        element: <NewBlog />,
        feature: 'newblog'
    }, 
    {
        path: '/testimonials',
        exact: false,
        element: <TestimonialsList />,
        feature: 'testimonials'
    },
    {
        path: '/testimonial/:testimonialsId',
        exact: false,
        element: <Testimonials />,
        feature: 'testimonial'
    },
    {
        path: '/newtestimonial',
        exact: false,
        element: <NewTestimonial />,
        feature: 'newtestimonial'
    }
]

export default routes;