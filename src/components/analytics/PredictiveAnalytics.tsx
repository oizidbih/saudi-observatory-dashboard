import React from 'react';
import { Target, TrendingUp, AlertCircle, Brain, CheckCircle, ArrowRight, Users, Zap } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar, ComposedChart } from 'recharts';

const PredictiveAnalytics: React.FC = () => {
  // Sample data for visualizations
  const demandForecastData = [
    { month: 'Jul', actual: 2850, predicted: 2890, confidence: 0.92 },
    { month: 'Aug', actual: 3120, predicted: 3180, confidence: 0.89 },
    { month: 'Sep', actual: 2980, predicted: 2940, confidence: 0.91 },
    { month: 'Oct', actual: null, predicted: 3250, confidence: 0.87 },
    { month: 'Nov', actual: null, predicted: 3420, confidence: 0.85 },
    { month: 'Dec', actual: null, predicted: 3680, confidence: 0.83 }
  ];

  const riskAssessmentData = [
    { entity: 'MTLS', riskScore: 0.25, category: 'Low', factors: ['Weather', 'Policy Changes'] },
    { entity: 'TGA', riskScore: 0.45, category: 'Medium', factors: ['Traffic', 'Infrastructure'] },
    { entity: 'GACA', riskScore: 0.35, category: 'Medium', factors: ['Weather', 'Capacity'] },
    { entity: 'MAWANI', riskScore: 0.65, category: 'High', factors: ['Global Trade', 'Equipment'] },
    { entity: 'SAR', riskScore: 0.30, category: 'Low', factors: ['Maintenance', 'Demand'] },
    { entity: 'RGA', riskScore: 0.55, category: 'High', factors: ['Traffic Growth', 'Maintenance'] },
    { entity: 'SPL', riskScore: 0.40, category: 'Medium', factors: ['E-commerce', 'Capacity'] }
  ];

  const scenarioAnalysisData = [
    { scenario: 'Optimistic', growth: 15, investment: 8.5, satisfaction: 4.7 },
    { scenario: 'Baseline', growth: 8, investment: 5.2, satisfaction: 4.3 },
    { scenario: 'Conservative', growth: 3, investment: 2.1, satisfaction: 4.0 },
    { scenario: 'Pessimistic', growth: -2, investment: -1.5, satisfaction: 3.6 }
  ];

  const maintenancePredictionData = [
    { asset: 'Airport Terminal A', probability: 0.85, timeframe: '2 months', cost: 2.5 },
    { asset: 'Port Crane #12', probability: 0.72, timeframe: '3 months', cost: 1.8 },
    { asset: 'Railway Bridge KM45', probability: 0.68, timeframe: '4 months', cost: 4.2 },
    { asset: 'Highway Section A1', probability: 0.91, timeframe: '1 month', cost: 3.1 },
    { asset: 'Sorting Facility B', probability: 0.56, timeframe: '6 months', cost: 1.2 }
  ];

  const capabilities = [
    {
      title: 'Demand Forecasting',
      description: 'Predict future demand patterns using historical data and external factors',
      icon: TrendingUp,
      techniques: ['Time Series Analysis', 'Machine Learning', 'Seasonal Decomposition', 'External Factor Integration'],
      applications: ['Passenger Demand', 'Freight Volume', 'Capacity Planning', 'Resource Allocation'],
      accuracy: '85-92%',
      horizon: '1-12 months'
    },
    {
      title: 'Risk Assessment',
      description: 'Identify and quantify potential risks across transport operations',
      icon: AlertCircle,
      techniques: ['Risk Modeling', 'Monte Carlo Simulation', 'Probability Analysis', 'Impact Assessment'],
      applications: ['Operational Risks', 'Safety Risks', 'Financial Risks', 'Strategic Risks'],
      accuracy: '78-85%',
      horizon: '1-6 months'
    },
    {
      title: 'Predictive Maintenance',
      description: 'Anticipate equipment failures and optimize maintenance schedules',
      icon: Target,
      techniques: ['Condition Monitoring', 'Failure Analysis', 'IoT Sensors', 'Machine Learning'],
      applications: ['Asset Health', 'Failure Prediction', 'Maintenance Optimization', 'Cost Reduction'],
      accuracy: '80-95%',
      horizon: '1-12 months'
    },
    {
      title: 'Scenario Planning',
      description: 'Model different future scenarios and their potential impacts',
      icon: Brain,
      techniques: ['Scenario Modeling', 'Sensitivity Analysis', 'What-if Analysis', 'Simulation'],
      applications: ['Strategic Planning', 'Investment Decisions', 'Policy Impact', 'Contingency Planning'],
      accuracy: '70-85%',
      horizon: '6-24 months'
    }
  ];

  const modelTypes = [
    {
      type: 'Time Series Forecasting',
      description: 'Predict future values based on historical time-series data patterns',
      algorithms: ['ARIMA', 'Prophet', 'LSTM', 'Seasonal Decomposition'],
      useCases: ['Traffic Volume', 'Passenger Numbers', 'Cargo Throughput', 'Revenue Forecasting'],
      accuracy: '85-92%'
    },
    {
      type: 'Classification Models',
      description: 'Predict categorical outcomes and risk classifications',
      algorithms: ['Random Forest', 'SVM', 'Neural Networks', 'Gradient Boosting'],
      useCases: ['Risk Categories', 'Maintenance Needs', 'Service Quality', 'Customer Segments'],
      accuracy: '78-88%'
    },
    {
      type: 'Regression Models',
      description: 'Predict continuous numerical values and relationships',
      algorithms: ['Linear Regression', 'Polynomial Regression', 'Ridge/Lasso', 'Random Forest'],
      useCases: ['Cost Prediction', 'Performance Metrics', 'Resource Requirements', 'Timeline Estimation'],
      accuracy: '80-90%'
    },
    {
      type: 'Anomaly Detection',
      description: 'Identify unusual patterns that may indicate future problems',
      algorithms: ['Isolation Forest', 'One-Class SVM', 'Autoencoders', 'Statistical Methods'],
      useCases: ['Equipment Anomalies', 'Traffic Patterns', 'Security Threats', 'Quality Issues'],
      accuracy: '75-85%'
    }
  ];

  const benefits = [
    'Proactive decision making',
    'Reduced operational costs',
    'Improved resource planning',
    'Enhanced service reliability',
    'Risk mitigation strategies',
    'Optimized maintenance schedules',
    'Better capacity management',
    'Strategic competitive advantage'
  ];

  const getRiskColor = (score: number) => {
    if (score >= 0.6) return 'text-red-600 bg-red-100';
    if (score >= 0.4) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 0.8) return 'text-red-600 bg-red-100';
    if (probability >= 0.6) return 'text-orange-600 bg-orange-100';
    return 'text-yellow-600 bg-yellow-100';
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Predictive Analytics</h1>
          </div>
          <h2 className="text-xl mb-4 text-orange-100">What will happen?</h2>
          <p className="text-lg text-orange-100 mb-6">
            Advanced machine learning and statistical modeling to forecast future outcomes, assess risks, 
            and enable proactive decision-making across the Saudi transport and logistics ecosystem. 
            Turn data into foresight for strategic advantage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Forecasting</h3>
              <p className="text-sm text-orange-100">Demand & capacity</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Risk Models</h3>
              <p className="text-sm text-orange-100">Proactive assessment</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Maintenance</h3>
              <p className="text-sm text-orange-100">Predictive scheduling</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Scenarios</h3>
              <p className="text-sm text-orange-100">Future planning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Predictive Capabilities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Techniques:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {capability.techniques.map((technique, techniqueIndex) => (
                          <div key={techniqueIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{technique}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {capability.applications.map((app, appIndex) => (
                          <span key={appIndex} className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-600 font-medium">Accuracy: {capability.accuracy}</span>
                      <span className="text-gray-600">Horizon: {capability.horizon}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Prediction Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Demand Forecasting */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Demand Forecasting Example</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={demandForecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="actual" stroke="#ea580c" strokeWidth={2} name="Actual" />
              <Line type="monotone" dataKey="predicted" stroke="#fb923c" strokeWidth={2} strokeDasharray="5 5" name="Predicted" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Assessment */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment by Entity</h3>
          <div className="space-y-3">
            {riskAssessmentData.map((risk, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{risk.entity}</h4>
                  <span className={`px-2 py-1 text-sm font-medium rounded-full ${getRiskColor(risk.riskScore)}`}>
                    {(risk.riskScore * 100).toFixed(0)}% Risk
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {risk.factors.map((factor, factorIndex) => (
                    <span key={factorIndex} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scenario Analysis & Maintenance Prediction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scenario Analysis */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Scenario Planning Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scenarioAnalysisData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="scenario" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="growth" fill="#ea580c" name="Growth %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Predictive Maintenance */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Predictive Maintenance Alerts</h3>
          <div className="space-y-3">
            {maintenancePredictionData.map((maintenance, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{maintenance.asset}</h4>
                  <span className={`px-2 py-1 text-sm font-medium rounded-full ${getProbabilityColor(maintenance.probability)}`}>
                    {(maintenance.probability * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>In {maintenance.timeframe}</span>
                  <span>Cost: ${maintenance.cost}M</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Types */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Machine Learning Models</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modelTypes.map((model, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{model.type}</h3>
              <p className="text-gray-600 mb-4">{model.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Algorithms:</h4>
                <div className="flex flex-wrap gap-2">
                  {model.algorithms.map((algorithm, algorithmIndex) => (
                    <span key={algorithmIndex} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      {algorithm}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {model.useCases.map((useCase, useCaseIndex) => (
                    <span key={useCaseIndex} className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-600">Accuracy: {model.accuracy}</span>
                <Zap className="h-4 w-4 text-orange-500" />
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
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for AI-Powered Optimization?</h3>
            <p className="text-gray-600">
              With predictive insights established, advance to prescriptive analytics for automated decision-making and optimization.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-orange-600 font-medium">
            <span>Explore Prescriptive & AI</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics; 