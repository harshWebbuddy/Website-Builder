import Link from "next/link";
import React from "react";
import Motion from "@/components/client/Motion";
const Footer = () => {
  return (
    <footer className="bg-[#11111A] px-6 py-10 md:px-16 md:pt-16 md:pb-6 2xl:px-24 text-white">
      <div className="max-w-[1720px] mx-auto">
        <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
          <h1 className="text-xs text-[#FB524A] text-center tracking-[3.35px]">HAVE A PROJECT TO DICUSSS?</h1>
          <h1 className="text-center text-white text-4xl mt-4 font-bold">We're Ready!</h1>
          <div className="flex justify-center items-center">
            <Link href="/contact" className="max-w-fit">
              <button className="h-[52px] px-6 mx-auto rounded-md text-white bg-[#FB524A] mt-4">Let's Connect!</button>
            </Link>
          </div>
        </Motion>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 mt-20 gap-y-10">
          <ul className="text-white leading-8 flex flex-col gap-y-6">
            <li className="text-white text-2xl font-bold mb-3">Services</li>
            <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/mobile/">
                <li className="text-white/70 hover:text-white">Mobile App Development</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/web">
                <li className="text-white/70 hover:text-white">Website Development</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/blockchain">
                <li className="text-white/70 hover:text-white">Blockchain Development</li>
              </Link>
            </Motion>

            <Motion transition={{ duration: 0.4, delay: 0.3 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/iot">
                <li className="text-white/70 hover:text-white">IOT Development</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/ai">
                <li className="text-white/70 hover:text-white">AI/ML Development</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.5 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/e-commerce">
                <li className="text-white/70 hover:text-white">E-Commmerce Development</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.6 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/ui-ux">
                <li className="text-white/70 hover:text-white">UI/UX Development</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.7 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/digital-marketing">
                <li className="text-white/70 hover:text-white">Digital Marketing Development</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.8 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/services/cloud-solutions">
                <li className="text-white/70 hover:text-white">Cloud Solutions Development</li>
              </Link>
            </Motion>
          </ul>

          <ul className="text-white flex flex-col gap-y-6 leading-8">
            <li className="text-white text-2xl font-bold mb-3">Products</li>
            <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/products/narratex">
                <li className="text-white/70 hover:text-white">Ai Based Products</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/products">
                <li className="text-white/70 hover:text-white">Blockchain Based Products</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/products">
                <li className="text-white/70 hover:text-white">Learning Management System</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.3 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/products/tinytails">
                <li className="text-white/70 hover:text-white">Url Shortener</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/products/99cents">
                <li className="text-white/70 hover:text-white">Domain and Web Hosting Platform</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.5 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/products">
                <li className="text-white/70 hover:text-white">AdSense/Affiliate Ready Blogs</li>
              </Link>
            </Motion>
          </ul>

          <ul className="text-white leading-8 flex flex-col gap-y-6">
            <li className="text-white text-2xl font-bold mb-3">Company</li>
            <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/about">
                <li className="text-white/70 hover:text-white">About Us</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/contact">
                <li className="text-white/70 hover:text-white">Contact Us</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/career">
                <li className="text-white/70 hover:text-white">Careers</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.3 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/portfolio">
                <li className="text-white/70 hover:text-white">Portfolio</li>
              </Link>
            </Motion>
          </ul>

          <ul className="text-white flex flex-col gap-y-6 leading-8 relative">
            <li className="text-white text-xl md:text-2xl font-bold mb-3">Resources</li>
            <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/blog">
                <li className="text-white/70 hover:text-white">Blog</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/faq">
                <li className="text-white/70 hover:text-white">FAQs</li>
              </Link>
            </Motion>
            <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Link className="w-fit" href="/reviews">
                <li className="text-white/70 hover:text-white">Reviews</li>
              </Link>
            </Motion>
            <a href="/pdf/WebBuddy Latest Profile.pdf" target="_blank" download="WebBuddy Company Profile">
              <button className="rounded-[50px] text-center capitalize w-fit relative xl:absolute bottom-0 z-[1] specialBorder">
                <span className="text-xl font-bold leading-[30px] text-white px-6 h-[54px] rounded-full inline-flex items-center justify-center bg-[#FB524A]">
                  Download Brochure
                </span>
              </button>
            </a>
          </ul>
        </div>

        <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
          <div className="flex flex-col sm:flex-row justify-between gap-y-8 gap-x-6 items-center mt-10 text-white border-b border-[#302f2f] pt-6 pb-10">
            <h1 className="text-white text-[23px] leading-loose md:text-[25px] xl:text-[32px] font-bold">FOLLOW US ON SOCIAL MEDIA</h1>
            <div className="flex flex-wrap items-center gap-x-10 ">
              <Link className="w-fit" target="_blank" href="https://www.linkedin.com/company/webbuddy-llc">
                <div className="footer-social-logo">
                  <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.50107 10.9262V32.214H0.412566V10.9262H7.50107ZM7.95174 4.35404C7.95306 4.39214 7.95437 4.43681 7.95437 4.4828C7.95437 5.46691 7.53655 6.35248 6.86909 6.97265L6.86646 6.97396C6.15038 7.62828 5.19255 8.02902 4.14011 8.02902C4.07573 8.02902 4.01003 8.02771 3.94565 8.02508H3.95485H3.91149C3.85762 8.02771 3.79455 8.02902 3.73149 8.02902C2.70139 8.02902 1.76589 7.62697 1.07083 6.97265L1.07215 6.97396C0.409938 6.33277 0 5.43669 0 4.4447C0 4.41316 -1.52958e-10 4.38163 0.0013139 4.34878V4.35404C-1.52958e-10 4.32644 0 4.29491 0 4.26338C0 3.26218 0.425705 2.36084 1.10499 1.72886L1.10762 1.72754C1.82238 1.07716 2.77759 0.677734 3.82477 0.677734C3.88521 0.677734 3.94434 0.679048 4.00478 0.681676H3.99689C4.05339 0.679048 4.11777 0.677734 4.18478 0.677734C5.2162 0.677734 6.15564 1.07585 6.85726 1.72623L6.85463 1.7236C7.53129 2.37661 7.95174 3.29109 7.95174 4.30411V4.35929V4.35666V4.35404ZM32.9974 20.0158V32.214H25.9312V20.8291C25.9378 20.7253 25.9404 20.6044 25.9404 20.4835C25.9404 19.3063 25.6132 18.2065 25.0443 17.2684L25.0601 17.296C24.499 16.5129 23.5925 16.0097 22.5689 16.0097C22.4901 16.0097 22.4113 16.0123 22.3324 16.0189H22.3429C22.3075 16.0176 22.2667 16.0162 22.226 16.0162C21.4114 16.0162 20.6624 16.2961 20.0699 16.7652L20.0778 16.7599C19.4826 17.2421 19.0161 17.8583 18.7218 18.5665L18.7113 18.5967C18.5589 19.0632 18.4722 19.5993 18.4722 20.1564C18.4722 20.2194 18.4735 20.2825 18.4761 20.3456V20.3364V32.2167H11.4099C11.4388 26.5029 11.4533 21.8701 11.4533 18.3182C11.4533 14.7663 11.4463 12.647 11.4323 11.9602L11.4113 10.9288H18.4774V14.0217H18.4341C18.7152 13.5684 19.0056 13.1756 19.3249 12.8077L19.3144 12.8195C19.6836 12.4135 20.0804 12.0469 20.5074 11.7185L20.5284 11.7027C21.0592 11.2941 21.682 10.9735 22.3574 10.7777L22.3968 10.7685C23.1037 10.557 23.917 10.4348 24.7579 10.4348H24.8617H24.8564C24.9497 10.4308 25.0588 10.4282 25.1678 10.4282C27.3765 10.4282 29.3657 11.3663 30.7598 12.8668L30.7637 12.8721C32.2546 14.4978 33 16.8786 33 20.0145L32.9974 20.0158Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
              <Link className="w-fit" target="_blank" href="https://www.behance.net/webbuddyllc">
                <div className="footer-social-logo">
                  <svg width="33" height="27" viewBox="0 0 43 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 1261152475">
                      <path
                        id="Vector"
                        d="M38.0955 1.48131H27.4068V4.4539H38.1377L38.0955 1.48131ZM35.8397 21.931C35.0289 22.4683 34.0713 22.7409 33.099 22.7111C32.4555 22.7782 31.805 22.7117 31.1883 22.5158C30.5716 22.3199 30.002 21.9988 29.5151 21.5726C28.6149 20.552 28.1462 19.2217 28.208 17.8622H42.1644C42.265 16.4466 42.1441 15.024 41.806 13.6457C41.4789 12.3345 40.9067 11.097 40.1194 9.99852C39.327 8.93303 38.3035 8.06089 37.1257 7.44757C35.8154 6.80149 34.3701 6.47631 32.9093 6.49887C31.5354 6.48881 30.1734 6.75404 28.9037 7.27891C27.741 7.76906 26.6875 8.48572 25.8046 9.38713C24.9242 10.3066 24.2424 11.3974 23.8018 12.5916C23.3289 13.8809 23.0932 15.2451 23.1061 16.6183C23.0844 18.011 23.3129 19.3963 23.7807 20.7083C24.1781 21.8963 24.8088 22.993 25.6359 23.9338C26.4917 24.8576 27.5434 25.5779 28.7139 26.0421C30.0191 26.5394 31.4074 26.7827 32.8039 26.7589C34.7633 26.8199 36.6979 26.307 38.3696 25.2831C40.0581 24.0833 41.2737 22.3306 41.806 20.3288H37.1468C36.8974 20.9911 36.4384 21.5537 35.8397 21.931ZM28.6085 13.2452C28.7726 12.7196 29.045 12.2341 29.4081 11.8202C29.7712 11.4063 30.217 11.073 30.7167 10.8418C31.3786 10.5439 32.0994 10.3997 32.825 10.4202C33.3491 10.3754 33.8767 10.4445 34.3716 10.6228C34.8665 10.8012 35.317 11.0844 35.6921 11.4532C36.4085 12.3301 36.8682 13.3881 37.0203 14.5101H28.2712C28.3053 14.0817 28.383 13.6578 28.5031 13.2452H28.6085ZM17.4561 12.2332C18.5291 11.7864 19.4614 11.058 20.1546 10.125C20.7917 9.13415 21.1082 7.97111 21.0611 6.79402C21.1024 5.7206 20.8931 4.6523 20.4497 3.67386C20.0772 2.82618 19.4793 2.09696 18.721 1.56564C17.917 1.01323 17.0041 0.639419 16.0435 0.469364C14.9068 0.230952 13.7474 0.117839 12.5861 0.132049H0V26.6534H12.8601C14.0338 26.6543 15.2027 26.5055 16.3387 26.2107C17.4155 25.9322 18.4356 25.4685 19.3535 24.8404C20.2426 24.2242 20.9666 23.3988 21.4617 22.437C22.0096 21.3614 22.2779 20.1651 22.2417 18.9584C22.2816 17.4632 21.8622 15.9916 21.04 14.742C20.1558 13.4853 18.8444 12.5936 17.3506 12.2332H17.4561ZM5.83977 4.66472H11.3001C11.8017 4.6641 12.3025 4.70642 12.7969 4.79121C13.2522 4.85868 13.6894 5.01637 14.0829 5.25502C14.4631 5.47009 14.7712 5.79284 14.9684 6.18264C15.2125 6.65007 15.3289 7.17371 15.3057 7.70056C15.3449 8.15432 15.2756 8.61092 15.1032 9.03253C14.9309 9.45415 14.6607 9.82864 14.3148 10.125C13.5603 10.6437 12.6575 10.9027 11.7428 10.8629H5.83977V4.66472ZM16.0435 20.3499C15.8269 20.7795 15.4994 21.1435 15.0948 21.404C14.6738 21.6658 14.21 21.8514 13.7245 21.9521C13.1849 22.0729 12.633 22.1295 12.0801 22.1208H5.75544V14.8474H12.0801C13.1654 14.7999 14.2373 15.103 15.137 15.7118C15.5435 16.0766 15.8584 16.532 16.0562 17.0411C16.2539 17.5502 16.3291 18.0987 16.2754 18.6422C16.3324 19.2217 16.253 19.8065 16.0435 20.3499Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </Link>
              <Link className="w-fit" target="_blank" href="https://dribbble.com/webbuddy">
                <div className="footer-social-logo">
                  <svg width="30" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="dribbble (1) 1">
                      <path
                        id="Vector"
                        d="M16.9997 3.28125C14.1978 3.28125 11.4588 4.11211 9.1291 5.66876C6.79941 7.22542 4.98363 9.43795 3.91139 12.0266C2.83915 14.6152 2.5586 17.4636 3.10522 20.2117C3.65185 22.9598 5.00109 25.484 6.98234 27.4653C8.96358 29.4465 11.4878 30.7958 14.2359 31.3424C16.984 31.889 19.8324 31.6085 22.421 30.5362C25.0097 29.464 27.2222 27.6482 28.7788 25.3185C30.3355 22.9888 31.1663 20.2498 31.1663 17.4479C31.1663 15.5875 30.7999 13.7453 30.088 12.0266C29.376 10.3078 28.3325 8.74607 27.017 7.43057C25.7015 6.11507 24.1398 5.07156 22.421 4.35962C20.7023 3.64768 18.8601 3.28125 16.9997 3.28125ZM16.9997 6.11458C19.9105 6.11342 22.7085 7.24074 24.8055 9.25958C22.6409 10.5292 20.3471 11.5645 17.963 12.3479C16.7765 10.3034 15.4162 8.36487 13.8972 6.55375C14.9058 6.26333 15.9501 6.11551 16.9997 6.11458ZM11.1772 7.74375C12.6614 9.44163 13.9935 11.2667 15.158 13.1979C12.3772 13.8884 9.52323 14.2404 6.65801 14.2462H6.14801C6.95155 11.5257 8.74609 9.20548 11.1772 7.74375ZM8.49968 24.9704C6.65625 22.9003 5.64663 20.2198 5.66635 17.4479C5.66635 17.3062 5.66635 17.1646 5.66635 17.0371H6.62968C9.98346 17.0071 13.3183 16.5307 16.5463 15.6204C16.9997 16.4846 17.4247 17.3771 17.8355 18.2979C15.6276 19.0763 13.5714 20.2314 11.758 21.7121L11.333 22.0521C10.3231 22.9591 9.37644 23.9341 8.49968 24.9704ZM16.9997 28.7812C14.7416 28.7863 12.5346 28.1098 10.6672 26.8404C11.3569 26.0493 12.095 25.3018 12.8772 24.6021L13.3305 24.2196C15.0067 22.8099 16.9274 21.7198 18.9972 21.0037C19.8491 23.3072 20.5124 25.6761 20.9805 28.0871C19.7052 28.5527 18.3573 28.7878 16.9997 28.7812ZM23.5588 26.6704C23.0954 24.5264 22.4896 22.4156 21.7455 20.3521H22.2272C22.283 20.3383 22.3414 20.3383 22.3972 20.3521H22.553H22.6947H23.3747C24.8655 20.3563 26.3451 20.6101 27.7522 21.1029C26.9791 23.3559 25.5109 25.3054 23.5588 26.6704ZM23.3747 17.4479C23.0772 17.4479 22.7797 17.4479 22.4963 17.4479C22.3129 17.4248 22.1273 17.4248 21.9438 17.4479C21.5588 17.4716 21.1756 17.5189 20.7963 17.5896H20.6547C20.2438 16.6404 19.8188 15.7196 19.3513 14.7563C21.8881 13.8851 24.3244 12.7453 26.6188 11.3562C27.7571 13.1829 28.3516 15.2958 28.333 17.4479C28.333 17.6887 28.333 17.9296 28.333 18.1704C26.7275 17.6749 25.0549 17.4312 23.3747 17.4479Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </Link>
              <Link className="w-fit" target="_blank" href="https://www.facebook.com/heywebbuddy">
                <div className="footer-social-logo">
                  <svg width="14" height="35" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_597_1409)">
                      <path
                        d="M5.88574 34.8848V17.4473H0.0732422V11.6348H5.88574V8.51345C5.88574 2.60359 8.76438 0.00976562 13.6759 0.00976562C16.0286 0.00976562 17.2724 0.184141 17.8609 0.264062V5.82227H14.5115C12.4263 5.82227 11.6982 6.92228 11.6982 9.15137V11.6348H17.8086L16.9789 17.4473H11.6982V34.8848H5.88574Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_597_1409">
                        <rect width="18.8906" height="34.875" fill="white" transform="translate(0.0732422 0.00976562)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
              <Link className="w-fit" target="_blank" href="https://twitter.com/webbuddyx">
                <div className="footer-social-logo">
                  <svg width="28" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_597_1412)">
                      <path
                        d="M34.5315 3.80051C33.2679 4.36171 31.9104 4.73937 30.4857 4.9097C31.9408 4.0382 33.0565 2.65832 33.5821 1.01303C32.222 1.81983 30.7141 2.40612 29.1083 2.72303C27.8235 1.35371 25.9934 0.498047 23.9679 0.498047C20.0778 0.498047 16.9245 3.65263 16.9245 7.54138C16.9245 8.09333 16.9879 8.63208 17.1067 9.14573C11.2531 8.8526 6.06373 6.04794 2.58827 1.78549C1.98351 2.82602 1.63622 4.03556 1.63622 5.32829C1.63622 7.77114 2.87878 9.92746 4.76836 11.1898C3.61427 11.1528 2.52753 10.8359 1.57812 10.3091C1.57812 10.3394 1.57812 10.3672 1.57812 10.3975C1.57812 13.8109 4.00513 16.6578 7.22837 17.3035C6.63812 17.4646 6.01487 17.5504 5.37181 17.5504C4.91889 17.5504 4.47653 17.5055 4.04738 17.425C4.94397 20.2231 7.54528 22.2605 10.6272 22.3174C8.2174 24.2069 5.18033 25.3332 1.87918 25.3332C1.31139 25.3332 0.750195 25.3002 0.198242 25.2342C3.31585 27.2321 7.0171 28.398 10.9956 28.398C23.952 28.398 31.035 17.6654 31.035 8.35742C31.035 8.0524 31.0283 7.74869 31.0152 7.44631C32.3924 6.452 33.5873 5.21209 34.5315 3.80051Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_597_1412">
                        <rect width="34.875" height="27.9" fill="white" transform="translate(0.198242 0.498047)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
              <Link className="w-fit" target="_blank" href="https://www.instagram.com/webbuddyX/">
                <div className="footer-social-logo">
                  <svg width="27" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_597_1415)">
                      <path
                        d="M11.1329 0.00976562C5.5253 0.00976562 0.963867 4.57541 0.963867 10.1845V24.7158C0.963867 30.3234 5.52951 34.8848 11.1386 34.8848H25.6699C31.2775 34.8848 35.8389 30.319 35.8389 24.71V10.1788C35.8389 4.5712 31.2731 0.00976562 25.6641 0.00976562H11.1329ZM28.5732 5.82227C29.3754 5.82227 30.0264 6.47327 30.0264 7.27539C30.0264 8.07752 29.3754 8.72852 28.5732 8.72852C27.7711 8.72852 27.1201 8.07752 27.1201 7.27539C27.1201 6.47327 27.7711 5.82227 28.5732 5.82227ZM18.4014 8.72852C23.2098 8.72852 27.1201 12.6389 27.1201 17.4473C27.1201 22.2557 23.2098 26.166 18.4014 26.166C13.593 26.166 9.68262 22.2557 9.68262 17.4473C9.68262 12.6389 13.593 8.72852 18.4014 8.72852ZM18.4014 11.6348C16.8597 11.6348 15.3814 12.2472 14.2913 13.3372C13.2013 14.4273 12.5889 15.9056 12.5889 17.4473C12.5889 18.9889 13.2013 20.4673 14.2913 21.5573C15.3814 22.6474 16.8597 23.2598 18.4014 23.2598C19.943 23.2598 21.4214 22.6474 22.5114 21.5573C23.6015 20.4673 24.2139 18.9889 24.2139 17.4473C24.2139 15.9056 23.6015 14.4273 22.5114 13.3372C21.4214 12.2472 19.943 11.6348 18.4014 11.6348Z"
                        fill="#fff"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_597_1415">
                        <rect width="34.875" height="34.875" fill="white" transform="translate(0.963867 0.00976562)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
              <Link className="w-fit" target="_blank" href="https://wa.me/16468171022">
                <div className="footer-social-logo">
                  <svg width="28" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4351_2536)">
                      <path
                        d="M16.8429 0.447266H16.8349C8.01289 0.447266 0.838888 7.62327 0.838888 16.4473C0.83341 19.8173 1.90019 23.1017 3.88489 25.8253L1.89089 31.7693L8.04089 29.8033C10.6496 31.534 13.7122 32.454 16.8429 32.4473C25.6649 32.4473 32.8389 25.2693 32.8389 16.4473C32.8389 7.62527 25.6649 0.447266 16.8429 0.447266ZM26.1529 23.0413C25.7669 24.1313 24.2349 25.0353 23.0129 25.2993C22.1769 25.4773 21.0849 25.6193 17.4089 24.0953C12.7069 22.1473 9.67889 17.3693 9.44289 17.0593C9.21689 16.7493 7.54289 14.5293 7.54289 12.2333C7.54289 9.93727 8.70889 8.81927 9.17889 8.33927C9.56489 7.94527 10.2029 7.76527 10.8149 7.76527C11.0129 7.76527 11.1909 7.77527 11.3509 7.78327C11.8209 7.80327 12.0569 7.83127 12.3669 8.57327C12.7529 9.50327 13.6929 11.7993 13.8049 12.0353C13.9189 12.2713 14.0329 12.5913 13.8729 12.9013C13.7229 13.2213 13.5909 13.3633 13.3549 13.6353C13.1189 13.9073 12.8949 14.1153 12.6589 14.4073C12.4429 14.6613 12.1989 14.9333 12.4709 15.4033C12.7429 15.8633 13.6829 17.3973 15.0669 18.6293C16.8529 20.2193 18.3009 20.7273 18.8189 20.9433C19.2049 21.1033 19.6649 21.0653 19.9469 20.7653C20.3049 20.3793 20.7469 19.7393 21.1969 19.1093C21.5169 18.6573 21.9209 18.6013 22.3449 18.7613C22.7769 18.9113 25.0629 20.0413 25.5329 20.2753C26.0029 20.5113 26.3129 20.6233 26.4269 20.8213C26.5389 21.0193 26.5389 21.9493 26.1529 23.0413Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4351_2536">
                        <rect width="32" height="32" fill="white" transform="translate(0.838867 0.447266)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-white text-[14px] flex flex-col-reverse lg:flex-row gap-y-8 gap-x-6 justify-between items-center pt-10 pb-6">
            <h3 className="">© WebBuddy LLC 2017-2024. All rights reserved.</h3>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-8">
            <Link href="/policies/refund" className="border-r pr-8 border-[#525050] whitespace-nowrap w-fit">
              Refund Policy
              </Link>
            <Link href="/policies/shipping" className="border-r pr-8 border-[#525050] whitespace-nowrap w-fit">
            Shipping and Delivery Policy
              </Link>
              <Link href="/policies/terms" className="border-r pr-8 border-[#525050] whitespace-nowrap w-fit">
                Term and Conditions
              </Link>
              <Link href="/policies/privacy" className="border-r pr-8 border-[#525050] whitespace-nowrap w-fit">
                Privacy policy
              </Link>
              <Link href="/contact" className="whitespace-nowrap w-fit">
                Contact Us
              </Link>
            </div>
          </div>
        </Motion>
      </div>
    </footer>
  );
};

export default Footer;
