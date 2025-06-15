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

export default function StudentJourneysSection(refresh=false) {
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
  }, [refresh]);

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
    <section className="mt-8 max-w-7xl mx-auto px-2 relative mb-5">
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

