import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Brain, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const MTLSDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Mock data for demonstrations
  const lpiData = [
    { month: 'Jan', score: 3.2, target: 3.5 },
    { month: 'Feb', score: 3.3, target: 3.5 },
    { month: 'Mar', score: 3.4, target: 3.5 },
    { month: 'Apr', score: 3.5, target: 3.5 },
    { month: 'May', score: 3.6, target: 3.5 },
    { month: 'Jun', score: 3.7, target: 3.5 }
  ];

  const transportDemand = [
    { year: '2023', freight: 450, passenger: 280 },
    { year: '2024', freight: 480, passenger: 295 },
    { year: '2025', freight: 520, passenger: 315 },
    { year: '2026', freight: 565, passenger: 340 },
    { year: '2027', freight: 615, passenger: 370 }
  ];

  const modalDistribution = [
    { name: 'Road', value: 65, color: '#005430' },
    { name: 'Rail', value: 15, color: '#8BAA99' },
    { name: 'Air', value: 12, color: '#3e9b87' },
    { name: 'Sea', value: 8, color: '#58b5a3' }
  ];

  const kpiCards = [
    {
      title: 'Logistics Performance Index',
      value: '3.7',
      change: '+0.3',
      trend: 'up',
      target: '3.5',
      description: 'Current LPI score vs national target'
    },
    {
      title: 'Logistics Cost (% of GDP)',
      value: '12.5%',
      change: '-1.2%',
      trend: 'down',
      target: '10%',
      description: 'Cost reduction towards Vision 2030'
    },
    {
      title: 'Total Freight (Million Tons)',
      value: '480M',
      change: '+6.7%',
      trend: 'up',
      target: '500M',
      description: 'Annual freight movement'
    },
    {
      title: 'Passenger Journeys (Million)',
      value: '295M',
      change: '+5.4%',
      trend: 'up',
      target: '350M',
      description: 'Total passenger transport'
    }
  ];

  const useCases = {
    descriptive: [
      {
        title: 'National Logistics Performance Dashboard',
        description: 'Master dashboard tracking key national indicators against targets',
        status: 'active',
        metrics: ['LPI Score', 'Cost % of GDP', 'Freight Tonnage', 'Passenger Journeys']
      }
    ],
    diagnostic: [
      {
        title: 'Cross-Modal Bottleneck Analysis',
        description: 'Identify systemic delays where transport modes interact',
        status: 'active',
        metrics: ['Port-to-Rail Delays', 'Airport-to-Last-Mile', 'Intermodal Efficiency']
      }
    ],
    predictive: [
      {
        title: 'National Transport Demand Forecasting',
        description: 'Long-term demand modeling for infrastructure investment',
        status: 'active',
        metrics: ['5-Year Freight Forecast', '10-Year Passenger Demand', 'Infrastructure Needs']
      }
    ],
    prescriptive: [
      {
        title: 'Policy Simulation & Impact Analysis',
        description: 'AI-powered digital twin for policy impact simulation',
        status: 'development',
        metrics: ['Cost Impact', 'Time Savings', 'CO2 Reduction', 'Economic Benefits']
      },
      {
        title: 'Strategic Investment Optimization',
        description: 'AI recommendations for budget allocation optimization',
        status: 'development',
        metrics: ['ROI Analysis', 'Priority Ranking', 'Resource Allocation', 'Impact Modeling']
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-saudi-green-950 truncate">
              Ministry of Transport and Logistic Services
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Strategic oversight and national-level policy making dashboard
            </p>
          </div>
          <div className="text-left sm:text-right flex-shrink-0">
            <p className="text-xs sm:text-sm text-gray-500">Last Updated</p>
            <p className="text-sm font-medium">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 sm:space-x-8 px-4 sm:px-6 overflow-x-auto">
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
                    flex items-center space-x-2 py-3 sm:py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap touch-target
                    ${activeTab === tab.id
                      ? 'border-saudi-green-500 text-saudi-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                  style={{ minHeight: '44px' }}
                >
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="hidden sm:block">{tab.name}</span>
                  <span className="sm:hidden">{tab.id === 'overview' ? 'Overview' : 'Analytics'}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 sm:p-6">
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {kpiCards.map((kpi, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-xs sm:text-sm font-medium text-gray-600 line-clamp-2">{kpi.title}</h3>
                      <div className="flex-shrink-0 ml-2">
                        {getTrendIcon(kpi.trend)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">{kpi.value}</span>
                        <span className={`text-xs sm:text-sm font-medium ${
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* LPI Trend */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                    Logistics Performance Index Trend
                  </h3>
                  <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                    <LineChart data={lpiData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis domain={[3.0, 4.0]} tick={{ fontSize: 12 }} />
                      <Tooltip contentStyle={{ fontSize: '12px' }} />
                      <Line type="monotone" dataKey="score" stroke="#005430" strokeWidth={3} />
                      <Line type="monotone" dataKey="target" stroke="#8BAA99" strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Modal Distribution */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                    Transport Modal Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                    <PieChart>
                      <Pie
                        data={modalDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {modalDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ fontSize: '12px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Transport Demand Forecast */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                  National Transport Demand Forecasting
                </h3>
                <ResponsiveContainer width="100%" height={300} className="sm:!h-[400px]">
                  <BarChart data={transportDemand}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ fontSize: '12px' }} />
                    <Bar dataKey="freight" fill="#005430" name="Freight (Million Tons)" />
                    <Bar dataKey="passenger" fill="#8BAA99" name="Passenger (Million Journeys)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6 sm:space-y-8">
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
                  <div key={category} className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 text-${config.color}-600 flex-shrink-0`} />
                      <div className="min-w-0">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">{config.title}</h2>
                        <p className="text-sm text-gray-600">{config.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {cases.map((useCase, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                          <div className="flex items-start justify-between mb-3 sm:mb-4">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 flex-1 min-w-0 pr-2">
                              {useCase.title}
                            </h3>
                            <div className="flex-shrink-0">
                              {getStatusBadge(useCase.status)}
                            </div>
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{useCase.description}</p>
                          <div>
                            <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Key Metrics:</h4>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {useCase.metrics.map((metric, metricIndex) => (
                                <span
                                  key={metricIndex}
                                  className="px-2 py-1 text-xs bg-white text-gray-700 rounded border whitespace-nowrap"
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

export default MTLSDashboard; 