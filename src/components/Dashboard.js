import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('weekly');

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const metrics = document.querySelectorAll('.metric-value');
      metrics.forEach(metric => {
        if (Math.random() > 0.95) { // 5% chance of update
          const currentValue = parseFloat(metric.textContent);
          if (!isNaN(currentValue)) {
            const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
            const newValue = (currentValue * (1 + variation)).toFixed(1);
            metric.textContent = newValue;
          }
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div className="container">
          <h1>Domestika Creative Assistant</h1>
          <p>Metrics & Operations Dashboard</p>
        </div>
      </div>
      
      <div className="container">
        {/* North Star Metrics */}
        <div className="section">
          <h2>🌟 North Star Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Weekly Creative Actions per Learner</h3>
              <div className="metric-value">4.2</div>
              <div className="metric-trend trend-up">
                ↗️ +15% vs last week
              </div>
              <p style={{marginTop: '0.5rem', color: '#718096', fontSize: '0.9rem'}}>
                Actions: Submit work, get feedback, share progress, connect with peers
              </p>
            </div>
            
            <div className="metric-card">
              <h3>Creative Confidence Score</h3>
              <div className="metric-value">7.8</div>
              <div className="metric-trend trend-up">
                ↗️ +0.3 vs last month
              </div>
              <p style={{marginTop: '0.5rem', color: '#718096', fontSize: '0.9rem'}}>
                Self-reported confidence (1-10) via monthly survey
              </p>
            </div>
            
            <div className="metric-card">
              <h3>Community Connection Rate</h3>
              <div className="metric-value">68%</div>
              <div className="metric-trend trend-up">
                ↗️ +5% vs last month
              </div>
              <p style={{marginTop: '0.5rem', color: '#718096', fontSize: '0.9rem'}}>
                % of users who connected with peers this month
              </p>
            </div>
          </div>
        </div>
        
        {/* Guardrails */}
        <div className="section">
          <h2>🛡️ Guardrails & Safety Metrics</h2>
          
          <div className="guardrail">
            <div className="guardrail-name">AI Feedback Accuracy</div>
            <div className="guardrail-status">
              <span className="status-green">✓ 94%</span>
              <span style={{color: '#718096', fontSize: '0.9rem'}}>Target: >90%</span>
            </div>
          </div>
          
          <div className="guardrail">
            <div className="guardrail-name">Content Safety Violations</div>
            <div className="guardrail-status">
              <span className="status-green">✓ 0.3%</span>
              <span style={{color: '#718096', fontSize: '0.9rem'}}>Target: &lt;0.5%</span>
            </div>
          </div>
          
          <div className="guardrail">
            <div className="guardrail-name">Feedback Response Time</div>
            <div className="guardrail-status">
              <span className="status-yellow">⚠️ 3.2s</span>
              <span style={{color: '#718096', fontSize: '0.9rem'}}>Target: &lt;2s</span>
            </div>
          </div>
          
          <div className="guardrail">
            <div className="guardrail-name">Human-AI Interaction Balance</div>
            <div className="guardrail-status">
              <span className="status-green">✓ 70/30</span>
              <span style={{color: '#718096', fontSize: '0.9rem'}}>Target: 70% human, 30% AI</span>
            </div>
          </div>
          
          <div className="guardrail">
            <div className="guardrail-name">Creator Satisfaction</div>
            <div className="guardrail-status">
              <span className="status-green">✓ 4.6/5</span>
              <span style={{color: '#718096', fontSize: '0.9rem'}}>Target: >4.5/5</span>
            </div>
          </div>
        </div>
        
        {/* Leading Indicators by Phase */}
        <div className="section">
          <h2>📊 Leading Indicators by Roadmap Phase</h2>
          
          <div className="roadmap-phase">
            <h4>Phase 1: Foundation (Months 0-3) - "The Feedback Loop"</h4>
            <div className="indicators-grid">
              <div className="indicator">
                <div className="indicator-name">Beta User Activation</div>
                <div className="indicator-value">847/1000</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">Feedback Quality Score</div>
                <div className="indicator-value">4.2/5</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">Project Completion Rate</div>
                <div className="indicator-value">73%</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">Time to First Feedback</div>
                <div className="indicator-value">4.3 min</div>
              </div>
            </div>
          </div>
          
          <div className="roadmap-phase">
            <h4>Phase 2: Personalization (Months 3-6) - "The Personal Mentor"</h4>
            <div className="indicators-grid">
              <div className="indicator">
                <div className="indicator-name">Learning Path Adoption</div>
                <div className="indicator-value">64%</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">Peer Match Success Rate</div>
                <div className="indicator-value">58%</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">Recommendation CTR</div>
                <div className="indicator-value">23%</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">30-Day Retention</div>
                <div className="indicator-value">82%</div>
              </div>
            </div>
          </div>
          
          <div className="roadmap-phase">
            <h4>Phase 3: Scale & Community (Months 6-12) - "The Creative Catalyst"</h4>
            <div className="indicators-grid">
              <div className="indicator">
                <div className="indicator-name">Active Assistant Users</div>
                <div className="indicator-value">89.2K</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">Co-creation Sessions</div>
                <div className="indicator-value">12.4K</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">Community Collaborations</div>
                <div className="indicator-value">3.2K</div>
              </div>
              <div className="indicator">
                <div className="indicator-name">Creator Revenue Growth</div>
                <div className="indicator-value">+34%</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ritual Calendar */}
        <div className="section">
          <h2>📅 Ritual Calendar & Operations Cadence</h2>
          
          <div className="tab-container">
            <button 
              className={`tab ${activeTab === 'weekly' ? 'active' : ''}`} 
              onClick={() => showTab('weekly')}
            >
              Weekly
            </button>
            <button 
              className={`tab ${activeTab === 'monthly' ? 'active' : ''}`} 
              onClick={() => showTab('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`tab ${activeTab === 'quarterly' ? 'active' : ''}`} 
              onClick={() => showTab('quarterly')}
            >
              Quarterly
            </button>
          </div>
          
          <div className={`tab-content ${activeTab === 'weekly' ? 'active' : ''}`}>
            <h3>Weekly Rituals</h3>
            <div className="calendar-grid">
              <div className="calendar-day has-event">
                <div className="calendar-day-number">MON</div>
                <div className="calendar-event">Sprint Planning</div>
                <div className="calendar-event">Metrics Review</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">TUE</div>
              </div>
              <div className="calendar-day has-event">
                <div className="calendar-day-number">WED</div>
                <div className="calendar-event">AI Model Review</div>
                <div className="calendar-event">User Feedback</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">THU</div>
              </div>
              <div className="calendar-day has-event">
                <div className="calendar-day-number">FRI</div>
                <div className="calendar-event">Sprint Review</div>
                <div className="calendar-event">Team Retro</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">SAT</div>
              </div>
              <div className="calendar-day">
                <div className="calendar-day-number">SUN</div>
              </div>
            </div>
            
            <ul className="ops-checklist">
              <li>
                <span>Weekly Metrics Dashboard Review</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>AI Model Performance Analysis</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>User Feedback Synthesis</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Content Safety Audit</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Community Health Check</span>
                <div className="checkbox">✓</div>
              </li>
            </ul>
          </div>
          
          <div className={`tab-content ${activeTab === 'monthly' ? 'active' : ''}`}>
            <h3>Monthly Rituals</h3>
            <ul className="ops-checklist">
              <li>
                <span>Business Review with Stakeholders</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>AI Model Retraining Cycle</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Creator Satisfaction Survey</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Feature Usage Analysis</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Competitive Intelligence Update</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Infrastructure Cost Optimization</span>
                <div className="checkbox">✓</div>
              </li>
            </ul>
          </div>
          
          <div className={`tab-content ${activeTab === 'quarterly' ? 'active' : ''}`}>
            <h3>Quarterly Rituals</h3>
            <ul className="ops-checklist">
              <li>
                <span>OKR Review and Planning</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Product-Market Fit Assessment</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Community Health Deep Dive</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>AI Ethics & Bias Review</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Creator Economy Impact Analysis</span>
                <div className="checkbox">✓</div>
              </li>
              <li>
                <span>Technology Roadmap Refresh</span>
                <div className="checkbox">✓</div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* A/B Testing Framework */}
        <div className="section">
          <h2>🧪 A/B Testing & Experimentation</h2>
          
          <div className="alert alert-info">
            <strong>Current Active Tests:</strong> 4 running, 2 analyzing, 1 implementing
          </div>
          
          <table className="data-table">
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Status</th>
                <th>Metric</th>
                <th>Current Result</th>
                <th>Confidence</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Feedback Tone Personalization</td>
                <td><span className="status-green">Running</span></td>
                <td>User Satisfaction</td>
                <td>+12%</td>
                <td>85%</td>
                <td>Continue</td>
              </tr>
              <tr>
                <td>Peer Match Algorithm v2</td>
                <td><span className="status-yellow">Analyzing</span></td>
                <td>Connection Rate</td>
                <td>+7%</td>
                <td>92%</td>
                <td>Ship</td>
              </tr>
              <tr>
                <td>AI Co-creation Prompts</td>
                <td><span className="status-green">Running</span></td>
                <td>Session Duration</td>
                <td>+23%</td>
                <td>78%</td>
                <td>Continue</td>
              </tr>
              <tr>
                <td>Learning Path Visualization</td>
                <td><span className="status-yellow">Analyzing</span></td>
                <td>Course Completion</td>
                <td>+15%</td>
                <td>89%</td>
                <td>Ship</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Operational Health */}
        <div className="section">
          <h2>⚙️ Operational Health & System Performance</h2>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>System Uptime</h3>
              <div className="metric-value">99.8%</div>
              <div className="metric-trend trend-up">
                ↗️ +0.1% vs last month
              </div>
            </div>
            
            <div className="metric-card">
              <h3>API Response Time</h3>
              <div className="metric-value">285ms</div>
              <div className="metric-trend trend-down">
                ↘️ -45ms vs last week
              </div>
            </div>
            
            <div className="metric-card">
              <h3>AI Model Accuracy</h3>
              <div className="metric-value">94.2%</div>
              <div className="metric-trend trend-up">
                ↗️ +1.2% vs last month
              </div>
            </div>
            
            <div className="metric-card">
              <h3>Daily Active Users</h3>
              <div className="metric-value">247K</div>
              <div className="metric-trend trend-up">
                ↗️ +8% vs last week
              </div>
            </div>
          </div>
        </div>
        
        {/* Alerts & Issues */}
        <div className="section">
          <h2>🚨 Current Alerts & Action Items</h2>
          
          <div className="alert alert-warning">
            <strong>Performance Warning:</strong> AI feedback latency approaching 3s threshold. Infrastructure team investigating.
          </div>
          
          <div className="alert alert-success">
            <strong>Success:</strong> Monthly creator satisfaction survey shows 96% positive sentiment for AI features.
          </div>
          
          <div className="alert alert-info">
            <strong>Info:</strong> New model deployment scheduled for next Tuesday. Expect temporary increase in response times.
          </div>
        </div>
        
        {/* Data Quality */}
        <div className="section">
          <h2>📈 Data Quality & Insights</h2>
          
          <div className="indicators-grid">
            <div className="indicator">
              <div className="indicator-name">Data Completeness</div>
              <div className="indicator-value">97.3%</div>
            </div>
            <div className="indicator">
              <div className="indicator-name">Feature Flags Active</div>
              <div className="indicator-value">12</div>
            </div>
            <div className="indicator">
              <div className="indicator-name">Model Drift Score</div>
              <div className="indicator-value">0.03</div>
            </div>
            <div className="indicator">
              <div className="indicator-name">Data Pipeline Health</div>
              <div className="indicator-value">100%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 