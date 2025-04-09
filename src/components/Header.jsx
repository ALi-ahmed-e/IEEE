import React from 'react'
import IEEE from '../assets/IEEE.png'
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineWrenchScrewdriver, HiOutlineUsers, } from "react-icons/hi2";
import { MdEventNote, MdOutlineVerifiedUser } from "react-icons/md";


import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>

            <div className=' h-20 absolute w-full top-0 lg:flex justify-around p-4 b hidden'>

                <div><img className=' w-28' src={IEEE} alt="" /></div>



                <div className=' w-fit border-2 border-white text-white  rounded-xl flex justify-around items-center p-2' >

                    <NavLink to='/' className='mr-3'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all'>
                            <GrHomeRounded />
                        </div>
                    </NavLink>

                    <NavLink to='/workshops'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <HiOutlineWrenchScrewdriver className='mr-2' /> WORKSHOPS
                        </div>
                    </NavLink>

                    <NavLink to='/comittees'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <HiOutlineUsers className='mr-2' /> COMMITTEES
                        </div>
                    </NavLink>



                    <NavLink to='/events'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <MdEventNote className='mr-2' /> EVENTS
                        </div>
                    </NavLink>




                    <NavLink to='/teams'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <MdOutlineVerifiedUser className='mr-2' /> OUR TEAMS
                        </div>
                    </NavLink>





                </div>




                <Link to='/contact' className='text-white  border-2 border-white rounded-xl flex justify-around items-center p-2 cursor-pointer hover:bg-white/40  transition-all' >
                    Contact Us

                </Link>


            </div>



            <div className=' absolute  w-full top-0 flex flex-col justify-around p-4 b lg:hidden'>
                <div className=' flex justify-between items-center  w-full'>
                    <div><img className=' w-28' src={IEEE} alt="" /></div>




                    <Link to='/contact' className='text-white  border-2 border-white rounded-xl flex justify-around items-center p-2 cursor-pointer hover:bg-white/40  transition-all' >
                        Contact Us

                    </Link>
                </div>


                <div className=' w-full border-2 border-white text-white  rounded-xl flex flex-col justify-around  p-2' >

                    <NavLink to='/' className=''>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <GrHomeRounded  className='mr-2' /> Home
                        </div>
                    </NavLink>

                    <NavLink to='/workshops'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <HiOutlineWrenchScrewdriver className='mr-2' /> WORKSHOPS
                        </div>
                    </NavLink>

                    <NavLink to='/comittees'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <HiOutlineUsers className='mr-2' /> COMMITTEES
                        </div>
                    </NavLink>



                    <NavLink to='/events'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <MdEventNote className='mr-2' /> EVENTS
                        </div>
                    </NavLink>




                    <NavLink to='/teams'>
                        <div className='p-3 rounded-lg hover:bg-white/30  transition-all flex items-center justify-center'>
                            <MdOutlineVerifiedUser className='mr-2' /> OUR TEAMS
                        </div>
                    </NavLink>





                </div>




            </div>

        </>
    )
}

export default Header