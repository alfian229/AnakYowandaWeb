import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";


// const translationEn = {title:"WE BUILD FUTURE!", subTitle:"NOT JUST TECH", buttonHeader: "Start Now", aboutBg: "Who We Are",
//                         aboutTitle: "Creative Digital Agency for Better World", buttonAbout: "Learn More", serviceBg1:"Our Service", serviceBg2: "WHAT WE DO",
//                         serviceTitle1: "Brand Strategic", serviceTitle2:"Web Development", serviceTitle3:"Web Apps", serviceTitle4:"SEO Optimization",
//                         serviceTitle5:"SEO Optimization", serviceTitle6:"SMM Marketing", bgTitle:"CALL TO ACTION", bgSubTitle:"NOT JUST TECH", featureBg1:"Our Features",
//                         featureBg2:"WHY CHOOSE US", featureTitle1:"Easily Managable", featureTitle2:"Powerful Codes", featureTitle3:"Clean Design", bgProfile:"ABOUT US",
//                         profileTitle1:"Vision", profileTitle2:"Misson",servicePg1:"Website Development", servicePg2:"Web & Mobile Apps", contactBg:"LETS WORK TOGETHER",
//                         contactTitle:"Lets talk about everything", name:"Name", email:"Email", phone:"Phone", message:"Message", submit:"Submit", menuNav1:"Homepage",
//                         menuNav3:"Service", menuNav4:"Portofolio", menuNav5:"Contact", buttonNav:"Let's Meet Up", modalUpload:"all input fields must be filled",
//                         contentName:"Input Your Name", contentEmail:"Input Your Email", contentPhone:"Input Your Phone", contentMessage:"Input Your Message", news:"Never Miss Latest News", code: 1}

const translationId = {title:"KITA MEMBANGUN MASA DEPAN", subTitle:"TIDAK HANYA TEKNOLOGI", buttonHeader: "Mulai Sekarang",  aboutBg: "Siapa Kami",
                        aboutTitle:"Agensi Digital Kreatif untuk Dunia yang Lebih Baik", buttonAbout:"pelajari lebih lanjut", serviceBg1:"Layanan Kami", serviceBg2:"APA YANG KITA LAKUKAN",
                        serviceTitle1:"Merek Strategis", serviceTitle2:"Pengembangan web", serviceTitle3:"Aplikasi Web", serviceTitle4:"Optimasi SEO",
                        serviceTitle5:"Optimasi SEO", serviceTitle6:"Pemasaran SMM",  bgTitle:"PANGGIL UNTUK TINDAKAN", bgSubTitle:"TIDAK HANYA TEKNOLOGI", featureBg1:"Fitur kami",
                        featureBg2:"MENGAPA MEMILIH KAMI", featureTitle1:"Mudah Dikelola", featureTitle2:"Kode Kuat", featureTitle3:"Desain Bersih", bgProfile:"TENTANG KAMI",
                        profileTitle1:"Visi", profileTitle2:"Misi", servicePg1:"Pengembangan Situs Web", servicePg2:"Aplikasi Web & Seluler", contactBg:"MARI BEKERJA SAMA",
                        contactTitle:"Mari kita bicarakan semuanya",  name:"Nama",  email:"Email", phone:"Telepon",  message:"Pesan", submit:"Kirim",menuNav1:"Beranda",
                        menuNav3:"Melayani", menuNav4:"Portofolio", menuNav5:"Kontak", buttonNav:"Mari bertemu", uploadData:"Semua kolom Harus Terisi", contentName:"Masukan Nama Anda",
                        contentEmail:"Masukan Email Anda", contentPhone:"Masukan Nomor Telepon Anda", contentMessage:"Masukan Pesan Anda", news:"Jangan Lewatkan Berita Terbaru", code: 0}


i18n 
.use(initReactI18next)
.init({
  resources:{
    // en:{
    //   translation: translationEn ,
    // },
    id:{
      translation: translationId,
    }
  },
  lng: "id",
  fallbackLng: "id",
  interpolation: {
    escapeValue: false
  }

})