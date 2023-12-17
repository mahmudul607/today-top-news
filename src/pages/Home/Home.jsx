import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import NewsCards from "../Shared/NewsCards/NewsCards";
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
                <div className="md:col-span-2 border p-2">
                    <h2 className="text-2xl font-bold">Today-Top-News Home</h2>

                    <NewsCards></NewsCards>

                    </div>
                <div className=" border"><RightSideNav></RightSideNav> </div>

            </div>
        </div>
    );
};

export default Home;