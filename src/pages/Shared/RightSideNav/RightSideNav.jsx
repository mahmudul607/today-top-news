import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram   } from "react-icons/fa";
import swimming from '../../../assets/images/qZone1.png'
import playGround from '../../../assets/images/qZone3.png'
import classRoom from '../../../assets/images/qZone2.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-2xl font-extrabold">Login With</h1>
                <div className="p-4 my-4 border ">
                    <a href="" className="flex items-center w-full">
                        <FaGoogle className="mr-6"></FaGoogle>
                        <span>Login With Google</span>

                    </a>
                </div>
                <div className="p-4 border ">
                    <a href="" className="flex items-center w-full">
                        <FaGithub className="mr-6"></FaGithub>
                        <span>Login With GitHub</span>

                    </a>
                </div>
            </div>
            <div>
                <div className="p-4">
                    <h2 className="text-2xl font-extrabold">Find Us On</h2>
                    <div>
                        <div  className="border p-4 rounded-t-lg">
                            <a href="" className="flex items-center">
                                <FaFacebookF className="mr-2"></FaFacebookF>
                                <span>Facebook</span>
                            </a>
                        </div>
                        <div  className="border-x p-4">
                            <a href="" className="flex items-center">
                                <FaTwitter  className="mr-2"></FaTwitter>
                                <span>Twitter</span>
                            </a>
                        </div>
                        <div  className="border p-4 rounded-b-lg">
                            <a href="" className="flex items-center">
                                <FaInstagram className="mr-2 bg-red-300"></FaInstagram>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-4">
                    <h3 className="text-2xl">Q-Zone</h3>
                    <div>
                        <div className="item">
                            <img src={swimming} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <img src={classRoom} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <img src={playGround} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RightSideNav;