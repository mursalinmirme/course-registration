import './Course.css';
const Course = () => {
    return (
        <div className="single-card">
            <img className="course-img" src="https://i.ibb.co/1z1Jm4D/Rectangle-2-1.png" alt="" />
            <h3 className="course-title">Introduction to C Programming</h3>
            <p className='course-desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="price-and-credit-wraper">
                <div className="price-wrapper">
                    <img src="https://i.ibb.co/rZ4xD3V/dollar-sign-1.png" alt="" />
                    <span>Price: 10000</span>
                </div>
                <div className="credit-wrapper">
                    <img src="https://i.ibb.co/1L9Ry70/Frame.png" alt="" />
                    <span>Credit: 10hr</span>
                </div>
            </div>
            <button className="select-btn">Select</button>
        </div>
    );
};

export default Course;