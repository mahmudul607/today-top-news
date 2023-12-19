
// import PropTypes from 'prop-types';
// import { useState } from 'react';

// const ReadMoreText = ({text, maxLength}) => {
//     const [showFullText, setShowFullText] = useState(false);
//     const [color, setColor] = useState('');

//     const truncatedText =showFullText ? text : text.slice(0, maxLength);

//     const buttonText = showFullText ? "Read Less" : "Read More";
//     const buttonTextColor = showFullText ? "text-red-600" : "text-green-600";


//     const handleReadMoreText = () =>{
//         setShowFullText(!showFullText);
//         setColor(!color);

//     }

//     return(
//          <div className='inLine'>
//             <p>{truncatedText}</p>
//              {text.length > maxLength &&(
//                     <span onClick={handleReadMoreText} className={`text-sm, cursor-pointer + ${buttonTextColor}`}>{buttonText}</span>
                
//                     )}
//         </div>
//     );
// };

// ReadMoreText.propTypes = {
//     text: PropTypes.string,
//     maxLength: PropTypes.number
// };

// export default ReadMoreText;