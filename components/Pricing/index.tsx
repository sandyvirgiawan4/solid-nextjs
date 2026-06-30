"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  // Data Paket Internet PT JTS
  const paketInternet = [
    {
      nama: "JTS Home Starter",
      speed: "20 Mbps",
      harga: "Rp 250.000",
      target: "Cocok untuk kebutuhan harian, browsing, dan streaming keluarga kecil.",
      fitur: [
        "100% Fiber Optic murni",
        "Unlimited tanpa FUP / kuota",
        "Download/Upload up to 1:2",
        "Dukungan teknis responsif",
      ],
      populer: false,
    },
    {
      nama: "JTS Home Premium",
      speed: "50 Mbps",
      harga: "Rp 400.000",
      target: "Pilihan terbaik untuk smart home, streaming 4K, dan gaming lancar tanpa lag.",
      fitur: [
        "100% Fiber Optic murni",
        "Unlimited tanpa FUP / kuota",
        "Download/Upload Simetris 1:1",
        "Prioritas jaringan utama",
      ],
      populer: true,
    },
    {
      nama: "JTS Bisnis Dedicated",
      speed: "100 Mbps+",
      harga: "Hubungi Kami",
      target: "Koneksi dedicated khusus instansi, kantor, sekolah, dan pelaku bisnis.",
      fitur: [
        "Bandwidth Dedicated 1:1 (SLA 99.9%)",
        "IP Public Static (Optional)",
        "Technical Account Manager khusus",
        "Prioritas penanganan kendala",
      ],
      populer: false,
    },
  ];

  const handlePesan = (namaPaket) => {
    window.open(
      `https://wa.me/6281234567890?text=Halo%20JTS%2C%20saya%20tertarik%20untuk%20berlangganan%20paket%3A%20${encodeURIComponent(
        namaPaket
      )}`,
      "_blank"
    );
  };

  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section id="pricing" className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PAKET INTERNET`,
                subtitle: `Layanan Internet Sesuai Kebutuhan Anda`,
                description: `Pilih paket internet terbaik dari PT Jaringan Teknologi Sejahtera. Mulai dari kebutuhan rumahan yang ramah kantong hingga koneksi dedicated bergaransi tinggi untuk bisnis Anda.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {paketInternet.map((paket, index) => (
              /* <!-- Pricing Item --> */
              <div 
                key={index}
                className={`animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 ${
                  paket.populer ? "border-primary dark:border-primary" : ""
                }`}
              >
                {paket.populer && (
                  <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                    popular
                  </div>
                )}

                <h3 className="mb-2 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  {paket.harga}
                  {paket.harga !== "Hubungi Kami" && (
                    <span className="text-regular text-waterloo dark:text-manatee">
                      /bulan
                    </span>
                  )}
                </h3>
                
                <h4 className="mb-2.5 text-para2 font-semibold text-primary dark:text-white">
                  {paket.nama} ({paket.speed})
                </h4>
                <p className="text-sm min-h-[60px]">{paket.target}</p>

                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    {paket.fitur.map((fitur, idx) => (
                      <li key={idx} className="mb-4 text-black last:mb-0 dark:text-manatee flex items-center gap-2">
                        <svg
                          className="fill-primary shrink-0"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.6666 3.79163L4.95829 10.5L2.33329 7.87496L3.15579 7.05246L4.95829 8.84913L10.8441 2.96913L11.6666 3.79163Z" />
                        </svg>
                        {fitur}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handlePesan(paket.nama)}
                  aria-label="Get the Plan button"
                  className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary mt-4"
                >
                  <span className="duration-300 group-hover/btn:pr-2">
                    Pilih Paket Ini
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
