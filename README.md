# Saudi Observatory Dashboard

A comprehensive digital platform for transport and logistics data providing a reliable reference for transport and logistics analytics across Saudi Arabia's key entities.

## Overview

The Saudi Observatory Dashboard enables monitoring of indicators and development of analytical models to support business sectors within the Ministry of Transport and the broader transport and logistics ecosystem. The dashboard provides access to analytics use cases categorized by four levels of analytics maturity:

- **Descriptive Analytics**: What happened? (Dashboards, KPIs, Reporting)
- **Diagnostic Analytics**: Why did it happen? (Root cause analysis, correlation)
- **Predictive Analytics**: What will happen? (Forecasting, risk assessment)
- **Prescriptive Analytics & AI**: What should we do? (Optimization, automation, recommendations)

## Entities Covered

### Phase 1 - ✅ Completed
- **Ministry of Transport and Logistic Services (MTLS)**: Strategic oversight and national-level policy making

### Phase 2 - ✅ Completed  
- **Transport General Authority (TGA)**: Land transport regulation, safety, and efficiency

### Phase 3 - ✅ Completed
- **General Authority of Civil Aviation (GACA)**: Air traffic, airport operations, safety, and passenger experience

### Future Phases - 🚧 Coming Soon
- **MAWANI (Saudi Ports Authority)**: Seaport efficiency, capacity, and operations
- **Saudi Arabian Railway Company (SAR)**: Rail network performance, safety, and utilization
- **Road General Authority (RGA)**: Road network condition, safety, and traffic flow
- **Saudi Post (SPL)**: Parcel processing, logistics, and last-mile delivery

## Features

### 🎨 Design
- Saudi-specific color palette (Saudi Green #005430 + White)
- Arabic font support (DIN Next LT Arabic)
- Responsive design for desktop and mobile
- Modern, clean UI following Saudi design guidelines

### 📊 Analytics Capabilities
- Real-time KPI monitoring
- Interactive data visualizations using Recharts
- Trend analysis and performance tracking
- Predictive analytics and forecasting
- Root cause analysis and diagnostic insights

### 🔧 Technical Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Saudi theme
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/saudi-observatory-dashboard.git
cd saudi-observatory-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── dashboards/
│   │   ├── MTLSDashboard.tsx    # Ministry of Transport dashboard
│   │   ├── TGADashboard.tsx     # Transport General Authority dashboard
│   │   └── GACADashboard.tsx    # Civil Aviation Authority dashboard
│   ├── Header.tsx               # Main header component
│   ├── Sidebar.tsx              # Navigation sidebar
│   ├── SaudiLogo.tsx           # Saudi government logo
│   └── EntitySelector.tsx       # Entity selection component
├── App.tsx                      # Main application component
├── index.tsx                    # Application entry point
└── index.css                    # Global styles and Tailwind imports
```

## Key Use Cases by Entity

### MTLS (Ministry of Transport)
- National Logistics Performance Dashboard
- Cross-Modal Bottleneck Analysis  
- National Transport Demand Forecasting
- Policy Simulation & Impact Analysis
- Strategic Investment Optimization

### TGA (Transport General Authority)
- Real-time Public Transport Monitoring
- Freight Movement Dashboard
- Accident Hotspot Analysis
- Compliance Risk Scoring
- Dynamic Route Optimization

### GACA (Civil Aviation)
- National Air Traffic Dashboard
- Flight Delay Root Cause Analysis
- Passenger Flow Forecasting
- Airspace Congestion Prediction
- Predictive Maintenance for Airport Infrastructure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Phases

The project follows a phased approach where each phase implements a complete dashboard for one entity:

- **Phase 1**: MTLS - Strategic national oversight ✅
- **Phase 2**: TGA - Land transport regulation ✅  
- **Phase 3**: GACA - Aviation authority ✅
- **Phase 4**: MAWANI - Ports authority 🚧
- **Phase 5**: SAR - Railway company 🚧
- **Phase 6**: RGA - Road authority 🚧
- **Phase 7**: SPL - Postal services 🚧

## License

This project is developed for the Saudi Ministry of Transport and Logistic Services.

## Support

For support and questions, please contact the development team.

---

Built with ❤️ for Saudi Arabia's Vision 2030 transport and logistics transformation. 