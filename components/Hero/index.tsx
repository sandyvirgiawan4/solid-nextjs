"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [alamat, setAlamat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrasi masa depan: Kirim data alamat ke WA atau database untuk cek coverage
    if (alamat) {
      window.open(`https://wa.me/6281234567890?text=Halo%20JTS%2C%20saya%20ingin%20cek%20cakupan%20area%20untuk%20alamat%3A%20${encodeURIComponent(alamat)}`, "_blank");
    }
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🌐 PT Jaringan Teknologi Sejahtera (JTS)
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Koneksi Internet Terbaik untuk {" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Masa Depan Anda
                </span>
              </h1>
              <p>
                PT Jaringan Teknologi Sejahtera (JTS) hadir sebagai penyedia jasa 
                internet (ISP) berlisensi resmi APJII. Kami menghadirkan solusi infrastruktur 
                jaringan fiber optic berkecepatan tinggi, bandwidth simetris, dan jaminan 
                uptime optimal untuk kebutuhan Retail, Korporasi, Pendidikan, hingga Instansi Pemerintahan.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      type="text"
                      placeholder="Masukkan alamat atau desa Anda"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary w-full max-w-sm"
                    />
                    <button
                      aria-label="cek jangkauan area"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Cek Area Jangkauan
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white text-sm">
                  ⚡ Layanan internet dedicated & broadband tanpa batas kuota (FUP).
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="PT JTS Network Illustration"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="PT JTS Network Illustration"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
