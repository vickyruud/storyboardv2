import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode"
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';

const App = () => {

  const [stories, setStories] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);


  const fetchStories = () => {
    return axios.get('/stories')
      .then(res => {
        setStories(res.data);
    })

  }

  const login = (user) => {
    
    return axios.post('/login', user)
      .then(res => res);
      
  }

  const handleLogin = () => {
    const user = {
      username: 'luna',
      password : '123456'
    }
    login(user)
    .then(res => {
      const decoded = jwt_decode(res.data.token);
      console.log(decoded);
        setUser(decoded);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(decoded));
      
    })
  }

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');

  }

  //maintains login on refresh
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (token !== null) {
        axios.get("/auto-login", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => {
            console.log(res.data);
            setUser(res.data.user);
            localStorage.setItem('user', JSON.stringify(res.data.user));
          })
        .catch(error => console.log(error))
      }
    }
  }, [user])

  const saveStory = (story) => {
    const newStory = {
        "title": "Stranger Things 3 ",
        "contents": "In the summer of 1985 in Hawkins, the newly opened Starcourt Mall has become the focal point of the town, driving other stores out of business. Hawkins chief of police Jim Hopper disapproves of Eleven and Mike's budding relationship, while Joyce considers moving out of Hawkins for a better life for her children and herself, leaving the state of the children's friendships and her own relationship with Hopper in the air. Joyce notices something strange going on with her magnets and decides to investigate. However, strange power fluctuations trigger Will's awareness of something otherworldly, and Eleven and Max sense something is off about the town's residents. Despite having closed the portal to the Upside Down, they fear that they are all still in danger from it. The friends work together to help Max's brother Billy while Hopper and Joyce have their own adventure.",
        "status": "In Progress",
        "user_id": "62af647e0d5f310d1a0abf79",
    }
    return axios.post('api/stories', newStory)
      .then(res => {
        console.log(res.data);
    })
  }

  useEffect(() => {
    fetchStories();
  }, [])


  return (
    <div>
      <NavBar />
      <LoginForm/>
      

    </div>
  )
}

export default App