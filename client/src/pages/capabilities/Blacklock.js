import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components - update these imports based on your project structure
import PageHeader from '../../components/ui/PageHeader';

const BlacklockPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader 
        title="BlackLock Encryption" 
        subtitle="Post-quantum encryption standard for the future"
        backgroundImage="/images/project-blacklock.jpg"
      />

      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Under Development
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our BlackLock post-quantum encryption technology is currently in research phase. 
              This page will be updated soon with more information.
            </p>
            <Link 
              to="/projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlacklockPage;