import { ImArrowUpRight2 } from "react-icons/im";
import { HiArrowRight } from "react-icons/hi2";

const Page1Content = () => {
    const imgs = [
        {
            link: "https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            btnText: "Satisfied",
        },
        {
            link: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            btnText: "Undeserved",
        },
        {
            link: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
            btnText: "Unbanked",
        }
    ]
    return (
        <div className=" flex justify-between h-[90vh] items-center  px-18">
            <div className="w-1/3    relative flex flex-col gap-6 ">
                <h1 className="font-extrabold text-6xl bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
                    Prospective Customer Segmentation
                </h1>

                <p className="text-sm w-full">Depending on customer satisfaction and access to banking products, potential target audience can be divided into these groups</p>
                <ImArrowUpRight2 size={48} className="mt-30" />
            </div>
            <div className="flex w-[64%]">
                {imgs.map((img, index) => {
                    return (
                        <div className="relative mx-4 h-120 w-80 rounded-2xl overflow-hidden group transition-all duration-500">
                            <img
                                src={img.link}
                                alt="Customer"
                                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <button className="absolute flex items-center gap-2 bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-800 rounded-full px-8 py-2 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100">
                                {img.btnText} <HiArrowRight />
                            </button>

                            <div className="absolute top-3 left-3 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 font-semibold shadow-sm">
                                {index + 1}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Page1Content