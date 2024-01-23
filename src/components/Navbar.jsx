import React,{useState} from 'react'
import iconImg from '/Images/iconImg.png';
import RetailAccordion from './HomeComponents/RetailAccordion';
import DistributionAccordion from './DistributionAccordion';
import ManufacturingAccordion from './ManufacturingAccordion';
import {AiOutlineMenu} from "react-icons/ai";
import {RxCross2} from "react-icons/rx";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
import ContactForm from './ContactForm';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showRetail ,setShowRetail] = useState(false);
    const [showDistribution ,setShowDistribution] = useState(false);
    const [showManufacturing ,setShowManufacturing] = useState(false);
    const [showModal,setShowModal] = useState(false);


    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <>
    <div className='w-full h-20 bg-[#002B46] flex justify-between items-center'>
        <img src={iconImg} className='md:h-20 sm:h-16 h-12 sm:ml-20 ml-5'></img>

        <nav>
        <span className='text-3xl max-[400px]:text-2xl sm:hidden block cursor-pointer ml-20 mr-0 mt-64' onClick={toggleMenu}>
        {isMenuOpen ? <RxCross2 /> : <AiOutlineMenu />}
        </span>
        
    <ul className={` md:flex md:items-center md:justify-between relative  md:mr-0  z-50  md:static md:mt-0 sm:mt-96 bg-green-600 md:h-20 h-auto md:w-auto 
                    left-0 md:py-0 py-4 md:pl-0 sm:opacity-100 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}  transition-all ease-in duration-500`}>
            
            {/* <li className='flex items-center md:mx-4 md:py-8 py-2 px-2 font-semibold  hover:bg-white text-white sm:text-base text-xs hover:text-[#262220]'
            onMouseEnter={()=>setShowRetail(!showRetail)} onMouseLeave={()=>setShowRetail(!showRetail)} >
                <a href='#' >Retail</a>
                <ChevronDownIcon
                 strokeWidth={2.5}
                className={`ml-2 hidden h-3 w-3 transition-transform  lg:block ${
                   showRetail ? "rotate-180" : ""
                }`}
               />
            </li> */}
            <RetailAccordion />

            <li className='flex items-center md:mx-4 md:py-8 py-2 px-2 font-semibold hover:bg-white text-white sm:text-base text-xs hover:text-[#262220]'
            onMouseEnter={()=>setShowDistribution(!showDistribution)} onMouseLeave={()=>setShowDistribution(!showDistribution)}>
                <a href='#'>Distribution </a>
                <ChevronDownIcon
                 strokeWidth={2.5}
                className={`ml-2 hidden h-3 w-3 transition-transform  lg:block ${
                  showDistribution ? "rotate-180" : ""
                }`}
               />
            </li>

            <li className='flex items-center md:mx-4 md:py-8 py-2 px-2 hover:bg-white font-semibold text-white sm:text-base text-xs hover:text-[#262220]'
            onMouseEnter={()=>setShowManufacturing(!showManufacturing)} onMouseLeave={()=>setShowManufacturing(!showManufacturing)}>
                <a href='#'>Manufacturing</a>
                <ChevronDownIcon
                 strokeWidth={2.5}
                className={`ml-2 hidden h-3 w-3 transition-transform  lg:block ${
                   showManufacturing ? "rotate-180" : ""
                }`}
               />
            </li>

            <li className='flex items-center md:mx-4 md:py-8 py-2 px-2 hover:bg-white font-semibold text-white sm:text-base text-xs hover:text-[#262220]'>
                <a href='#'>ERP</a>
                <ChevronDownIcon
                 strokeWidth={2.5}
                className={`ml-2 hidden h-3 w-3 transition-transform  lg:block ${
                   showManufacturing ? "rotate-180" : ""
                }`}
               />
            </li>

            <li className='flex items-center md:mx-4 md:py-8 py-2 px-2 hover:bg-white font-semibold text-white sm:text-base text-xs hover:text-[#262220]'>
                <a href='#'>Company</a>
                <ChevronDownIcon
                 strokeWidth={2.5}
                className={`ml-2 hidden h-3 w-3 transition-transform  lg:block ${
                   showManufacturing ? "rotate-180" : ""
                }`}
               />
            </li>

            <li className='flex items-center md:mx-4 md:py-8 py-2 px-2 hover:bg-white font-semibold text-white sm:text-base text-xs hover:text-[#262220]'>
                <a href='#'>Contact Us </a>
                <ChevronDownIcon
                 strokeWidth={2.5}
                className={`ml-2 hidden h-3 w-3 transition-transform  lg:block ${
                   showManufacturing ? "rotate-180" : ""
                }`}
               />
            </li>

            <li className='flex items-center md:mx-4 py-2 px-2 sm:text-base text-xs rounded-3xl bg-[#eb7a34] text-white'>
                <a href='#' onClick={()=>setShowModal(true)}>Free demo request </a>
            </li>

        </ul>

    </nav>
    </div>
    <div className=' z-50 w-full'>
       {/* { showRetail &&  <RetailAccordion showRetail={isMenuOpen} setShowRetail={setIsMenuOpen}/> } */}
      
       { showDistribution &&  <DistributionAccordion /> }
       { showManufacturing &&  <ManufacturingAccordion /> }
       </div>

       <ContactForm  showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}

export default Navbar