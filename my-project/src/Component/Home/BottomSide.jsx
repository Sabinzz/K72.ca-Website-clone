import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


const BottomSide = () => {
 


  return (
    <div>
      <div  className="absolute flex justify-center items-center text-white top-11/12  w-full text-6xl lg:text-8xl overflow-hidden lg:-mt-8 gap-6">
        <div className="cursor-pointer hover:border-[#d3fd50] hover:text-[#d3fd50] border-2 lg:border-3  rounded-full px-4 leading-11 pb-2 uppercase lg:py-4 lg:pb-6">
          <h1><Link to="/Projects">Projects</Link></h1>
        </div>
        <div className="hover:border-[#d3fd50] hover:text-[#d3fd50]  cursor-pointer border-2 lg:border-3 rounded-full px-4 leading-11 pb-2 uppercase lg:py-4 lg:pb-6">
          <h1><Link to="/Agence">Agence</Link></h1>
        </div>
      </div>
      
<div>
 <Footer/>
</div>
     
    </div>
  );
};

export default BottomSide;

