import { useState, useEffect } from "react"
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";




function Community(){
    const [videoLinks, setVideoLinks] = useState<string[]>(["HmzcfFZrz90"]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        setVideoLinks([
            "VIvBSqzr2mY",
            "XRnI36YcWpM",
            "3OJXWGhHJAo",
            "FCHS8e2d5Sk",
            "Crm5LBmEa94"
        ]);
    }, []);

    function updateVideo(){
        if (videoLinks.length > 0) {
            return `https://www.youtube.com/embed/${videoLinks[currentIndex]}`;
        }
        return "";
    }

    function nextVideo(){
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videoLinks.length);
    }

    function previousVideo(){
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + videoLinks.length) % videoLinks.length
        );
    }

    return(
        <section id="community" className="mb-50 lg:p-10 text-center">
            <div className="font-serif">
                <h1 className="text-3xl mb-2">Community</h1>
                <h2 className="text-2xl italic"> my <span className="text-blue-500 text-3xl">online presence</span></h2>
            </div>
            

            <div className="flex flex-row items-center shadow-lg shadow-gray-400 rounded-lg lg:p-10 min-h-64 p-5 m-5 relative">
                <iframe 
                    width="100%" 
                    height="auto" 
                    src= {updateVideo()} 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-lg lg:h-140 h-64">
                </iframe>

                
                <button onClick={previousVideo} className="absolute left-0 hover:cursor-pointer bg-gray-100 p-2 rounded-full hover:bg-gray-300">
                    <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
                </button>

                <button onClick={nextVideo} className="absolute right-0 hover:cursor-pointer bg-gray-100 p-2 rounded-full hover:bg-gray-300">
                    <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                </button>
                
            </div>
        </section>
    )
}

export default Community