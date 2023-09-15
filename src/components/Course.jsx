import './Course.css';
import PropTypes from 'prop-types';
const Course = ({course, handleSelectBtn}) => {
    return (
        <div className="single-card">
            <img className="course-img" src={course.img} alt="" />
            <h3 className="course-title">{course.course_name}</h3>
            <p className='course-desc'>{course.course_desc}</p>
            <div className="price-and-credit-wraper">
                <div className="price-wrapper">
                    <img src="https://i.ibb.co/rZ4xD3V/dollar-sign-1.png" alt="" />
                    <span>Price: {course.price}</span>
                </div>
                <div className="credit-wrapper">
                    <img src="https://i.ibb.co/1L9Ry70/Frame.png" alt="" />
                    <span>Credit: {course.credit}hr</span>
                </div>
            </div>
            <button onClick={() => handleSelectBtn(course)} className="select-btn">Select</button>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectBtn: PropTypes.func.isRequired
}
export default Course;