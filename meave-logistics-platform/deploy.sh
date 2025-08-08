#!/bin/bash

# Meave Group Logistics Platform Deployment Script

echo "🚀 Starting Meave Group Platform Deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version check passed: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the application
echo "🔨 Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local file not found. Creating template..."
    cat > .env.local << EOL
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/meave_logistics"

# Authentication
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# External APIs
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
STRIPE_SECRET_KEY="your-stripe-secret-key"

# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
EOL
    echo "📝 Please update .env.local with your actual configuration values"
fi

# Start the application
echo "🚀 Starting the Meave Group Platform..."
echo "📍 Platform will be available at: http://localhost:3000"
echo "🏢 Meave Group LLC - Edinburg, TX Headquarters"
echo "🌎 Serving logistics needs across all 50 states"

npm start
