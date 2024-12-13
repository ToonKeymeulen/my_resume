// types.ts
  // Resume.tsx
  import React from 'react';
  import { Download, Printer } from 'lucide-react';
  


interface ContactInfo {
    email: string;
    phone: string;
    location: string;
  }
  
  interface Experience {
    company: string;
    title: string;
    period: string;
    achievements: string[];
  }
  
  interface Education {
    degree: string;
    school: string;
    year: string;
  }
  
  interface ResumeData {
    name: string;
    title: string;
    contact: ContactInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
  }
  

  const resumeData: ResumeData = {
    name: "Your Name",
    title: "Professional Title",
    contact: {
      email: "your.email@example.com",
      phone: "(555) 555-5555",
      location: "City, State"
    },
    summary: "Experienced professional with expertise in...",
    experience: [
      {
        company: "Current Company",
        title: "Senior Role",
        period: "2020 - Present",
        achievements: [
          "Led cross-functional team of 10 members to deliver key projects",
          "Increased department efficiency by 25% through process improvements",
          "Successfully managed $1M+ budget"
        ]
      },
      {
        company: "Previous Company",
        title: "Junior Role",
        period: "2018 - 2020",
        achievements: [
          "Developed and implemented new customer service protocol",
          "Reduced response time by 40%",
          "Trained 5 new team members"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Relevant Field",
        school: "University Name",
        year: "2018"
      }
    ],
    skills: [
      "Project Management",
      "Team Leadership",
      "Strategic Planning",
      "Budget Management",
      "Process Improvement"
    ]
  };
  
  const Resume: React.FC = () => {
    const handlePrint = (): void => {
      window.print();
    };
  
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white">
        {/* Action Buttons */}
        <div className="print:hidden mb-6 flex gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <Printer size={20} />
            Print / Save as PDF
          </button>
        </div>
  
        {/* Resume Content */}
        <div className="resume-content">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">{resumeData.name}</h1>
            <h2 className="text-2xl text-gray-600 mb-4">{resumeData.title}</h2>
            <div className="text-gray-600">
              <p>{resumeData.contact.email}</p>
              <p>{resumeData.contact.phone}</p>
              <p>{resumeData.contact.location}</p>
            </div>
          </header>
  
          {/* Summary Section */}
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Professional Summary</h3>
            <p className="text-gray-700">{resumeData.summary}</p>
          </section>
  
          {/* Experience Section */}
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Professional Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-semibold">{exp.company}</h4>
                <div className="text-gray-600 mb-2">
                  {exp.title} | {exp.period}
                </div>
                <ul className="list-disc pl-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700 mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
  
          {/* Education Section */}
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">{edu.degree}</h4>
                <div className="text-gray-600">{edu.school}, {edu.year}</div>
              </div>
            ))}
          </section>
  
          {/* Skills Section */}
          <section>
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Resume;