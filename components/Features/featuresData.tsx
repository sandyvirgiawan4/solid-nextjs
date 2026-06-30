import { Feature } from "@/types/feature"; // Sesuaikan jika ada error import type, jika tidak pakai typescript biasa hapus baris ini

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg", // Anda bisa biarkan default ikon bawaan template
    title: "100% Fiber Optic",
    description: "Jaringan kabel optik murni hingga ke lokasi Anda, menjamin transmisi data yang stabil dan minim gangguan cuaca.",
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Bandwidth Simetris (1:1)",
    description: "Kecepatan unggah (upload) dan unduh (download) yang sama cepat, sangat ideal untuk video conference, cloud, dan gaming.",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Tanpa Batas Kuota (FUP)",
    description: "Nikmati internet sepuasnya setiap hari tanpa perlu khawatir kecepatan diturunkan karena batas pemakaian wajar.",
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "Uptime Jaminan Tinggi",
    description: "Infrastruktur terlindungi dengan jalur backup (redundancy) untuk memastikan koneksi internet Anda tetap online 24/7.",
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "Izin Resmi & Anggota APJII",
    description: "PT Jaringan Teknologi Sejahtera beroperasi legal dengan lisensi ISP resmi dan terintegrasi dalam jaringan nasional.",
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "Dukungan Teknis Responsif",
    description: "Tim Network Engineer lokal yang siap sedia membantu menangani kendala teknis jaringan Anda dengan cepat.",
  },
];

export default featuresData;
