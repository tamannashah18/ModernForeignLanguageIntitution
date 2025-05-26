"use client";
import { useState, useEffect, useRef } from 'react';

export default function ReviewSection({ onClose }) {
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
  const [marksError, setMarksError] = useState('');

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

  const handleChange = e => {
    const { name, value } = e.target;
    
    // Clear marks error when language or exam changes
    if (name === 'language' || name === 'exam') {
      setMarksError('');
    }
    
    // Validate marks if that's what changed
    if (name === 'marks') {
      setMarksError(''); // Clear previous error
      
      // Only validate if we have an exam selected and marks entered
      if (form.exam && value) {
        const selectedExam = exams.find(exam => exam.id === form.exam);
        if (selectedExam && selectedExam.max_marks) {
          const maxMarks = Number(selectedExam.max_marks);
          const enteredMarks = Number(value);
          
          if (enteredMarks > maxMarks) {
            setMarksError(`Marks cannot exceed maximum marks (${maxMarks})`);
          }
        }
      }
    }
    
    setForm({ ...form, [name]: value });
  };

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
    
    // Validate marks one more time before submission
    if (form.marks && form.exam) {
      const selectedExam = exams.find(exam => exam.id === form.exam);
      if (selectedExam && selectedExam.max_marks) {
        const maxMarks = Number(selectedExam.max_marks);
        const enteredMarks = Number(form.marks);
        
        if (enteredMarks > maxMarks) {
          setMarksError(`Marks cannot exceed maximum marks (${maxMarks})`);
          return; // Prevent form submission
        }
      }
    }
    
    // If there's a marks error, don't submit
    if (marksError) {
      return;
    }
    
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
      exam_id: form.exam!="" ? Number(form.exam) : null,
      marks_obtained: form.marks!="" ? Number(form.marks) : null,
      language: form.language ? Number(form.language) : null,
      exam_date: form.exam!="-1" ? new Date(form.exam_date).toISOString() : null,
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
      setMarksError('');
      if (onClose) onClose(); 
    }
    setUploading(false);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mb-4">
        <input 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Your Name" 
          required 
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base" 
        />

        {languagesLoading ? (
          <div className="text-gray-500 text-center py-2 text-xs sm:text-sm">Loading languages...</div>
        ) : (
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
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
          <div className="text-gray-500 text-center py-2 text-xs sm:text-sm">Loading exams...</div>
        ) : (
          <select
            name="exam"
            value={form.exam}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
            disabled={form.language === '-1'}
          >
            <option value="">Select Exam/Course</option>
            {exams.map(exam => (
              <option key={exam.id} value={exam.id}>
                {exam.exam_name}
              </option>
            ))}
          </select>
        )}

        <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
          <label className='text-xs sm:text-sm font-medium'>Select Exam/Course Date:</label>
          <input
            type="date"
            name="exam_date"
            value={form.exam_date}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          />
        </div>

        <div className="space-y-1">
          <input
            type="text"
            name="marks"
            value={form.marks}
            placeholder='Marks'
            onChange={handleChange}
            className={`border ${marksError ? 'border-red-500' : 'border-gray-300'} p-2 w-full rounded focus:outline-none focus:ring-2 ${marksError ? 'focus:ring-red-500' : 'focus:ring-green-500'} focus:border-transparent text-sm sm:text-base`}
          />
          {marksError && (
            <p className="text-red-500 text-xs sm:text-sm">{marksError}</p>
          )}
        </div>

        <textarea 
          name="review" 
          value={form.review} 
          onChange={handleChange} 
          placeholder="Your Experience" 
          required 
          className="border border-gray-300 p-2 w-full rounded min-h-[100px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base" 
        />

        <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
          <label className='text-xs sm:text-sm font-medium'>Upload your picture:</label>
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className='file:m-1 file:p-1 file:rounded file:text-white file:bg-green-600 file:border-none file:hover:bg-green-700 file:transition-colors file:duration-300 w-full text-xs sm:text-sm'
            />
            {preview && (
              <div className="flex flex-row sm:flex-col items-center mt-2 sm:mt-0">
                <img src={preview} alt="preview" width={70} className="rounded mb-1" />
                <button type="button" onClick={handleClear} className="text-red-600 text-xs ml-3 sm:ml-0 hover:text-red-800 transition-colors duration-300">Clear</button>
              </div>
            )}
          </div>
        </div>

        <button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 w-full rounded transition-colors duration-300 mt-2 text-sm sm:text-base" 
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Add Review'}
        </button>
      </form>
    </div>
  );
}
