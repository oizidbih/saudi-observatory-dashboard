import React from 'react';
import { BarChart3, Target, Brain, Users, Activity, CheckCircle, ArrowRight, Zap, Clock, Globe } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface HomePageProps {
  onEntitySelect: (entity: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onEntitySelect }) => {
  // Summary data across all entities
  const overallKPIs = [
    { label: 'On-Time Performance', value: '87.3%', trend: '+2.1%', color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Customer Satisfaction', value: '4.4/5', trend: '+0.3', color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Operational Efficiency', value: '82.1%', trend: '+5.2%', color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Safety Index', value: '8.7/10', trend: '+0.4', color: 'text-saudi-green-600', bg: 'bg-saudi-green-100' }
  ];



  const analyticsMaturity = [
    { level: 'Descriptive', entities: 7, coverage: 100, color: '#3b82f6' },
    { level: 'Diagnostic', entities: 6, coverage: 86, color: '#eab308' },
    { level: 'Predictive', entities: 4, coverage: 57, color: '#ea580c' },
    { level: 'Prescriptive', entities: 2, coverage: 29, color: '#16a34a' }
  ];

  const monthlyTrends = [
    { month: 'Jan', performance: 78, satisfaction: 4.1, efficiency: 75, safety: 8.2 },
    { month: 'Feb', performance: 81, satisfaction: 4.2, efficiency: 78, safety: 8.4 },
    { month: 'Mar', performance: 83, satisfaction: 4.3, efficiency: 80, safety: 8.5 },
    { month: 'Apr', performance: 85, satisfaction: 4.3, efficiency: 81, safety: 8.6 },
    { month: 'May', performance: 86, satisfaction: 4.4, efficiency: 82, safety: 8.7 },
    { month: 'Jun', performance: 87, satisfaction: 4.4, efficiency: 82, safety: 8.7 }
  ];

  const transportModes = [
    { mode: 'Road Transport', volume: 45, color: '#005430' },
    { mode: 'Air Transport', volume: 25, color: '#3e9b87' },
    { mode: 'Sea Transport', volume: 20, color: '#58b5a3' },
    { mode: 'Rail Transport', volume: 7, color: '#8BAA99' },
    { mode: 'Postal Services', volume: 3, color: '#A8C5B8' }
  ];

  const entities = [
    {
      id: 'mtls',
      name: 'Ministry of Transport & Logistic Services',
      shortName: 'MTLS',
      icon: '🏛️',
      description: 'Strategic oversight and policy coordination',
      score: 92,
      kpis: ['LPI Score: 3.7', 'Logistics Cost: 12.5%', 'Freight: 480M tons'],
      status: 'Excellent',
      maturity: 'Advanced'
    },
    {
      id: 'tga',
      name: 'Transport General Authority',
      shortName: 'TGA',
      icon: '🚛',
      description: 'Land transport regulation and oversight',
      score: 87,
      kpis: ['On-Time: 87%', 'Safety Index: 8.2', 'Compliance: 88%'],
      status: 'Good',
      maturity: 'Intermediate'
    },
    {
      id: 'gaca',
      name: 'General Authority of Civil Aviation',
      shortName: 'GACA',
      icon: '✈️',
      description: 'Air traffic and airport management',
      score: 84,
      kpis: ['On-Time: 84.2%', 'Passengers: 2.8M', 'Capacity: 83%'],
      status: 'Good',
      maturity: 'Intermediate'
    },
    {
      id: 'mawani',
      name: 'MAWANI (Saudi Ports Authority)',
      shortName: 'MAWANI',
      icon: '🚢',
      description: 'Seaport operations and management',
      score: 89,
      kpis: ['Turnaround: 15.2hrs', 'Dwell Time: 3.0 days', 'Productivity: 36/hr'],
      status: 'Excellent',
      maturity: 'Advanced'
    },
    {
      id: 'sar',
      name: 'Saudi Arabian Railway Company',
      shortName: 'SAR',
      icon: '🚄',
      description: 'Railway network operations',
      score: 91,
      kpis: ['On-Time: 91.5%', 'Passengers: 358K', 'Utilization: 78.2%'],
      status: 'Excellent',
      maturity: 'Advanced'
    },
    {
      id: 'rga',
      name: 'Road General Authority',
      shortName: 'RGA',
      icon: '🛣️',
      description: 'Road network and infrastructure',
      score: 85,
      kpis: ['Condition: 92.3%', 'Efficiency: 78.5%', 'Safety: 8.5'],
      status: 'Good',
      maturity: 'Intermediate'
    },
    {
      id: 'spl',
      name: 'Saudi Post (SPL)',
      shortName: 'SPL',
      icon: '📦',
      description: 'Postal and logistics services',
      score: 88,
      kpis: ['Delivery: 91.2%', 'Volume: 4.6M', 'Satisfaction: 4.3/5'],
      status: 'Good',
      maturity: 'Intermediate'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent': return 'text-green-600 bg-green-100';
      case 'Good': return 'text-blue-600 bg-blue-100';
      case 'Average': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getMaturityColor = (maturity: string) => {
    switch (maturity) {
      case 'Advanced': return 'text-saudi-green-600 bg-saudi-green-100';
      case 'Intermediate': return 'text-orange-600 bg-orange-100';
      case 'Basic': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-saudi-green-600 to-saudi-green-700 rounded-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <Globe className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Saudi Observatory Dashboard</h1>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-saudi-green-100 mb-6">
            Comprehensive transport and logistics analytics platform supporting Saudi Arabia's Vision 2030. 
            Real-time monitoring, predictive insights, and AI-powered optimization across all transport modes.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">7 Entities</h3>
              <p className="text-xs sm:text-sm text-saudi-green-100">Complete coverage</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">120+ KPIs</h3>
              <p className="text-xs sm:text-sm text-saudi-green-100">Real-time monitoring</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">4 Analytics Levels</h3>
              <p className="text-xs sm:text-sm text-saudi-green-100">Maturity framework</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">AI-Powered</h3>
              <p className="text-xs sm:text-sm text-saudi-green-100">Predictive insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overall KPIs */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">System-wide Performance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {overallKPIs.map((kpi, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${kpi.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Activity className={`h-5 w-5 sm:h-6 sm:w-6 ${kpi.color}`} />
                </div>
                <span className={`px-2 py-1 text-xs sm:text-sm font-medium ${kpi.color} ${kpi.bg} rounded-full`}>
                  {kpi.trend}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
              <p className="text-sm sm:text-base text-gray-600">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Monthly Trends */}
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
            <LineChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="performance" stroke="#005430" strokeWidth={2} name="Performance" />
              <Line type="monotone" dataKey="efficiency" stroke="#3e9b87" strokeWidth={2} name="Efficiency" />
              <Line type="monotone" dataKey="safety" stroke="#58b5a3" strokeWidth={2} name="Safety" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Transport Mode Distribution */}
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Transport Mode Distribution</h3>
          <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
            <PieChart>
              <Pie
                data={transportModes}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                dataKey="volume"
                label={({ mode, volume }) => `${mode}: ${volume}%`}
              >
                {transportModes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Entity Performance */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Entity Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {entities.map((entity) => (
            <div 
              key={entity.id} 
              className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer touch-target"
              onClick={() => onEntitySelect(entity.id)}
              style={{ minHeight: '44px' }}
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                  <span className="text-xl sm:text-2xl flex-shrink-0">{entity.icon}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{entity.shortName}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{entity.description}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{entity.score}</div>
                  <div className="text-xs sm:text-sm text-gray-500">Score</div>
                </div>
              </div>
              
              <div className="mb-3 sm:mb-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {entity.kpis.map((kpi, kpiIndex) => (
                    <span key={kpiIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded whitespace-nowrap">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap gap-1">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(entity.status)}`}>
                    {entity.status}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getMaturityColor(entity.maturity)}`}>
                    {entity.maturity}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Maturity Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Maturity Distribution */}
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Analytics Maturity Distribution</h3>
          <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
            <BarChart data={analyticsMaturity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="level" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ fontSize: '12px' }} />
              <Bar dataKey="entities" fill="#005430" name="Entities" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Maturity Progress */}
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Maturity Level Progress</h3>
          <div className="space-y-4">
            {analyticsMaturity.map((level, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 text-sm sm:text-base">{level.level}</span>
                  <span className="text-xs sm:text-sm text-gray-600">{level.entities}/7 entities</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-300" 
                    style={{ 
                      width: `${level.coverage}%`,
                      backgroundColor: level.color
                    }}
                  ></div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500">{level.coverage}% coverage</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <button
            onClick={() => onEntitySelect('analytics-maturity')}
            className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left touch-target"
            style={{ minHeight: '44px' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-saudi-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-saudi-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Analytics Framework</h3>
            <p className="text-xs sm:text-sm text-gray-600">Explore the 4-level maturity model</p>
          </button>
          
          <button
            onClick={() => onEntitySelect('descriptive')}
            className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left touch-target"
            style={{ minHeight: '44px' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Descriptive Analytics</h3>
            <p className="text-xs sm:text-sm text-gray-600">What happened? Real-time dashboards</p>
          </button>
          
          <button
            onClick={() => onEntitySelect('predictive')}
            className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left touch-target"
            style={{ minHeight: '44px' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Predictive Analytics</h3>
            <p className="text-xs sm:text-sm text-gray-600">What will happen? AI forecasting</p>
          </button>
          
          <button
            onClick={() => onEntitySelect('prescriptive')}
            className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left touch-target"
            style={{ minHeight: '44px' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">AI Optimization</h3>
            <p className="text-xs sm:text-sm text-gray-600">What should we do? Automated decisions</p>
          </button>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">System Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">All Systems Operational</h3>
            <p className="text-sm sm:text-base text-gray-600">All 7 entities reporting normally</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Real-time Updates</h3>
            <p className="text-sm sm:text-base text-gray-600">Data refreshed every 5 minutes</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-saudi-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-saudi-green-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Active Monitoring</h3>
            <p className="text-sm sm:text-base text-gray-600">24/7 continuous surveillance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 