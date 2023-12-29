import React from 'react';
import './matrix.css'; // Import the CSS file for styling

const CompanyMatrix = () => {
  const companyData = [
    { name: 'Company A', value: 100 },
    { name: 'Company B', value: 120 },
    { name: 'Company C', value: 80 },
    { name: 'Company D', value: 90 },
    { name: 'Company E', value: 110 },
    { name: 'Company F', value: 95 },
    { name: 'Company G', value: 85 },
    { name: 'Company H', value: 105 },
  ];

  return (
    <div className="company-matrix">
      <h2>Company Matrics</h2>
      <div className="company-cards">
        {companyData.map((company, index) => (
          <div key={index} className="company-card">
            <div className="card-content">
              <h3>{company.name}</h3>
              <p>Value: {company.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyMatrix;
