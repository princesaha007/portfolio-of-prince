import logo1 from "../Images/html2.png"
import logo2 from "../Images/css2.png"
import logo3 from "../Images/js.png"
import logo4 from "../Images/daisyui.png"
import logo5 from "../Images/tailwind2.svg"
import logo6 from "../Images/react.png"
import logo7 from "../Images/node.png"


const Experties = () => {
    return (
        <div className="bg-gray-100 mt-7 md:mt-20">

<h1 className="text-center md:text-3xl font-bold  text-gray-800 pt-6">EXPERTIES</h1>
          


<div className=' px-3 h-24 md:h-56  md:px-4 lg:px-4 xl:px-20  flex justify-between items-center'>

<div className='px-2 w-24 '>
    <img className="" src= {logo1} alt="" />
</div>
<div className='px-2 w-28'>
    <img src= {logo2} alt="" />
</div>
<div className='px-2 w-24'>
    <img src= {logo3} alt="" />
</div>
<div className='px-2 w-32'>
    <img src= {logo4} alt="" />
</div>
<div className='px-2 w-36'>
    <img src= {logo5} alt="" />
</div>
<div className='px-2 w-28'>
    <img src= {logo6} alt="" />
</div>
<div className='px-2 w-36'>
    <img src= {logo7} alt="" />
</div>





</div>

            



            
        </div>
    );
};

export default Experties;