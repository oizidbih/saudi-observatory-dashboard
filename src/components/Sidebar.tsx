import React from 'react';
import { X, BarChart3, TrendingUp, Brain, Target } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEntity: string;
  onEntityChange: (entity: string) => void;
}

const entities = [
  { id: 'mtls', name: 'Ministry of Transport', icon: '🏛️', active: true },
  { id: 'tga', name: 'Transport General Authority', icon: '🚛', active: true },
  { id: 'gaca', name: 'Civil Aviation Authority', icon: '✈️', active: true },
  { id: 'mawani', name: 'MAWANI Ports', icon: '🚢', active: true },
  { id: 'sar', name: 'Saudi Railway', icon: '🚄', active: true },
  { id: 'rga', name: 'Road General Authority', icon: '🛣️', active: true },
  { id: 'spl', name: 'Saudi Post', icon: '📦', active: false }
];

const analyticsCategories = [
  { 
    id: 'descriptive', 
    name: 'Descriptive Analytics', 
    icon: BarChart3, 
    description: 'What happened?',
    color: 'text-blue-600'
  },
  { 
    id: 'diagnostic', 
    name: 'Diagnostic Analytics', 
    icon: TrendingUp, 
    description: 'Why did it happen?',
    color: 'text-yellow-600'
  },
  { 
    id: 'predictive', 
    name: 'Predictive Analytics', 
    icon: Target, 
    description: 'What will happen?',
    color: 'text-orange-600'
  },
  { 
    id: 'prescriptive', 
    name: 'Prescriptive & AI', 
    icon: Brain, 
    description: 'What should we do?',
    color: 'text-saudi-green-600'
  }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, selectedEntity, onEntityChange }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-saudi-green-950">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Entities */}
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
              Entities
            </h3>
            <nav className="space-y-2">
              {entities.map((entity) => (
                <button
                  key={entity.id}
                  onClick={() => onEntityChange(entity.id)}
                  disabled={!entity.active}
                  className={`
                    w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${selectedEntity === entity.id
                      ? 'bg-saudi-green-100 text-saudi-green-900 border-r-2 border-saudi-green-600'
                      : entity.active
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  <span className="mr-3 text-lg">{entity.icon}</span>
                  <span className="truncate">{entity.name}</span>
                  {!entity.active && (
                    <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Analytics Categories */}
          <div className="p-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
              Analytics Maturity
            </h3>
            <div className="space-y-3">
              {analyticsCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                    <IconComponent className={`h-5 w-5 mt-0.5 ${category.color}`} />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{category.name}</h4>
                      <p className="text-xs text-gray-500">{category.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 