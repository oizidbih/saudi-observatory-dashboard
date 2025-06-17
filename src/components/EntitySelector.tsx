import React from 'react';
import { Construction } from 'lucide-react';

interface EntitySelectorProps {
  selectedEntity: string;
  onEntityChange: (entity: string) => void;
}

const entityInfo = {
  tga: {
    name: 'Transport General Authority',
    description: 'Land transport regulation, safety, and efficiency',
    icon: '🚛'
  },
  gaca: {
    name: 'General Authority of Civil Aviation',
    description: 'Air traffic, airport operations, and passenger experience',
    icon: '✈️'
  },
  mawani: {
    name: 'MAWANI (Saudi Ports Authority)',
    description: 'Seaport efficiency, capacity, and operations',
    icon: '🚢'
  },
  sar: {
    name: 'Saudi Arabian Railway Company',
    description: 'Rail network performance, safety, and utilization',
    icon: '🚄'
  },
  rga: {
    name: 'Road General Authority',
    description: 'Road network condition, safety, and traffic flow',
    icon: '🛣️'
  },
  spl: {
    name: 'Saudi Post',
    description: 'Parcel processing, logistics, and last-mile delivery',
    icon: '📦'
  }
};

const EntitySelector: React.FC<EntitySelectorProps> = ({ selectedEntity, onEntityChange }) => {
  const entity = entityInfo[selectedEntity as keyof typeof entityInfo];

  if (!entity) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Please select an entity from the sidebar.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-4xl">
            {entity.icon}
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {entity.name}
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          {entity.description}
        </p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Construction className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            Dashboard Under Development
          </h3>
          <p className="text-yellow-700">
            This entity's dashboard is currently being developed as part of our phased approach. 
            The Ministry of Transport and Logistic Services dashboard is available now.
          </p>
        </div>
        
        <button
          onClick={() => onEntityChange('mtls')}
          className="bg-saudi-green-600 hover:bg-saudi-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          View MTLS Dashboard
        </button>
      </div>
    </div>
  );
};

export default EntitySelector; 