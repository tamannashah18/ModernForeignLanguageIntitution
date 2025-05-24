// StudentJourneyCard.js
"use client";

export default function StudentJourneyCard({ review }) {
  const studentName = review.student_name || review.name || "Student";
  const language =
    review.Languages?.language_name ||
    review.language_name ||
    review.language ||
    "Language";
  const examName =
    review.Exam_Info?.exam_name ||
    review.exam_name ||
    review.exam ||
    "Exam";
  const max_marks = review.Exam_Info?.max_marks || "-";
  const marks = review.marks_obtained || review.marks || "-";
  const year =
    (review.exam_date && new Date(review.exam_date).getFullYear()) || "Year";
  const experience = review.experience || review.review || "";
  const picture =
    review.picture ||
    "https://storage.googleapis.com/a1aa/image/4b7e7205-9e6b-43d7-8ee2-db283f516142.jpg";

  return (
    <div
      className="relative flex-shrink-0 w-[23vh] hover:w-[40vh] transition-all duration-500 rounded-xl border border-[#00b37e] hover:border-[#008c63] hover:shadow-lg bg-[#7ee2b8] p-1 flex items-center justify-center overflow-hidden group cursor-pointer font-sans hover:scale-[1.02]"
      style={{ height: "40vh", minWidth: "30vh", maxWidth: "40vh" }}
    >
      {/* Centered image and text */}
      <div className="flex flex-col items-center justify-center w-full h-full z-10 transition-all duration-500 group-hover:opacity-0">
        <img
          alt={studentName}
          className="rounded-full object-cover border-2 border-white shadow mb-2 transition-all duration-300 group-hover:scale-110 group-hover:border-[#008c63]"
          src={picture}
          width={32}
          height={32}
          style={{ borderRadius: "50%", width: "12vh", height: "12vh" }}
        />
        <div className="flex flex-col items-center text-[15px] font-normal leading-tight text-center min-w-0 mt-3 transition-all duration-300">
          <div className="font-semibold truncate w-full transition-all duration-300 group-hover:text-[#008c63]">{studentName}</div>
          <div className="truncate w-full transition-all duration-300">Language: {language}</div>
          <div className="break-words w-full text-center transition-all duration-300">{examName}</div>
          <div className="truncate w-full transition-all duration-300">
            {marks} / {max_marks} ({year})
          </div>
        </div>
      </div>
      
      {/* Experience overlay */}
      <div className="absolute inset-0 bg-[#7ee2b8] bg-opacity-95 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 transform translate-y-full group-hover:translate-y-0">
        {/* Top 40%: Image and details */}
        <div className="flex flex-row items-center px-4 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0" style={{ height: "40%" }}>
          <img
            alt={studentName}
            className="rounded-full object-cover border-2 border-white shadow transition-all duration-500 hover:scale-110"
            src={picture}
            width={32}
            height={32}
            style={{ borderRadius: "50%", width: "8vh", height: "8vh" }}
          />
          <div className="flex flex-col ml-3 text-[12px] font-normal leading-tight text-left min-w-0 transition-all duration-500">
            <span className="font-semibold truncate transition-all duration-300 hover:text-[#008c63]">Name: {studentName}</span>
            <span className="truncate transition-all duration-300">Language: {language}</span>
            <span className="break-words transition-all duration-300">Exam Name: {examName}</span>
            <span className="truncate transition-all duration-300">
              {marks} / {max_marks} ({year})
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start px-4 transition-all duration-500 opacity-0 group-hover:opacity-100 delay-100 translate-y-[20px] group-hover:translate-y-0" style={{ height: "60%" }}>
          <div className="font-bold mb-0.5 text-[14px] text-black transition-all duration-300 hover:text-[#008c63]">Experience:</div>
          <div className="whitespace-pre-line break-words text-[11px] text-left text-gray-800 overflow-auto transition-all duration-300">
            {experience}
          </div>
        </div>
      </div>
    </div>
  );
}
