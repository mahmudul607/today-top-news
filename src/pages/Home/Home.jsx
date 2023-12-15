import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="md:max-w-6xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4">
                <div className="border">item1</div>
                <div className="col-span-2 border">item2</div>
                <div className=" border">item3</div>

            </div>
        </div>
    );
};

export default Home;