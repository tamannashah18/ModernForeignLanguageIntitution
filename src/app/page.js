"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { use, useState } from 'react';
import Head from 'next/head';
import Modal from '../components/Modal';
import EnquiryForm from '@/components/EnquiryForm';
import ReviewSection from '@/components/ReviewSection';
import StudentJourneysSection from '@/components/StudentJourney';
import { InView } from 'react-intersection-observer';

export default function Home() {
  const [openModal, setOpenModal] = useState(null);
  const [reviewRefresh, setReviewRefresh]=useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <nav className="fixed top-0 right-0 left-0 z-50 bg-transparent py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-end space-x-4 text-[#008c63] text-sm font-semibold tracking-wide">
          <button className="hover:text-red-600 transition duration-300" onClick={() => setOpenModal('enquiry')}>ENQUIRY</button>
          <span>|</span>
          <button className="hover:text-red-600 transition duration-300" onClick={() => setOpenModal('review')}>ADD REVIEW</button>
        </div>
      </nav>

      {/* ENQUIRY MODAL */}
      <Modal isOpen={openModal === 'enquiry'} onClose={() => setOpenModal(null)}>
        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4 text-center sm:text-left text-green-700">Enquiry Form</h2>
        <EnquiryForm onClose={() => setOpenModal(null)} />
      </Modal>

      {/* REVIEW MODAL */}
      <Modal isOpen={openModal === 'review'} onClose={() => setOpenModal(null)}>
        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4 text-center sm:text-left text-green-700">Add Review</h2>
        <ReviewSection onClose={() => {setOpenModal(null),setReviewRefresh(true)}}/>
      </Modal>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">

        {/* HEADER SECTION */}
        <header className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen w-full px-2 md:px-8">
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center">
            <InView threshold={0.3}>
              {({ inView, ref }) => (
                <h1
                  ref={ref}
                  className={`
                    text-5xl sm:text-5xl md:text-5xl lg:text-6xl mb-6 text-center md:text-left leading-tight tracking-tight drop-shadow-xl
                    transition-all duration-700 ease-out
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                >
                  Modern Foreign<br />Language<br />Institute
                </h1>
              )}
            </InView>
            <hr className="border-t border-gray-400 mb-6 w-2 md:w-1/2" />
            <InView threshold={0.3}>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={`
                    text-md sm:text-lg md:text-xl font-normal leading-relaxed text-center md:text-left max-w-sm
                    transition-all duration-700 ease-out
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                >
                  Welcome to the world of foreign languages where you learn from the basics and master it.
                </p>
              )}
            </InView>
            <hr className="border-t border-gray-400 mt-6 w-2/3 md:w-1/2" />
          </div>
          <InView threshold={0.5}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`
                  md:w-1/3 flex justify-center items-center mb-8 md:mb-0
                  transition-all duration-700 ease-out
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                <img
                  alt="Globe made of various country flags in a spherical shape"
                  className="w-100 h-100 sm:w-96 sm:h-96 md:w-[100vh] md:h-[100vh] object-contain drop-shadow-2xl"
                  src="/assets/logo.svg"
                />
              </div>
            )}
          </InView>

        </header>


        {/* LANGUAGES OFFERED SECTION */}
        <InView threshold={0.2}>
          {({ inView, ref }) => (
            <section
              ref={ref}
              className={`
                mt-16 py-8 rounded-md max-w-4xl mx-auto
                transition-all duration-700 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-center mb-12 sm:mb-20">
                Languages Offered
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 justify-items-center px-6 max-w-5xl mx-auto">
                {[
                  { src: "/assets/france.png", alt: "French flag", label: "French" },
                  { src: "/assets/germany.png", alt: "German flag", label: "German" },
                  { src: "/assets/china.png", alt: "Chinese flag", label: "Chinese" },
                ].map((flag, idx) => (
                  <InView key={flag.label} threshold={0.3}>
                    {({ inView: flagInView, ref: flagRef }) => (
                      <div
                        ref={flagRef}
                        className={`
                          text-center
                          transition-all duration-700 ease-out
                          ${flagInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                        style={{ transitionDelay: `${idx * 120}ms` }}
                      >
                        <img alt={flag.alt} className="mx-auto" src={flag.src} width={180} height={120} />
                        <p className="mt-3 text-lg ">{flag.label}</p>
                      </div>
                    )}
                  </InView>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 justify-items-center px-6 mt-10 max-w-3xl mx-auto">
                {[
                  { src: "/assets/spain.png", alt: "Spanish flag", label: "Spanish" },
                  { src: "/assets/italy.png", alt: "Italian flag", label: "Italian" },
                ].map((flag, idx) => (
                  <InView key={flag.label} threshold={0.3}>
                    {({ inView: flagInView, ref: flagRef }) => (
                      <div
                        ref={flagRef}
                        className={`
                          text-center
                          transition-all duration-700 ease-out
                          ${flagInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                        style={{ transitionDelay: `${(idx + 3) * 120}ms` }}
                      >
                        <img alt={flag.alt} className="mx-auto" src={flag.src} width={180} height={120} />
                        <p className="mt-3 text-lg">{flag.label}</p>
                      </div>
                    )}
                  </InView>
                ))}
              </div>
            </section>
          )}
        </InView>

        {/* ABOUT THE MENTOR SECTION */}
        <InView threshold={0.5}>
          {({ inView, ref }) => (
            <section
              ref={ref}
              className={`
                mt-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8
                transition-all duration-700 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                <img
                  alt="Portrait of Mrs Yoshita Dalal, founder and educator, smiling with glasses and white blazer"
                  className="rounded-[50%_30%_50%_30%/30%_50%_30%_50%] w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
                  src="/assets/portrait.jpg"
                  width={256}
                  height={256}
                />
                <p className="mt-3 md:ml-10 sm:ml-5 lg:ml-25 sm:mt-4 text-center text-sm sm:text-base md:text-lg font-normal max-w-[180px] sm:max-w-[200px]">
                  Mrs. Yoshita Dalal
                  <br />
                  <span className="text-xs sm:text-sm">(founder &amp; educator)</span>
                </p>
              </div>
              <div className="md:w-3/5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 md:mb-7 border-b border-gray-400 pb-4 sm:pb-6">
                  About the mentor<br/>
                </h2>
                <p className="text-md sm:text-base md:text-md font-normal leading-relaxed w-full px-4 sm:px-0 sm:w-[90%] md:w-4/5">
                  With over 25 years of experience in foreign language education,
                  Yoshita Dalal is a seasoned expert in linguistics and cross-cultural
                  communication. Proficient in French, German, Spanish, Italian, and
                  Chinese, she has dedicated her career to empowering students with the
                  skills to navigate the global landscape since 1998.
                  <br /><br />
                  Her passion for teaching and deep understanding of language nuances
                  make her an invaluable mentor for learners at all levels.
                </p>
                <hr className="border-t border-gray-400 mt-4 sm:mt-6" />
              </div>
            </section>
          )}
        </InView>

        {/* ABOUT KAMNA GANDHI SECTION */}
        <InView threshold={0.5}>
          {({ inView, ref }) => (
            <section
              ref={ref}
              className={`
                mt-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8
                transition-all duration-700 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <div className="md:w-3/5 order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 md:mb-7 border-b border-gray-400 pb-4 sm:pb-6">
                  About the mentor<br/>
                </h2>
                <p className="text-md sm:text-base md:text-md font-normal leading-relaxed w-full px-4 sm:px-0 sm:w-[90%] md:w-4/5">
                  Kamna Gandhi is a passionate French teacher and HR professional with over a decade of teaching experience. She has supported learners both in Canada and internationally, helping them succeed in TCF, TEF, and DELF exams — with a special focus on Canada PR pathways for more than 10 years.
                  <br /><br />
                  Her classes are practical, goal-oriented, and designed specifically for adults preparing for immigration or looking to boost their French fluency with confidence.
                </p>
                <hr className="border-t border-gray-400 mt-4 sm:mt-6" />
              </div>
              <div className="flex flex-col items-center md:items-start md:w-1/3 order-1 md:order-2">
                <img
                  alt="Portrait of Mrs Kamna Gandhi, founder and educator"
                  className="rounded-[50%_30%_50%_30%/30%_50%_30%_50%] w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
                  src="/assets/kamna.jpg"
                  width={256}
                  height={256}
                />
                <p className="mt-3 ml-8 sm:mt-4 text-center text-sm sm:text-base md:text-lg font-normal max-w-[180px] sm:max-w-[200px]">
                  Mrs. Kamna Gandhi
                  <br />
                  <span className="text-xs sm:text-sm">(founder &amp; educator)</span>
                </p>
              </div>
            </section>
          )}
        </InView>

      </div>

      {/* You can wrap StudentJourneysSection and other sections in <InView> similarly if you want them to animate on scroll */}

      <StudentJourneysSection refresh={reviewRefresh}/>
      </div>

      <footer className="bg-[#7fcdb3] text-black py-4 px-4 sm:px-6 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Contact Information */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-xs sm:text-sm">Contact Us: +91 94287 46469</p>
            <p className="text-xs sm:text-sm">
              <a href='mailto:Mfli.yoshitadalal@gmail.com' className="hover:underline">
                Email: Mfli.yoshitadalal@gmail.com
              </a>
            </p>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row items-center">
            <p className="text-xs sm:text-sm mb-2 sm:mb-0 sm:mr-3">Follow Us :</p>
            <div className="flex items-center space-x-4 sm:space-x-3">
              <a 
                aria-label="Facebook" 
                target="_blank" 
                className="text-blue-600 hover:text-blue-800 transition-colors" 
                href="https://www.facebook.com/share/1EFKdkmGsH/"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a 
                aria-label="LinkedIn" 
                target="_blank" 
                className="text-blue-700 hover:text-blue-900 transition-colors" 
                href="https://www.linkedin.com/in/yoshitadalal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
              <a 
                aria-label="YouTube" 
                target="_blank" 
                className="text-red-600 hover:text-red-800 transition-colors" 
                href="https://youtube.com/@yoshitadalal7760?si=mvRYBJMl8g2Sf6sC"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a 
                aria-label="Instagram" 
                className="text-purple-800 hover:text-pink-600 transition-colors" 
                href="https://www.instagram.com/yoshita_dalal_offical?utm_source=qr&igsh=Z3U0aDR3NzBvZmEy" 
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a 
                aria-label="Instagram" 
                className="text-purple-800 hover:text-pink-600 transition-colors" 
                href="https://www.instagram.com/language_lounge.mfli/?igsh=MTBjMzZrdThhb3Yyeg%3D%3D#" 
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <button
                aria-label="Whatsapp"
                className="text-green-600 hover:text-green-800 transition-colors"
                onClick={() => setOpenModal('enquiry')}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
