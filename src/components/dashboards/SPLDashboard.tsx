import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Brain, ArrowUpRight, ArrowDownRight, Minus, Package, Truck, Clock, MapPin, Star, TrendingDown } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ComposedChart } from 'recharts';

const SPLDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Mock data for SPL demonstrations
  const deliveryPerformanceData = [
    { month: 'Jan', onTime: 82.5, sameDay: 45, nextDay: 78, international: 89, volume: 2.8 },
    { month: 'Feb', onTime: 84.2, sameDay: 48, nextDay: 81, international: 91, volume: 3.1 },
    { month: 'Mar', onTime: 86.8, sameDay: 52, nextDay: 84, international: 93, volume: 3.5 },
    { month: 'Apr', onTime: 88.1, sameDay: 55, nextDay: 87, international: 94, volume: 3.8 },
    { month: 'May', onTime: 89.7, sameDay: 58, nextDay: 89, international: 95, volume: 4.2 },
    { month: 'Jun', onTime: 91.2, sameDay: 61, nextDay: 91, international: 96, volume: 4.6 }
  ];

  const lastMileDeliveryData = [
    { zone: 'Riyadh Central', attempts: 1.2, success: 94, cost: 12.5, time: 35 },
    { zone: 'Riyadh Suburbs', attempts: 1.4, success: 89, cost: 18.2, time: 52 },
    { zone: 'Jeddah Central', attempts: 1.3, success: 92, cost: 13.8, time: 38 },
    { zone: 'Jeddah Suburbs', attempts: 1.5, success: 87, cost: 19.5, time: 55 },
    { zone: 'Dammam Central', attempts: 1.1, success: 95, cost: 11.9, time: 32 },
    { zone: 'Rural Areas', attempts: 2.1, success: 76, cost: 28.4, time: 85 }
  ];

  const eCommerceData = [
    { day: 'Mon', orders: 12500, fulfilled: 11800, returned: 350, satisfaction: 4.2 },
    { day: 'Tue', orders: 14200, fulfilled: 13500, returned: 420, satisfaction: 4.3 },
    { day: 'Wed', orders: 16800, fulfilled: 15900, returned: 480, satisfaction: 4.1 },
    { day: 'Thu', orders: 18500, fulfilled: 17600, returned: 520, satisfaction: 4.4 },
    { day: 'Fri', orders: 22000, fulfilled: 20900, returned: 650, satisfaction: 4.2 },
    { day: 'Sat', orders: 19500, fulfilled: 18400, returned: 580, satisfaction: 4.5 },
    { day: 'Sun', orders: 15200, fulfilled: 14500, returned: 380, satisfaction: 4.3 }
  ];

  const networkPerformanceData = [
    { facility: 'Riyadh Main Hub', capacity: 50000, utilization: 78, throughput: 39000, efficiency: 92 },
    { facility: 'Jeddah Distribution', capacity: 35000, utilization: 82, throughput: 28700, efficiency: 89 },
    { facility: 'Dammam Sorting', capacity: 25000, utilization: 74, throughput: 18500, efficiency: 94 },
    { facility: 'Makkah Center', capacity: 15000, utilization: 68, throughput: 10200, efficiency: 87 },
    { facility: 'Madinah Center', capacity: 12000, utilization: 71, throughput: 8520, efficiency: 91 }
  ];

  const customerSatisfactionData = [
    { hour: '08:00', calls: 145, resolved: 132, satisfaction: 4.1, avgTime: 3.2 },
    { hour: '10:00', calls: 289, resolved: 267, satisfaction: 4.3, avgTime: 2.8 },
    { hour: '12:00', calls: 356, resolved: 325, satisfaction: 4.0, avgTime: 3.5 },
    { hour: '14:00', calls: 298, resolved: 278, satisfaction: 4.2, avgTime: 3.1 },
    { hour: '16:00', calls: 412, resolved: 385, satisfaction: 4.4, avgTime: 2.9 },
    { hour: '18:00', calls: 378, resolved: 352, satisfaction: 4.1, avgTime: 3.3 },
    { hour: '20:00', calls: 234, resolved: 221, satisfaction: 4.5, avgTime: 2.6 }
  ];

  const serviceTypeDistribution = [
    { type: 'Express Delivery', volume: 35, color: '#005430' },
    { type: 'Standard Delivery', volume: 42, color: '#8BAA99' },
    { type: 'International', volume: 15, color: '#3e9b87' },
    { type: 'E-commerce', volume: 8, color: '#58b5a3' }
  ];

  const operationalMetrics = [
    { metric: 'Processing Centers', total: 45, operational: 43, maintenance: 2, efficiency: 96 },
    { metric: 'Delivery Vehicles', total: 2850, operational: 2735, maintenance: 85, efficiency: 96 },
    { metric: 'Sorting Machines', total: 120, operational: 115, maintenance: 4, efficiency: 96 },
    { metric: 'Tracking Systems', total: 850, operational: 820, maintenance: 25, efficiency: 96 },
    { metric: 'Customer Centers', total: 320, operational: 312, maintenance: 6, efficiency: 98 }
  ];

  const kpiCards = [
    {
      title: 'On-Time Delivery Rate',
      value: '91.2%',
      change: '+1.5%',
      trend: 'up',
      target: '95.0%',
      description: 'Packages delivered on scheduled time'
    },
    {
      title: 'Processing Volume',
      value: '4.6M',
      change: '+0.4M',
      trend: 'up',
      target: '5.0M',
      description: 'Monthly packages processed'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.3/5',
      change: '+0.1',
      trend: 'up',
      target: '4.5/5',
      description: 'Average customer rating'
    },
    {
      title: 'Last-Mile Efficiency',
      value: '89.2%',
      change: '+2.1%',
      trend: 'up',
      target: '92.0%',
      description: 'First-attempt delivery success rate'
    }
  ];

  const useCases = {
    descriptive: [
      {
        title: 'Postal Operations Performance Dashboard',
        description: 'Real-time monitoring of delivery performance, processing volumes, and network utilization',
        status: 'active',
        metrics: ['Delivery Performance', 'Processing Volume', 'Network Utilization', 'Service Quality']
      }
    ],
    diagnostic: [
      {
        title: 'Delivery Delay Root Cause Analysis',
        description: 'Comprehensive analysis of delivery delays by route, weather, traffic, and operational factors',
        status: 'active',
        metrics: ['Delay Patterns', 'Route Analysis', 'Weather Impact', 'Operational Bottlenecks']
      }
    ],
    predictive: [
      {
        title: 'Demand Forecasting & Capacity Planning',
        description: 'AI-powered prediction of package volumes and optimal resource allocation',
        status: 'active',
        metrics: ['Volume Prediction', 'Seasonal Patterns', 'E-commerce Growth', 'Capacity Planning']
      },
      {
        title: 'Last-Mile Delivery Optimization',
        description: 'Predictive routing and delivery time estimation for improved customer experience',
        status: 'development',
        metrics: ['Route Optimization', 'Delivery Windows', 'Traffic Prediction', 'Customer Preferences']
      }
    ],
    prescriptive: [
      {
        title: 'Smart Logistics Optimization System',
        description: 'AI-optimized sorting, routing, and delivery scheduling for maximum efficiency',
        status: 'active',
        metrics: ['Sorting Optimization', 'Dynamic Routing', 'Resource Allocation', 'Cost Minimization']
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

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 95) return 'text-green-600 bg-green-100';
    if (efficiency >= 90) return 'text-blue-600 bg-blue-100';
    if (efficiency >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-saudi-green-100 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-saudi-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-saudi-green-950">
                SPL (Saudi Post)
              </h1>
              <p className="text-gray-600 mt-1">
                Parcel processing, logistics efficiency, and last-mile delivery optimization
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
                {/* Delivery Performance Trends */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Delivery Performance Trends
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={deliveryPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line yAxisId="left" type="monotone" dataKey="onTime" stroke="#005430" strokeWidth={2} name="On-Time %" />
                      <Bar yAxisId="right" dataKey="volume" fill="#8BAA99" name="Volume (M)" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                {/* Service Type Distribution */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Truck className="h-5 w-5 text-saudi-green-600" />
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

              {/* E-commerce & Customer Satisfaction */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* E-commerce Fulfillment */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Package className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      E-commerce Fulfillment Analytics
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={eCommerceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="orders" stackId="1" stroke="#005430" fill="#005430" name="Orders" />
                      <Area type="monotone" dataKey="fulfilled" stackId="2" stroke="#8BAA99" fill="#8BAA99" name="Fulfilled" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Customer Satisfaction */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-5 w-5 text-saudi-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Customer Satisfaction Trends
                    </h3>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={customerSatisfactionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="satisfaction" stroke="#005430" strokeWidth={2} name="Satisfaction Score" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Last-Mile Delivery Performance */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="h-5 w-5 text-saudi-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Last-Mile Delivery Performance by Zone
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Zone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Avg Attempts
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Success Rate %
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cost per Delivery (SAR)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Avg Time (min)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {lastMileDeliveryData.map((zone, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {zone.zone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {zone.attempts}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <span className={`font-medium ${zone.success >= 90 ? 'text-green-600' : zone.success >= 85 ? 'text-blue-600' : 'text-yellow-600'}`}>
                              {zone.success}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {zone.cost}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {zone.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Network Performance & Operational Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Network Performance */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Network Performance Monitoring
                  </h3>
                  <div className="space-y-4">
                    {networkPerformanceData.map((facility, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium text-gray-900">{facility.facility}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getEfficiencyColor(facility.efficiency)}`}>
                            {facility.efficiency}%
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Capacity: {facility.capacity.toLocaleString()}</span>
                            <span>Utilization: {facility.utilization}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Throughput: {facility.throughput.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operational Metrics */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Operational Assets Status
                  </h3>
                  <div className="space-y-4">
                    {operationalMetrics.map((metric, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium text-gray-900">{metric.metric}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getEfficiencyColor(metric.efficiency)}`}>
                            {metric.efficiency}%
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Total: {metric.total}</span>
                            <span className="text-green-600">Operational: {metric.operational}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-yellow-600">Maintenance: {metric.maintenance}</span>
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

export default SPLDashboard; 