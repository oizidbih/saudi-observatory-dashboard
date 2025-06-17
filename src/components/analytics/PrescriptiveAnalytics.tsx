import React from 'react';
import { Brain, Zap, Settings, Bot, CheckCircle, ArrowRight, Users, Clock, Target } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const PrescriptiveAnalytics: React.FC = () => {
  // Sample data for visualizations
  const optimizationResults = [
    { metric: 'Route Efficiency', before: 72, after: 89, improvement: 17 },
    { metric: 'Resource Utilization', before: 68, after: 85, improvement: 17 },
    { metric: 'Cost Reduction', before: 100, after: 78, improvement: 22 },
    { metric: 'Service Quality', before: 81, after: 93, improvement: 12 },
    { metric: 'Energy Efficiency', before: 65, after: 84, improvement: 19 },
    { metric: 'Customer Satisfaction', before: 4.2, after: 4.7, improvement: 0.5 }
  ];

  const aiRecommendations = [
    {
      entity: 'MTLS',
      recommendation: 'Implement cross-modal coordination system',
      impact: 'High',
      confidence: 0.92,
      savings: '15-20%',
      timeframe: '3-6 months'
    },
    {
      entity: 'TGA',
      recommendation: 'Deploy dynamic route optimization',
      impact: 'High',
      confidence: 0.88,
      savings: '12-18%',
      timeframe: '2-4 months'
    },
    {
      entity: 'GACA',
      recommendation: 'AI-powered air traffic management',
      impact: 'Very High',
      confidence: 0.85,
      savings: '20-25%',
      timeframe: '6-12 months'
    },
    {
      entity: 'MAWANI',
      recommendation: 'Smart berth allocation system',
      impact: 'High',
      confidence: 0.90,
      savings: '18-22%',
      timeframe: '4-8 months'
    },
    {
      entity: 'SAR',
      recommendation: 'Predictive maintenance scheduling',
      impact: 'Medium',
      confidence: 0.87,
      savings: '10-15%',
      timeframe: '2-3 months'
    },
    {
      entity: 'RGA',
      recommendation: 'Intelligent traffic signal optimization',
      impact: 'High',
      confidence: 0.91,
      savings: '16-20%',
      timeframe: '3-5 months'
    },
    {
      entity: 'SPL',
      recommendation: 'Last-mile delivery optimization',
      impact: 'Medium',
      confidence: 0.86,
      savings: '12-16%',
      timeframe: '2-4 months'
    }
  ];

  const automationLevels = [
    { level: 'Manual', current: 35, target: 15, description: 'Human-driven processes' },
    { level: 'Assisted', current: 40, target: 25, description: 'AI-supported decisions' },
    { level: 'Automated', current: 20, target: 45, description: 'Fully automated processes' },
    { level: 'Autonomous', current: 5, target: 15, description: 'Self-learning systems' }
  ];

  const performanceRadarData = [
    { metric: 'Efficiency', manual: 65, aiOptimized: 92 },
    { metric: 'Accuracy', manual: 78, aiOptimized: 95 },
    { metric: 'Speed', manual: 70, aiOptimized: 88 },
    { metric: 'Cost', manual: 60, aiOptimized: 85 },
    { metric: 'Quality', manual: 75, aiOptimized: 91 },
    { metric: 'Reliability', manual: 82, aiOptimized: 94 }
  ];

  const capabilities = [
    {
      title: 'Route Optimization',
      description: 'AI-powered algorithms to find optimal routes and resource allocation',
      icon: Target,
      techniques: ['Genetic Algorithms', 'Simulated Annealing', 'Machine Learning', 'Real-time Optimization'],
      applications: ['Vehicle Routing', 'Flight Paths', 'Shipping Routes', 'Public Transport'],
      impact: 'Up to 25% efficiency gain',
      automation: 'Fully Automated'
    },
    {
      title: 'Resource Allocation',
      description: 'Intelligent distribution of resources based on demand and constraints',
      icon: Settings,
      techniques: ['Linear Programming', 'Constraint Optimization', 'Multi-objective Optimization', 'Dynamic Programming'],
      applications: ['Staff Scheduling', 'Equipment Allocation', 'Capacity Management', 'Budget Distribution'],
      impact: 'Up to 30% cost reduction',
      automation: 'AI-Assisted'
    },
    {
      title: 'Automated Decision Making',
      description: 'Real-time decisions based on predefined rules and AI recommendations',
      icon: Bot,
      techniques: ['Rule Engines', 'Decision Trees', 'Reinforcement Learning', 'Expert Systems'],
      applications: ['Traffic Management', 'Maintenance Scheduling', 'Pricing Decisions', 'Service Adjustments'],
      impact: 'Up to 50% faster response',
      automation: 'Fully Automated'
    },
    {
      title: 'Continuous Optimization',
      description: 'Self-improving systems that learn and adapt over time',
      icon: Zap,
      techniques: ['Online Learning', 'Feedback Loops', 'Adaptive Algorithms', 'Self-tuning Systems'],
      applications: ['Performance Tuning', 'Process Improvement', 'System Adaptation', 'Quality Enhancement'],
      impact: 'Continuous improvement',
      automation: 'Autonomous'
    }
  ];

  const aiTechnologies = [
    {
      technology: 'Machine Learning',
      description: 'Pattern recognition and predictive modeling for optimal decision-making',
      algorithms: ['Random Forest', 'Neural Networks', 'Support Vector Machines', 'Ensemble Methods'],
      useCases: ['Demand Prediction', 'Quality Assessment', 'Risk Evaluation', 'Performance Optimization'],
      maturity: 'Production Ready'
    },
    {
      technology: 'Deep Learning',
      description: 'Advanced neural networks for complex pattern recognition and optimization',
      algorithms: ['Convolutional Neural Networks', 'Recurrent Neural Networks', 'Transformers', 'GANs'],
      useCases: ['Image Recognition', 'Natural Language Processing', 'Time Series Forecasting', 'Anomaly Detection'],
      maturity: 'Advanced Implementation'
    },
    {
      technology: 'Reinforcement Learning',
      description: 'AI agents that learn optimal actions through trial and reward mechanisms',
      algorithms: ['Q-Learning', 'Policy Gradient', 'Actor-Critic', 'Deep Q-Networks'],
      useCases: ['Traffic Control', 'Resource Allocation', 'Scheduling Optimization', 'Dynamic Pricing'],
      maturity: 'Pilot Programs'
    },
    {
      technology: 'Optimization Algorithms',
      description: 'Mathematical techniques for finding optimal solutions to complex problems',
      algorithms: ['Genetic Algorithms', 'Particle Swarm', 'Ant Colony', 'Simulated Annealing'],
      useCases: ['Route Planning', 'Capacity Optimization', 'Network Design', 'Supply Chain'],
      maturity: 'Production Ready'
    }
  ];

  const benefits = [
    'Automated decision-making',
    'Optimal resource utilization',
    'Real-time optimization',
    'Continuous improvement',
    'Reduced operational costs',
    'Enhanced service quality',
    'Faster response times',
    'Strategic competitive advantage'
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Very High': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-600 bg-green-100';
    if (confidence >= 0.8) return 'text-yellow-600 bg-yellow-100';
    return 'text-orange-600 bg-orange-100';
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Prescriptive & AI Analytics</h1>
          </div>
          <h2 className="text-xl mb-4 text-green-100">What should we do?</h2>
          <p className="text-lg text-green-100 mb-6">
            The pinnacle of analytics maturity - AI-powered systems that not only predict what will happen 
            but automatically determine and execute the best course of action. From route optimization to 
            autonomous decision-making, prescriptive analytics delivers maximum operational excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">AI Optimization</h3>
              <p className="text-sm text-green-100">Automated decisions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Real-time</h3>
              <p className="text-sm text-green-100">Continuous optimization</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Self-learning</h3>
              <p className="text-sm text-green-100">Adaptive systems</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">Autonomous</h3>
              <p className="text-sm text-green-100">Minimal human intervention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Capabilities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">AI Techniques:</h4>
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
                          <span key={appIndex} className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 font-medium">{capability.impact}</span>
                      <span className="text-gray-600">{capability.automation}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Optimization Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Improvements */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Optimization Results</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={optimizationResults}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="before" fill="#9ca3af" name="Before AI" />
              <Bar dataKey="after" fill="#16a34a" name="After AI" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Radar */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Manual vs AI-Optimized Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceRadarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Manual" dataKey="manual" stroke="#9ca3af" fill="#9ca3af" fillOpacity={0.3} />
              <Radar name="AI-Optimized" dataKey="aiOptimized" stroke="#16a34a" fill="#16a34a" fillOpacity={0.3} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Recommendations */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Generated Recommendations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {aiRecommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{rec.entity}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getImpactColor(rec.impact)}`}>
                    {rec.impact} Impact
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getConfidenceColor(rec.confidence)}`}>
                    {(rec.confidence * 100).toFixed(0)}% Confidence
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{rec.recommendation}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Expected Savings:</span>
                  <p className="font-medium text-green-600">{rec.savings}</p>
                </div>
                <div>
                  <span className="text-gray-500">Implementation:</span>
                  <p className="font-medium text-gray-900">{rec.timeframe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automation Levels */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Automation Maturity Progression</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {automationLevels.map((level, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">{level.level}</h4>
              <p className="text-sm text-gray-600 mb-4">{level.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current</span>
                  <span className="font-medium">{level.current}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-400 h-2 rounded-full" 
                    style={{ width: `${level.current}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Target</span>
                  <span className="font-medium text-green-600">{level.target}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${level.target}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Technologies */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Technologies & Algorithms</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {aiTechnologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{tech.technology}</h3>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {tech.maturity}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{tech.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Algorithms:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.algorithms.map((algorithm, algorithmIndex) => (
                    <span key={algorithmIndex} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      {algorithm}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.useCases.map((useCase, useCaseIndex) => (
                    <span key={useCaseIndex} className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
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

      {/* Implementation Roadmap */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Foundation</h3>
            <p className="text-gray-600 mb-4">Establish data infrastructure and basic automation</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Data integration platforms</li>
              <li>• Basic rule engines</li>
              <li>• Initial ML models</li>
              <li>• Pilot implementations</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Scaling</h3>
            <p className="text-gray-600 mb-4">Expand AI capabilities across entities</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Advanced ML deployment</li>
              <li>• Cross-entity optimization</li>
              <li>• Real-time decision systems</li>
              <li>• Performance monitoring</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: Autonomy</h3>
            <p className="text-gray-600 mb-4">Achieve full autonomous optimization</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Self-learning systems</li>
              <li>• Autonomous decision-making</li>
              <li>• Continuous optimization</li>
              <li>• Strategic AI integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision 2030 Alignment */}
      <div className="bg-gradient-to-r from-saudi-green-600 to-saudi-green-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Vision 2030 Alignment</h3>
            <p className="text-saudi-green-100 mb-4">
              Prescriptive analytics directly supports Saudi Arabia's Vision 2030 goals of digital transformation, 
              economic diversification, and becoming a global logistics hub through AI-powered optimization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <h4 className="font-medium mb-1">Digital Transformation</h4>
                <p className="text-xs text-saudi-green-100">AI-first approach to transport</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <h4 className="font-medium mb-1">Economic Efficiency</h4>
                <p className="text-xs text-saudi-green-100">Optimized resource utilization</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <h4 className="font-medium mb-1">Global Competitiveness</h4>
                <p className="text-xs text-saudi-green-100">World-class logistics capability</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-white font-medium">
            <span>Explore Vision 2030</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptiveAnalytics; 