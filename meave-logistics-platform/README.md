# Meave Group LLC - Comprehensive Logistics Platform

A full-featured logistics and transportation management platform built with Next.js, featuring freight management, luxury vehicle rentals, and independent trucker network operations.

## 🚀 Features

### Logistics Division
- **Fleet Management**: Manage company drivers and vehicles
- **Load Board**: Real-time freight matching and assignment
- **Route Optimization**: AI-powered route planning
- **Customer Portal**: Client management and communication
- **GPS Tracking**: Real-time vehicle and load tracking

### Rental Division
- **Luxury Fleet**: Tesla, BMW, Mercedes, Porsche vehicles
- **Turo Integration**: Seamless rental platform management
- **Dynamic Pricing**: Market-based pricing optimization
- **Booking System**: Real-time availability and reservations
- **Maintenance Tracking**: Automated service scheduling

### Trucker Network
- **Independent Contractors**: Owner-operator management
- **Load Assignment**: Direct load matching system
- **Performance Analytics**: Safety scores and earnings tracking
- **Payment Processing**: Automated contractor payments
- **Communication Tools**: Direct messaging platform

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **3D Graphics**: React Three Fiber + Three.js
- **Charts**: Recharts for analytics
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/meave-logistics-platform.git
   cd meave-logistics-platform
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy with one click

### Option 2: Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Option 3: Docker
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## 📁 Project Structure

\`\`\`
meave-logistics-platform/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── driver-management.tsx
│   │   ├── turo-rental-management.tsx
│   │   ├── trucker-management.tsx
│   │   ├── load-board.tsx
│   │   ├── financial-dashboard.tsx
│   │   └── ...
│   ├── dashboard/           # Dashboard pages
│   ├── blog/               # Blog section
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/ui/          # shadcn/ui components
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json
\`\`\`

## 🌟 Key Features

### Dashboard Overview
- **Multi-division Management**: Unified control panel
- **Real-time Analytics**: Live performance metrics
- **3D Visualizations**: Interactive fleet displays
- **Mobile Responsive**: Full functionality on all devices

### Business Intelligence
- **Revenue Tracking**: Cross-division financial analytics
- **Performance Metrics**: Safety scores, utilization rates
- **Predictive Analytics**: Maintenance and demand forecasting
- **Customer Insights**: Unified customer experience tracking

### Integration Ready
- **API Endpoints**: RESTful APIs for third-party integration
- **Webhook Support**: Real-time event notifications
- **Database Ready**: Prepared for PostgreSQL/MongoDB integration
- **Authentication**: Ready for NextAuth.js implementation

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

\`\`\`env
# Database
DATABASE_URL="your-database-url"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# External APIs
GOOGLE_MAPS_API_KEY="your-google-maps-key"
STRIPE_SECRET_KEY="your-stripe-key"
\`\`\`

### Customization
- **Branding**: Update colors in `tailwind.config.ts`
- **Company Info**: Modify company details in components
- **Features**: Enable/disable modules in dashboard configuration

## 📱 Mobile Support

The platform is fully responsive and includes:
- **Progressive Web App** capabilities
- **Touch-optimized** interfaces
- **Offline functionality** for critical features
- **Push notifications** for real-time updates

## 🔒 Security Features

- **Role-based Access Control**
- **Data Encryption** for sensitive information
- **Audit Logging** for all transactions
- **GDPR Compliance** ready

## 📊 Analytics & Reporting

- **Real-time Dashboards**
- **Custom Report Builder**
- **Export Capabilities** (PDF, Excel, CSV)
- **Automated Reporting** via email

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Email**: support@meavegroup.com
- **Phone**: (956) 555-0100
- **Address**: Edinburg, TX

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core logistics management
- ✅ Rental fleet management
- ✅ Trucker network platform
- ✅ Basic analytics dashboard

### Phase 2 (Next)
- 🔄 Mobile applications
- 🔄 Advanced AI/ML features
- 🔄 IoT device integration
- 🔄 Blockchain for supply chain

### Phase 3 (Future)
- 📋 International expansion
- 📋 Autonomous vehicle integration
- 📋 Carbon footprint tracking
- 📋 Advanced predictive analytics

---

**Built with ❤️ by the Meave Group development team**

*Driving America's logistics future from Edinburg, Texas*
