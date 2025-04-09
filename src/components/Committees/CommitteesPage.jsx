import React from 'react'
import "./CommitteesPage.css"
const committees = [
    { name: "HR", description: "The firm, a highly reputed attorney in corporate law, Dr. Ahmed has over 20 years of experience practicing legal advice to major corporations and has a proven track record of success in complex cases." },
    { name: "Marketing", description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice to major corporations and has a proven track record of success in complex cases." }
  ];
const CommitteesPage=()=>{
  return (
<div className="committees-container">
      <header className="committees-header">
        <h1>COMMITTEES</h1>
      </header>
      <main className="committees-main">
        {committees.map((committee, index)=>(
          <div key={index} className="committee-card-wrapper">
            <div className="committee-circle">
              {committee.name}
            </div>
            <div className="committee-card">
              <p>{committee.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
