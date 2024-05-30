import React, { useState } from "react";
import Navbar from "./component/Navbar";
import All from "./component/All";
import FullStackDevelopment from "./component/FullStackDevelopement";
import DataScience from "./component/DataScience";
import CyberSecurity from "./component/CyberSecurity";
import Career from "./component/Career";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  let data=[
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      content:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      content2:"When your are hiring a full-stack developer, what are the most important things you look for?",
      date:"29 September 2023"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      content:"7 Best Full-Stack Development Online Courses [2024]",
      content2:"Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      date:"30 September 2023"
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      content2:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date:"01 January 2024"
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Install-Miro-on-Windows-A-2-Step-Comprehensive-Guide.webp",
      content:"Install Miro on Windows: A 2-Step Comprehensive Guide",
      content2:"Post-Covid, everything is becoming digital and even companies prefer remote working as it helps them",
      date:"31 January 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      content:"Top 5 IT Jobs for Economics Students",
      content2:"In today's digital age, the intersection of economics and technology offers exciting career opportunities for",
      date:"04 June 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
      content:"9 Best Product-Based Companies for Project Management",
      content2:"In today's tech-driven world, the demand for project managers is higher than before. The workload",
      date:"02 June 2023"
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      content:"Best Data Science Books to Learn in 2024",
      content2:"Today, we’re going to talk about something really cool: data science. It’s all about using",
      date:"10 October 2023"
    },

  ]
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/all" element={<All data={data}/>}></Route>
          <Route
            path="/fullstackdevelopment"
            element={<FullStackDevelopment data={data}/>}
          ></Route>
          <Route path="/datascience" element={<DataScience data={data}/>}></Route>
          <Route path="/cybersecurity" element={<CyberSecurity data={data}/>}></Route>
          <Route path="/career" element={<Career data={data}/>}></Route>
          <Route path="*" element={<Navigate to="/all" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;