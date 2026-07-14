import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Engineer Intern</h4>
                <h5>E-connect Pvt Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Debugged and optimized backend APIs across multiple dashboard
              platforms, resolving data export issues and improving API
              performance. Streamlined frontend-backend integration by
              engineering lightweight JavaScript initializers for dynamic C# view
              rendering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Engineer Intern</h4>
                <h5>Nature Bio Works</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed scalable and reusable React.js components using modern
              JavaScript (ES6+), state management, and REST API integration.
              Built internal tools by integrating REST APIs, optimizing
              SQL/database queries, and automating business workflows.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
