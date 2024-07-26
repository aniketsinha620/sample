import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";

const Footer = () => {
  return (
   
      <footer className="footer section meraborderhai">
        <div className='contentcenterfooter'>
        <div className="footer__container container grid">
              <div className="footer__content grid">
              <div className="footer__data">
                   <h3 className="footer__title">Travel</h3>
                   <div className="footer__description"> Travel you choose the <br/> destination,
                    we offer you the <br/> experience.
                        </div>
                        <div className='iconssettlement'>
                        <div><a href='https://www.instagram.com'> <BsInstagram className='icons' /> </a></div>
                       <div><a href='https://www.facebook.com/'>< FaFacebookF className='icons' /> </a></div>
                       <div> <a href='https://www.messenger.com/'><BsMessenger className='icons' /></a></div>
                        <div><a href='https://web.telegram.org/a/'><RiTelegramLine className='icons' /></a></div>
                        </div>
                <div>
                  <a href="https://www.facebook.com/" target="_blank" className="footer__social">
                    <i className="ri-facebook-box-fill"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" NameclassName="footer__social">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" className="footer__social">
                    <i className="ri-instagram-fill"></i>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" className="footer__social">
                    <i className="ri-youtube-fill"></i>
                  </a>
                </div>
           </div>

                <div className="footer__data">
                  <h3 className="footer__subtitle">About</h3>
                  <ul>
                    <li className="footer__item">
                      <a href="" class="footer__link">About Us</a>
                    </li>
                    <li className="footer__item">
                      <a href="" class="footer__link">Features</a>
                    </li>
                    <li className="footer__item">
                      <a href="" className="footer__link">New & Blog</a>
                    </li>
                  </ul>
                </div>

                <div className="footer__data">
                  <h3 className="footer__subtitle">Company</h3>
                  <ul>
                    <li className="footer__item">
                      <a href="" className="footer__link">Team</a>
                    </li>
                    <li className="footer__item">
                      <a href="" className="footer__link">Plan y Pricing</a>
                    </li>
                    <li className="footer__item">
                      <a href="" className="footer__link">Become a member</a>
                    </li>
                  </ul>
                </div>

                <div className="footer__data">
                  <h3 className="footer__subtitle">Support</h3>
                  <ul>
                    <li className="footer__item">
                      <a href="" className="footer__link">FAQs</a>
                    </li>
                    <li className="footer__item">
                      <a href="" className="footer__link">Support Center</a>
                    </li>
                    <li className="footer__item">
                      <a href="" className="footer__link">Contact Us</a>
                    </li>
                  </ul>
                </div>
            </div>

            <div className="footer__rights">
              <p className="footer__copy">&#169; 2023 A4network. All rigths reserved.</p>
              <div className="footer__terms">
                <a href="#" className="footer__terms-link">Terms & Agreements</a>
                <a href="#" className="footer__terms-link">Privacy Policy</a>
              </div>
            </div>
          </div>
          </div>
      </footer>
   

  )
}

export default Footer
