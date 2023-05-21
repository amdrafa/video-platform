import { AiOutlineSearch } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"

export default function Header() {
    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full justify-between bg-stone-900 px-4 py-4 items-center">
                <AiOutlineSearch color="#ffffff" fontSize={"2rem"} />
                <img width={"180rem"} src="assets/logo.png" />
                <BsThreeDotsVertical color="#ffffff" fontSize={"1.5rem"} />
            </div>
        </div>
    )
}