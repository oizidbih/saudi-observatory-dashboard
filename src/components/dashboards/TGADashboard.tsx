import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Brain, ArrowUpRight, ArrowDownRight, Minus, Truck, Bus, AlertTriangle, Clock } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';

const TGADashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Mock data for TGA demonstrations
  const publicTransportData = [
    { time: '06:00', onTime: 85, delayed: 12, cancelled: 3 },
    { time: '08:00', onTime: 78, delayed: 18, cancelled: 4 },
    { time: '10:00', onTime: 92, delayed: 6, cancelled: 2 },
    { time: '12:00', onTime: 88, delayed: 10, cancelled: 2 },
    { time: '14:00', onTime: 90, delayed: 8, cancelled: 2 },
    { time: '16:00', onTime: 82, delayed: 15, cancelled: 3 },
    { time: '18:00', onTime: 75, delayed: 20, cancelled: 5 },
    { time: '20:00', onTime: 87, delayed: 11, cancelled: 2 }
  ];

  const freightMovementData = [
    { corridor: 'Riyadh-Dammam', avgTime: 4.2, waitTime: 0.8, volume: 1250 },
    { corridor: 'Jeddah-Riyadh', avgTime: 6.1, waitTime: 1.2, volume: 980 },
    { corridor: 'Dammam-Jubail', avgTime: 1.8, waitTime: 0.3, volume: 750 },
    { corridor: 'Riyadh-Qassim', avgTime: 3.5, waitTime: 0.6, volume: 640 },
    { corridor: 'Jeddah-Makkah', avgTime: 1.2, waitTime: 0.2, volume: 890 }
  ];

  const accidentHotspots = [
    { location: 'Highway 40 - KM 85', accidents: 24, severity: 'High', factors: ['Weather', 'Speed'] },
    { location: 'Ring Road - Exit 12', accidents: 18, severity: 'Medium', factors: ['Traffic', 'Visibility'] },
    { location: 'Route 505 - Junction A', accidents: 31, severity: 'High', factors: ['Road Condition', 'Heavy Vehicles'] },
    { location: 'Urban Route 15', accidents: 12, severity: 'Low', factors: ['Pedestrians', 'Signals'] }
  ];

  const complianceRiskData = [
    { month: 'Jan', lowRisk: 78, mediumRisk: 18, highRisk: 4 },
    { month: 'Feb', lowRisk: 82, mediumRisk: 15, highRisk: 3 },
    { month: 'Mar', lowRisk: 75, mediumRisk: 20, highRisk: 5 },
    { month: 'Apr', lowRisk: 80, mediumRisk: 17, highRisk: 3 },
    { month: 'May', lowRisk: 85, mediumRisk: 12, highRisk: 3 },
    { month: 'Jun', lowRisk: 88, mediumRisk: 10, highRisk: 2 }
  ];

  const kpiCards = [
    {
      title: 'Public Transport On-Time Performance',
      value: '87%',
      change: '+3.2%',
      trend: 'up',
      target: '90%',
      description: 'Average on-time performance across all routes'
    },
    {
      title: 'Average Freight Trip Time',
      value: '3.8 hrs',
      change: '-0.4 hrs',
      trend: 'down',
      target: '3.5 hrs',
      description: 'Average time for major freight corridors'
    },
    {
      title: 'Road Safety Index',
      value: '8.2/10',
      change: '+0.5',
      trend: 'up',
      target: '8.5/10',
      description: 'Composite safety score across network'
    },
    {
      title: 'Compliance Rate',
      value: '88%',
      change: '+2.1%',
      trend: 'up',
      target: '95%',
      description: 'Transport operator compliance rate'
    }
  ];

  const useCases = {
    descriptive: [
      {
        title: 'Real-time Public Transport Monitoring',
        description: 'Live dashboards showing bus locations, on-time performance, and passenger load',
        status: 'active',
        metrics: ['Bus Locations', 'On-Time Performance', 'Passenger Load', 'Route Coverage']
      },
      {
        title: 'Freight Movement Dashboard',
        description: 'Visualizing truck movements, key corridors, and wait times',
        status: 'active',
        metrics: ['Truck Movements', 'Corridor Performance', 'Border Wait Times', 'Checkpoint Delays']
      }
    ],
    diagnostic: [
      {
        title: 'Accident Hotspot Analysis',
        description: 'Analyzing accident data to identify and understand high-risk locations',
        status: 'active',
        metrics: ['Accident Frequency', 'Severity Analysis', 'Contributing Factors', 'Risk Patterns']
      }
    ],
    predictive: [
      {
        title: 'Compliance Risk Scoring',
        description: 'Predictive model for transport operator compliance risk assessment',
        status: 'active',
        metrics: ['Risk Scores', 'Audit Prioritization', 'Violation Prediction', 'Operator Ranking']
      },
      {
        title: 'Public Transport Demand Prediction',
        description: 'Forecasting passenger demand for route and schedule optimization',
        status: 'development',
        metrics: ['Demand Forecasting', 'Route Optimization', 'Fleet Planning', 'Event Impact']
      }
    ],
    prescriptive: [
      {
        title: 'Dynamic Route Optimization',
        description: 'AI algorithms for real-time route adjustments to avoid congestion',
        status: 'development',
        metrics: ['Route Suggestions', 'Congestion Avoidance', 'Real-time Adjustments', 'Efficiency Gains']
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

  const getSeverityColor = (severity: string) => {
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-saudi-green-100 rounded-lg flex items-center justify-center">
              <Truck className="h-6 w-6 text-saudi-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-saudi-green-950">
                Transport General Authority (TGA)
              </h1>
              <p className="text-gray-600 mt-1">
                Land transport regulation, safety, and efficiency oversight
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

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Public Transport Performance */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Bus className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Public Transport Performance
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={publicTransportData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="onTime" stackId="1" stroke="#005430" fill="#005430" />
                      <Area type="monotone" dataKey="delayed" stackId="1" stroke="#f59e0b" fill="#f59e0b" />
                      <Area type="monotone" dataKey="cancelled" stackId="1" stroke="#ef4444" fill="#ef4444" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Compliance Risk Distribution */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Compliance Risk Trends
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={complianceRiskData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="lowRisk" stackId="1" stroke="#10b981" fill="#10b981" />
                      <Area type="monotone" dataKey="mediumRisk" stackId="1" stroke="#f59e0b" fill="#f59e0b" />
                      <Area type="monotone" dataKey="highRisk" stackId="1" stroke="#ef4444" fill="#ef4444" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Freight Movement Analysis */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-5 w-5 text-saudi-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Key Freight Corridors Performance
                  </h3>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={freightMovementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="corridor" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="avgTime" fill="#005430" name="Avg Trip Time (hrs)" />
                    <Bar dataKey="waitTime" fill="#8BAA99" name="Wait Time (hrs)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Accident Hotspots Table */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Top Accident Hotspots
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Accidents (YTD)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Severity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contributing Factors
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {accidentHotspots.map((hotspot, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {hotspot.location}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {hotspot.accidents}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(hotspot.severity)}`}>
                              {hotspot.severity}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <div className="flex flex-wrap gap-1">
                              {hotspot.factors.map((factor, factorIndex) => (
                                <span
                                  key={factorIndex}
                                  className="inline-flex px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded"
                                >
                                  {factor}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default TGADashboard; 