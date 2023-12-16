import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div className="md:max-w-6xl mx-auto">
            <Header></Header>
            <BreakingNews/>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4  gap-4">
                <div className="border"><LeftSideNav></LeftSideNav> </div>
                <div className="md:col-span-2 border">item2</div>
                <div className=" border"><RightSideNav></RightSideNav> </div>

            </div>
        </div>
    );
};

export default Home;