import Course from "./Course";
import './Courses.css';
import PropTypes from 'prop-types';
const Courses = ({courses}) => {
    return (
        <div className="courses-container">
            {
                courses.map((course, idx) => <Course key={idx} course={course}></Course>)
            }
            {/* <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course> */}
        </div>
    );
};
Courses.propTypes = {
    courses: PropTypes.object.isRequired
}
export default Courses;