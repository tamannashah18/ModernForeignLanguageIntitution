"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StudentJourneyCard from "./StudentJourneyCard"; // Adjust path as needed

function Loading() {
  return (
    <div className="flex items-center justify-center py-12">
      <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></span>
      <span className="ml-2 text-green-700">Loading student journeys...</span>
    </div>
  );
}

export default function StudentJourneysSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then(res => res.json())
      .then(setReviews)
      .finally(() => setLoading(false));
  }, []);

  // Check scroll position to show/hide arrows
  useEffect(() => {
    const checkForScrollPosition = () => {
      const el = scrollRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    checkForScrollPosition();
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkForScrollPosition);
      window.addEventListener("resize", checkForScrollPosition);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkForScrollPosition);
        window.removeEventListener("resize", checkForScrollPosition);
      }
    };
  }, [reviews]);

  const scrollBy = (distance) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  if (loading) return <Loading />;

  return (
    <section className="mt-7 max-w-7xl mx-auto px-2 relative mb-5">
      <h2 className="text-4xl font-normal mb-6 text-center">
        Student Journeys
      </h2>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          className={`absolute left-0 z-30 bg-white rounded-full shadow p-2 transition-all border border-green-400
            ${canScrollLeft ? "opacity-90" : "opacity-0 pointer-events-none"}`}
          onClick={() => scrollBy(-250)}
          aria-label="Scroll left"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <FaChevronLeft className="text-green-600" size={22} />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto space-x-4 px-2 py-4 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((r, i) => (
            <StudentJourneyCard key={r.id || i} review={r} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className={`absolute right-0 z-30 bg-white rounded-full shadow p-2 transition-all border border-green-400
            ${canScrollRight ? "opacity-90" : "opacity-0 pointer-events-none"}`}
          onClick={() => scrollBy(250)}
          aria-label="Scroll right"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <FaChevronRight className="text-green-600" size={22} />
        </button>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}



// function StudentJourneyCard({ review }) {
//   const studentName = review.student_name || review.name || "Student";
//   const language =
//     review.Languages?.language_name ||
//     review.language_name ||
//     review.language ||
//     "Language";
//   const examName =
//     review.Exam_Info?.exam_name ||
//     review.exam_name ||
//     review.exam ||
//     "Exam";
//   const max_marks = review.Exam_Info?.max_marks || "-";
//   const marks = review.marks_obtained || review.marks || "-";
//   const year =
//     (review.exam_date && new Date(review.exam_date).getFullYear()) || // Fixed Date
//     "Year";
//   const experience = review.experience || review.review || "";
//   const picture = // Added equals sign
//     review.picture ||
//     "https://storage.googleapis.com/a1aa/image/4b7e7205-9e6b-43d7-8ee2-db283f516142.jpg";

//   return (
//     <div
//       className="relative flex-shrink-0 w-[23vh] hover:w-[40vh] transition-all duration-300 rounded-xl border border-[#00b37e] bg-[#7ee2b8] p-1 flex items-center justify-center overflow-hidden group cursor-pointer"
//       style={{ height: "30vh", minWidth: "23vh", maxWidth: "40vh" }}
//     >
//       {/* Centered image and text */}
//       <div className="flex flex-col items-center justify-center w-full h-full z-10">
//         <img
//           alt={studentName}
//           className="rounded-full object-cover border-2 border-white shadow mb-2"
//           src={picture}
//           width={32}
//           height={32}
//           style={{ borderRadius: "50%", width: "10vh", height: "10vh" }}
//         />
//         <div className="flex flex-col items-center text-[11px] font-normal leading-tight text-center min-w-0">
//           <div className="font-semibold truncate w-full">{studentName}</div>
//           <div className="truncate w-full">Language: {language}</div>
//           <div className="truncate w-full">{examName}</div>
//           <div className="truncate w-full">
//             {marks} / {max_marks} ({year})
//           </div>
//         </div>
//       </div>

//       {/* Experience overlay */}
//       <div className="absolute inset-0 bg-[#7ee2b8] bg-opacity-95 flex flex-col opacity-0 group-hover:opacity-100 transition-discrete duration-300 z-20">
//   {/* Top 40%: Image and details */}
//   <div className="flex flex-row items-center px-4" style={{height: "40%"}}>
//     <img
//       alt={studentName}
//       className="rounded-full object-cover border-2 border-white shadow"
//       src={picture}
//       width={32}
//       height={32}
//       style={{ borderRadius: "50%", width: "8vh", height: "8vh" }}
//     />
//     <div className="flex flex-col ml-3 text-[10px] font-normal leading-tight text-left min-w-0">
//       <span className="font-semibold truncate">Name: {studentName}</span>
//       <span className="truncate">Language: {language}</span>
//       <span className="truncate">Exam Name: {examName}</span>
//       <span className="truncate">
//         {marks} / {max_marks} ({year})
//       </span>
//     </div>
//   </div>
//   <div className="flex flex-col justify-start px-4" style={{height: "60%"}}>
//     <div className="font-bold mb-0.5 text-[14px] text-black">Experience:</div>
//     <div className="whitespace-pre-line break-words text-[11px] text-left text-gray-800 overflow-auto">
//       {experience}
//     </div>
//   </div>
// </div>
// </div>
//   );
// }
