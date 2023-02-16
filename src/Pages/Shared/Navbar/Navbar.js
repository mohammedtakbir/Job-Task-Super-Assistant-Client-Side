import React from 'react';

const Navbar = () => {
    return (
        <section className='h-[75px] bg-[#FAFAFA] leading-[75px]'>
            <div className='max-w-[1200px] mx-auto flex justify-between'>
                <div className='flex items-center'>
                    <img className='h-[50px]' src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" />
                    <ul className='flex ml-10'>
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Guides</li>
                        <li>Templates</li>
                    </ul>
                </div>
                <div>
                    <button>Install Now</button>
                    <button>BoloForms Premium</button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;