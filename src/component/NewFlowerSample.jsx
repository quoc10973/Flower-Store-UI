import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const NewFlowerSample = ({ onFlowerClick }) => {
    return (
        <div className="bg-zinc-100 shadow-sm py-3">
            <div className="mx-auto max-w-6xl px-4">
                <p className="text-start text-red-700 text-lg sm:text-xl mb-8 md:mb-0 font-lora font-semibold py-1">
                    Mẫu hoa mới trong 2025
                </p>
                <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12 justify-center items-center">
                    {[
                        { src: assets.hoathabinhIcon, alt: "hoa-tha-binh", label: "Hoa Thả Bình", type: "hoaThaBinh" },
                        { src: assets.hoaboIcon, alt: "hoa-bo", label: "Hoa Bó", type: "hoaBo" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col space-y-3 items-center cursor-pointer"
                            onClick={() => onFlowerClick(item.type)}
                        >
                            <motion.div
                                className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                <motion.img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover rounded-full"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                />
                            </motion.div>
                            <p className="text-center text-sm sm:text-base font-lora font-medium">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewFlowerSample;
