import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { navLinks } from '@/constants/navLinks';
import {
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const phoneNumber = "+250788846668";
    const message = "Hello, I'd like more information!";
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className=' bg-primary  w-full  flex flex-col '>
      <div className='flex text-white max-w-[1440px]  lg:px-[100px] py-[40px] items-start justify-between border-b-2 border-gray-300 px-4 lg:flex-row flex-col gap-9'>
        <div className=' w-[80%] md:w-[35%] flex flex-col gap-6 text-sm xs:w-full'>

           <Link href="/">
        <Image
          src="/icons/logo2.svg"
          alt="Logo"
          width={118.5}
          height={52}
          className=""
        />
      </Link>

          <h1 className='text-sm max-w-[315px]'>
          Ever Design Group transforms ideas into architectural 
          masterpieces with innovative design and quality construction. 
          We prioritize sustainability and efficiency to create lasting, 
          functional spaces. From concept to completion, we build with precision and excellence.
          </h1>
          <div className='flex gap-6 lg:flex-row '>
            <div className="flex items-center gap-4">
                      <a href="https://www.instagram.com/everdesigngroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className='icon-bg'>
                      <FontAwesomeIcon icon={faInstagram} className="icons text-lg hover:text-blue-500 transition duration-300 "/>
                      </a>
                      <a href="https://www.linkedin.com/company/ever-design1/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className='icon-bg'>
                        <FaLinkedin className="icons text-lg hover:text-blue-700 transition duration-300" />
                      </a>
                      <a href="https://x.com/everdesigngroup" target="_blank" rel="noopener noreferrer" className='icon-bg'>
                      <FontAwesomeIcon icon={faXTwitter} className="icons text-lg hover:text-blue-700 transition duration-300" />
                      </a>
                      <a href="" target="_blank" rel="noopener noreferrer" className='icon-bg' onClick={handleWhatsAppClick}>
                      <FontAwesomeIcon icon={faWhatsapp} className="icons text-lg hover:text-blue-700 transition duration-300" />
                      </a>
                    </div>
            {/* <Image src='/icons/orangeFb.svg' alt='' width={40} height={40} />
            <Image src='/icons/google-icon.svg' alt='' width={40} height={40} />
            <Image  src='/icons/linkedinIcon.svg' alt='' width={40} height={40}/>
            <Image src='/icons/youtubeIcon.svg' alt='' width={40} height={40} /> */}
          </div>
        </div>
        <div className='fservice w-[20%] flex flex-col  lg:gap-[29px] text-[18px] xs:text-[14px]  font-normal xs:w-full gap-2'>
          <h1 className='text-secondary font-medium'>Our Services</h1>
          <div className='flex flex-col gap-4 xs:flex-row justify-around text-white text-sm font-normal'>
            <p className=''>Architectural Design</p>
            <p className=''>Construction and Project Management</p>
            <p className=''>Renovation and Remodeling</p>
            <p className=''>Urban planning and development</p>
          </div>
        </div>
        <div className=' flex flex-col lg:gap-[29px] gap-2 text-[18px] font-normal xs:w-full mb-0 '>
          <h1 className='text-secondary font-medium'>Useful links</h1>
          <div className='flex gap-[90px] l xs:text-[14px] xs:gap-0'>
            <div className='flex flex-col gap-4 xs:flex-row xs:justify-between '>
              {navLinks.map((route) => {
                return (
                  <Link
                    href={route.href}
                    key={route.label}
                    className='text-sm font-normal'
                  >
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:gap-[29px] text-[18px] font-normal xs:w-full mb-0 border-green-400 gap-2'>
          <h1 className='text-secondary font-medium'>Contact Us</h1>
          <div className='flex gap-4 '>
            <Image src='/icons/email-icon.svg' alt='' width={19} height={12} />
            <h1 className='text-sm font-normal'>everdesigncompanyltd@gmail.com</h1>
          </div>
          <div className='flex gap-4'>
            <Image src='/icons/location3.svg' alt='' width={19} height={12} />
            <h1 className='text-sm font-normal'>
              M.peace plaza 3rd floor Block B F3 31 room
            </h1>
          </div>
          <div className='flex gap-4'>
            <Image
              src='/icons/telephone-icon.svg'
              alt=''
              width={19}
              height={12}
            />
            <h1 className='text-sm font-normal'>+250785035071</h1>
          </div>
        </div>
      </div>
      <div className='text-center items-center w-full lg:px-[100px]'>
      <h1 className=' text-white py-8 text-sm '>
        © Copyright 2025 <span className='text-secondary'>EverDesign</span>
      </h1>
      </div>
    </footer>
  );
};
export default Footer;
