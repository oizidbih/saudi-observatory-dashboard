import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Brain, ArrowUpRight, ArrowDownRight, Minus, Construction, AlertTriangle, Activity, Shield, Navigation, Zap } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ComposedChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const RGADashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Mock data for RGA demonstrations
  const roadConditionData = [
    { month: 'Jan', excellent: 45, good: 35, fair: 15, poor: 5, maintenance: 120, incidents: 85 },
    { month: 'Feb', excellent: 47, good: 36, fair: 13, poor: 4, maintenance: 95, incidents: 78 },
    { month: 'Mar', excellent: 49, good: 37, fair: 11, poor: 3, maintenance: 110, incidents: 72 },
    { month: 'Apr', excellent: 52, good: 38, fair: 8, poor: 2, maintenance: 85, incidents: 65 },
    { month: 'May', excellent: 54, good: 39, fair: 6, poor: 1, maintenance: 75, incidents: 58 },
    { month: 'Jun', excellent: 56, good: 40, fair: 4, poor: 0, maintenance: 65, incidents: 52 }
  ];

  const trafficFlowData = [
    { hour: '00:00', volume: 1200, speed: 85, congestion: 15 },
    { hour: '06:00', volume: 4500, speed: 65, congestion: 45 },
    { hour: '08:00', volume: 8200, speed: 45, congestion: 75 },
    { hour: '12:00', volume: 6800, speed: 70, congestion: 35 },
    { hour: '16:00', volume: 7500, speed: 55, congestion: 65 },
    { hour: '18:00', volume: 9200, speed: 40, congestion: 85 },
    { hour: '22:00', volume: 3800, speed: 75, congestion: 25 }
  ];

  const safetyMetricsData = [
    { region: 'Riyadh', accidents: 245, fatalities: 12, injuries: 380, severity: 'Medium' },
    { region: 'Makkah', accidents: 198, fatalities: 8, injuries: 295, severity: 'Low' },
    { region: 'Eastern Province', accidents: 167, fatalities: 15, injuries: 267, severity: 'High' },
    { region: 'Asir', accidents: 89, fatalities: 6, injuries: 134, severity: 'Low' },
    { region: 'Qassim', accidents: 76, fatalities: 4, injuries: 98, severity: 'Low' },
    { region: 'Tabuk', accidents: 54, fatalities: 3, injuries: 67, severity: 'Low' }
  ];

  const infrastructureHealthData = [
    { category: 'Highways', total: 2500, excellent: 1400, good: 850, fair: 200, poor: 50, health: 92 },
    { category: 'Urban Roads', total: 8500, excellent: 4250, good: 3400, fair: 680, poor: 170, health: 88 },
    { category: 'Rural Roads', total: 12000, excellent: 6000, good: 4800, fair: 960, poor: 240, health: 85 },
    { category: 'Bridges', total: 450, excellent: 315, good: 108, fair: 22, poor: 5, health: 94 },
    { category: 'Tunnels', total: 85, excellent: 68, good: 15, fair: 2, poor: 0, health: 96 }
  ];

  const smartTrafficSystemsData = [
    { system: 'Traffic Lights', installed: 2850, operational: 2735, maintenance: 85, offline: 30, efficiency: 96 },
    { system: 'Speed Cameras', installed: 1200, operational: 1165, maintenance: 25, offline: 10, efficiency: 97 },
    { system: 'Traffic Sensors', installed: 850, operational: 815, maintenance: 25, offline: 10, efficiency: 96 },
    { system: 'Variable Message Signs', installed: 320, operational: 305, maintenance: 12, offline: 3, efficiency: 95 },
    { system: 'CCTV Cameras', installed: 1850, operational: 1780, maintenance: 45, offline: 25, efficiency: 96 }
  ];

  const roadMaintenanceData = [
    { week: 'W1', scheduled: 45, completed: 42, delayed: 2, emergency: 8 },
    { week: 'W2', scheduled: 52, completed: 48, delayed: 3, emergency: 12 },
    { week: 'W3', scheduled: 38, completed: 36, delayed: 1, emergency: 6 },
    { week: 'W4', scheduled: 47, completed: 44, delayed: 2, emergency: 9 },
    { week: 'W5', scheduled: 41, completed: 39, delayed: 1, emergency: 5 },
    { week: 'W6', scheduled: 35, completed: 34, delayed: 0, emergency: 7 }
  ];

  const roadTypeDistribution = [
    { type: 'Highways', km: 2500, color: '#005430' },
    { type: 'Urban Roads', km: 8500, color: '#8BAA99' },
    { type: 'Rural Roads', km: 12000, color: '#3e9b87' },
    { type: 'Service Roads', km: 3200, color: '#58b5a3' }
  ];

  const performanceRadarData = [
    { metric: 'Road Condition', value: 92, fullMark: 100 },
    { metric: 'Traffic Flow', value: 78, fullMark: 100 },
    { metric: 'Safety Index', value: 85, fullMark: 100 },
    { metric: 'Maintenance', value: 88, fullMark: 100 },
    { metric: 'Smart Systems', value: 94, fullMark: 100 },
    { metric: 'User Satisfaction', value: 82, fullMark: 100 }
  ];

  const kpiCards = [
    {
      title: 'Road Network Condition',
      value: '92.3%',
      change: '+1.8%',
      trend: 'up',
      target: '95.0%',
      description: 'Roads in excellent/good condition'
    },
    {
      title: 'Traffic Flow Efficiency',
      value: '78.5%',
      change: '+3.2%',
      trend: 'up',
      target: '85.0%',
      description: 'Average traffic flow efficiency'
    },
    {
      title: 'Road Safety Index',
      value: '8.5/10',
      change: '+0.3',
      trend: 'up',
      target: '9.0/10',
      description: 'Composite safety performance score'
    },
    {
      title: 'Smart Systems Uptime',
      value: '96.2%',
      change: '+1.1%',
      trend: 'up',
      target: '98.0%',
      description: 'Traffic management systems availability'
    }
  ];

  const useCases = {
    descriptive: [
      {
        title: 'Road Network Performance Dashboard',
        description: 'Real-time monitoring of road conditions, traffic flow, and infrastructure health across Saudi Arabia',
        status: 'active',
        metrics: ['Road Condition Index', 'Traffic Volume', 'Infrastructure Health', 'Maintenance Status']
      }
    ],
    diagnostic: [
      {
        title: 'Traffic Congestion Root Cause Analysis',
        description: 'Deep analysis of traffic bottlenecks, incident patterns, and infrastructure limitations',
        status: 'active',
        metrics: ['Congestion Patterns', 'Incident Analysis', 'Infrastructure Gaps', 'Capacity Constraints']
      }
    ],
    predictive: [
      {
        title: 'Road Maintenance Forecasting',
        description: 'AI-powered prediction of road deterioration and optimal maintenance scheduling',
        status: 'active',
        metrics: ['Pavement Life Prediction', 'Weather Impact', 'Traffic Load Analysis', 'Maintenance Planning']
      },
      {
        title: 'Traffic Flow Prediction',
        description: 'Advanced traffic flow forecasting using historical patterns and real-time data',
        status: 'development',
        metrics: ['Flow Patterns', 'Event Impact', 'Weather Correlation', 'Route Optimization']
      }
    ],
    prescriptive: [
      {
        title: 'Smart Traffic Management System',
        description: 'AI-optimized traffic signal control and dynamic route guidance for optimal flow',
        status: 'active',
        metrics: ['Signal Optimization', 'Dynamic Routing', 'Congestion Mitigation', 'Emergency Response']
      }
    ]
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowDownRight className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>;
      case 'development':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">In Development</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Planned</span>;
    }
  };

  const getSafetyColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'text-red-600 bg-red-100';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'Low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 95) return 'text-green-600 bg-green-100';
    if (health >= 90) return 'text-blue-600 bg-blue-100';
    if (health >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-saudi-green-100 rounded-lg flex items-center justify-center">
              <Construction className="h-6 w-6 text-saudi-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-saudi-green-950">
                RGA (Road General Authority)
              </h1>
              <p className="text-gray-600 mt-1">
                Road network condition, traffic flow optimization, and infrastructure management
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last Updated</p>
            <p className="text-sm font-medium">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart3 },
              { id: 'analytics', name: 'Analytics Use Cases', icon: Brain }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors
                    ${activeTab === tab.id
                      ? 'border-saudi-green-500 text-saudi-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiCards.map((kpi, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">{kpi.title}</h3>
                      {getTrendIcon(kpi.trend)}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-gray-900">{kpi.value}</span>
                        <span className={`text-sm font-medium ${
                          kpi.trend === 'up' ? 'text-green-600' : kpi.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {kpi.change}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Target: <span className="font-medium">{kpi.target}</span>
                      </div>
                      <p className="text-xs text-gray-600">{kpi.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Road Condition Trends */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Activity className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Road Condition Trends
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={roadConditionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="poor" stackId="1" stroke="#ef4444" fill="#ef4444" name="Poor" />
                      <Area type="monotone" dataKey="fair" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Fair" />
                      <Area type="monotone" dataKey="good" stackId="1" stroke="#8BAA99" fill="#8BAA99" name="Good" />
                      <Area type="monotone" dataKey="excellent" stackId="1" stroke="#005430" fill="#005430" name="Excellent" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Performance Radar */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Overall Performance Index
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={performanceRadarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="metric" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Performance" dataKey="value" stroke="#005430" fill="#005430" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Traffic Flow & Road Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Traffic Flow Analysis */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Navigation className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Daily Traffic Flow Analysis
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={trafficFlowData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar yAxisId="left" dataKey="volume" fill="#8BAA99" name="Traffic Volume" />
                      <Line yAxisId="right" type="monotone" dataKey="speed" stroke="#005430" strokeWidth={2} name="Avg Speed (km/h)" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                {/* Road Network Distribution */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Construction className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Road Network Distribution
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={roadTypeDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="km"
                        label={({ type, km }) => `${type}: ${km}km`}
                      >
                        {roadTypeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Maintenance Schedule */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-5 w-5 text-saudi-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Road Maintenance Schedule Performance
                  </h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={roadMaintenanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="completed" fill="#005430" name="Completed" />
                    <Bar dataKey="delayed" fill="#f59e0b" name="Delayed" />
                    <Bar dataKey="emergency" fill="#ef4444" name="Emergency" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Safety Metrics Table */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-saudi-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Regional Road Safety Metrics
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Region
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Accidents
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fatalities
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Injuries
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Severity Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {safetyMetricsData.map((region, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {region.region}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {region.accidents}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {region.fatalities}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {region.injuries}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSafetyColor(region.severity)}`}>
                              {region.severity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Infrastructure Health & Smart Systems */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Infrastructure Health */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Infrastructure Health Monitoring
                  </h3>
                  <div className="space-y-4">
                    {infrastructureHealthData.map((infra, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium text-gray-900">{infra.category}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getHealthColor(infra.health)}`}>
                            {infra.health}%
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Total: {infra.total}km</span>
                            <span>Excellent: {infra.excellent}km</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Good: {infra.good}km</span>
                            <span>Fair: {infra.fair}km</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-red-600">Poor: {infra.poor}km</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Smart Traffic Systems */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Smart Traffic Systems Status
                  </h3>
                  <div className="space-y-4">
                    {smartTrafficSystemsData.map((system, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium text-gray-900">{system.system}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getHealthColor(system.efficiency)}`}>
                            {system.efficiency}%
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Installed: {system.installed}</span>
                            <span className="text-green-600">Operational: {system.operational}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-yellow-600">Maintenance: {system.maintenance}</span>
                            <span className="text-red-600">Offline: {system.offline}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {/* Analytics Categories */}
              {Object.entries(useCases).map(([category, cases]) => {
                const categoryConfig = {
                  descriptive: { 
                    title: 'Descriptive Analytics', 
                    subtitle: 'What happened?', 
                    icon: BarChart3, 
                    color: 'blue' 
                  },
                  diagnostic: { 
                    title: 'Diagnostic Analytics', 
                    subtitle: 'Why did it happen?', 
                    icon: TrendingUp, 
                    color: 'yellow' 
                  },
                  predictive: { 
                    title: 'Predictive Analytics', 
                    subtitle: 'What will happen?', 
                    icon: Target, 
                    color: 'orange' 
                  },
                  prescriptive: { 
                    title: 'Prescriptive & AI', 
                    subtitle: 'What should we do?', 
                    icon: Brain, 
                    color: 'green' 
                  }
                };

                const config = categoryConfig[category as keyof typeof categoryConfig];
                const IconComponent = config.icon;

                return (
                  <div key={category} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`h-6 w-6 text-${config.color}-600`} />
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{config.title}</h2>
                        <p className="text-sm text-gray-600">{config.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {cases.map((useCase, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {useCase.title}
                            </h3>
                            {getStatusBadge(useCase.status)}
                          </div>
                          <p className="text-gray-600 mb-4">{useCase.description}</p>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Key Metrics:</h4>
                            <div className="flex flex-wrap gap-2">
                              {useCase.metrics.map((metric, metricIndex) => (
                                <span
                                  key={metricIndex}
                                  className="px-2 py-1 text-xs bg-white text-gray-700 rounded border"
                                >
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RGADashboard; 