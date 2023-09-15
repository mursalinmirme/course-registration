import { useEffect, useState } from "react";
import Carts from "./Carts";
import Courses from "./Courses";
import './Home.css';

const Home = () => {
const [courses, setCourses] = useState([]);
useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
      
}, [])
console.log(courses)
    return (
        <div className="home">
            <Courses courses={courses}></Courses>
            <Carts></Carts>
        </div>
    );
};

export default Home;