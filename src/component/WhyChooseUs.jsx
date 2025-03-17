import React from "react";
import { Truck, Clock, BadgeCheck, Gift, Tag, RefreshCcw, ShieldCheck, Receipt } from "lucide-react";

const benefits = [
    { icon: <Truck className="w-10 h-10 text-pink-500" />, title: "MIỄN PHÍ GIAO HÀNG 63 TỈNH", desc: "Free shipping (nội thành)" },
    { icon: <Clock className="w-10 h-10 text-pink-500" />, title: "PHỤC VỤ 24/24", desc: "24-7 service" },
    { icon: <Receipt className="w-10 h-10 text-pink-500" />, title: "GIÁ ĐÃ GỒM 10% VAT", desc: "Price include VAT" },
    { icon: <RefreshCcw className="w-10 h-10 text-pink-500" />, title: "GIAO NHANH TRONG 60 PHÚT", desc: "60 minutes quick delivery" },
    { icon: <BadgeCheck className="w-10 h-10 text-pink-500" />, title: "CAM KẾT HÀI LÒNG 100%", desc: "100% guarantee smile" },
    { icon: <ShieldCheck className="w-10 h-10 text-pink-500" />, title: "CAM KẾT HOA TƯƠI 3+ NGÀY", desc: "3+ days fresh warranty" },
    { icon: <Gift className="w-10 h-10 text-pink-500" />, title: "TẶNG THIỆP CAO CẤP", desc: "Free greeting cards" },
    { icon: <Tag className="w-10 h-10 text-pink-500" />, title: "GIẢM GIÁ ĐẾN 10%", desc: "Receive 3-10% discount" },
];

const WhyChooseUs = () => {
    return (
        <section className="py-12 bg-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    TẠI SAO BẠN NÊN DÙNG DỊCH VỤ CỦA CHÚNG TÔI?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center space-y-2">
                            {item.icon}
                            <h3 className="text-md font-semibold text-gray-700 text-center">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
