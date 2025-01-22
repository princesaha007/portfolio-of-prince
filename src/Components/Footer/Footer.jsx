import footerImg from '../Images/fotter.png'
import footerlogo1 from '../Images/facebook.png'
import footerlogo2 from '../Images/linkedin (1).png'
import footerlogo3 from '../Images/github1.png'


const Footer = () => {
    return (
        <div className='bg-slate-900 '>
        <img className='w-full py-10'  src= {footerImg} alt="" />
        <hr />

        <div className='flex items-center justify-between px-3 md:px-20'>
        <div className=' banner1 text-xs md:text-sm py-5'>
        <p className='text-gray-400'>I am excited to hear from you.</p>
        <p className='font-bold text-xs md:text-4xl text-white '>princesaha124@gmail.com</p>
    </div>

    <div className='flex gap-2 md:gap-5'>

        <div>
            <a target='_blank' href="https://www.facebook.com/profile.php?id=100008752723302&rdid=UdCD0VVKtoIuxHk5#"> 
            <img src= {footerlogo1} alt="" />
            </a>
        </div>
        <div>
        <a target='_blank' href="https://www.linkedin.com/in/prince-saha-9a929b231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwY2xjawH91bVleHRuA2FlbQIxMAABHdTQ7UlCUhunIl3rdzqnsZP8lu7h5VquNh-EYoCx-W-oFpvw4gvfBRCuTw_aem_4MzraIe_XsoYOJT4gThXCA"> 
            <img src= {footerlogo2} alt="" />
            </a>
        </div>
        <div>
        <a target='_blank' href="https://github.com/princesaha007?tab=repositories"> 
            <img src= {footerlogo3} alt="" />
            </a>
        </div>




    </div>

      


        </div>

            <div className='flex items-center mx-4 md:mx-20 md:gap-32 lg:gap-96'>
            <div className='banner1 text-gray-400'>
            <p>Bashundhara R/A</p>
            <p>Block D <br />
            H-196</p>
            <p>(+88) 01316132356</p>
        </div>

        <div className='flex items-center text-gray-400 gap-5'>

            {/* <div><p>Important Links</p>
            <p>About Us</p>
            <p>Out Team</p>
            <p>Service</p>
            <p>FAQs</p>
            </div> */}

            {/* <div>
                <p>Misc</p>
                <p>Error 404</p>
                <p>Coming Soon</p>
                <p>Maintenance</p>

            </div> */}
        </div>
            </div>

            <hr className='mx-20 mt-7'/>

            <div>
                <p className='text-gray-400 mx-4 md:mx-20'>
                © 2025- Made by Prince Roy Saha <br />
                
                

                </p>
            </div>
            

    </div>

    );
};

export default Footer;