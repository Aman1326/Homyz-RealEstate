import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className=" flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ab aspernatur sunt molestias unde pariatur dicta corporis eius necessitatibus, perspiciatis aperiam vel dolore eligendi rem odit quas recusandae quo voluptatibus.
                Harum amet sapiente, itaque praesentium </span>

                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Telephone</span>
                                    <span className='secondaryText'>+91 123 4456433</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>+91 123 4456433</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>+91 312 4456433</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        {/* fourth mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>+91 123 4456433</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>

            </div>
            {/* right side */}
            <div className="c-right">
                <div className="img-container">
                    <img src="./contact.jpg" alt="contactbuilding" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact