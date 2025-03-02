import profilePic from "../../assets/person.png";
import pattern1 from "../../assets/pat-1.png";

function Testimonials(){
    return(
        <section id="testimonials" className="mb-20 flex flex-col items-center p-10">

            <div className="flex flex-col items-center font-serif">
                <h1 className="text-3xl mb-2">Testimonials</h1>
                <h2 className="text-2xl italic"> what our <span className="text-blue-500 text-3xl">patients say</span></h2>
            </div>
            
            <div className="flex flex-row gap-10 m-10 w-full h-110 p-5 overflow-x-auto scrollbar-custom">

                <div className="flex flex-col gap-3 justify-start min-w-64 lg:flex-shrink-0 lg:w-90 items-center relative p-5 shadow-lg shadow-gray-400 rounded-xl text-center">
                    <img src={profilePic} alt="person" className="rounded-full border-1 h-25 w-25"/>
                    <p className="text-justify text-gray-600 font-serif">
                        We have visited many doctors but they were only changing one medicine to others with 
                        unsatisfactory results. Finally after Dr Amrita's treatment my dad's sugars are in control. 
                    </p>
                    <div className="text-xl font-bold font-serif italic absolute bottom-5 left-0 w-40">Mr. Sanjay Chaturvedi</div>
                    <img src={pattern1} alt="pattern-1" className="h-15 w-15 absolute bottom-5 right-5"/>
                </div>

                <div className="flex flex-col gap-3 min-w-64 lg:flex-shrink-0 lg:w-90 justify-start items-center relative p-5 shadow-lg shadow-gray-400 rounded-xl text-center">
                    <img src={profilePic} alt="person" className="rounded-full border-1 h-25 w-25" />
                    <p className="text-justify text-gray-600 font-serif">
                        One of the best doctor I have ever met. We met so many doctors earlier, 
                        but the way she has explained and treated my diseases no one did it earlier. 
                    </p>
                    <div className="text-xl font-bold font-serif italic absolute bottom-5 left-0 w-40">Mr. Rohit Tevatiya</div>
                    <img src={pattern1} alt="pattern-1" className="h-15 w-15 absolute bottom-5 right-5"/>
                </div>

                <div className="flex flex-col gap-3 min-w-64 lg:flex-shrink-0 lg:w-90 justify-start items-center relative p-5 shadow-lg shadow-gray-400 rounded-xl text-center">
                    <img src={profilePic} alt="person" className="rounded-full border-1 h-25 w-25" />
                    <p className="text-justify text-gray-600 font-serif">
                    Her diagnoses and holistic approach to remedy is great. Recommended treatment was very practical. In addition to medicines, 
                    simple changes to diet and lifestyle advice was very helpful. 
                    </p>
                    <div className="text-xl font-bold font-serif italic absolute bottom-5 left-0 w-40">Mr. Adeer</div>
                    <img src={pattern1} alt="pattern-1" className="h-15 w-15 absolute bottom-5 right-5"/>
                </div>

                <div className="flex flex-col gap-3 min-w-64 lg:flex-shrink-0 lg:w-90 justify-start items-center relative p-5 shadow-lg shadow-gray-400 rounded-xl text-center">
                    <img src={profilePic} alt="person" className="rounded-full border-1 h-25 w-25"/>
                    <p className="text-justify text-gray-600 font-serif">
                    Her diagnoses and holistic approach to remedy is great. Recommended treatment was very practical. In addition to medicines, 
                    simple changes to diet and lifestyle advice was very helpful. 
                    </p>
                    <div className="text-xl font-bold font-serif italic absolute bottom-5 left-0 w-40">Mr. Adeer</div>
                    <img src={pattern1} alt="pattern-1" className="h-15 w-15 absolute bottom-5 right-5"/>
                </div>

                <div className="flex flex-col gap-3 min-w-64 lg:flex-shrink-0 lg:w-90 justify-start items-center relative p-5 shadow-lg shadow-gray-400 rounded-xl text-center">
                    <img src={profilePic} alt="person" className="rounded-full border-1 h-25 w-25"/>
                    <p className="text-justify text-gray-600 font-serif">
                    Her diagnoses and holistic approach to remedy is great. Recommended treatment was very practical. In addition to medicines, 
                    simple changes to diet and lifestyle advice was very helpful. 
                    </p>
                    <div className="text-xl font-bold font-serif italic absolute bottom-5 left-0 w-40">Mr. Adeer</div>
                    <img src={pattern1} alt="pattern-1" className="h-15 w-15 absolute bottom-5 right-5"/>
                </div>
            </div>
            
        </section>
    )
}

export default Testimonials