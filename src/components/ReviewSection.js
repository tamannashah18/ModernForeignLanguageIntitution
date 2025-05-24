// "use client";
// import { useState, useEffect } from 'react';

// export default function ReviewSection({ onlyForm = false }) {
//   const [reviews, setReviews] = useState([]);
//   const [form, setForm] = useState({ name: '', review: '', language: '-1', marks: '', exam: '' });
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [languages, setLanguages] = useState([]);
//   const [exams, setExams] = useState([]);
//   useEffect(() => {
//     fetch('/api/languages')
//       .then(res => res.json())
//       .then(setLanguages);
//     fetch('/api/reviews').then(res => res.json()).then(setReviews);
//   }, []);
//   useEffect(() => {
//     if (form.language !== '-1') {
//       fetch(`/api/exams?language=${form.language}`)
//         .then(res => res.json())
//         .then(setExams);
//     } else {
//       setExams([]);
//     }
//   }, [form.language]);
  
//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
//   const handleImageChange = e => setImage(e.target.files[0]);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setUploading(true);
//     let imageUrl = '';

//     if (image) {
//       // Upload image to Vercel Blob
//       const res = await fetch(`/api/upload-image?filename=${encodeURIComponent(image.name)}`, {
//         method: 'POST',
//         body: image,
//       });
//       const data = await res.json();
//       imageUrl = data.url;
//     }

//     // Post review with imageUrl
//     const res = await fetch('/api/reviews', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...form, picture: imageUrl }),
//     });

//     if (res.ok) {
//       setForm({ name: '', review: '', language: '-1', marks: '', exam: '' });
//       setImage(null);
//       setReviews([await res.json(), ...reviews]);
//     }
//     setUploading(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-2 mb-4">
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="border p-2 w-full"/>
//         <select
//           name="language"
//           value={form.language}
//           onChange={handleChange}
//           required
//           className="w-full border p-2"
//         >
//           <option value="-1">Select Your Language</option>
//           {languages.map(lang => (
//             <option key={lang.id} value={lang.id}>
//               {lang.language_name}
//             </option>
//           ))}
//         </select>

//         <select
//           name="exam"
//           value={form.exam}
//           onChange={handleChange}
//           required
//           className="w-full border p-2"
//           disabled={form.language === '-1'}
//         >
//           <option value="">Select Exam</option>
//           {exams.map(exam => (
//             <option key={exam.id} value={exam.id}>
//               {exam.exam_name}
//             </option>
//           ))}
//         </select>

//         <textarea name="review" value={form.review} onChange={handleChange} placeholder="Your Experience" required className="border p-2 w-full" />
//         <input type="file" accept="image/*" onChange={handleImageChange} className="border p-2 w-full" />
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded" disabled={uploading}>
//           {uploading ? 'Uploading...' : 'Add Review'}
//         </button>
//       </form>
//       {!onlyForm && (
//         <div>
//           {reviews.map(r => (
//             <div key={r.id} className="mb-2 p-2 border rounded flex items-center gap-3">
//               {r.picture && (
//                 <img src={r.picture} alt="review" className="w-12 h-12 rounded-full object-cover" />
//               )}
//               <div>
//                 <strong>{r.name} ({r.language}):</strong>
//                 <p>{r.review}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState, useEffect, useRef } from 'react';

