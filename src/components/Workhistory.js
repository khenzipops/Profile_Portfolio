// app/components/WorkHistory.js

import React from 'react';
import { workHistoryData } from '@/app/data/Workhistory';

const WorkHistory = () => {
  return (
    <section className="py-12 px-4">
       <h2 className="text-4xl font-bold  text-blue-400 mb-12">Work History</h2>
      <div className="max-w-4xl mx-auto">
        
        <div className="relative">
          {/* This is the vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block"></div>

          {workHistoryData.map((job, index) => (
            <div key={job.id} className={`flex items-center mb-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* The dot on the timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow hidden md:block"></div>
              
              {/* The content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                  <span className="text-sm font-medium text-gray-500 mt-1 sm:mt-0">{job.startDate} - {job.endDate}</span>
                </div>
                <p className="text-lg text-gray-600 mb-4">{job.company} | {job.location}</p>
                
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;