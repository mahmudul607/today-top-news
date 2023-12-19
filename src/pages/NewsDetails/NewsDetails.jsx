import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";



const NewsDetails = () => {
  
    
        const news = useLoaderData();
        const {id} = useParams();
        const aNews = news.find(a => a._id === id);
        console.log(aNews);

    


   
   
    
   
    // const { title, details, image_url } = aNews
    return (
        <div className="md:max-w-6xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div>
                
                <div className="md:grid-cols-4 grid">
                
                    <div className="md:col-span-3 p-6 mt-6">
                    <h3 className="text-2xl p-2 font-bold">Top News</h3>
                        <div className="card ">
                            <figure><img src={aNews.image_url} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{aNews.title}</h2>
                                <p>{aNews.details}</p>
                                <button className="btn btn-outline w-1/2">Go All News In This Category</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="pt-0">
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;