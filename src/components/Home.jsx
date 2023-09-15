import { useEffect, useState } from "react";
import Carts from "./Carts";
import Courses from "./Courses";
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
const [courses, setCourses] = useState([]);
const [selectCourses, setSelectCourses] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
const [totalCredit, setTotalCredit] = useState(0);
const [remaining, setRemaining] = useState(20);
useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
      
}, [])
// console.log(selectCourses)
const handleSelectBtn = (course) => {
    const isSelected = selectCourses.find(singleCourse => singleCourse.course_name === course.course_name);
    if(isSelected){
        toast.error('You have already selected it!', {
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
        const totalCreditSum = totalCredit + course.credit;
        const totalRemaining = remaining - course.credit;
        if(totalCreditSum > 20 && totalRemaining < 0){
            toast.warn('You dont have enough credit hour!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
        setRemaining(totalRemaining);
        setTotalCredit(totalCreditSum);
        // I have added selected courses
        setTotalPrice(totalPrice + course.price);
        setSelectCourses([...selectCourses, course]);
        }
    }
}

    return (
        <div className="home">
            <Courses courses={courses} handleSelectBtn={handleSelectBtn}></Courses>
            <Carts selectCourses={selectCourses} totalPrice={totalPrice} totalCredit={totalCredit} remaining={remaining}></Carts>
            <ToastContainer />
        </div>
        
    );
};

export default Home;