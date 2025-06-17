import React from 'react';
import { Menu, Bell, User } from 'lucide-react';
import SaudiLogo from './SaudiLogo';

interface HeaderProps {
  onMenuClick: () => void;
  selectedEntity: string;
}

const entityNames = {
  mtls: 'Ministry of Transport and Logistic Services',
  tga: 'Transport General Authority',
  gaca: 'General Authority of Civil Aviation',
  mawani: 'MAWANI (Saudi Ports Authority)',
  sar: 'Saudi Arabian Railway Company',
  rga: 'Road General Authority',
  spl: 'Saudi Post'
};

const Header: React.FC<HeaderProps> = ({ onMenuClick, selectedEntity }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-saudi-green-500 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-3">
            <SaudiLogo size={48} />
            <div>
              <h1 className="text-xl font-bold text-saudi-green-950">
                Saudi Observatory Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                {entityNames[selectedEntity as keyof typeof entityNames]}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 