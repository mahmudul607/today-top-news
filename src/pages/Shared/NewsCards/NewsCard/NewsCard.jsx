
import PropTypes from 'prop-types';
import ReadMoreText from './ReadMoreText';
import { FaEye, FaRegBookmark, FaShareAlt   } from "react-icons/fa";

const NewsCard = ({ news }) => {

    const simpleText = news.details;
    return (
        <div className='p-2'>
            <div className='p-2 flex items-center '>
                <div className="w-10 rounded-full py-4 mr-4">
                    <img className='rounded-full' alt="Tailwind CSS Navbar component" src={news.author.img} />
                </div>
                <div className='mr-4'>
                    <p>{news.author.name}</p>
                    <span>{news.author.published_date}</span>


                </div>
                <div className=' w-3/6 flex justify-end'>
                    <span className='flex'>
                        <FaRegBookmark className='mr-4' ></FaRegBookmark>
                        <FaShareAlt ></FaShareAlt>
                    </span>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div>
                    <span className='text-xl font-bold'>{news.title}</span>
                </div>
                <figure className=''><img src={news.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                  
                    <p ><ReadMoreText text={simpleText} maxLength={100}></ReadMoreText></p>
                    <div className='flex justify-between'>
                        <div className="rating">
                          
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <div className='ml-4'>{news.rating.number}</div>
                        </div>
                        <div className="card-actions items-center">
                            <FaEye></FaEye>
                           <div>{news.total_view}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
};

export default NewsCard;