export default function ReviewSection({ onlyForm = false, onClose }) {
  const [reviews, setReviews] = useState([]);
  const fileInputRef = useRef();

  // 1. exam_date is initialized as blank
  const [form, setForm] = useState({
    name: '',
    review: '',
    language: '-1',
    marks: '',
    exam: '',
    exam_date: '',
  });
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [exams, setExams] = useState([]);
  const [languagesLoading, setLanguagesLoading] = useState(true);
  const [examsLoading, setExamsLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  // 2. Set default date on client after mount
  useEffect(() => {
    if (!form.exam_date) {
      setForm(f => ({
        ...f,
        exam_date: new Date().toISOString().slice(0, 10) // yyyy-mm-dd
      }));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLanguagesLoading(true);
    fetch('/api/languages')
      .then(res => res.json())
      .then(setLanguages)
      .finally(() => setLanguagesLoading(false));
    fetch('/api/reviews').then(res => res.json()).then(setReviews);
  }, []);

  useEffect(() => {
    if (form.language !== '-1') {
      setExamsLoading(true);
      fetch(`/api/exams?language=${form.language}`)
        .then(res => res.json())
        .then(setExams)
        .finally(() => setExamsLoading(false));
    } else {
      setExams([]);
      setExamsLoading(false);
    }
  }, [form.language]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImage(file);
    } else {
      setPreview(null);
      setImage(null);
    }
  };

  function handleClear() {
    setPreview(null);
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setUploading(true);
    let imageUrl = null;

    if (image) {
      console.log("image api call")
      const formData = new FormData();
      formData.append('file', image);
      const res = await fetch(`/api/upload-image?filename=${encodeURIComponent(image.name)}`, {
        method: 'POST',
        body: formData,
        // Do NOT set Content-Type, browser will set it for FormData!
      });
      const data = await res.json();
      imageUrl = data.url;

    }

    // Prepare payload
    let payload = {
      student_name: form.name,
      experience: form.review,
      exam_id: form.exam ? Number(form.exam) : null,
      marks_obtained: form.marks ? Number(form.marks) : null,
      language: form.language ? Number(form.language) : null,
      exam_date: form.exam_date ? new Date(form.exam_date).toISOString() : null,
      ...(imageUrl ? { picture: imageUrl } : {}),
    };
    console.log(payload);
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setForm({ name: '', review: '', language: '-1', marks: '', exam: '', exam_date: '' });
      setImage(null);
      setPreview(null);
      setReviews([await res.json(), ...reviews]);
      if (onClose) onClose(); // Close modal if provided
    }
    setUploading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="border p-2 w-full" />

        {languagesLoading ? (
          <div className="text-gray-500">Loading languages...</div>
        ) : (
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            required
            className="w-full border p-2"
          >
            <option value="-1">Select Your Language</option>
            {languages.map(lang => (
              <option key={lang.id} value={lang.id}>
                {lang.language_name}
              </option>
            ))}
          </select>
        )}

        {examsLoading ? (
          <div className="text-gray-500">Loading exams...</div>
        ) : (
          <select
            name="exam"
            value={form.exam}
            onChange={handleChange}
            required
            className="w-full border p-2"
            disabled={form.language === '-1'}
          >
            <option value="">Select Exam</option>
            {exams.map(exam => (
              <option key={exam.id} value={exam.id}>
                {exam.exam_name}
              </option>
            ))}
          </select>
        )}

        <div className='flex'>
          <label className='mt-2'>Select Exam Date</label>
          <input
            type="date"
            name="exam_date"
            value={form.exam_date}
            placeholder='Exam Date'
            onChange={handleChange}
            required
            className="border ml-2 p-2 w-sm"
          />
        </div>

        <input
          type="text"
          name="marks"
          value={form.marks}
          placeholder='Marks'
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />

        <textarea name="review" value={form.review} onChange={handleChange} placeholder="Your Experience" required className="border p-2 w-full" />

        <div className='flex items-center'>
          <label className='mt-2'>Upload your picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className='file:m-1 file:p-1 file:rounded file:text-white file:bg-green-600 file:border-none ml-2'
          />
          {preview && (
            <div className="ml-4 flex flex-col items-center">
              <img src={preview} alt="preview" width={80} className="rounded mb-1" />
              <button type="button" onClick={handleClear} className="text-red-600 text-xs">Clear</button>
            </div>
          )}
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 w-full rounded" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Add Review'}
        </button>
      </form>
    </div>
  );
}
