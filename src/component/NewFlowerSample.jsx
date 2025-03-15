import { assets } from "../assets/assets"

const NewFlowerSample = () => {
    return (
        <div className='bg-zinc-100 py-3'>
            <div className="mx-auto max-w-6xl">
                <p className="text-start ml-14 text-red-700 text-xl font-lora font-semibold py-1">
                    Mẫu hoa mới trong 2025
                </p>
                <div className="flex space-x-12 justify-center items-center">
                    <div className="flex flex-col space-y-2 items-center">
                        <img
                            src={assets.hoaboIcon}
                            alt="hoa-bo"
                            className="w-40 h-40 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                        />
                        <p className="text-center font-medium">Hoa Bó</p>
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                        <img
                            src={assets.hoathabinhIcon}
                            alt="hoa-tha-binh"
                            className="w-40 h-40 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                        />
                        <p className="text-center font-medium">Hoa Thả Bình</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewFlowerSample
