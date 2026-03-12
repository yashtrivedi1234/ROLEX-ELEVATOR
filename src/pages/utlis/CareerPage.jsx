import React, { useEffect } from 'react';
import BreadCums from '../../Component/BreadCums';

const jobOpenings = [
  {
    title: 'Lift Installation Engineer',
    location: 'Lucknow',
    type: 'Full-time',
    experience: '2+ years'
  },
  {
    title: 'Service & Maintenance Technician',
    location: 'Lucknow',
    type: 'Full-time',
    experience: '1+ years'
  },
  {
    title: 'Sales Executive (Elevator Solutions)',
    location: 'Lucknow',
    type: 'Full-time',
    experience: '1+ years'
  }
];

const CareerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <BreadCums headText={'Career'} />
      <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
        <p className="mb-4">
          At Rolex Elevators, we are always looking for passionate professionals who want to build
          reliable mobility solutions. If you are interested in working with us, explore current
          openings below and send your profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {jobOpenings.map((job) => (
            <div key={job.title} className="border border-gray-200 rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-700">Location: {job.location}</p>
              <p className="text-sm text-gray-700">Type: {job.type}</p>
              <p className="text-sm text-gray-700">Experience: {job.experience}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">How to Apply</h3>
          <p>
            Share your resume at{' '}
            <a className="text-main hover:underline" href="mailto:info@rolexelevator.in">
              info@rolexelevator.in
            </a>{' '}
            with the job title in the subject line.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerPage;
