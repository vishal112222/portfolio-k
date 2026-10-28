import React, { useState } from 'react';
import { hrSimulatorPresets } from '../data/portfolioData';
import { 
  Activity, 
  Users, 
  TrendingDown, 
  Clock, 
  Smile, 
  Zap, 
  AlertCircle, 
  CheckCircle2, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

export default function InteractiveLab() {
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedScenario, setSelectedScenario] = useState('baseline');

  // Compute lookup key
  const lookupKey = `${selectedDept}-${selectedScenario}`;
  const fallbackKey = `${selectedDept}-baseline`;
  const defaultKey = 'all-baseline';
  
  const currentData = 
    hrSimulatorPresets.metricsByDeptAndScenario[lookupKey] || 
    hrSimulatorPresets.metricsByDeptAndScenario[fallbackKey] || 
    hrSimulatorPresets.metricsByDeptAndScenario[defaultKey];

  return (
    <section className="section lab-section" id="interactive-lab">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Activity size={14} />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="section-title">Live HR Analytics & Workforce Intelligence Lab</h2>
          <p className="section-subtitle">
            Experience how real-time DAX calculations and workforce intelligence drive strategic human capital decisions. Test scenarios across departments below.
          </p>
        </div>

        <div className="lab-container">
          {/* Header Bar */}
          <div className="lab-header-bar">
            <div className="lab-title-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="status-dot"></span>
                <span style={{ fontSize: '0.85rem', color: 'var(--emerald-400)', fontWeight: 600, letterSpacing: '0.05em' }}>
                  DAX ENGINE: ACTIVE
                </span>
              </div>
              <h3 style={{ marginTop: '4px' }}>Workforce Metric Modeling Sandbox</h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="lab-badge">
                <Sparkles size={14} />
                <span>Simulating: {hrSimulatorPresets.departments.find(d => d.id === selectedDept)?.name}</span>
              </div>

              {(selectedDept !== 'all' || selectedScenario !== 'baseline') && (
                <button
                  onClick={() => {
                    setSelectedDept('all');
                    setSelectedScenario('baseline');
                  }}
                  className="btn btn-sm btn-secondary"
                  style={{ gap: '6px' }}
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Controls Grid */}
          <div className="lab-controls-grid">
            {/* Department Selectors */}
            <div>
              <div className="control-group-label">
                <Users size={16} />
                <span>Select Target Department</span>
              </div>
              <div className="pill-selectors">
                {hrSimulatorPresets.departments.map((dept) => (
                  <button
                    key={dept.id}
                    className={`pill-select-btn ${selectedDept === dept.id ? 'active' : ''}`}
                    onClick={() => setSelectedDept(dept.id)}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Strategic Scenario Selectors */}
            <div>
              <div className="control-group-label">
                <Zap size={16} />
                <span>Select Strategic Scenario</span>
              </div>
              <div className="pill-selectors">
                {hrSimulatorPresets.scenarios.map((scen) => (
                  <button
                    key={scen.id}
                    className={`pill-select-btn ${selectedScenario === scen.id ? 'active' : ''}`}
                    onClick={() => setSelectedScenario(scen.id)}
                    title={scen.desc}
                  >
                    {scen.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live KPI Cards Grid */}
          <div className="lab-kpis-grid">
            <div className="lab-kpi-card">
              <div className="lab-kpi-title">Total Headcount</div>
              <div className="lab-kpi-num" style={{ color: 'var(--cyan-400)' }}>
                {currentData.headcount.toLocaleString()}
              </div>
              <div className="lab-kpi-trend" style={{ color: 'var(--text-subtle)' }}>
                Active Workforce
              </div>
            </div>

            <div className="lab-kpi-card">
              <div className="lab-kpi-title">Turnover Rate</div>
              <div className="lab-kpi-num" style={{ color: currentData.turnoverRate > 10 ? 'var(--rose-500)' : 'var(--emerald-400)' }}>
                {currentData.turnoverRate}%
              </div>
              <div className="lab-kpi-trend" style={{ color: currentData.turnoverRate > 10 ? 'var(--rose-500)' : 'var(--emerald-400)' }}>
                <TrendingDown size={14} />
                <span>Benchmark: 10.2%</span>
              </div>
            </div>

            <div className="lab-kpi-card">
              <div className="lab-kpi-title">Average Tenure</div>
              <div className="lab-kpi-num" style={{ color: 'var(--indigo-400)' }}>
                {currentData.avgTenure} <span style={{ fontSize: '1rem', fontWeight: 500 }}>Yrs</span>
              </div>
              <div className="lab-kpi-trend" style={{ color: 'var(--text-subtle)' }}>
                Institutional Memory
              </div>
            </div>

            <div className="lab-kpi-card">
              <div className="lab-kpi-title">eNPS (Culture)</div>
              <div className="lab-kpi-num" style={{ color: 'var(--amber-400)' }}>
                +{currentData.eNPS}
              </div>
              <div className="lab-kpi-trend" style={{ color: 'var(--text-subtle)' }}>
                <Smile size={14} />
                <span>Net Promoter</span>
              </div>
            </div>

            <div className="lab-kpi-card">
              <div className="lab-kpi-title">Time-To-Hire</div>
              <div className="lab-kpi-num" style={{ color: 'var(--text-white)' }}>
                {currentData.timeToHire} <span style={{ fontSize: '1rem', fontWeight: 500 }}>Days</span>
              </div>
              <div className="lab-kpi-trend" style={{ color: 'var(--text-subtle)' }}>
                <Clock size={14} />
                <span>Velocity</span>
              </div>
            </div>
          </div>

          {/* Department Headcount Breakdown Bar */}
          <div className="lab-breakdown-box">
            <div className="breakdown-header">
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-white)' }}>
                Headcount Distribution & Structural Weight
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                Risk Index: <strong style={{ color: currentData.turnoverRate > 10 ? 'var(--rose-500)' : 'var(--emerald-400)' }}>{currentData.retentionRisk}</strong>
              </div>
            </div>

            <div className="breakdown-bar-track">
              {currentData.deptBreakdown.map((seg, i) => (
                <div
                  key={i}
                  className="breakdown-segment"
                  style={{ width: `${seg.pct}%`, backgroundColor: seg.color }}
                  title={`${seg.label}: ${seg.pct}%`}
                />
              ))}
            </div>

            <div className="breakdown-legend">
              {currentData.deptBreakdown.map((seg, i) => (
                <div key={i} className="legend-item">
                  <span className="legend-color-dot" style={{ backgroundColor: seg.color }}></span>
                  <span>{seg.label} ({seg.pct}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Insight Callout */}
          <div className="lab-insight-box">
            <div className="insight-icon">
              {currentData.turnoverRate > 10 ? <AlertCircle size={28} color="var(--rose-500)" /> : <CheckCircle2 size={28} />}
            </div>
            <div>
              <div className="insight-title">
                Strategic HR Analyst Takeaway & Recommendation
              </div>
              <p className="insight-text">
                {currentData.insight}
              </p>
              <div style={{ marginTop: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <strong>Identified Primary Attrition Driver:</strong> {currentData.topAttritionFactor}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
