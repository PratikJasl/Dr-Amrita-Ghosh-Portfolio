import diabetesManage from "../../assets/dibetis-management.jpg";
import dietPlan from "../../assets/diet-plan.jpg";
import gestational from "../../assets/pregnant.jpg";
import footCare from "../../assets/foot1.jpg";
import glucose from "../../assets/glucose.jpg";
import cardiology from "../../assets/cardiology.jpg";

function Services(){
    return(
        <section id="services" className="mb-20 scroll-smooth flex flex-col items-center w-full">

            <h1 className="text-4xl font-serif">Services<span className="text-blue-500 text-3xl italic"> We Offer</span></h1>

            <div className="flex flex-col flex-wrap justify-center lg:flex lg:flex-row gap-10 m-10 ">

                <div 
                    className="shadow-lg shadow-gray-400 p-4 h-70 w-70 hover:scale-110 active:scale-110 transition transform duration-400 ease-in-out rounded-lg
                    flex flex-col gap-5 items-center justify-end"
                    style={{ backgroundImage: `url(${diabetesManage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="text-xl font-bold font-serif text-white bg-amber-400 rounded-lg p-1">Diabetes Management</div>
                </div>

                <div 
                    className="shadow-lg shadow-gray-400 p-4 h-70 w-70 hover:scale-110 active:scale-110 transition transform duration-400 ease-in-out rounded-lg
                    flex flex-col gap-5 items-center justify-end"
                    style={{ backgroundImage: `url(${dietPlan})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="text-xl font-bold font-serif text-white bg-amber-400 rounded-lg p-1">Diet Planning</div>
                </div>

                <div 
                    className="shadow-lg shadow-gray-400 p-4 h-70 w-70 hover:scale-110 active:scale-110 transition transform duration-400 ease-in-out rounded-lg
                    flex flex-col gap-5 items-center justify-end"
                    style={{ backgroundImage: `url(${gestational})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="text-xl font-bold font-serif text-white bg-amber-400 rounded-lg p-1">Gestational Diabetes</div>
                </div>

                <div 
                    className="shadow-lg shadow-gray-400 p-4 h-70 w-70 hover:scale-110 active:scale-110 transition transform duration-400 ease-in-out rounded-lg
                    flex flex-col gap-5 items-center justify-end"
                    style={{ backgroundImage: `url(${footCare})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="text-xl font-bold font-serif text-white bg-amber-400 rounded-lg p-1">Diabetic Foot Care</div>
                    
                </div>

                <div 
                    className="shadow-lg shadow-gray-400 p-4 h-70 w-70 hover:scale-110 active:scale-110 transition transform duration-400 ease-in-out rounded-lg
                    flex flex-col gap-5 items-center justify-end"
                    style={{ backgroundImage: `url(${glucose})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="text-xl font-bold font-serif text-white bg-amber-400 rounded-lg p-1">Glucose Intolerance</div>  
                </div>

                <div 
                    className="shadow-lg shadow-gray-400 p-4 h-70 w-70 hover:scale-110 active:scale-110 transition transform duration-400 ease-in-out rounded-lg
                    flex flex-col gap-5 items-center justify-end"
                    style={{ backgroundImage: `url(${cardiology})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="text-xl font-bold font-serif text-white bg-amber-400 rounded-lg p-1">Clinical Cardiology</div>
                </div>

            </div>
            
        </section>
    )
}

export default Services