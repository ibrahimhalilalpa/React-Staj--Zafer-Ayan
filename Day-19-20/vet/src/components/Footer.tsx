import { Clock, Heart, MapPin, Phone } from "lucide-react";

const Footer = () => {
    const contactItems = [
        {
            icon: Phone,
            text: "‪+90 (531) 234 56 78‬",
        },
        {
            icon: MapPin,
            text: "Moda, Kadıköy",
        },
        {
            icon: Clock,
            text: "09:00 - 21:00",
        },
    ];
    return (
        <div className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* 3 Cols Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Clinic Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            {/* Icon */}
                            <div className="bg-orange-500 p-2 rounded-full">
                                <Heart className="h-5 w-5 text-white" />
                            </div>
                            {/* Vet Name and title  */}
                            <div>
                                <h3 className="text-lg font-bold">Zafer AYAN</h3>
                                <p className="text-orange-400">Veteriner Kliniği</p>
                            </div>
                        </div>
                        {/* Text Container */}
                        <p className="text-gray-300 leading-relaxed">
                            Kuş sağlığında uzmanlaşmış veteriner kliniği. Sevimli
                            dostlarınızın sağlığı bizim önceliğimiz.
                        </p>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Iletişim</h3>
                        {/* Contact Items */}
                        <div className="space-y-3">
                            {contactItems.map((contact, index) => {
                                const Icon = contact.icon;
                                return (
                                    <div key={index} className="flex items-start gap-3">
                                        <Icon className="w-5 h-5 text-orange-400" />
                                        <span className="text-gray-300">{contact.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Social Media */}
                </div>
            </div>
        </div>
    );
};

export default Footer;