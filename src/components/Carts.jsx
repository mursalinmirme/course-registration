import './Carts.css';
const Carts = ({selectCourses}) => {
  console.log(selectCourses)
    return (
      <div className="cart-wrapper">
        <div className='cart-container'>
        <h3 className='cart-remaining'>Credit Hour Remaining 14 hr</h3>
        <div className='course-list-container'>
        <h2 className='cart-list-title'>Course Name</h2>
        <ul className='cart-list'>
            {
              selectCourses.map((course, idx) => <li key={idx}>{idx + 1} {course.course_name}</li>)
            }
            {/* <li>1 : Introduction to c programming</li>
            <li>1 : Introduction to c programming</li>
            <li>1 : Introduction to c programming</li> */}
        </ul>
        </div>
        <h4 className='total-credit-hour'>Total Credit Hour : 05</h4>
        <h4 className='total-price'>Total Price : 15000 Taka</h4>
        </div>
      </div>
    );
};

export default Carts;