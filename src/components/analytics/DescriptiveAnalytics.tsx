import React from 'react';
import { BarChart3, Monitor, Database, TrendingUp, Users, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const DescriptiveAnalytics: React.FC = () => {
  // Sample data for visualizations
  const entityPerformanceData = [
    { entity: 'MTLS', kpis: 15, dashboards: 4, reports: 12 },
    { entity: 'TGA', kpis: 18, dashboards: 5, reports: 14 },
    { entity: 'GACA', kpis: 16, dashboards: 4, reports: 11 },
    { entity: 'MAWANI', kpis: 14, dashboards: 4, reports: 10 },
    { entity: 'SAR', kpis: 17, dashboards: 5, reports: 13 },
    { entity: 'RGA', kpis: 19, dashboards: 6, reports: 15 },
    { entity: 'SPL', kpis: 13, dashboards: 4, reports: 9 }
  ];

  const dataSourcesData = [
    { type: 'Real-time Sensors', count: 45, color: '#005430' },
    { type: 'Operational Systems', count: 32, color: '#8BAA99' },
    { type: 'External APIs', count: 18, color: '#3e9b87' },
    { type: 'Manual Entry', count: 5, color: '#58b5a3' }
  ];

  const usageMetricsData = [
    { month: 'Jan', users: 245, views: 12500, exports: 890 },
    { month: 'Feb', users: 268, views: 14200, exports: 1020 },
    { month: 'Mar', users: 289, views: 15800, exports: 1150 },
    { month: 'Apr', users: 312, views: 17200, exports: 1280 },
    { month: 'May', users: 335, views: 18900, exports: 1420 },
    { month: 'Jun', users: 358, views: 20500, exports: 1580 }
  ];

  const capabilities = [
    {
      title: 'Real-time Dashboards',
      description: 'Live performance monitoring with up-to-the-minute data updates',
      icon: Monitor,
      features: ['Live KPI tracking', 'Interactive visualizations', 'Drill-down capabilities', 'Mobile responsive'],
      entities: ['All 7 entities implemented'],
      impact: 'Immediate visibility into operations'
    },
    {
      title: 'Historical Reporting',
      description: 'Comprehensive historical analysis and trend identification',
      icon: Database,
      features: ['Time-series analysis', 'Comparative reporting', 'Automated scheduling', 'Export capabilities'],
      entities: ['Monthly, quarterly, yearly views'],
      impact: 'Data-driven decision making'
    },
    {
      title: 'KPI Monitoring',
      description: 'Standardized performance indicators across all transport modes',
      icon: Activity,
      features: ['Target vs actual tracking', 'Alert notifications', 'Trend analysis', 'Benchmark comparisons'],
      entities: ['120+ KPIs across entities'],
      impact: 'Performance accountability'
    },
    {
      title: 'Data Visualization',
      description: 'Rich visual representations of complex transport data',
      icon: TrendingUp,
      features: ['Charts and graphs', 'Geographic mapping', 'Heat maps', 'Custom views'],
      entities: ['Multiple chart types per entity'],
      impact: 'Enhanced data comprehension'
    }
  ];

  const implementationAreas = [
    {
      area: 'Transport Performance',
      description: 'Real-time monitoring of on-time performance, capacity utilization, and service quality',
      kpis: ['On-time Performance', 'Capacity Utilization', 'Service Quality', 'Customer Satisfaction'],
      entities: 'All entities'
    },
    {
      area: 'Safety & Compliance',
      description: 'Tracking safety incidents, compliance rates, and regulatory adherence',
      kpis: ['Safety Index', 'Incident Rates', 'Compliance Score', 'Audit Results'],
      entities: 'TGA, GACA, RGA, SAR'
    },
    {
      area: 'Infrastructure Health',
      description: 'Monitoring condition and maintenance status of transport infrastructure',
      kpis: ['Asset Condition', 'Maintenance Completion', 'System Uptime', 'Health Scores'],
      entities: 'GACA, MAWANI, SAR, RGA'
    },
    {
      area: 'Financial Performance',
      description: 'Cost tracking, revenue monitoring, and budget performance analysis',
      kpis: ['Cost per Unit', 'Revenue Growth', 'Budget Variance', 'ROI Metrics'],
      entities: 'All entities'
    }
  ];

  const benefits = [
    'Immediate visibility into current performance',
    'Historical trend analysis and pattern recognition',
    'Standardized reporting across all entities',
    'Data-driven decision making foundation',
    'Performance accountability and transparency',
    'Regulatory compliance monitoring',
    'Stakeholder communication enhancement',
    'Operational efficiency baseline establishment'
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Descriptive Analytics</h1>
          </div>
          <h2 className="text-xl mb-4 text-blue-100">What happened?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Foundation-level analytics providing real-time visibility and historical insights into transport and logistics performance. 
            This is where data-driven decision making begins with comprehensive dashboards, KPI monitoring, and standardized reporting.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">120+ KPIs</h3>
              <p className="text-sm text-blue-100">Across all entities</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Real-time</h3>
              <p className="text-sm text-blue-100">Live data updates</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">7 Entities</h3>
              <p className="text-sm text-blue-100">Complete coverage</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">24/7</h3>
              <p className="text-sm text-blue-100">Continuous monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {capability.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">{capability.entities}</p>
                        <p className="text-sm font-medium text-blue-600">{capability.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Entity Implementation Status */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation by Entity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={entityPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="entity" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="kpis" fill="#3b82f6" name="KPIs" />
              <Bar dataKey="dashboards" fill="#8bb5ff" name="Dashboards" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Data Sources Distribution */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Sources Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataSourcesData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                label={({ type, count }) => `${type}: ${count}`}
              >
                {dataSourcesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Usage Analytics */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Dashboard Usage Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={usageMetricsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Active Users" />
            <Line type="monotone" dataKey="views" stroke="#8bb5ff" strokeWidth={2} name="Dashboard Views" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Implementation Areas */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Areas</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {implementationAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.area}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Key KPIs:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.kpis.map((kpi, kpiIndex) => (
                    <span key={kpiIndex} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{area.entities}</span>
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
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for the Next Level?</h3>
            <p className="text-gray-600">
              Once descriptive analytics is established, advance to diagnostic analytics to understand why things happen.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-blue-600 font-medium">
            <span>Explore Diagnostic Analytics</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptiveAnalytics; 