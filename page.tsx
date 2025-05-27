"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Phone,
  MapPin,
  Mail,
  Calendar,
  Users,
  Wifi,
  Car,
  MessageCircle,
  Camera,
  Tv,
  Waves,
  Bath,
  ChefHat,
  Sofa,
  Bed,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ChaletWebsite() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    guests: "",
  })

  const chaletImages = [
    "/main-chalet.jpg",
    "/gallery/living-room-pool.jpg",
    "/gallery/kitchen.jpg",
    "/gallery/living-room-stairs.jpg",
    "/gallery/pool-closeup.jpg",
    "/gallery/bedroom-twin.jpg",
    "/gallery/bedroom-triple.jpg",
    "/gallery/master-bedroom.jpg",
    "/gallery/master-bedroom-view.jpg",
    "/gallery/bbq-area.jpg",
  ]

  const features = [
    { icon: Bed, text: "ثلاث غرف نوم" },
    { icon: Bath, text: "ثلاث دورات مياه" },
    { icon: Sofa, text: "صالة واسعة" },
    { icon: ChefHat, text: "مطبخ مجهز" },
    { icon: Waves, text: "مسبح داخلي" },
    { icon: Users, text: "يتسع حتى 8 أشخاص" },
    { icon: Car, text: "موقف سيارات" },
    { icon: Wifi, text: "واي فاي مجاني" },
    { icon: Camera, text: "كاميرات مراقبة" },
    { icon: Tv, text: "اثنين شاشة تلفاز" },
  ]

  const sendWhatsApp = () => {
    const { name, date, guests } = formData
    if (!name || !date || !guests) {
      alert("يرجى ملء جميع الحقول")
      return
    }

    const message = `مرحبًا، أنا ${name}%0Aأرغب بحجز شاليه بتاريخ: ${date}%0Aعدد الأشخاص: ${guests}`
    const phoneNumber = "966554470394"

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    setShowBookingForm(false)
    setFormData({ name: "", date: "", guests: "" })
  }

  return (
    <div className="min-h-screen" dir="rtl" style={{ backgroundColor: "#f9f5f0" }}>
      <header className="shadow-lg sticky top-0 z-40 backdrop-blur-sm" style={{ backgroundColor: "#c5a877" }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Image src="/logo.png" alt="شعار برايك السحاب" width={130} height={100} className="object-contain" />
            </div>
            <Button
              size="lg"
              className="text-lg px-8 py-3 shadow-lg transition-all duration-300 hover:shadow-xl text-white"
              style={{ backgroundColor: "#ee626b", border: "none" }}
              onClick={() => setShowBookingForm(true)}
            >
              <Calendar className="w-5 h-5 ml-2" />
              احجز شاليهك الآن
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-bg.jpg" alt="شاليهات بريق السحاب" fill className="object-cover hero-bg" priority />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl floating-animation"
            style={{ color: "white" }}
          >
            شاليهات بريق السحاب
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-lg" style={{ color: "white" }}>
            شاليهات فاخرة مجهزة بأحدث وسائل الراحة
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-3 shadow-2xl transition-all duration-300 text-white"
            style={{ backgroundColor: "#ee626b", border: "none" }}
            onClick={() => setShowBookingForm(true)}
          >
            <Calendar className="w-5 h-5 ml-2" />
            احجز شاليهك الآن
          </Button>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">نبذة عن شاليهاتنا</h3>
            <p className="text-lg max-w-3xl mx-auto">
              نوفر لك تجربة إقامة استثنائية في شاليهات مصممة بعناية فائقة، تجمع بين الراحة والفخامة. شاليهاتنا مجهزة
              بأحدث وسائل الراحة والترفيه لضمان إقامة لا تُنسى لك ولعائلتك.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <feature.icon className="w-10 h-10 mx-auto mb-4" style={{ color: "#c5a877" }} />
                  <p className="font-medium text-base">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">معرض الصور</h3>
            <p className="text-lg">اكتشف جمال وفخامة شاليهاتنا</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="relative group">
                <Image
                  src={chaletImages[selectedImage] || "/placeholder.svg"}
                  alt="صورة الشاليه المختارة"
                  width={800}
                  height={500}
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ border: "6px solid #c5a877" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl p-6">
                  <h4 className="text-white text-xl font-bold mb-2">شاليهات بريق السحاب</h4>
                  <p className="text-white/90 text-sm">
                    صورة {selectedImage + 1} من {chaletImages.length}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : chaletImages.length - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={() => setSelectedImage(selectedImage < chaletImages.length - 1 ? selectedImage + 1 : 0)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {chaletImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 ${
                    selectedImage === index ? "scale-110 shadow-xl" : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`صورة الشاليه ${index + 1}`}
                    width={120}
                    height={80}
                    className="w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg"
                    style={{ border: selectedImage === index ? "3px solid #ee626b" : "2px solid #c5a877" }}
                  />
                  {selectedImage === index && (
                    <div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#ee626b" }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Button
                className="px-6 py-3 text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#c5a877", border: "none" }}
              >
                <Camera className="w-4 h-4 ml-2" />
                عرض جميع الصور
              </Button>
              <Button
                onClick={() => setShowBookingForm(true)}
                className="px-6 py-3 text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#ee626b", border: "none" }}
              >
                <Calendar className="w-4 h-4 ml-2" />
                احجز الآن
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">الموقع والتواصل</h3>
            <p className="text-lg">نحن هنا لخدمتك في أي وقت</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold mb-6">معلومات التواصل</h4>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "#c5a877" }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">رقم الهاتف</p>
                  <p dir="ltr">+966 554470394</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "#c5a877" }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">البريد الإلكتروني</p>
                  <p dir="ltr">breqabha2@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "#c5a877" }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">العنوان</p>
                  <p>الدرب،الكدرة</p>
                </div>
              </div>
              <Button
                size="lg"
                className="text-lg px-8 py-3 shadow-lg transition-all duration-300 text-white"
                style={{ backgroundColor: "#ee626b", border: "none" }}
                onClick={() => setShowBookingForm(true)}
              >
                <Calendar className="w-5 h-5 ml-2" />
                احجز شاليهك الآن
              </Button>
            </div>
            <div
              className="rounded-lg overflow-hidden shadow-xl"
              style={{ backgroundColor: "#f9f5f0", border: "4px solid #c5a877" }}
            >
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <h3 className="text-xl font-bold mb-4">📍 موقع شاليهات بريق السحاب</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.187262505704!2d42.333026!3d17.7828941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e326bf8fec4d79%3A0x6fab6bd72e313f5e!2z2LTYp9mE2YrZh9in2Kog2KjYsdmK2YIg2KfZhNiz2K3Yp9ioICgg2KjYsdmK2YIg2KfYqNmH2Kcg2LPYp9io2YLYpyk!5e0!3m2!1sar!2ssa!4v1748298526970!5m2!1sar!2ssa"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع شاليهات بريق السحاب"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12" style={{ backgroundColor: "#c5a877" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 space-x-reverse mb-6">
            <Image src="/logo.png" alt="شعار برايك السحاب" width={180} height={140} className="object-contain" />
          </div>
          <p className="text-lg">جميع الحقوق محفوظة © 2024</p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open("https://wa.me/966554470394", "_blank")}
          className="floating-animation transition-all duration-300 hover:scale-110 shadow-2xl"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          تواصل عبر واتساب
        </button>
      </div>

      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl" style={{ border: "4px solid #c5a877" }}>
            <h2 className="text-2xl font-bold text-center mb-6">احجز شاليهك الآن</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="اسمك الكامل"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                style={{ border: "2px solid #c5a877" }}
                required
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                style={{ border: "2px solid #c5a877" }}
                required
              />
              <input
                type="number"
                placeholder="عدد الأشخاص"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                style={{ border: "2px solid #c5a877" }}
                required
              />
              <div className="flex gap-3 mt-6">
                <Button
                  onClick={sendWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  إرسال عبر واتساب
                </Button>
                <Button
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 transition-all duration-300"
                  style={{ border: "2px solid #c5a877", backgroundColor: "transparent" }}
                >
                  إلغاء
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
