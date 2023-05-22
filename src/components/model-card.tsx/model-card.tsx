import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

interface IModelCardProps {
    isOnline: boolean;
    name: string;
    whatsappLink: string;
    image: string;
    price: string;
    city: string;
}

export default function ModelCard({ isOnline, name, whatsappLink, image, price, city }: IModelCardProps) {

    const notify = () => toast.error("Escolhe uma modelo online.")

    const [isChooseAnotherGirlPopUpOpened, setIsChooseAnotherGirlPopUpOpened] = useState(false)


    return (

        <>
            <Toaster />
            {isOnline ? (
                <a href={whatsappLink}>
                    <div className="p-2">
                        <div className=" flex justify-between text-sm p-2 rounded-t-md w-full bg-stone-800 items-center">
                            <span>
                                {name.split(" ")[0]}
                            </span>
                            <span className={`font-bold ${isOnline ? "text-lime-400" : "text-stone-400"}`}>
                                {city}
                            </span>
                        </div>
                        <div className="relative">
                            <img className="h-52 w-56" src={image} alt="model image" />
                            <div className="absolute top-2 right-2">
                                <div className="rounded-full bg-black bg-opacity-50 p-2">
                                    <BsFillSuitHeartFill />
                                </div>
                            </div>
                        </div>
                        <div className={`${isOnline ? "bg-lime-600" : "bg-stone-900"} flex justify-center py-1.5 rounded-b-md`}>
                            <p>
                                {isOnline ? `Online - ${price}` : "Offline"}
                            </p>
                        </div>
                    </div>
                </a>
            ) : (
                <div className="p-2" onClick={notify}>
                    <div className=" flex justify-between text-sm p-2 rounded-t-md w-full bg-stone-800 items-center">
                        <span>
                            {name.split(" ")[0]}
                        </span>
                        <span className={`font-bold ${isOnline ? "text-lime-400" : "text-stone-400"}`}>
                            {city}
                        </span>
                    </div>
                    <div className="relative">
                        <img className="h-52 w-56" src={image} alt="model image" />
                        <div className="absolute top-2 right-2">
                            <div className="rounded-full bg-black bg-opacity-50 p-2">
                                <BsFillSuitHeartFill />
                            </div>
                        </div>
                    </div>
                    <div className={`${isOnline ? "bg-lime-600" : "bg-stone-900"} flex justify-center py-1.5 rounded-b-md`}>
                        <p>
                            {isOnline ? `Online - ${price}` : ("Offline")}
                        </p>
                    </div>
                </div>

            )}
        </>


    )
}