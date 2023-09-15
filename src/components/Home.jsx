import Carts from "./Carts";
import Courses from "./Courses";
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <Courses></Courses>
            <Carts></Carts>
        </div>
    );
};

export default Home;