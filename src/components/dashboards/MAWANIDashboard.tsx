import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Brain, ArrowUpRight, ArrowDownRight, Minus, Ship, Anchor, Clock, Container } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const MAWANIDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Mock data for MAWANI demonstrations
  const portPerformanceData = [
    { month: 'Jan', vesselTurnaround: 18.5, containerDwell: 4.2, craneProductivity: 28, truckProcessing: 45 },
    { month: 'Feb', vesselTurnaround: 17.8, containerDwell: 3.9, craneProductivity: 30, truckProcessing: 42 },
    { month: 'Mar', vesselTurnaround: 16.9, containerDwell: 3.7, craneProductivity: 32, truckProcessing: 40 },
    { month: 'Apr', vesselTurnaround: 16.2, containerDwell: 3.5, craneProductivity: 34, truckProcessing: 38 },
    { month: 'May', vesselTurnaround: 15.8, containerDwell: 3.2, craneProductivity: 35, truckProcessing: 36 },
    { month: 'Jun', vesselTurnaround: 15.2, containerDwell: 3.0, craneProductivity: 36, truckProcessing: 34 }
  ];

  const vesselScheduleData = [
    { day: 'Mon', scheduled: 12, arrived: 11, delayed: 1 },
    { day: 'Tue', scheduled: 14, arrived: 13, delayed: 1 },
    { day: 'Wed', scheduled: 16, arrived: 14, delayed: 2 },
    { day: 'Thu', scheduled: 15, arrived: 15, delayed: 0 },
    { day: 'Fri', scheduled: 18, arrived: 16, delayed: 2 },
    { day: 'Sat', scheduled: 13, arrived: 12, delayed: 1 },
    { day: 'Sun', scheduled: 10, arrived: 10, delayed: 0 }
  ];

  const portCongestionData = [
    { hour: '00:00', gateTraffic: 15, yardUtilization: 65 },
    { hour: '04:00', gateTraffic: 8, yardUtilization: 62 },
    { hour: '08:00', gateTraffic: 45, yardUtilization: 78 },
    { hour: '12:00', gateTraffic: 52, yardUtilization: 85 },
    { hour: '16:00', gateTraffic: 38, yardUtilization: 82 },
    { hour: '20:00', gateTraffic: 28, yardUtilization: 75 }
  ];

  const cargoTypeDistribution = [
    { type: 'Containers', volume: 45, color: '#005430' },
    { type: 'Bulk Cargo', volume: 28, color: '#8BAA99' },
    { type: 'General Cargo', volume: 15, color: '#3e9b87' },
    { type: 'Liquid Bulk', volume: 12, color: '#58b5a3' }
  ];

  const berthAllocationData = [
    { berth: 'Berth 1', vessel: 'MSC Confidence', eta: '14:30', cargo: 'Containers', status: 'Occupied' },
    { berth: 'Berth 2', vessel: 'COSCO Shanghai', eta: '16:45', cargo: 'Containers', status: 'Scheduled' },
    { berth: 'Berth 3', vessel: 'Maersk Line', eta: '09:15', cargo: 'Containers', status: 'Occupied' },
    { berth: 'Berth 4', vessel: 'CMA CGM', eta: '22:00', cargo: 'General', status: 'Scheduled' },
    { berth: 'Berth 5', vessel: 'Available', eta: '-', cargo: '-', status: 'Available' }
  ];

  const kpiCards = [
    {
      title: 'Vessel Turnaround Time',
      value: '15.2 hrs',
      change: '-2.1 hrs',
      trend: 'down',
      target: '14.0 hrs',
      description: 'Average time vessels spend in port'
    },
    {
      title: 'Container Dwell Time',
      value: '3.0 days',
      change: '-0.5 days',
      trend: 'down',
      target: '2.5 days',
      description: 'Average container storage time'
    },
    {
      title: 'Crane Productivity',
      value: '36 moves/hr',
      change: '+4 moves/hr',
      trend: 'up',
      target: '40 moves/hr',
      description: 'Container moves per hour per crane'
    },
    {
      title: 'Gate Processing Time',
      value: '34 min',
      change: '-8 min',
      trend: 'down',
      target: '30 min',
      description: 'Average truck processing time'
    }
  ];

  const useCases = {
    descriptive: [
      {
        title: 'Port Operations Performance Dashboard',
        description: 'Real-time tracking of vessel turnaround, container dwell time, and crane productivity',
        status: 'active',
        metrics: ['Vessel Turnaround', 'Container Dwell Time', 'Crane Productivity', 'Gate Processing']
      }
    ],
    diagnostic: [
      {
        title: 'Port Bottleneck Analysis',
        description: 'End-to-end container journey analysis to identify delays at each stage',
        status: 'active',
        metrics: ['Unloading Delays', 'Customs Clearance', 'Yard Operations', 'Gate-out Process']
      }
    ],
    predictive: [
      {
        title: 'Vessel ETA Prediction',
        description: 'AI-powered vessel arrival predictions using AIS data and weather patterns',
        status: 'active',
        metrics: ['AIS Data Analysis', 'Weather Impact', 'Historical Performance', 'Berth Planning']
      },
      {
        title: 'Port Congestion Forecasting',
        description: 'Predicting high congestion periods for better resource allocation',
        status: 'development',
        metrics: ['Traffic Patterns', 'Vessel Schedules', 'Holiday Impact', 'Capacity Planning']
      }
    ],
    prescriptive: [
      {
        title: 'Smart Berth Allocation System',
        description: 'AI-optimized berth assignments to maximize throughput and minimize waiting',
        status: 'active',
        metrics: ['Optimal Assignments', 'Vessel Characteristics', 'Cargo Types', 'Yard Capacity']
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

  const getBerthStatusColor = (status: string) => {
    switch (status) {
      case 'Occupied':
        return 'text-red-600 bg-red-100';
      case 'Scheduled':
        return 'text-yellow-600 bg-yellow-100';
      case 'Available':
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
              <Ship className="h-6 w-6 text-saudi-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-saudi-green-950">
                MAWANI (Saudi Ports Authority)
              </h1>
              <p className="text-gray-600 mt-1">
                Seaport efficiency, capacity, and operations management
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
                {/* Port Performance Trends */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Anchor className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Port Performance Trends
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={portPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="vesselTurnaround" stroke="#005430" strokeWidth={2} name="Vessel Turnaround (hrs)" />
                      <Line type="monotone" dataKey="craneProductivity" stroke="#8BAA99" strokeWidth={2} name="Crane Productivity" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Cargo Type Distribution */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Container className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Cargo Type Distribution
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={cargoTypeDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="volume"
                        label={({ type, volume }) => `${type}: ${volume}%`}
                      >
                        {cargoTypeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Vessel Schedule & Port Congestion */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Weekly Vessel Schedule */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Weekly Vessel Schedule
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={vesselScheduleData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="arrived" fill="#005430" name="Arrived On Time" />
                      <Bar dataKey="delayed" fill="#ef4444" name="Delayed" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Port Congestion Forecast */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Port Congestion Forecast
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={portCongestionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="gateTraffic" stackId="1" stroke="#005430" fill="#005430" name="Gate Traffic" />
                      <Area type="monotone" dataKey="yardUtilization" stackId="2" stroke="#8BAA99" fill="#8BAA99" name="Yard Utilization %" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Smart Berth Allocation */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Smart Berth Allocation System
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Berth
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Vessel
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ETA
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cargo Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {berthAllocationData.map((berth, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {berth.berth}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {berth.vessel}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {berth.eta}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {berth.cargo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getBerthStatusColor(berth.status)}`}>
                              {berth.status}
                            </span>
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

export default MAWANIDashboard; 