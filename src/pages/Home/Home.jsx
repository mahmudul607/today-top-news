import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "../NewsCard/NewsCard";



const Home = () => {
    const news = useLoaderData();
    return (
        <div className="md:max-w-6xl mx-auto">
            <Header></Header>
            <BreakingNews/>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4  gap-4">
                <div className="border"><LeftSideNav></LeftSideNav> </div>
                <div className="md:col-span-2 border p-2">
                    <h2 className="text-2xl font-bold">Today-Top-News Home</h2>

                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)

                    }

                    </div>
                <div className=" border"><RightSideNav></RightSideNav> </div>

            </div>
        </div>
    );
};

export default Home;