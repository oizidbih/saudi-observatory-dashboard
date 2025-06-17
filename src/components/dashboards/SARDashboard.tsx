import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Brain, ArrowUpRight, ArrowDownRight, Minus, Train, Clock, Users, Wrench, MapPin } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Line, PieChart, Pie, Cell, AreaChart, Area, ComposedChart } from 'recharts';

const SARDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Mock data for SAR demonstrations
  const trainPerformanceData = [
    { month: 'Jan', onTimePerformance: 78.5, passengerVolume: 245000, freightVolume: 1850, maintenance: 85 },
    { month: 'Feb', onTimePerformance: 82.1, passengerVolume: 268000, freightVolume: 1920, maintenance: 87 },
    { month: 'Mar', onTimePerformance: 85.3, passengerVolume: 289000, freightVolume: 2100, maintenance: 89 },
    { month: 'Apr', onTimePerformance: 87.8, passengerVolume: 312000, freightVolume: 2250, maintenance: 91 },
    { month: 'May', onTimePerformance: 89.2, passengerVolume: 335000, freightVolume: 2380, maintenance: 93 },
    { month: 'Jun', onTimePerformance: 91.5, passengerVolume: 358000, freightVolume: 2450, maintenance: 95 }
  ];

  const routePerformanceData = [
    { route: 'Riyadh-Dammam', distance: 449, onTime: 92, avgDelay: 8, passengers: 45000, freight: 850 },
    { route: 'Riyadh-Qassim', distance: 317, onTime: 89, avgDelay: 12, passengers: 32000, freight: 620 },
    { route: 'Dammam-Hofuf', distance: 160, onTime: 94, avgDelay: 5, passengers: 28000, freight: 480 },
    { route: 'Riyadh-Majmaah', distance: 180, onTime: 87, avgDelay: 15, passengers: 22000, freight: 380 },
    { route: 'Haramain Express', distance: 450, onTime: 96, avgDelay: 3, passengers: 85000, freight: 0 }
  ];

  const maintenanceScheduleData = [
    { week: 'W1', scheduled: 25, completed: 23, overdue: 2, critical: 5 },
    { week: 'W2', scheduled: 28, completed: 26, overdue: 2, critical: 3 },
    { week: 'W3', scheduled: 22, completed: 22, overdue: 0, critical: 4 },
    { week: 'W4', scheduled: 30, completed: 27, overdue: 3, critical: 6 },
    { week: 'W5', scheduled: 26, completed: 24, overdue: 2, critical: 2 },
    { week: 'W6', scheduled: 24, completed: 23, overdue: 1, critical: 3 }
  ];

  const passengerDemandForecast = [
    { time: '06:00', actual: 1200, predicted: 1180, capacity: 2000 },
    { time: '08:00', actual: 2800, predicted: 2750, capacity: 3200 },
    { time: '10:00', actual: 1800, predicted: 1820, capacity: 2400 },
    { time: '12:00', actual: 2200, predicted: 2150, capacity: 2800 },
    { time: '14:00', actual: 1900, predicted: 1950, capacity: 2400 },
    { time: '16:00', actual: 2600, predicted: 2580, capacity: 3000 },
    { time: '18:00', actual: 3200, predicted: 3150, capacity: 3600 },
    { time: '20:00', actual: 2400, predicted: 2450, capacity: 2800 }
  ];

  const serviceTypeDistribution = [
    { type: 'Passenger Express', volume: 45, color: '#005430' },
    { type: 'Passenger Regular', volume: 32, color: '#8BAA99' },
    { type: 'Freight Container', volume: 15, color: '#3e9b87' },
    { type: 'Freight Bulk', volume: 8, color: '#58b5a3' }
  ];

  const assetHealthData = [
    { category: 'Locomotives', total: 45, operational: 42, maintenance: 2, critical: 1, health: 93 },
    { category: 'Passenger Cars', total: 180, operational: 168, maintenance: 8, critical: 4, health: 91 },
    { category: 'Freight Cars', total: 320, operational: 295, maintenance: 18, critical: 7, health: 89 },
    { category: 'Track Infrastructure', total: 1200, operational: 1150, maintenance: 35, critical: 15, health: 87 },
    { category: 'Signaling Systems', total: 85, operational: 80, maintenance: 3, critical: 2, health: 92 }
  ];

  const kpiCards = [
    {
      title: 'On-Time Performance',
      value: '91.5%',
      change: '+2.3%',
      trend: 'up',
      target: '95.0%',
      description: 'Trains arriving within 5 minutes of schedule'
    },
    {
      title: 'Passenger Volume',
      value: '358K',
      change: '+23K',
      trend: 'up',
      target: '400K',
      description: 'Monthly passenger count'
    },
    {
      title: 'Freight Capacity Utilization',
      value: '78.2%',
      change: '+5.1%',
      trend: 'up',
      target: '85.0%',
      description: 'Freight capacity utilization rate'
    },
    {
      title: 'Asset Availability',
      value: '95.0%',
      change: '+2.0%',
      trend: 'up',
      target: '97.0%',
      description: 'Rolling stock operational availability'
    }
  ];

  const useCases = {
    descriptive: [
      {
        title: 'Railway Operations Performance Dashboard',
        description: 'Real-time monitoring of train punctuality, passenger volumes, and freight capacity utilization',
        status: 'active',
        metrics: ['On-Time Performance', 'Passenger Volume', 'Freight Utilization', 'Route Performance']
      }
    ],
    diagnostic: [
      {
        title: 'Delay Root Cause Analysis',
        description: 'Comprehensive analysis of train delays by route, time, weather, and infrastructure factors',
        status: 'active',
        metrics: ['Delay Categories', 'Infrastructure Issues', 'Weather Impact', 'Operational Factors']
      }
    ],
    predictive: [
      {
        title: 'Passenger Demand Forecasting',
        description: 'AI-powered prediction of passenger demand by route, time, and seasonal patterns',
        status: 'active',
        metrics: ['Demand Patterns', 'Seasonal Trends', 'Event Impact', 'Capacity Planning']
      },
      {
        title: 'Predictive Maintenance Scheduling',
        description: 'Condition-based maintenance predictions for rolling stock and infrastructure',
        status: 'development',
        metrics: ['Asset Health', 'Failure Prediction', 'Maintenance Windows', 'Cost Optimization']
      }
    ],
    prescriptive: [
      {
        title: 'Dynamic Train Scheduling Optimization',
        description: 'AI-optimized train schedules to maximize capacity and minimize delays',
        status: 'active',
        metrics: ['Schedule Optimization', 'Resource Allocation', 'Conflict Resolution', 'Performance Metrics']
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

  const getAssetHealthColor = (health: number) => {
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
              <Train className="h-6 w-6 text-saudi-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-saudi-green-950">
                SAR (Saudi Arabian Railway Company)
              </h1>
              <p className="text-gray-600 mt-1">
                Railway network operations, passenger/freight services, and asset management
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
                {/* Train Performance Trends */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Train Performance Trends
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={trainPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line yAxisId="left" type="monotone" dataKey="onTimePerformance" stroke="#005430" strokeWidth={2} name="On-Time Performance %" />
                      <Bar yAxisId="right" dataKey="passengerVolume" fill="#8BAA99" name="Passenger Volume" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                {/* Service Type Distribution */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Service Type Distribution
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={serviceTypeDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="volume"
                        label={({ type, volume }) => `${type}: ${volume}%`}
                      >
                        {serviceTypeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Passenger Demand & Maintenance */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Passenger Demand Forecast */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Daily Passenger Demand Forecast
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={passengerDemandForecast}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="capacity" stackId="1" stroke="#e5e7eb" fill="#e5e7eb" name="Capacity" />
                      <Area type="monotone" dataKey="predicted" stackId="2" stroke="#8BAA99" fill="#8BAA99" name="Predicted Demand" />
                      <Area type="monotone" dataKey="actual" stackId="3" stroke="#005430" fill="#005430" name="Actual Demand" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Maintenance Schedule */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Wrench className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Maintenance Schedule Performance
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={maintenanceScheduleData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="completed" fill="#005430" name="Completed" />
                      <Bar dataKey="overdue" fill="#ef4444" name="Overdue" />
                      <Bar dataKey="critical" fill="#f59e0b" name="Critical" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Route Performance Table */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Route Performance Analysis
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Route
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Distance (km)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          On-Time %
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Avg Delay (min)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Monthly Passengers
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Freight (tons)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {routePerformanceData.map((route, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {route.route}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {route.distance}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <span className={`font-medium ${route.onTime >= 95 ? 'text-green-600' : route.onTime >= 90 ? 'text-blue-600' : 'text-yellow-600'}`}>
                              {route.onTime}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {route.avgDelay}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {route.passengers.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {route.freight > 0 ? route.freight.toLocaleString() : 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Asset Health Monitoring */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Asset Health Monitoring
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {assetHealthData.map((asset, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">{asset.category}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Total: {asset.total}</span>
                          <span className={`font-medium px-2 py-1 rounded-full ${getAssetHealthColor(asset.health)}`}>
                            {asset.health}%
                          </span>
                        </div>
                        <div className="text-xs space-y-1">
                          <div className="flex justify-between">
                            <span className="text-green-600">Operational:</span>
                            <span>{asset.operational}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-yellow-600">Maintenance:</span>
                            <span>{asset.maintenance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-red-600">Critical:</span>
                            <span>{asset.critical}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default SARDashboard; 