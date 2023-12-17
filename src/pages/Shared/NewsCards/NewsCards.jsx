import { useEffect, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";


const NewsCards = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return (
        <div> 
            {
                news.map(news => <NewsCard key={news.category_id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default NewsCards;