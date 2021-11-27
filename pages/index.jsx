/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import Meta from "../comps/Meta";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Landing() {
  const NavRow = () => {
    const rows = [
      { title: "Beranda", href: "#top" },
      { title: "Harga", href: "#pricing" },
      { title: "Contoh", href: "#sample" },
      { title: "Pertanyaan", href: "#question" },
    ];

    const NavItems = ({ title, href }) => (
      <li>
        <a
          className="py-10 px-3 hover:bg-gray-200 transition duration-300 ease-out"
          href={href}
        >
          {title}
        </a>
      </li>
    );

    return (
      <ul className="hidden md:flex flex-auto text-sm justify-end self-center">
        {rows.map((e) => (
          <NavItems key={e.title} title={e.title} href={e.href} />
        ))}
      </ul>
    );
  };

  const Screens = () => (
    <div className="flex gap-3 pr-2">
      <p className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
        2xl
      </p>
      <p className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        xl
      </p>
      <p className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
        lg
      </p>
      <p className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        md
      </p>
      <p className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </p>
      <p className="sm:hidden md:hidden xl:hidden 2xl:hidden">xs</p>
    </div>
  );

  const SectionPadding = ({ children }) => (
    <div className="px-4 sm:px-10 lg:px-20 xl:px-40 2xl:px-80">{children}</div>
  );

  const SectionTitle = ({ title, sub }) => (
    <>
      <h6 className="self-center text-center text-sm uppercase tracking-widest font-bold text-gray-400 text-opacity-60">
        {title}
      </h6>
      <h3 className="self-center text-center text-xl font-semibold mb-6">
        {sub}
      </h3>
    </>
  );

  const SectionSample = () => {
    return (
      <section id="sample" className="mt-10 py-2 mb-5">
        <SectionPadding>
          <div className="flex flex-col">
            <SectionTitle title="Contoh" sub="Desain Premium anti mainstream" />
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                arrows: true,
                pagination: false,
                drag: true,
                autoplay: true,
                interval: 2000,
                speed: 1000,
                padding: "10%",
                gap: "1em",
                pauseOnHover: false,
                pauseOnFocus: true,
              }}
            >
              <SplideSlide>
                <a
                  href="https://meimodev.com/1"
                  target="_blank"
                  className="bg-red-200 h-64 md:h-96 rounded-xl flex flex-col justify-end "
                  rel="noreferrer"
                >
                  <div className="self-center text-center pb-10 ">
                    <p className="text-md font-medium">Jhonny &amp; Morena</p>
                  </div>
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://meimodev.com/2"
                  target="_blank"
                  className="bg-blue-200 h-64 md:h-96 rounded-xl flex flex-col justify-end "
                  rel="noreferrer"
                >
                  <div className="self-center text-center pb-10 ">
                    <p className="text-md font-medium">Maremba &amp; Sessye</p>
                  </div>
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://meimodev.com/3"
                  target="_blank"
                  className="bg-green-200 h-64 md:h-96 rounded-xl flex flex-col justify-end "
                  rel="noreferrer"
                >
                  <div className="self-center text-center pb-10 ">
                    <p className="text-md font-medium">Maremba &amp; Sessye</p>
                  </div>
                </a>
              </SplideSlide>
            </Splide>
          </div>
        </SectionPadding>
      </section>
    );
  };

  const PriceCard = ({ title, price, items }) => {
    const Item = ({ title, isSub }) => (
      <div className="flex">
        {isSub ? (
          <>
            <div className="pl-4"></div>
            <p> - {title}</p>
          </>
        ) : (
          <>
            <i className="las la-check self-start pt-0.5 pr-1" />
            <p>{title}</p>
          </>
        )}
      </div>
    );

    return (
      <div className="bg-gray-50 rounded-xl shadow-xl p-4 overflow-hidden flex flex-col justify-between mb-5">
        <div className="flex ">
          <div className="flex-1">
            <div className="text-xs">
              <ul className="pt-1 pb-1 md:pb-6 list-outside text-gray-500">
                {items.map((e, i) => (
                  <Item key={i} title={e.title} isSub={e.isSub} />
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-3 h-100 w-0.5 bg-divider rounded-full"> </div>
          <div className="flex-1 flex flex-col justify-center">
            <h5 className="text-lg text-primaryText font-semibold text-center pb-2">
              {title}
            </h5>
            <p className="text-center text-xs text-gray-400 pb-3 ">
              Dari
              <span className="font-bold text-base text-primaryText pl-1">
                {price}
              </span>
            </p>

            <button
              className="px-1 py-2 w-full bg-primary transition duration-300 hover:bg-secondary hover:shadow-lg rounded-lg font-semibold text-xs text-gray-100 "
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=6289525699078&text=PRE_ORDER_INFO%20Halo,%20tolong%20infonya%20tentang%20pemesanan%20paket%20premium",
                  "_blank"
                )
              }
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    );
  };

  const QuestionItem = ({ question, answer }) => (
    <div className="border border-primaryText m-2 p-4 rounded-lg">
      <p className="text-sm font-semibold">{question}</p>
      <p className="text-xs">{answer}</p>
    </div>
  );

  const FooterItem = ({ icon, title }) => (
    <div className="flex gap-1 ">
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  );

  return (
    <div className="font-poppins text-primaryText">
      <Meta title="Undangan Kawanua">
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </Meta>
      <nav
        className="sticky top-0 bg-gray-50 shadow-sm overflow-hidden z-10"
        id="nav"
      >
        <SectionPadding>
          <div>
            <div className="flex">
              <Screens />
              <div className="flex-1 justify-between">
                <a href="#top" rel="noopener noreferrer" className=" ">
                  <Image
                    className=" bg-gray-700"
                    src="/img/logo-meimo-192.png"
                    alt="Nav logo"
                    width="60"
                    height="60"
                  />
                </a>
              </div>
              <NavRow />
            </div>
          </div>
        </SectionPadding>
      </nav>

      {/* TOP SECTION */}
      <section className="bg-gray-200" id="top">
        <SectionPadding>
          <div className="relative h-96">
            <div className="flex flex-col h-full justify-center">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-semibold ">
                  Buat undangan digital anti-mainstream
                </h3>
                <div className="bg-divider h-1 w-10 my-2 rounded-lg"></div>
                <p className="text-sm pr-1 mb-3">
                  Dengan harga yang terjangkau dapat udangan digital design
                  premium &amp; fitur-fitur unik anti main-stream
                </p>
                <div className="flex gap-3">
                  <dic className="flex gap-1 p-2 bg-gray-100 shadow-sm rounded-md">
                    <i className="las la-coins"></i>
                    <div className=" text-xs">Dari 200k</div>
                  </dic>
                  <dic className="flex gap-1 p-2 bg-gray-100 shadow-sm rounded-md">
                    <i className="las la-gem"></i>
                    <div className=" text-xs">Design Premium</div>
                  </dic>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 hidden sm:block">
              <div className="bg-secondary h-96 sm:w-56 md:w-72 lg:w-96  rounded-lg">
                <img
                  className="absolute bottom-0 p-3 md:p-10"
                  alt="top invitation sample"
                  src="./img/top-mockup.png"
                />
              </div>
            </div>
            <div className="absolute bottom-0 transform translate-y-5">
              <div className=" rounded-lg bg-gray-50 shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                <div className="flex">
                  <p className="self-center text-sm pl-3 pr-3">
                    +62 895 2569 9078
                  </p>
                  <button
                    className="py-4 px-3 bg-primary font-semibold text-sm text-gray-100 hover:bg-secondary  transition duration-300"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=6289525699078&amp;text=Halo,%20tolong%20infonya%20tentang%20: ",
                        "_blank"
                      )
                    }
                  >
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionPadding>
      </section>

      {/* PRICING SECTION */}
      <section className="mt-14 py-2" id="pricing">
        <SectionPadding>
          <div className="flex flex-col">
            <SectionTitle
              title="Harga"
              sub="Beragam Pilihan, Beragam kebutuhan"
            />
            <div className="flex-row justify-center md:w-3/4 mx-auto">
              <PriceCard
                title="Paket Premium"
                price="IDR 200K"
                items={[
                  { title: "Informasi Utama", isSub: false },
                  { title: "Hitung Mundur", isSub: true },
                  { title: "Quotes", isSub: true },
                  { title: "Tentang", isSub: true },
                  { title: "Tanggal", isSub: true },
                  { title: "Lokasi", isSub: true },
                  { title: "Lagu Tema", isSub: true },
                  { title: "Hingga 50 Gambar HD", isSub: false },
                  { title: "Jumlah undangan terkonfirmasi", isSub: false },
                  { title: "Autentikasi qrcode", isSub: false },
                  { title: "Enkripsi Link", isSub: false },
                  { title: "*Diskon 10% Produk bbold™", isSub: false },
                ]}
              />

              <PriceCard
                title="Paket Exclusive"
                price="IDR 900K"
                items={[
                  { title: "Informasi Utama", isSub: false },
                  { title: "Hitung Mundur", isSub: true },
                  { title: "Quotes", isSub: true },
                  { title: "Tentang", isSub: true },
                  { title: "Tanggal", isSub: true },
                  { title: "Lokasi", isSub: true },
                  { title: "Lagu Tema", isSub: true },
                  {
                    title: (
                      <p>
                        Hingga <span className="font-bold"> 1000 </span> Gambar
                        HD
                      </p>
                    ),
                    isSub: false,
                  },
                  {
                    title: (
                      <p className="font-bold">
                        Jumlah &amp; nama undangan terkonfirmasi
                      </p>
                    ),
                    isSub: false,
                  },
                  {
                    title: <p className="font-bold">Revisi hingga puas</p>,
                    isSub: false,
                  },
                  {
                    title: <p className="font-bold">Design khusus</p>,
                    isSub: false,
                  },
                  { title: "Autentikasi qrcode", isSub: false },
                  { title: "Enkripsi Link", isSub: false },
                  { title: "*Diskon 10% Produk bbold™", isSub: false },
                  {
                    title: (
                      <p className="font-bold">Diskon 20% Produk Itaewon™</p>
                    ),
                    isSub: false,
                  },
                ]}
              />
            </div>
            <div className="mt-12 text-xs">
              <p>
                *Potongan produk bbold™ berlaku untuk undangan &amp; yang
                mengundang
              </p>
              <p>
                *Potongan produk bbold™ berlaku untuk produk bbold™ yang
                menggunakan gambar dalam undangan
              </p>
              <p>
                *Potongan produk Itaewon™ berlaku hanya untuk yang mengundang
              </p>
              <p>*Potongan produk Itaewon™ berlaku hanya untuk produk grill</p>
              <p>
                *Potongan produk Itaewon™ berlaku hanya untuk daerah yang
                dijangkau
              </p>
            </div>
          </div>
        </SectionPadding>
      </section>

      {/* SECTION SAMPLE */}
      <SectionSample />

      {/* SECTION QUESTION */}
      <section id="question" className="mt-10 py-2 ">
        <SectionPadding>
          <div className="flex flex-col">
            <SectionTitle
              title="Pertanyaan"
              sub="Pertanyaan yang sering ditanyakan"
            />
            <div>
              <QuestionItem
                question="Kenapa harga di sini lebih mahal dari tempat lain ?"
                answer="Karena
              kami tidak menggunakan template mainstream seperti tempat lain,
              melainkan menggunakan jasa graphic & UI designer untuk membuat
              tampilan web yang premium, menggunakan asset berlisensi premium atau
            dibuat langsung oleh orang yang mendesain website undngan itu,"
              />
              <QuestionItem
                question="Apa bisa desain custom sesuai keinginan ?"
                answer="Ya, dengan paket
              Exclusive desain estetik (tata letak, gambar, warna) & desain fungsi
              fitur bisa disesuaikan dengan keinginan anda"
              />
              <QuestionItem
                question="Apa ada
              undangan selain untuk pernikahan ?"
                answer="Ya, kami bisa membuat semua
            jenis undangan berbasis website, baik itu hari ulang tahun,
            syukuran, undangan formal & non-formal"
              />
              <QuestionItem
                question="Apa bisa pesan
              sekarang walau acaranya nanti tahun depan?"
                answer="Ya, kami menyarankan
            untuk melakukan pemesanan dari jauh hari, dikarenakan kami memiliki
            kuota terbatas setiap bulannya"
              />
              <QuestionItem
                question="Apa yang terjadi jika
              undangan tidak bisa diakses saat diperlukan ?"
                answer="Tidak perlu
              khawatir, selama terkoneksi ke internet dengan baik, kami menjamin
              ketersediaan akses karena semua undangan kami menggunakan
            infrastruktur dari google cloud yang menjamin ketersediaan hingga
            99.9%. "
              />
            </div>
          </div>
        </SectionPadding>
      </section>
      <div className="flex justify-center mt-3 bg-indigo-50 hover:bg-indigo-200 transition duration-500">
        <div className="text-sm p-5 ">
          Sekedar bertanya ? Silahkan
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=6289525699078&text=INFO%20Halo,%20tolong%20infonya%20tentang%20:"
            className="rounded-lg ml-1 py-3 px-3 bg-primary font-semibold text-sm text-gray-100 hover:shadow-md hover:bg-secondary transition duration-300"
            rel="noreferrer"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer id="footer" className="mt-10 py-2 mb-5 bg-gray-200">
        <SectionPadding>
          <div className="flex justify-around text-xs py-2 gap-1">
            <div>
              <FooterItem
                title="Kompleks pasar bawah, Wawalintouan, Tondano."
                icon={<i className="las la-map self-start pt-0.5" />}
              />

              <FooterItem
                title="+62 895 2569 9078 (WA, Telegram)"
                icon={<i className="las la-phone self-start pt-0.5" />}
              />

              <FooterItem
                title="Undangan@meimodev.com"
                icon={<i className="las la-envelope self-start pt-0.5" />}
              />

              <FooterItem
                title="@undangan"
                icon={<i className="lab la-instagram self-start pt-0.5" />}
              />
            </div>
            <div className="self-center">
              <div className="text-center">
                With <span className="text-red-400 text-md">♥</span>
                {new Date().getFullYear()}
                <a target="_blank" href="https://meimodev.com" rel="noreferrer">
                  <img
                    src="/img/logo-meimo.png"
                    alt="meimo logo"
                    className="mt-1 w-20 h-10 ml-auto px-2 py-1 mr-auto bg-gray-500 rounded-md"
                  />
                </a>
              </div>
            </div>
          </div>
        </SectionPadding>
      </footer>
    </div>
  );
}
