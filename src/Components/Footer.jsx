import { Link } from 'react-router-dom'
import footerImg from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='mt-12 lg:mt-16'>
      <div className="w-full bg-[#08040f]">
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-4'>
          <footer>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
              <div className="space-y-6 lg:w-[50%]">
                <img src={footerImg} alt="" />
                <p className='text-gray-200'>Discover the latest in tech with TechTrovehub. Your go-to destination for quality IT products.</p>
                <div className="mt-6 text-gray-200">
                  <h4>Contact Us</h4>
                  <p>Email: info@techtrovehub.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-md font-semibold text-gray-50 uppercase">Quick Links</h2>
                  <ul className="text-gray-400 font-medium space-y-3">
                    <li><Link>Home</Link></li>
                    <li><Link>Offer Product</Link></li>
                    <li><Link>Category</Link></li>
                    <li><Link>Online Payment</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>My Account</Link></li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-md font-semibold text-gray-50 uppercase">Product Featured</h2>
                  <ul className="text-gray-400 font-medium space-y-3">
                    <li><Link>Laptop</Link></li>
                    <li><Link>Mobile</Link></li>
                    <li><Link>HeadPhone</Link></li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-md font-semibold text-gray-50 uppercase">Privacy Policy</h2>
                  <p className='text-gray-400 font-medium'>Read our <Link to="#" className='underline text-blue-600'>Privacy Policy</Link> to understand how we protect your data.</p>
                </div>
              </div>
            </div>
            <hr className="my-8 border-gray-200 sm:mx-auto" />
            <div>
              <p className="text-sm text-slate-700 text-center">Copyright © 2023 - All right reserved by TechTroveHub</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer