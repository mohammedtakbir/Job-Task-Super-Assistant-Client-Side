import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpenBar = (value) => {
        setOpen(value);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
    }, [])

    const handleClickOutside = (e) => {
        console.log(ref.current.contains(e.target))
        if (!ref.current.contains(e.target)) {
            setOpen(false);
        }
    }

    return (
        <section className='py-2 bg-[#FAFAFA]'>
            <div className='max-w-[1300px] mx-auto flex justify-between items-center relative'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <img className='h-[50px] w-[50px]' src="https://internal-images.s3.ap-south-1.amazonaws.com/BoloForms+Logo+(1)/2.svg" alt="" />
                        <p className='font-semibold text-[14px]'>BoloForms</p>
                    </div>
                    <ul className='flex ml-12'>
                        <li ref={ref} onClick={() => handleOpenBar(!open)} className='text-[14px] font-semibold mr-[40px] cursor-pointer'>Products <FaAngleDown className='inline' />
                            <div onClick={(e) => e.stopPropagation()} className={`absolute border p-5 top-[50px] cursor-auto ${open ? 'block' : 'hidden'}`}>
                                <div className='flex'>
                                    <h2 className='mr-3'>Icon</h2>
                                    <div>
                                        <h3>Form Approval</h3>
                                        <p>Create interactive workflows, approval flows & automate processes using Google Forms.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='text-[14px] font-semibold mr-[40px] cursor-pointer'>Pricing</li>
                        <li className='text-[14px] font-semibold mr-[40px] cursor-pointer'>Guides</li>
                        <li className='text-[14px] font-semibold mr-[40px] cursor-pointer'>Templates</li>
                    </ul>
                </div>
                <div>
                    <button className='mr-5 border'>Install Now</button>
                    <button className=' border'>BoloForms Premium</button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;