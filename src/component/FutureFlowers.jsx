import { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const flowerEvents = [
    {
        title: "Tặng hoa cho mẹ sau sinh",
        subtitle: "Gửi trọn yêu thương",
        description: "Khoảnh khắc mẹ sinh con là hành trình đầy yêu thương và mạnh mẽ. Một bó hoa tươi thắm không chỉ chúc mừng mẹ tròn con vuông mà còn thay lời cảm ơn, trân trọng sự hy sinh của mẹ.",
        image: assets.hoasausinh1
    },
    {
        title: "Hoa đầy tháng",
        subtitle: "Lời chúc đầu đời ngọt ngào",
        description: "Đầy tháng không chỉ đánh dấu cột mốc đầu tiên của bé mà còn là dịp gửi gắm những lời chúc an lành, hạnh phúc. Một bó hoa tươi thắm sẽ thay bạn trao yêu thương, mong bé luôn khỏe mạnh và bình an.",
        image: assets.hoadaythang1
    },
    {
        title: "Hoa sinh nhật",
        subtitle: "Gửi trọn yêu thương trong từng đóa hoa",
        description: "Mỗi bông hoa là một lời chúc tốt đẹp – chúc tuổi mới thật nhiều niềm vui, hạnh phúc và thành công. Hãy để những đóa hoa tươi thắm thay bạn gửi gắm yêu thương đến người đặc biệt trong ngày ý nghĩa này!",
        image: assets.hoasinhnhat1
    },
    {
        title: "Hoa tốt nghiệp",
        subtitle: "Tỏa sáng hành trình mới",
        description: "Khoảnh khắc tốt nghiệp là cột mốc đánh dấu nỗ lực và thành công. Một bó hoa tươi thắm không chỉ chúc mừng mà còn tiếp thêm động lực cho chặng đường phía trước. Hãy gửi tặng hoa để sẻ chia niềm vui và tự hào cùng người thân yêu!",
        image: assets.hoatotnghiep1
    },
    {
        title: "Hoa chúc mừng",
        subtitle: "Rạng rỡ mọi sự kiện",
        description: "Dự tiệc, khai trương hay lễ kỷ niệm, một bó hoa tươi thắm sẽ thay bạn gửi lời chúc tốt đẹp và tạo ấn tượng tinh tế. Hãy để những đóa hoa làm bừng sáng không gian và lan tỏa niềm vui!",
        image: assets.hoasukien1
    },
    {
        title: "Hoa mừng thọ",
        subtitle: "Kính chúc ông bà sống vui, sống khỏe",
        description: "Mừng thọ không chỉ là dịp tri ân mà còn là lời chúc phúc cho ông bà luôn mạnh khỏe, an vui bên con cháu. Một bó hoa tươi thắm sẽ thay bạn bày tỏ lòng hiếu kính và yêu thương trọn vẹn.",
        image: assets.hoamungtho1
    },
    {
        title: "Hoa chia buồn",
        subtitle: "Thành kính phân ưu 🌿",
        description: "Một vòng hoa trang nhã là lời tiễn biệt nhẹ nhàng, bày tỏ lòng thành kính và chia sẻ nỗi đau cùng gia quyến. Hãy để những đóa hoa thay lời an ủi, gửi đến người đã khuất sự tôn trọng và tiếc thương sâu sắc.",
        image: assets.hoatang1
    }
];

const FutureFlowers = () => {
    const [selectedFlower, setSelectedFlower] = useState(null);

    return (
        <div className="mx-auto max-w-5xl px-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {flowerEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedFlower(event)}
                    >
                        <img src={event.image} alt={event.title} className="w-32 h-32 rounded-lg object-cover" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                            <p className="text-sm text-gray-600 italic">{event.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedFlower && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedFlower(null)}
                >
                    <motion.div
                        className="bg-white p-6 rounded-lg mt-20 shadow-lg max-w-xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={selectedFlower.image} alt={selectedFlower.title} className="w-full h-80 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">{selectedFlower.title}</h3>
                        <p className="text-gray-700 mt-2">{selectedFlower.description}</p>
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setSelectedFlower(null)}>Đóng</button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default FutureFlowers;
