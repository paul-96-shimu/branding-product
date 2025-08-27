import React from 'react';
import icon from '../assets/Amazone.svg'
import icon2 from '../assets/Hurra.svg'
import icon3 from '../assets/Djuice.svg'
import icon4 from '../assets/Instagram.svg'
import icon5 from '../assets/Vector (1).svg'
import icon6 from '../assets/Kitu.svg'


const Protal = () => {
  return (
    <div className='bg-black  pt-18 mt-20'>
      <img src={icon5} alt="" />
      <div className='flex justify-evenly gap-6'>
        <img src={icon3} alt="" srcset="" />
        <img src={icon2} alt="" srcset="" />
        <img src={icon} alt="" srcset="" />

        <img src={icon6} alt="" srcset="" />
        <img src={icon4} alt="" srcset="" />

      </div>



    </div>





//  <div className="bg-black w-[1800px] h-[380px] py-4">
//       {/* Row with separator dots */}
//       <div className="flex items-center justify-center gap-6 text-white">
//         {icons.map((item, index) => (
//           <React.Fragment key={index}>
//             <img
//               src={item.src}
//               alt={item.alt}
//               className="h-6 opacity-80 hover:opacity-100 transition"
//             />
//             {index < icons.length - 1 && (
//               <span className="text-gray-500">•</span>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
  );
};

export default Protal;