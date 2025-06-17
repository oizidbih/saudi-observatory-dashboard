import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Brain, ArrowUpRight, ArrowDownRight, Minus, Plane, Users, Clock, AlertCircle } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const GACADashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Mock data for GACA demonstrations
  const airTrafficData = [
    { month: 'Jan', domestic: 45000, international: 32000, cargo: 8500 },
    { month: 'Feb', domestic: 48000, international: 35000, cargo: 9200 },
    { month: 'Mar', domestic: 52000, international: 38000, cargo: 9800 },
    { month: 'Apr', domestic: 49000, international: 36000, cargo: 9400 },
    { month: 'May', domestic: 55000, international: 42000, cargo: 10500 },
    { month: 'Jun', domestic: 58000, international: 45000, cargo: 11200 }
  ];

  const flightDelayData = [
    { cause: 'Technical Issues', percentage: 28, color: '#ef4444' },
    { cause: 'Weather', percentage: 22, color: '#f59e0b' },
    { cause: 'Late Arrivals', percentage: 18, color: '#8b5cf6' },
    { cause: 'Ground Handling', percentage: 15, color: '#06b6d4' },
    { cause: 'Air Traffic Control', percentage: 10, color: '#10b981' },
    { cause: 'Other', percentage: 7, color: '#6b7280' }
  ];

  const passengerFlowData = [
    { hour: '06:00', checkin: 120, security: 95, immigration: 85 },
    { hour: '08:00', checkin: 280, security: 250, immigration: 220 },
    { hour: '10:00', checkin: 350, security: 320, immigration: 290 },
    { hour: '12:00', checkin: 420, security: 380, immigration: 350 },
    { hour: '14:00', checkin: 380, security: 340, immigration: 310 },
    { hour: '16:00', checkin: 450, security: 410, immigration: 380 },
    { hour: '18:00', checkin: 520, security: 480, immigration: 440 },
    { hour: '20:00', checkin: 380, security: 350, immigration: 320 }
  ];

  const airportCapacityData = [
    { airport: 'King Khalid Intl', capacity: 35000, current: 28500, utilization: 81 },
    { airport: 'King Abdulaziz Intl', capacity: 30000, current: 26200, utilization: 87 },
    { airport: 'King Fahd Intl', capacity: 20000, current: 15800, utilization: 79 },
    { airport: 'Prince Mohammed Bin Abdulaziz', capacity: 15000, current: 12300, utilization: 82 },
    { airport: 'Abha Regional', capacity: 8000, current: 6100, utilization: 76 }
  ];

  const maintenanceAlerts = [
    { equipment: 'Baggage Carousel #3 - Terminal 1', priority: 'High', eta: '2 days', type: 'Predictive' },
    { equipment: 'Jet Bridge A15 - Terminal 2', priority: 'Medium', eta: '5 days', type: 'Predictive' },
    { equipment: 'Runway Lights - RWY 16L/34R', priority: 'High', eta: '1 day', type: 'Predictive' },
    { equipment: 'Air Conditioning - Gate B12', priority: 'Low', eta: '7 days', type: 'Scheduled' }
  ];

  const kpiCards = [
    {
      title: 'On-Time Performance',
      value: '84.2%',
      change: '+2.1%',
      trend: 'up',
      target: '85%',
      description: 'Average flight punctuality across all airports'
    },
    {
      title: 'Passenger Throughput',
      value: '2.8M',
      change: '+8.5%',
      trend: 'up',
      target: '3.2M',
      description: 'Monthly passenger volume'
    },
    {
      title: 'Airport Capacity Utilization',
      value: '83%',
      change: '+3.2%',
      trend: 'up',
      target: '85%',
      description: 'Average capacity utilization'
    },
    {
      title: 'Air Cargo Volume',
      value: '58K tons',
      change: '+6.8%',
      trend: 'up',
      target: '65K tons',
      description: 'Monthly cargo tonnage'
    }
  ];

  const useCases = {
    descriptive: [
      {
        title: 'National Air Traffic Dashboard',
        description: 'Comprehensive view of domestic/international flights, airport capacity, and cargo',
        status: 'active',
        metrics: ['Flight Numbers', 'Airport Capacity', 'Passenger Volume', 'Cargo Tonnage']
      }
    ],
    diagnostic: [
      {
        title: 'Flight Delay Root Cause Analysis',
        description: 'Automated analysis of delay causes from airlines, ATC, and airports',
        status: 'active',
        metrics: ['Delay Categories', 'Root Causes', 'Impact Analysis', 'Trend Identification']
      }
    ],
    predictive: [
      {
        title: 'Passenger Flow Forecasting',
        description: 'Predicting passenger volumes at different airport checkpoints',
        status: 'active',
        metrics: ['Hourly Predictions', 'Queue Length', 'Wait Times', 'Resource Planning']
      },
      {
        title: 'Airspace Congestion Prediction',
        description: 'Forecasting potential congestion in national airspace',
        status: 'development',
        metrics: ['Traffic Density', 'Congestion Points', 'Route Optimization', 'Delay Prevention']
      }
    ],
    prescriptive: [
      {
        title: 'Predictive Maintenance for Airport Infrastructure',
        description: 'AI-powered maintenance scheduling to prevent equipment downtime',
        status: 'active',
        metrics: ['Equipment Health', 'Failure Prediction', 'Maintenance Scheduling', 'Downtime Prevention']
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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
              <Plane className="h-6 w-6 text-saudi-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-saudi-green-950">
                General Authority of Civil Aviation (GACA)
              </h1>
              <p className="text-gray-600 mt-1">
                Air traffic, airport operations, safety, and passenger experience
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last Updated</p>
            <p className="text-sm font-medium">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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
        {/* Air Traffic Trends */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Plane className="h-5 w-5 text-saudi-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Air Traffic Trends
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={airTrafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="domestic" stroke="#005430" strokeWidth={2} name="Domestic" />
              <Line type="monotone" dataKey="international" stroke="#8BAA99" strokeWidth={2} name="International" />
              <Line type="monotone" dataKey="cargo" stroke="#3e9b87" strokeWidth={2} name="Cargo" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Flight Delay Causes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="h-5 w-5 text-saudi-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Flight Delay Root Causes
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={flightDelayData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="percentage"
                label={({ cause, percentage }) => `${cause}: ${percentage}%`}
              >
                {flightDelayData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Passenger Flow & Airport Capacity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Passenger Flow */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="h-5 w-5 text-saudi-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Passenger Flow Prediction
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={passengerFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="checkin" stackId="1" stroke="#005430" fill="#005430" name="Check-in" />
              <Area type="monotone" dataKey="security" stackId="1" stroke="#8BAA99" fill="#8BAA99" name="Security" />
              <Area type="monotone" dataKey="immigration" stackId="1" stroke="#3e9b87" fill="#3e9b87" name="Immigration" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Maintenance Alerts */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-saudi-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Predictive Maintenance Alerts
            </h3>
          </div>
          <div className="space-y-3">
            {maintenanceAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.equipment}</p>
                  <p className="text-xs text-gray-600">ETA: {alert.eta}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(alert.priority)}`}>
                    {alert.priority}
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    alert.type === 'Predictive' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {alert.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          GACA Analytics Use Cases
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">Descriptive</h4>
            <p className="text-sm text-gray-600">National air traffic dashboard</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">Diagnostic</h4>
            <p className="text-sm text-gray-600">Flight delay root cause analysis</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">Predictive</h4>
            <p className="text-sm text-gray-600">Passenger flow & airspace congestion</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Brain className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">Prescriptive</h4>
            <p className="text-sm text-gray-600">Predictive maintenance for infrastructure</p>
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
                {/* Air Traffic Trends */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Plane className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Air Traffic Trends
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={airTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="domestic" stroke="#005430" strokeWidth={2} name="Domestic Flights" />
                      <Line type="monotone" dataKey="international" stroke="#8BAA99" strokeWidth={2} name="International Flights" />
                      <Line type="monotone" dataKey="cargo" stroke="#3e9b87" strokeWidth={2} name="Cargo Flights" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Flight Delay Causes */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertCircle className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Flight Delay Root Causes
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={flightDelayData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="percentage"
                        label={({ cause, percentage }) => `${cause}: ${percentage}%`}
                      >
                        {flightDelayData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Passenger Flow Forecasting */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-5 w-5 text-saudi-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Passenger Flow Forecasting
                  </h3>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={passengerFlowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="checkin" stackId="1" stroke="#005430" fill="#005430" name="Check-in" />
                    <Area type="monotone" dataKey="security" stackId="1" stroke="#8BAA99" fill="#8BAA99" name="Security" />
                    <Area type="monotone" dataKey="immigration" stackId="1" stroke="#3e9b87" fill="#3e9b87" name="Immigration" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Airport Capacity Utilization */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Airport Capacity Utilization
                </h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={airportCapacityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="airport" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="capacity" fill="#e5e7eb" name="Total Capacity" />
                    <Bar dataKey="current" fill="#005430" name="Current Usage" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Predictive Maintenance Alerts */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-5 w-5 text-saudi-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Predictive Maintenance Alerts
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Equipment
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Priority
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Predicted Failure
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {maintenanceAlerts.map((alert, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {alert.equipment}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(alert.priority)}`}>
                              {alert.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {alert.eta}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              alert.type === 'Predictive' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {alert.type}
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

export default GACADashboard; 