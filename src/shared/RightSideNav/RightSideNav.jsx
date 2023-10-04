import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../src/assets/qZone1.png'
import qZone2 from '../../../src/assets/qZone2.png'
import qZone3 from '../../../src/assets/qZone3.png'
import './RightSideNavbar.css'
const RightSideNav = () => {
    return (
        <div className='p-4'>
            <div className='p-4'>
                <h1 className="text-2xl mb-3 font-semibold">Login With</h1>
                <button className="btn btn-outline btn-neutral w-full mb-1"> <FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn btn-outline btn-neutral w-full"> <FaGithub></FaGithub> Login with Github</button>
            </div>
            <div className='p-4'>
                <h1 className="text-2xl mb-4 font-semibold">Find Us On</h1>
                <a className='text-[#706F6F] flex gap-3 items-center border p-4 font-medium rounded-t-lg' href=""><FaFacebook className='text-blue-700'></FaFacebook>Facebook</a>
                <a className='text-[#706F6F] flex gap-3 items-center p-4 font-medium border-x' href=""><FaTwitter className='text-blue-400'></FaTwitter>Twitter</a>
                <a className='text-[#706F6F] flex gap-3 items-center border p-4 font-medium rounded-b-lg' href=""><FaInstagram className='text-red-400'></FaInstagram>Instagram</a>
            </div>
            <div className='p-4 '>
                <div className='bg-[#F3F3F3] p-4 rounded-lg space-y-5'>
                    <h1 className="text-2xl mb-4 font-semibold p-4">Q Zone</h1>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
            <div className='p-4'>
                <div className='p-10 text-center background'>
                    <div className='my-16 space-y-8'>
                        <h1 className='text-3xl font-bold text-white'>Create an Amazing Newspaper</h1>
                        <p className='text-white'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className='btn text-white border-none bg-[red]'>Learn More </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;