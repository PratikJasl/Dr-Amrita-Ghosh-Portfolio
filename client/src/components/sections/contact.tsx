import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import contact from "../../assets/contact.png";

<EnvelopeIcon className="h-6 w-6 text-gray-500" />


function Contact(){
    return(
        <section id="contact" className="scroll-smooth lg:p-10 p-5 text-center shadow-2xl shadow-black w-full">
            <div className="flex flex-col items-center gap-2 mb-10">
                        <h1 className="text-3xl lg:text-4xl font-serif">Contact Us</h1>
                        <h2 className="text-xl lg:text-2xl text-blue-500 italic font-serif">Feel free to reach out to us for any queries</h2>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-15 items-center justify-center gap-5">
                
                <div>
                    <div className="flex flex-row items-center gap-5 mb-10 hover:scale-120 active:scale-120 transition transform duration-500 ease-in-out ">
                        <EnvelopeIcon className="h-12 w-12 text-gray-500 border-2 rounded-full p-1"/>
                        <h3 className="text-xl font-serif italic">amritaghosh@gmail.com</h3>
                    </div>

                    <div className="flex flex-row gap-5 w-full justify-center mb-10">
                        <a href="https://www.instagram.com/ghoshgoes/" target="blank">
                            <i className="fab fa-instagram text-3xl text-red-500 hover:scale-150 active:scale-150 transition transform duration-500 ease-in-out"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/amrita-ghosh-53a203161/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" target="blank">
                            <i className="fab fa-linkedin text-3xl text-blue-500 hover:scale-150 active:scale-150 transition transform duration-500 ease-in-out"></i>
                        </a>
                        <a href="https://www.youtube.com/watch?v=HmzcfFZrz90" target="blank">
                            <i className="fab fa-youtube text-3xl text-red-500 hover:scale-150 active:scale-150 transition transform duration-500 ease-in-out"></i>
                        </a>    
                        <div className="flex items-center gap-2 hover:scale-120 active:scale-120 transition transform duration-500 ease-in-out">
                            <PhoneIcon className="h-6 w-6 text-black" />
                            <h3 className="text-lg">+91 1234567890</h3>
                        </div>
                    </div>
                </div>
                
                <div className="mb-10">
                    <img src={contact} alt="contact-image" />
                </div>
            </div>

            <div className="font-serif italic">
                    <h2>Made with ❤️ by <span className="text-lg">Pratik Jussal</span></h2>
            </div>
        </section>
    )
}

export default Contact


   
