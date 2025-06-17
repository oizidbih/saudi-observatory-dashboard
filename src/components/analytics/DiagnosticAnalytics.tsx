import React from 'react';
import { TrendingUp, Search, AlertTriangle, Zap, CheckCircle, ArrowRight, Users, Clock } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';

const DiagnosticAnalytics: React.FC = () => {
  // Sample data for visualizations
  const rootCauseData = [
    { cause: 'Weather', frequency: 35, impact: 'High', resolution: 48 },
    { cause: 'Infrastructure', frequency: 28, impact: 'Medium', resolution: 72 },
    { cause: 'Human Error', frequency: 22, impact: 'Medium', resolution: 24 },
    { cause: 'Equipment', frequency: 18, impact: 'High', resolution: 36 },
    { cause: 'Traffic', frequency: 15, impact: 'Low', resolution: 12 },
    { cause: 'System Failure', frequency: 12, impact: 'High', resolution: 96 }
  ];

  const correlationData = [
    { metric: 'Weather vs Delays', correlation: 0.78, strength: 'Strong' },
    { metric: 'Traffic vs Travel Time', correlation: 0.85, strength: 'Very Strong' },
    { metric: 'Maintenance vs Downtime', correlation: -0.72, strength: 'Strong Negative' },
    { metric: 'Fuel Price vs Costs', correlation: 0.65, strength: 'Moderate' },
    { metric: 'Season vs Demand', correlation: 0.58, strength: 'Moderate' }
  ];

  const drillDownData = [
    { entity: 'MTLS', issues: 45, resolved: 38, pending: 7, avgTime: 48 },
    { entity: 'TGA', issues: 62, resolved: 55, pending: 7, avgTime: 36 },
    { entity: 'GACA', issues: 38, resolved: 34, pending: 4, avgTime: 42 },
    { entity: 'MAWANI', issues: 29, resolved: 26, pending: 3, avgTime: 54 },
    { entity: 'SAR', issues: 41, resolved: 37, pending: 4, avgTime: 39 },
    { entity: 'RGA', issues: 58, resolved: 48, pending: 10, avgTime: 45 },
    { entity: 'SPL', issues: 33, resolved: 29, pending: 4, avgTime: 33 }
  ];

  const timeSeriesAnalysis = [
    { month: 'Jan', delays: 245, incidents: 18, satisfaction: 4.1 },
    { month: 'Feb', delays: 198, incidents: 15, satisfaction: 4.3 },
    { month: 'Mar', delays: 167, incidents: 12, satisfaction: 4.4 },
    { month: 'Apr', delays: 189, incidents: 14, satisfaction: 4.2 },
    { month: 'May', delays: 156, incidents: 11, satisfaction: 4.5 },
    { month: 'Jun', delays: 134, incidents: 9, satisfaction: 4.6 }
  ];

  const capabilities = [
    {
      title: 'Root Cause Analysis',
      description: 'Deep dive investigation into the underlying causes of performance issues',
      icon: Search,
      features: ['5-Why Analysis', 'Fishbone Diagrams', 'Pareto Analysis', 'Impact Assessment'],
      useCases: ['Delay Analysis', 'Incident Investigation', 'Performance Degradation', 'Quality Issues'],
      impact: 'Faster problem resolution'
    },
    {
      title: 'Correlation Discovery',
      description: 'Statistical analysis to identify relationships between different variables',
      icon: TrendingUp,
      features: ['Statistical Correlation', 'Pattern Recognition', 'Trend Analysis', 'Anomaly Detection'],
      useCases: ['Weather Impact', 'Traffic Patterns', 'Seasonal Effects', 'Resource Utilization'],
      impact: 'Better understanding of dependencies'
    },
    {
      title: 'Drill-down Analysis',
      description: 'Hierarchical exploration from high-level metrics to detailed insights',
      icon: Zap,
      features: ['Multi-level Navigation', 'Dynamic Filtering', 'Cross-referencing', 'Contextual Views'],
      useCases: ['Performance Breakdown', 'Regional Analysis', 'Time-based Drilling', 'Comparative Studies'],
      impact: 'Granular problem identification'
    },
    {
      title: 'Comparative Analysis',
      description: 'Side-by-side comparison of metrics across time, entities, or conditions',
      icon: AlertTriangle,
      features: ['Benchmarking', 'Variance Analysis', 'Trend Comparison', 'Performance Gaps'],
      useCases: ['Entity Comparison', 'Before/After Analysis', 'Best Practice Identification', 'Gap Analysis'],
      impact: 'Performance improvement insights'
    }
  ];

  const analysisTypes = [
    {
      type: 'Performance Degradation Analysis',
      description: 'Identifying factors contributing to declining performance metrics',
      techniques: ['Trend Analysis', 'Change Point Detection', 'Factor Analysis', 'Regression Analysis'],
      entities: 'All entities',
      frequency: 'Continuous'
    },
    {
      type: 'Incident Investigation',
      description: 'Comprehensive analysis of safety incidents and operational disruptions',
      techniques: ['Timeline Analysis', 'Causal Mapping', 'Human Factors Analysis', 'System Analysis'],
      entities: 'TGA, GACA, RGA, SAR',
      frequency: 'Event-driven'
    },
    {
      type: 'Customer Satisfaction Analysis',
      description: 'Understanding drivers of customer satisfaction and dissatisfaction',
      techniques: ['Sentiment Analysis', 'Driver Analysis', 'Journey Mapping', 'Feedback Correlation'],
      entities: 'All entities',
      frequency: 'Monthly'
    },
    {
      type: 'Operational Bottleneck Analysis',
      description: 'Identifying and analyzing capacity constraints and process bottlenecks',
      techniques: ['Process Mining', 'Queue Analysis', 'Capacity Analysis', 'Flow Analysis'],
      entities: 'MAWANI, SAR, SPL',
      frequency: 'Weekly'
    }
  ];

  const benefits = [
    'Faster identification of root causes',
    'Reduced time to resolution for issues',
    'Better understanding of system dependencies',
    'Improved problem-solving capabilities',
    'Data-driven investigation processes',
    'Enhanced operational learning',
    'Proactive issue prevention',
    'Optimized resource allocation for fixes'
  ];

  const getCorrelationColor = (correlation: number) => {
    const abs = Math.abs(correlation);
    if (abs >= 0.8) return 'text-red-600 bg-red-100';
    if (abs >= 0.6) return 'text-orange-600 bg-orange-100';
    if (abs >= 0.4) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Diagnostic Analytics</h1>
          </div>
          <h2 className="text-xl mb-4 text-yellow-100">Why did it happen?</h2>
          <p className="text-lg text-yellow-100 mb-6">
            Advanced analytics that go beyond what happened to investigate why it happened. 
            Through root cause analysis, correlation discovery, and drill-down capabilities, 
            diagnostic analytics enables faster problem resolution and deeper operational understanding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Root Causes</h3>
              <p className="text-sm text-yellow-100">Identified & analyzed</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Correlations</h3>
              <p className="text-sm text-yellow-100">Statistical relationships</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Drill-down</h3>
              <p className="text-sm text-yellow-100">Multi-level analysis</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Comparisons</h3>
              <p className="text-sm text-yellow-100">Benchmarking & gaps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagnostic Capabilities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Techniques:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {capability.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {capability.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-sm font-medium text-yellow-600">{capability.impact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Analysis Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Root Cause Analysis */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Root Cause Frequency Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rootCauseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cause" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="frequency" fill="#eab308" name="Frequency" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Correlation Matrix */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Correlations Discovered</h3>
          <div className="space-y-3">
            {correlationData.map((corr, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{corr.metric}</h4>
                    <p className="text-sm text-gray-600">{corr.strength}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-sm font-medium rounded-full ${getCorrelationColor(corr.correlation)}`}>
                      {corr.correlation > 0 ? '+' : ''}{corr.correlation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Time Series & Drill-down */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Time Series Analysis */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Trend Analysis Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeSeriesAnalysis}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="delays" stroke="#eab308" strokeWidth={2} name="Delays" />
              <Line type="monotone" dataKey="incidents" stroke="#f59e0b" strokeWidth={2} name="Incidents" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Entity Drill-down */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Issue Resolution by Entity</h3>
          <div className="space-y-3">
            {drillDownData.map((entity, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{entity.entity}</h4>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{entity.avgTime}h avg</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-green-600">Resolved: {entity.resolved}</span>
                  <span className="text-yellow-600">Pending: {entity.pending}</span>
                  <span className="text-gray-600">Total: {entity.issues}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analysis Types */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Analysis Types</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {analysisTypes.map((analysis, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{analysis.type}</h3>
              <p className="text-gray-600 mb-4">{analysis.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Techniques Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.techniques.map((technique, techniqueIndex) => (
                    <span key={techniqueIndex} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{analysis.entities}</span>
                </div>
                <span className="text-yellow-600 font-medium">{analysis.frequency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for Predictive Analytics?</h3>
            <p className="text-gray-600">
              With diagnostic insights established, advance to predictive analytics to anticipate future outcomes.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-yellow-600 font-medium">
            <span>Explore Predictive Analytics</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticAnalytics; 