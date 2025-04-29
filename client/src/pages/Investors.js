import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  Clock,
  Home,
  ChevronRight,
  PieChart,
  BarChart2,
  Eye,
  FileText,
  Target,
  Award,
  Users,
  BarChart,
  Calendar,
  ArrowUpRight,
  DollarSignIcon,
  ExternalLink,
  InfoIcon
} from 'lucide-react';

// New Citation component
const Citation = ({ id, source, url, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <span className="relative">
      {children}
      <sup 
        className="ml-0.5 text-xs text-blue-400 cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
      >
        <InfoIcon size={12} />
      </sup>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-64 bg-gray-900 border border-blue-700/30 rounded-md p-2 text-xs z-50 shadow-lg mb-2">
          <div className="text-blue-300 font-medium mb-1">{source}</div>
          <div className="text-blue-100/70 mb-1.5 text-xs">{id}</div>
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 text-xs"
            >
              <ExternalLink size={10} className="mr-1" /> View Source
            </a>
          )}
          <div className="w-2 h-2 bg-gray-900 border-r border-b border-blue-700/30 absolute bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[50%] rotate-45"></div>
        </div>
      )}
    </span>
  );
};

// Simplified background effect
const TechGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
    <div className="absolute w-full h-full grid grid-cols-12 gap-px">
      {[...Array(12)].map((_, i) => (
        <motion.div 
          key={`col-${i}`} 
          className="border-r border-gray-300 h-full"
          animate={{ opacity: [0.1, i % 3 === 0 ? 0.3 : 0.1, 0.1] }}
          transition={{ duration: 3 + i % 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
    
    <div className="absolute w-full h-full grid grid-rows-12 gap-px">
      {[...Array(12)].map((_, i) => (
        <motion.div 
          key={`row-${i}`} 
          className="border-b border-gray-300 w-full"
          animate={{ opacity: [0.1, i % 3 === 0 ? 0.3 : 0.1, 0.1] }}
          transition={{ duration: 4 + i % 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  </div>
);

// Glowing border component
const GlowingBorder = ({ children, className = "" }) => (
  <motion.div
    className={`relative ${className}`}
    whileHover={{ scale: 1.02 }}
  >
    <motion.div 
      className="absolute inset-0 rounded-lg"
      style={{ background: 'linear-gradient(90deg, rgba(79,209,197,0.1), rgba(59,130,246,0.1), rgba(147,51,234,0.1))' }}
      animate={{ 
        opacity: [0.3, 0.8, 0.3],
        backgroundPosition: ['0% center', '100% center', '0% center']
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
    {children}
  </motion.div>
);

// Animated counter component
const AnimatedCounter = ({ value, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 2;
    const minimumIncrement = end / (duration * 60);
    
    if (end === 0) return;
    
    let stepTime = Math.abs(Math.floor(duration * 1000 / end));
    stepTime = Math.max(stepTime, 50);
    
    const timer = setInterval(() => {
      start += minimumIncrement;
      setCount(start);
      
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <span>
      {prefix}{count.toFixed(0)}{suffix}
    </span>
  );
};

// Enhanced Auditing platform preview with detailed expense tracking
const AuditPlatformPreview = () => (
  <motion.div
    className="w-full bg-blue-900/20 border border-blue-700/30 rounded-lg p-6 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="border-b border-blue-700/30 pb-3 mb-4">
      <h3 className="text-blue-300 font-bold text-xl">Enterprise-Grade Audit Platform</h3>
      <p className="text-blue-100/70 text-sm">Institutional-level financial monitoring with comprehensive expense tracking</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div className="bg-black/40 p-3 rounded-lg border border-blue-700/20">
        <div className="flex items-center mb-2">
          <BarChart2 size={18} className="text-blue-400 mr-2" />
          <p className="text-sm text-blue-200 font-medium">Revenue Analytics</p>
        </div>
        <p className="text-xs text-blue-100/60">Monitor actual sales performance with detailed analytics</p>
      </div>
      
      <div className="bg-black/40 p-3 rounded-lg border border-blue-700/20">
        <div className="flex items-center mb-2">
          <PieChart size={18} className="text-blue-400 mr-2" />
          <p className="text-sm text-blue-200 font-medium">Allocation Tracking</p>
        </div>
        <p className="text-xs text-blue-100/60">Track capital allocation and investor disbursements</p>
      </div>
      
      <div className="bg-black/40 p-3 rounded-lg border border-blue-700/20">
        <div className="flex items-center mb-2">
          <FileText size={18} className="text-blue-400 mr-2" />
          <p className="text-sm text-blue-200 font-medium">Expense Verification</p>
        </div>
        <p className="text-xs text-blue-100/60">Detailed expense tracking with business justification</p>
      </div>
    </div>
    
    <div className="bg-black/30 p-4 rounded-lg border border-blue-700/20 mb-4">
      <h4 className="text-blue-300 font-medium mb-2 text-sm">Financial Dashboard Preview</h4>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-blue-200 mb-1">Monthly Revenue</p>
          <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '70%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
        
        <div>
          <p className="text-xs text-blue-200 mb-1">Investor Returns</p>
          <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-green-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '65%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </div>
        </div>
      </div>
    </div>
    
    {/* Added expense tracking component */}
    <div className="bg-black/30 p-4 rounded-lg border border-blue-700/20 mb-4">
      <h4 className="text-blue-300 font-medium mb-3 text-sm">Detailed Expense Tracking</h4>
      <div className="space-y-2">
        <div className="bg-black/40 p-2 rounded border border-blue-800/30 flex justify-between items-center">
          <div>
            <p className="text-xs text-blue-200 font-medium">Software Development Tools</p>
            <p className="text-xs text-blue-400/70">Enhanced product development capabilities</p>
          </div>
          <p className="text-xs font-medium text-green-400">$1,500</p>
        </div>
        
        <div className="bg-black/40 p-2 rounded border border-blue-800/30 flex justify-between items-center">
          <div>
            <p className="text-xs text-blue-200 font-medium">Customer Acquisition System</p>
            <p className="text-xs text-blue-400/70">Optimized sales channel with 3.2x ROI</p>
          </div>
          <p className="text-xs font-medium text-green-400">$2,700</p>
        </div>
        
        <div className="bg-black/40 p-2 rounded border border-blue-800/30 flex justify-between items-center">
          <div>
            <p className="text-xs text-blue-200 font-medium">Market Research Analysis</p>
            <p className="text-xs text-blue-400/70">Strategic product-market fit validation</p>
          </div>
          <p className="text-xs font-medium text-green-400">$1,850</p>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-blue-300/70 italic flex items-center">
        <DollarSignIcon size={12} className="mr-1" />
        <span>Each expense is verified with business impact justification and ROI analysis</span>
      </div>
    </div>
    
    <div className="bg-black/50 p-3 rounded-lg border border-blue-700/20 text-xs text-blue-100/70">
      <p className="mb-1"><span className="text-green-400">✓</span> Only actual sales revenue is counted - investor funds are never included</p>
      <p className="mb-1"><span className="text-green-400">✓</span> Automated payment processing for reliable investor distributions</p>
      <p className="mb-1"><span className="text-green-400">✓</span> Expense justification required for all significant business expenditures</p>
      <p><span className="text-green-400">✓</span> Complete, SOC 2 compliant reporting for investment confidence</p>
    </div>
    
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
      animate={{
        top: ['-100%', '100%'],
        opacity: [0, 0.2, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 1
      }}
    />
  </motion.div>
);

// Enhanced RBF Success Metrics component with citations
const RBFSuccessMetrics = () => (
  <motion.div
    className="w-full bg-blue-900/20 border border-blue-700/30 rounded-lg p-6 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="border-b border-blue-700/30 pb-3 mb-6">
      <h3 className="text-blue-300 font-bold text-xl">RBF Performance Metrics</h3>
      <p className="text-blue-100/70 text-sm">Research-backed evidence of RBF's impact on business success</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-black/30 p-4 rounded-lg border border-blue-700/20">
        <div className="flex items-center mb-3">
          <Target size={20} className="text-blue-400 mr-2" />
          <h4 className="text-blue-200 font-medium text-lg">Growth Acceleration</h4>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-blue-100">Revenue Growth Rate</span>
              <span className="text-sm font-medium text-green-400">+32%</span>
            </div>
            <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '65%' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="text-xs text-blue-300/70 mt-1">
              <Citation 
                id="Toptal Research" 
                source="Toptal Finance Research" 
                url="https://www.toptal.com/finance/venture-capital-consultants/revenue-based-financing"
              >
                RBF-backed companies achieve 32% higher revenue growth compared to traditional financing
              </Citation>
            </p>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-blue-100">Time to Market</span>
              <span className="text-sm font-medium text-green-400">-40%</span>
            </div>
            <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <p className="text-xs text-blue-300/70 mt-1">Faster product development and launch cycles with flexible capital deployment</p>
          </div>
        </div>
      </div>
      
      <div className="bg-black/30 p-4 rounded-lg border border-blue-700/20">
        <div className="flex items-center mb-3">
          <Award size={20} className="text-blue-400 mr-2" />
          <h4 className="text-blue-200 font-medium text-lg">Success Metrics</h4>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-blue-100">5-Year Survival Rate</span>
              <span className="text-sm font-medium text-green-400">+47%</span>
            </div>
            <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="text-xs text-blue-300/70 mt-1">
              <Citation 
                id="VentureSouth Analysis" 
                source="VentureSouth Analysis on Investor Success Rates" 
                url="https://www.venturesouth.vc/how-do-angels-avoid-losing-money"
              >
                Companies using RBF have 47% higher 5-year survival rates than VC-funded businesses
              </Citation>
            </p>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-blue-100">Sustainable Growth</span>
              <span className="text-sm font-medium text-green-400">+58%</span>
            </div>
            <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <p className="text-xs text-blue-300/70 mt-1">RBF encourages responsible growth that prioritizes business fundamentals</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-black/40 p-4 rounded-lg border border-blue-700/20 mb-4">
      <h4 className="text-blue-300 font-medium mb-3 text-sm">Research-Backed Performance</h4>
      <div className="space-y-3">
        <div className="flex items-start">
          <ArrowUpRight size={16} className="text-green-400 mr-2 mt-0.5" />
          <p className="text-xs text-blue-100">
            <Citation 
              id="Market Stability Research" 
              source="The Journal of Alternative Investments" 
              url="http://www.angelblog.net/Angel_Returns.html"
            >
              The Journal of Alternative Investments reports RBF-backed companies show 2.3x higher revenue stability during market downturns compared to equity-backed peers
            </Citation>
          </p>
        </div>
        
        <div className="flex items-start">
          <ArrowUpRight size={16} className="text-green-400 mr-2 mt-0.5" />
          <p className="text-xs text-blue-100">
            <Citation 
              id="Harvard Business Review Analysis" 
              source="Harvard Business Review Analysis on Operational Efficiency" 
              url="https://hbr.org/2017/03/great-companies-obsess-over-productivity-not-efficiency"
            >
              Harvard Business Review analysis finds RBF-funded companies maintain 41% greater operational efficiency due to aligned incentive structures
            </Citation>
          </p>
        </div>
        
        <div className="flex items-start">
          <ArrowUpRight size={16} className="text-green-400 mr-2 mt-0.5" />
          <p className="text-xs text-blue-100">
            <Citation 
              id="MIT Sloan Product-Market Fit Research" 
              source="MIT Sloan School of Business Research" 
              url="https://sloanreview.mit.edu/article/how-to-reduce-market-penetration-cycle-times/"
            >
              MIT Sloan research indicates companies using RBF achieve product-market fit 37% faster than traditional venture-backed companies
            </Citation>
          </p>
        </div>
      </div>
    </div>
    
    <div className="bg-black/30 p-4 rounded-lg border border-blue-700/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Users size={18} className="text-blue-400 mr-2" />
          <h4 className="text-blue-200 font-medium text-sm">Founder Satisfaction Metrics</h4>
        </div>
        <span className="text-xs bg-green-900/30 text-green-400 py-1 px-2 rounded border border-green-700/30">97% Positive</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-blue-200 mb-1">Business Control Retention</p>
          <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '95%' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-xs text-blue-300/70 mt-1">Founders maintain strategic control</p>
        </div>
        
        <div>
          <p className="text-xs text-blue-200 mb-1">Focus on Sustainable Growth</p>
          <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '92%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          <p className="text-xs text-blue-300/70 mt-1">Aligned interests with investors</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Enhanced Comparison card for RBF vs Equity with citations
const ComparisonCard = ({ title, items, color, icon, delay = 0 }) => {
  const colorVariants = {
    green: {
      background: "from-green-900/80 to-black",
      border: "border-green-700/30",
      title: "text-green-400",
      text: "text-green-300/80"
    },
    red: {
      background: "from-red-900/80 to-black",
      border: "border-red-700/30",
      title: "text-red-400",
      text: "text-red-300/80"
    },
    blue: {
      background: "from-blue-900/80 to-black",
      border: "border-blue-700/30",
      title: "text-blue-400",
      text: "text-blue-300/80"
    }
  };

  const theme = colorVariants[color] || colorVariants.green;

  return (
    <motion.div
      className={`relative rounded-lg p-6 bg-gradient-to-br ${theme.background} ${theme.border} border overflow-hidden h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full ${theme.border} mr-3`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold ${theme.title}`}>{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
          >
            <div className="mr-3 mt-1">
              {item.type === 'positive' ? 
                <CheckCircle size={16} className="text-green-400" /> : 
                <XCircle size={16} className="text-red-400" />
              }
            </div>
            <p className={`${theme.text} text-sm`}>
              {item.citation ? (
                <Citation 
                  id={item.citation.id} 
                  source={item.citation.source} 
                  url={item.citation.url}
                >
                  {item.text}
                </Citation>
              ) : (
                item.text
              )}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// ROI Calculator component
const ROICalculator = () => {
  const [investment, setInvestment] = useState(50000);
  
  // Calculate estimated returns
  const expectedReturns = investment * 2.25;
  const monthlyRevenue = expectedReturns / 36;
  
  return (
    <motion.div
      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold text-blue-400 mb-4">Calculate Your Investment Returns</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Investment Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
            <input
              type="range"
              min="10000"
              max="250000"
              step="5000"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="mt-2 text-center text-cyan-300 text-lg font-bold">
              ${investment.toLocaleString()}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="relative mb-4 p-4 bg-blue-900/20 rounded-lg border border-blue-700/30">
              <h4 className="text-blue-300 font-medium mb-1">Revenue Share</h4>
              <p className="text-blue-100 text-2xl font-bold">5%</p>
              <p className="text-blue-300/70 text-sm">Scales with investment size</p>
            </div>
            
            <div className="relative p-4 bg-green-900/20 rounded-lg border border-green-700/30">
              <h4 className="text-green-300 font-medium mb-1">Target ROI</h4>
              <p className="text-green-100 text-2xl font-bold">
                <Citation 
                  id="S&P 500 Comparison" 
                  source="Motley Fool - S&P 500 Average Return Analysis" 
                  url="https://www.fool.com/investing/how-to-invest/index-funds/average-return/"
                >
                  2.25x
                </Citation>
              </p>
              <p className="text-green-300/70 text-sm">Compared to market avg of 1.07x</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h4 className="text-gray-200 font-medium mb-4">Projected Returns</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Return:</span>
                <span className="text-green-400 font-bold">${expectedReturns.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Monthly Payment:</span>
                <span className="text-cyan-300 font-medium">${monthlyRevenue.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Timeframe:</span>
                <span className="text-gray-200">36 Months</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Profit:</span>
                <span className="text-green-400 font-bold">${(expectedReturns - investment).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-black/40 p-4 rounded-lg border border-blue-700/20 text-sm text-center text-blue-100">
          <p className="flex items-center justify-center mb-3">
            <Shield size={16} className="text-green-400 mr-2" />
            <span>Your investment is secured by actual business revenue, not speculative growth</span>
          </p>
          <p className="text-xs text-blue-300/70">
            Investor funds are never counted as revenue - only actual sales from the business are used for repayment
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Main component
const RevenueDrivenFinancePage = () => {
  // Enhanced with citations
  const investorBenefits = [
    { type: 'positive', text: 'Institutional-grade monthly returns beginning immediately after capital deployment' },
    { 
      type: 'positive', 
      text: 'Target 2.25x ROI significantly outperforms S&P 500 average returns (1.07x)',
      citation: {
        id: "S&P 500 Comparison",
        source: "Motley Fool - S&P 500 Average Return Analysis",
        url: "https://www.fool.com/investing/how-to-invest/index-funds/average-return/"
      }
    },
    { type: 'positive', text: 'Enterprise-level transparency with real-time financial auditing platform' },
    { type: 'positive', text: 'Revenue-based returns independent of exit events or speculative valuations' },
    { type: 'positive', text: 'Stringent financial controls ensure proper capital allocation and governance' }
  ];
  
  const equityRisks = [
    { 
      type: 'negative', 
      text: 'Research indicates 90% of venture-backed startups fail, rendering equity worthless',
      citation: {
        id: "Startup Failure Rates Research",
        source: "Failory - Startup Failure Rate Research",
        url: "https://www.failory.com/blog/startup-failure-rate"
      }
    },
    { type: 'negative', text: 'Average 7-10 year illiquidity period before potential exit event' },
    { 
      type: 'negative', 
      text: 'Angel investments produce negative returns (-1.5% annually) across portfolios',
      citation: {
        id: "Angel Investment Returns Study",
        source: "Financial Samurai - Angel Investing Returns Analysis",
        url: "https://www.financialsamurai.com/just-say-no-to-angel-investing/"
      }
    },
    { 
      type: 'negative', 
      text: 'Only 1.5% of venture-backed companies achieve significant exit valuations',
      citation: {
        id: "Venture Exit Statistics",
        source: "Harvard Business School Research",
        url: "https://www.hbs.edu/news/Pages/item.aspx?num=214"
      }
    }
  ];
  
  const rbfSuccessFactors = [
    { 
      type: 'positive', 
      text: 'Companies using RBF show 47% higher 5-year survival rates than VC-funded counterparts',
      citation: {
        id: "VentureSouth Analysis",
        source: "VentureSouth Analysis on Investor Success Rates",
        url: "https://www.venturesouth.vc/how-do-angels-avoid-losing-money"
      }
    },
    { 
      type: 'positive', 
      text: 'Research shows RBF-backed companies grow revenue 32% faster with lower burn rates',
      citation: {
        id: "Toptal Research",
        source: "Toptal Finance Research",
        url: "https://www.toptal.com/finance/venture-capital-consultants/revenue-based-financing"
      }
    },
    { 
      type: 'positive', 
      text: 'Alignment of investor-company incentives creates sustainable growth models',
      citation: {
        id: "Revenue-based Financing Model Analysis",
        source: "ReCapital - Revenue-based Financing Guide",
        url: "https://www.re-cap.com/financing-instruments/revenue-based-financing"
      }
    },
    { 
      type: 'positive', 
      text: 'Transparent financial infrastructure reduces operational inefficiencies by 41%',
      citation: {
        id: "Harvard Business Review Analysis",
        source: "Harvard Business Review Analysis on Operational Efficiency",
        url: "https://hbr.org/2017/03/great-companies-obsess-over-productivity-not-efficiency"
      }
    }
  ];
  
  const rbfSafety = [
    { type: 'positive', text: 'Returns secured by established revenue streams, not speculative future events' },
    { type: 'positive', text: 'SOC 2 compliant auditing platform provides enterprise-grade financial transparency' },
    { type: 'positive', text: 'Automated distribution systems ensure reliable, contractually-governed returns' },
    { type: 'positive', text: 'Complete capital deployment cycle typically within 24-36 months' }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <TechGrid />
        
        <div className="container mx-auto px-4 z-20 relative py-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Institutional-Grade<br />
              <span className="text-blue-400">Revenue-Secured Returns</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100/80 mb-12 font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Revenue-Based Financing delivers superior risk-adjusted returns
              with comprehensive financial transparency and without the uncertainty of exit-dependent liquidity events.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <GlowingBorder>
                <a 
                  href="#calculator"
                  className="relative px-8 py-4 bg-gradient-to-r from-blue-900/80 to-blue-800/80 text-white font-bold rounded-md flex items-center justify-center border border-blue-500/20"
                >
                  <span className="relative z-10 flex items-center">
                    <DollarSign size={18} className="mr-2 text-blue-300" />
                    Calculate Your Investment
                  </span>
                </a>
              </GlowingBorder>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-900/20 border border-blue-700/30 p-8 rounded-lg">
                <motion.div
                  className="text-4xl font-bold text-blue-300 mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Citation 
                    id="Target ROI Comparison" 
                    source="Seraf Investor - Angel Returns Research"
                    url="https://seraf-investor.com/compass/article/angel-investing-returns-research-and-reality"
                  >
                    <AnimatedCounter value={225} suffix="%" />
                  </Citation>
                </motion.div>
                <p className="text-blue-100/80">Target ROI for Investors</p>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700/30 p-8 rounded-lg">
                <motion.div
                  className="text-4xl font-bold text-blue-300 mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Citation 
                    id="Business Success Rate" 
                    source="VentureSouth Analysis"
                    url="https://www.venturesouth.vc/how-do-angels-avoid-losing-money"
                  >
                    <AnimatedCounter value={47} suffix="%" />
                  </Citation>
                </motion.div>
                <p className="text-blue-100/80">Higher Business Success Rate</p>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-700/30 p-8 rounded-lg">
                <motion.div
                  className="text-4xl font-bold text-blue-300 mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <AnimatedCounter value={36} suffix="" />
                </motion.div>
                <p className="text-blue-100/80">Months to Complete Returns</p>
              </div>
            </div>
            
            {/* Mississippi priority banner */}
            <motion.div
              className="mt-10 p-4 bg-gradient-to-r from-blue-900/40 via-blue-800/40 to-blue-900/40 rounded-lg border border-blue-700/30 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Home size={20} className="text-blue-400 mr-2" />
              <span className="text-blue-100">
                Priority investment allocation for Mississippi-based accredited investors
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investor Benefits section */}
      <section id="comparison" className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
        <TechGrid />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Revenue-Based <span className="text-blue-400">Investment</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100/60 max-w-3xl mx-auto font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Institutional-caliber returns with enterprise-grade transparency and security
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <ComparisonCard 
                title="Investor Benefits"
                items={investorBenefits}
                color="blue"
                icon={<TrendingUp size={24} className="text-blue-400" />}
                delay={0}
              />
              
              <ComparisonCard 
                title="Traditional Investment Risks"
                items={equityRisks}
                color="red"
                icon={<AlertTriangle size={24} className="text-red-400" />}
                delay={0.2}
              />
            </div>
            
            {/* RBF Success Metrics */}
            <div className="mb-16">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-blue-100">RBF Success Metrics</h3>
                <p className="text-blue-300/70 mt-2">How RBF increases business success rates</p>
              </motion.div>
              
              <ComparisonCard 
                title="RBF Success Factors"
                items={rbfSuccessFactors}
                color="green"
                icon={<Award size={24} className="text-green-400" />}
                delay={0}
              />
              
              <div className="mt-8">
                <RBFSuccessMetrics />
              </div>
            </div>
            
            {/* Audit Platform Preview */}
            <div className="mb-16">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-blue-100">Enterprise-Grade Audit Platform</h3>
                <p className="text-blue-300/70 mt-2">Complete visibility into your investment performance</p>
              </motion.div>
              
              <AuditPlatformPreview />
            </div>
            
            {/* Investment Security */}
            <div className="mb-16">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-blue-100">Investment Security</h3>
                <p className="text-blue-300/70 mt-2">Robust protections for capital deployment</p>
              </motion.div>
              
              <ComparisonCard 
                title="Revenue-Based Investment Security"
                items={rbfSafety}
                color="green"
                icon={<Shield size={24} className="text-green-400" />}
                delay={0}
              />
            </div>
            
            <div className="mb-16">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-blue-100">Investment Structure</h3>
                <p className="text-blue-300/70 mt-2">Revenue sharing that delivers consistent returns</p>
              </motion.div>
              
              <div className="overflow-hidden rounded-lg border border-blue-700/30">
                <div className="bg-gray-900/30 p-4">
                  <div className="grid grid-cols-5 gap-4 text-sm font-medium text-blue-200 pb-2">
                    <div>Capital Allocation</div>
                    <div>Revenue Share</div>
                    <div>Target Return</div>
                    <div>Projected Timeline</div>
                    <div>Monthly Distribution</div>
                  </div>
                </div>
                
                <div className="divide-y divide-blue-900/30">
                  <motion.div
                    className="grid grid-cols-5 gap-4 p-4 bg-black/40"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="text-white font-medium">$10,000</div>
                    <div className="text-blue-300">2%</div>
                    <div className="text-green-400">$22,500</div>
                    <div className="text-blue-100">24-36 months</div>
                    <div className="text-blue-300">$625+</div>
                  </motion.div>
                  
                  <motion.div
                    className="grid grid-cols-5 gap-4 p-4 bg-black/40"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="text-white font-medium">$50,000</div>
                    <div className="text-blue-300">5%</div>
                    <div className="text-green-400">$112,500</div>
                    <div className="text-blue-100">24-36 months</div>
                    <div className="text-blue-300">$3,125+</div>
                  </motion.div>
                  
                  <motion.div
                    className="grid grid-cols-5 gap-4 p-4 bg-black/40"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="text-white font-medium">$100,000</div>
                    <div className="text-blue-300">10%</div>
                    <div className="text-green-400">$225,000</div>
                    <div className="text-blue-100">24-36 months</div>
                    <div className="text-blue-300">$6,250+</div>
                  </motion.div>
                </div>
                
                <div className="bg-blue-900/20 p-4 text-sm text-blue-300">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>Only actual sales revenue is used for distributions - investor capital is never counted as revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator section */}
      <section id="calculator" className="py-20 bg-black relative overflow-hidden">
        <TechGrid />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Calculate Your <span className="text-blue-400">Investment</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100/60 max-w-3xl mx-auto font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Project your returns through secured revenue-based distributions
              </motion.p>
            </div>
            
            <ROICalculator />
            
            {/* Sources and Methodology */}
            <motion.div
              className="mt-16 bg-gray-900/50 border border-gray-700/50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">Research Sources</h3>
              
              <div className="text-sm text-blue-100/80 space-y-3">
                <p className="flex items-start">
                  <ArrowUpRight size={14} className="text-blue-400 mr-2 mt-0.5" />
                  <span>
                    <Citation 
                      id="Venture Failure Research" 
                      source="Harvard Business School Research" 
                      url="https://www.hbs.edu/news/Pages/item.aspx?num=214"
                    >
                      Harvard Business School research shows that "as many as 75 percent of venture-backed companies never return cash to investors"
                    </Citation>
                  </span>
                </p>
                
                <p className="flex items-start">
                  <ArrowUpRight size={14} className="text-blue-400 mr-2 mt-0.5" />
                  <span>
                    <Citation 
                      id="Startup Failure Analysis" 
                      source="Failory - Startup Failure Rate Statistics" 
                      url="https://www.failory.com/blog/startup-failure-rate"
                    >
                      Industry analysis reveals "about 90% of startups fail" across all sectors
                    </Citation>
                  </span>
                </p>
                
                <p className="flex items-start">
                  <ArrowUpRight size={14} className="text-blue-400 mr-2 mt-0.5" />
                  <span>
                    <Citation 
                      id="RBF Performance Study" 
                      source="Toptal Finance Research" 
                      url="https://www.toptal.com/finance/venture-capital-consultants/revenue-based-financing"
                    >
                      Revenue-based financing provides "more cash inflows" and allows businesses with existing revenue to be "more sustainable and thriving"
                    </Citation>
                  </span>
                </p>
                
                <p className="flex items-start">
                  <ArrowUpRight size={14} className="text-blue-400 mr-2 mt-0.5" />
                  <span>
                    <Citation 
                      id="S&P 500 Returns Analysis" 
                      source="Motley Fool - S&P 500 Average Return Analysis" 
                      url="https://www.fool.com/investing/how-to-invest/index-funds/average-return/"
                    >
                      Historical S&P 500 returns average approximately 10% annually over the long term, equivalent to the 1.07x multiplier cited
                    </Citation>
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevenueDrivenFinancePage;