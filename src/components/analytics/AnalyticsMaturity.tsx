import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Brain, ArrowRight, CheckCircle, Clock, Users, Zap } from 'lucide-react';
import DescriptiveAnalytics from './DescriptiveAnalytics';
import DiagnosticAnalytics from './DiagnosticAnalytics';
import PredictiveAnalytics from './PredictiveAnalytics';
import PrescriptiveAnalytics from './PrescriptiveAnalytics';

const AnalyticsMaturity: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<string>('overview');

  const analyticsLevels = [
    {
      id: 'descriptive',
      title: 'Descriptive Analytics',
      subtitle: 'What happened?',
      icon: BarChart3,
      color: 'blue',
      description: 'Historical data analysis, dashboards, and KPI monitoring',
      maturity: 'Basic',
      value: 'Understand past performance',
      examples: ['Performance Dashboards', 'KPI Monitoring', 'Historical Reports', 'Data Visualization']
    },
    {
      id: 'diagnostic',
      title: 'Diagnostic Analytics',
      subtitle: 'Why did it happen?',
      icon: TrendingUp,
      color: 'yellow',
      description: 'Root cause analysis and correlation discovery',
      maturity: 'Intermediate',
      value: 'Identify causes and patterns',
      examples: ['Root Cause Analysis', 'Correlation Studies', 'Drill-down Analysis', 'Comparative Analysis']
    },
    {
      id: 'predictive',
      title: 'Predictive Analytics',
      subtitle: 'What will happen?',
      icon: Target,
      color: 'orange',
      description: 'Forecasting and risk assessment using machine learning',
      maturity: 'Advanced',
      value: 'Anticipate future outcomes',
      examples: ['Demand Forecasting', 'Risk Assessment', 'Trend Prediction', 'Scenario Planning']
    },
    {
      id: 'prescriptive',
      title: 'Prescriptive & AI',
      subtitle: 'What should we do?',
      icon: Brain,
      color: 'green',
      description: 'AI-powered optimization and automated decision-making',
      maturity: 'Expert',
      value: 'Optimize decisions and actions',
      examples: ['Route Optimization', 'Resource Allocation', 'Automated Decisions', 'AI Recommendations']
    }
  ];

  const maturityBenefits = [
    {
      level: 'Descriptive',
      benefits: ['Real-time visibility', 'Performance monitoring', 'Historical insights', 'Standardized reporting'],
      impact: 'Foundation for data-driven decisions'
    },
    {
      level: 'Diagnostic',
      benefits: ['Root cause identification', 'Problem solving', 'Pattern recognition', 'Correlation analysis'],
      impact: 'Faster issue resolution and improvement'
    },
    {
      level: 'Predictive',
      benefits: ['Future planning', 'Risk mitigation', 'Proactive management', 'Capacity optimization'],
      impact: 'Strategic advantage and preparedness'
    },
    {
      level: 'Prescriptive',
      benefits: ['Automated optimization', 'Best action recommendations', 'Continuous improvement', 'AI-driven efficiency'],
      impact: 'Maximum operational excellence'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-saudi-green-600 to-saudi-green-700 rounded-lg p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Analytics Maturity Framework</h1>
          <p className="text-lg mb-6 text-saudi-green-100">
            A comprehensive approach to building analytics capabilities across the Saudi transport and logistics ecosystem,
            progressing from basic reporting to AI-powered optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {analyticsLevels.map((level, index) => (
              <div key={level.id} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <level.icon className="h-5 w-5" />
                  <span className="font-medium text-sm">{level.title}</span>
                </div>
                <p className="text-xs text-saudi-green-100">{level.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Levels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {analyticsLevels.map((level, index) => {
          const IconComponent = level.icon;
          return (
            <div key={level.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-${level.color}-100 rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 text-${level.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{level.title}</h3>
                    <p className="text-sm text-gray-600">{level.subtitle}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium bg-${level.color}-100 text-${level.color}-800 rounded-full`}>
                  {level.maturity}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{level.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Key Examples:</h4>
                <div className="flex flex-wrap gap-2">
                  {level.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{level.value}</span>
                </div>
                <button
                  onClick={() => setActiveLevel(level.id)}
                  className="flex items-center space-x-1 text-saudi-green-600 hover:text-saudi-green-700 text-sm font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Maturity Benefits */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Maturity Level Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maturityBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">{benefit.level} Analytics</h3>
              <ul className="space-y-2 mb-4">
                {benefit.benefits.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-600 font-medium">{benefit.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">7</h3>
          <p className="text-gray-600">Transport Entities</p>
          <p className="text-sm text-gray-500 mt-1">Complete analytics coverage</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Clock className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">4</h3>
          <p className="text-gray-600">Maturity Levels</p>
          <p className="text-sm text-gray-500 mt-1">From basic to AI-powered</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
          <div className="w-12 h-12 bg-saudi-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Zap className="h-6 w-6 text-saudi-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">28+</h3>
          <p className="text-gray-600">Use Cases</p>
          <p className="text-sm text-gray-500 mt-1">Across all analytics levels</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-saudi-green-100 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-saudi-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-saudi-green-950">
                Analytics Maturity Framework
              </h1>
              <p className="text-gray-600 mt-1">
                Comprehensive analytics capabilities across the transport and logistics ecosystem
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
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            <button
              onClick={() => setActiveLevel('overview')}
              className={`
                flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap
                ${activeLevel === 'overview'
                  ? 'border-saudi-green-500 text-saudi-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <Brain className="h-5 w-5" />
              <span>Overview</span>
            </button>
            
            {analyticsLevels.map((level) => {
              const IconComponent = level.icon;
              return (
                <button
                  key={level.id}
                  onClick={() => setActiveLevel(level.id)}
                  className={`
                    flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap
                    ${activeLevel === level.id
                      ? 'border-saudi-green-500 text-saudi-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{level.title}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeLevel === 'overview' && renderOverview()}
          {activeLevel === 'descriptive' && <DescriptiveAnalytics />}
          {activeLevel === 'diagnostic' && <DiagnosticAnalytics />}
          {activeLevel === 'predictive' && <PredictiveAnalytics />}
          {activeLevel === 'prescriptive' && <PrescriptiveAnalytics />}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsMaturity; 