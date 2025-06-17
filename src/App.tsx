import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MTLSDashboard from './components/dashboards/MTLSDashboard';
import TGADashboard from './components/dashboards/TGADashboard';
import GACADashboard from './components/dashboards/GACADashboard';
import MAWANIDashboard from './components/dashboards/MAWANIDashboard';
import SARDashboard from './components/dashboards/SARDashboard';
import RGADashboard from './components/dashboards/RGADashboard';
import SPLDashboard from './components/dashboards/SPLDashboard';
import EntitySelector from './components/EntitySelector';

function App() {
  const [selectedEntity, setSelectedEntity] = useState<string>('mtls');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50 ltr">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          selectedEntity={selectedEntity}
          onEntityChange={setSelectedEntity}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            onMenuClick={() => setSidebarOpen(true)}
            selectedEntity={selectedEntity}
          />
          
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            <Routes>
              <Route path="/" element={
                selectedEntity === 'mtls' ? (
                  <MTLSDashboard />
                ) : selectedEntity === 'tga' ? (
                  <TGADashboard />
                ) : selectedEntity === 'gaca' ? (
                  <GACADashboard />
                ) : selectedEntity === 'mawani' ? (
                  <MAWANIDashboard />
                ) : selectedEntity === 'sar' ? (
                  <SARDashboard />
                ) : selectedEntity === 'rga' ? (
                  <RGADashboard />
                ) : selectedEntity === 'spl' ? (
                  <SPLDashboard />
                ) : (
                  <EntitySelector 
                    selectedEntity={selectedEntity}
                    onEntityChange={setSelectedEntity}
                  />
                )
              } />
              <Route path="/mtls" element={<MTLSDashboard />} />
              <Route path="/tga" element={<TGADashboard />} />
              <Route path="/gaca" element={<GACADashboard />} />
              <Route path="/mawani" element={<MAWANIDashboard />} />
              <Route path="/sar" element={<SARDashboard />} />
              <Route path="/rga" element={<RGADashboard />} />
              <Route path="/spl" element={<SPLDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App; 