import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="py-6 ">
            <div className="flex bg-gray-400">
            <button className="btn btn-active btn-secondary">Breaking News</button>
            <Marquee className="" pauseOnHover={true}>
                <p className=" mr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,</p>
                <p className=" mr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,</p>
                <p className=" mr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,</p>
            </Marquee>

            </div>
            
        </div>
    );
};

export default BreakingNews;