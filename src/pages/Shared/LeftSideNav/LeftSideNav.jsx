import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';
import { FaRegCalendar } from "react-icons/fa";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className="space-y-6 ml-4">
            <h2 className="text-2xl font-bold">All Categories</h2>
            <div>
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        className={"block p-2 font-semibold ml-4"}
                        to={`/category/${category.id}`}
                    >
                        {category.name}
                    </NavLink>)
                }
            </div>
            <div className="leftSideNews">
                <h2 className="text-xl font-bold">All News</h2>
                <div className="p-2">
                    {
                        news.map(item => <NavLink
                            
                            to={`/news/${item.category_id}`}
                           
                            key={item._id}>
                           <div className="my-4 py-2">
                           <img src={item.thumbnail_url} alt="" />
                            <p>{item.title}</p>
                            <div className="flex">
                                <p className="text-sm mr-2">International</p>
                                <span className="text-sm flex items-center"><FaRegCalendar className="mr-2"></FaRegCalendar>{moment().format('ll')}</span>
                            </div>
                           </div>


                        </NavLink>)
                    }
                </div>

            </div>

        </div>
    );
};

export default LeftSideNav;