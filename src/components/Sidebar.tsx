import React from 'react';
import { X, BarChart3, TrendingUp, Brain, Target, Home } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEntity: string;
  onEntityChange: (entity: string) => void;
}

const entities = [
  { id: 'mtls', name: 'Ministry of Transport (MTLS)', icon: '🏛️', active: true },
  { id: 'tga', name: 'Transport General Authority (TGA)', icon: '🚛', active: true },
  { id: 'gaca', name: 'Civil Aviation (GACA)', icon: '✈️', active: true },
  { id: 'mawani', name: 'MAWANI', icon: '🚢', active: true },
  { id: 'sar', name: 'Saudi Railway (SAR)', icon: '🚄', active: true },
  { id: 'rga', name: 'Road General Authority (RGA)', icon: '🛣️', active: true },
  { id: 'spl', name: 'Saudi Post (SPL)', icon: '📦', active: true }
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
  // Function to handle entity selection and auto-close on mobile
  const handleEntitySelect = (entityId: string) => {
    onEntityChange(entityId);
    // Auto-close sidebar on mobile/tablet screens (below lg breakpoint)
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

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
        fixed inset-y-0 left-0 z-50 w-full sm:w-80 md:w-72 lg:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-saudi-green-950">Navigation</h2>
          <button
            onClick={onClose}
            className="p-3 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden touch-target"
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Home */}
          <div className="p-3 sm:p-4">
            <button
              onClick={() => handleEntitySelect('home')}
              className={`
                w-full flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors mb-4 touch-target
                ${selectedEntity === 'home'
                  ? 'bg-saudi-green-100 text-saudi-green-900 border-r-2 border-saudi-green-600'
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
              style={{ minHeight: '44px' }}
            >
              <Home className="mr-3 h-5 w-5 text-saudi-green-600 flex-shrink-0" />
              <span className="truncate text-left">Home Dashboard</span>
            </button>
          </div>

          {/* Entities */}
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
              Entities
            </h3>
            <nav className="space-y-1">
              {entities.map((entity) => (
                <button
                  key={entity.id}
                  onClick={() => handleEntitySelect(entity.id)}
                  disabled={!entity.active}
                  className={`
                    w-full flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors touch-target
                    ${selectedEntity === entity.id
                      ? 'bg-saudi-green-100 text-saudi-green-900 border-r-2 border-saudi-green-600'
                      : entity.active
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-gray-400 cursor-not-allowed'
                    }
                  `}
                  style={{ minHeight: '44px' }}
                >
                  <span className="mr-3 text-lg flex-shrink-0">{entity.icon}</span>
                  <span className="truncate text-left flex-1">{entity.name}</span>
                  {!entity.active && (
                    <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded flex-shrink-0">
                      Coming Soon
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Analytics Categories */}
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
              Analytics Maturity
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => handleEntitySelect('analytics-maturity')}
                className={`
                  w-full flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors touch-target
                  ${selectedEntity === 'analytics-maturity'
                    ? 'bg-saudi-green-100 text-saudi-green-900 border-r-2 border-saudi-green-600'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                style={{ minHeight: '44px' }}
              >
                <Brain className="mr-3 h-5 w-5 text-saudi-green-600 flex-shrink-0" />
                <span className="truncate text-left">Analytics Framework</span>
              </button>
              
              {analyticsCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleEntitySelect(category.id)}
                    className={`
                      w-full flex items-center px-3 py-2.5 rounded-md transition-colors text-left touch-target
                      ${selectedEntity === category.id
                        ? 'bg-saudi-green-100 text-saudi-green-900 border-r-2 border-saudi-green-600'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                    style={{ minHeight: '44px' }}
                  >
                    <IconComponent className={`mr-3 h-4 w-4 flex-shrink-0 ${category.color}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">{category.name}</div>
                      <div className="text-xs text-gray-500 truncate">{category.description}</div>
                    </div>
                  </button>
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