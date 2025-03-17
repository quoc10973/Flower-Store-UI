import { motion } from "framer-motion";

const FutureSection = () => {
    return (
        <motion.div
            className="mx-auto font-signika max-w-6xl px-6 py-20 rounded-2xl "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}

        >
            <h2 className="text-xl font-bold text-center text-purple-700 mb-6">
                Hành trình cùng những đóa hoa
            </h2>
            <p className="text-md text-gray-700 leading-relaxed text-justify">
                <span className="font-semibold text-purple-600">Mục tiêu:</span> Gắn bó với khách hàng trong suốt hành trình cuộc đời bằng hình ảnh hoa phù hợp với từng giai đoạn.
                Dịch vụ hoa của chúng tôi không chỉ đơn thuần là một cửa hàng, mà là một người bạn đồng hành trên suốt hành trình cuộc đời của bạn.
            </p>
            <p className="mt-4 text-md text-gray-700 leading-relaxed text-justify">
                Từ những đóa hoa chào mừng một sinh linh bé nhỏ ra đời, đến những bó hoa hồng rực rỡ ngày tỏ tình, hay lẵng hoa cưới thiêng liêng trong ngày trọng đại – mỗi khoảnh khắc đáng nhớ đều được ghi dấu bằng những cánh hoa tươi thắm. Chúng tôi tiếp tục đồng hành cùng bạn qua những dịp kỷ niệm, ngày lễ, những lần động viên khi khó khăn và cả những đóa hoa tưởng niệm đầy trang trọng.
            </p>
            <p className="mt-4 text-md text-gray-700 leading-relaxed text-justify">
                Mỗi giai đoạn của cuộc đời đều mang một sắc thái riêng, và chúng tôi ở đây để giúp bạn lựa chọn những loài hoa phù hợp nhất, không chỉ để gửi gắm thông điệp mà còn để kết nối những cảm xúc chân thành. Với sự tận tâm và thấu hiểu, chúng tôi mong muốn mỗi bó hoa không chỉ là một món quà, mà còn là một phần trong câu chuyện của bạn – một câu chuyện được kể bằng sắc hoa và tình cảm chân thành.
            </p>
        </motion.div>
    );
};

export default FutureSection;