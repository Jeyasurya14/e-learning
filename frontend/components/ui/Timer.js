// 'use client';

// import { useState, useEffect } from 'react';

// const Timer = ({ endTime }) => {
//   const calculateTimeLeft = () => {
//     const difference = new Date(endTime).getTime() - new Date().getTime();
//     let timeLeft = {
//       hours: '00',
//       minutes: '00',
//       seconds: '00',
//     };

//     if (difference > 0) {
//       timeLeft = {
//         hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
//         minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
//         seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [endTime]);

//   const isOfferEnded = new Date(endTime).getTime() - new Date().getTime() <= 0;

//   return (
//     <div className="text-center p-4 bg-blue-200 rounded-lg shadow-md w-200">
//       {isOfferEnded ? (
//         <span className="text-red-500 font-bold text-xl">Offer Ended - Wait for future offers</span>
//       ) : (
//         <div className="text-gray-800  ">
//           <span className='font-bold  text-lg'>Learnmade's exclusive lifetime course - Offer just ₹299 | Limited Time </span><span className='font-bold text-[25px]'> Ends : {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Timer;

'use client';

import { useState, useEffect } from 'react';

const Timer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endTime).getTime() - new Date().getTime();
    let timeLeft = {
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const isOfferEnded = new Date(endTime).getTime() - new Date().getTime() <= 0;

  if (!visible) return null; // If closed, render nothing

  return (
    <div  className="relative flex px-2 py-1 text-center  bg-blue-200 rounded-lg shadow-md w-200">
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 ml-3 text-gray-700 hover:text-red-500 text-xl font-bold"
      >
        ×
      </button>

      {/* Timer Content */}
      {isOfferEnded ? (
        <span className="text-red-500 font-bold text-xl">Offer Ended - Wait for future offers</span>
      ) : (
        <div className="text-gray-800">
          <span className='font-bold  text-lg'>Learnmade's exclusive lifetime course - Offer just ₹299 | Limited Time </span><span className='font-bold text-[25px]'> Ends : {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</span>
        </div>
      )}
    </div>
  );
};

export default Timer;
