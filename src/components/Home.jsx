import React from 'react';
import { useEffect, useState } from "react";
import Carts from "./Carts";
import Courses from "./Courses";
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
const [courses, setCourses] = useState([]);
const [selectCourses, setSelectCourses] = useState([]);
useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
      
}, [])
// console.log(selectCourses)
const handleSelectBtn = (course) => {
    const isSelected = selectCourses.find(singleCourse => singleCourse.course_name === course.course_name);
    if(isSelected){
        toast.error('You have selected it!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else{
        // I have added selected courses
        setSelectCourses([...selectCourses, course]);
    }
}

    return (
        <div className="home">
            <Courses courses={courses} handleSelectBtn={handleSelectBtn}></Courses>
            <Carts selectCourses={selectCourses}></Carts>
            {/* <button onClick={notify}>check</button> */}
            <ToastContainer />
        </div>
        
    );
};

export default Home;