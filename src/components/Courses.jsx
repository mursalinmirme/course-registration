import Course from "./Course";
import './Courses.css';
import PropTypes from 'prop-types';
const Courses = ({courses, handleSelectBtn}) => {
    return (
        <div className="courses-container">
            {
                courses.map((course, idx) => <Course key={idx} course={course} handleSelectBtn={handleSelectBtn}></Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    handleSelectBtn: PropTypes.func.isRequired
}
export default Courses;