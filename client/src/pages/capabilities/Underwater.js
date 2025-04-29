import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplet, 
  Cpu, 
  Wind, 
  Server, 
  Globe,
  Shield, 
  Clock, 
  ChevronRight,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Zap
} from 'lucide-react';

// Components
const PageHeader = ({ title, subtitle, backgroundImage }) => (
  <div className="relative h-96 overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">{title}</h1>
      <p className="text-xl text-gray-300 max-w-3xl text-center">{subtitle}</p>
    </div>
  </div>
);

const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gray-500/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  </div>
);

const UnderwaterDataCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tech grid lines
  const TechGrid = () => (
    <div className="absolute inset-0 z-0">
      <div className="absolute w-full h-full grid grid-cols-12 gap-px opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-gray-300 h-full"></div>
        ))}
      </div>
      <div className="absolute w-full h-full grid grid-rows-12 gap-px opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-b border-gray-300 w-full"></div>
        ))}
      </div>
    </div>
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Scan line animation
  const ScanLine = () => (
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400/10 to-transparent h-32"
      animate={{
        top: ["-10%", "110%"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );

  return (
    <>
      <PageHeader 
        title="BILOXI UNDERWATER DATA CENTER" 
        subtitle="Pioneering the Future of Sustainable Computing on the Mississippi Gulf Coast"
        backgroundImage="/images/project-underwater.jpg"
      />

      {/* Project Overview */}
      <section className="py-20 bg-black relative overflow-hidden">
        <ParticleBackground />
        <TechGrid />
        <ScanLine />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-black rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Underwater Innovation
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Project <span className="text-gray-400">Overview</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg relative group mb-12"
            >
              <motion.div 
                className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
                animate={{ 
                  boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                The Biloxi Underwater Data Center represents a revolutionary approach to digital infrastructure, leveraging the natural resources of the Mississippi Gulf Coast to create one of the world's most efficient, sustainable, and reliable data processing facilities. By placing our computing infrastructure beneath the Gulf of Mexico's waters, we're harnessing natural cooling capabilities to dramatically reduce energy consumption while providing faster connectivity to the region.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This pioneering project builds on proven concepts, including Microsoft's groundbreaking Project Natick, which demonstrated that submersible data centers are not only feasible but can deliver remarkable performance advantages.
                <sup className="text-gray-400 ml-1">[<a href="https://news.microsoft.com/source/features/sustainability/project-natick-underwater-datacenter/" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">1</a>]</sup>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <TechGrid />
        <ScanLine />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Performance Metrics
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Key <span className="text-gray-400">Advantages</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AdvantageCard 
              icon={<Droplet size={36} />}
              title="87% Reduction in Cooling Costs"
              description="Cooling typically accounts for approximately 40% of a data center's total electricity consumption. By using the naturally cool Gulf waters as our primary cooling mechanism, we eliminate the need for energy-intensive artificial cooling systems that traditional land-based data centers require. The cold seawater serves as a natural refrigerator for our servers, providing immediate cost savings by eliminating expensive chillers and mechanical cooling systems."
              citation="[2] InformationWeek (2024), [3] Samsung C&T (2024), [6] The Liquid Grid (2024), [10] Greentech Media (2016)"
              variants={itemVariants}
            />
            
            <AdvantageCard 
              icon={<Cpu size={36} />}
              title="30% Higher Compute Density"
              description="Our underwater data center design allows for significantly higher server density than conventional facilities. The efficient water cooling system can handle very high power densities, including those required by GPU-packed servers used for AI workloads and high-performance computing tasks. This higher density translates to more processing power in a smaller footprint."
              citation="[1] Data Center Knowledge (2024), [17] Freethink (2024)"
              variants={itemVariants}
            />
            
            <AdvantageCard 
              icon={<Wind size={36} />}
              title="10x Lower Operating Costs on Gulf Coast"
              description="The Mississippi Gulf Coast offers unique advantages for underwater data center deployment. Companies like Subsea Cloud have already recognized the Gulf of Mexico's potential, with plans for their Njord01 deployment at depths of 700-900 feet in the Gulf. Industry experts estimate seabed data centers can reduce construction costs by up to 90% compared to land-based facilities, with significant savings in deployment and maintenance."
              citation="[15] DGTL Infra (2024), [26] Euronews (2022)"
              variants={itemVariants}
            />
            
            <AdvantageCard 
              icon={<Server size={36} />}
              title="8x Lower Server Failure Rate"
              description="Microsoft's underwater data center experiment demonstrated remarkable reliability improvements, with failure rates eight times lower than comparable land-based facilities. Their Northern Isles underwater data center had only a 0.7% server failure rate, compared to 5.9% in a traditional data center. This improved reliability comes from the consistently cool environment and the absence of oxygen and humidity, which typically contribute to hardware degradation."
              citation="[9] Tom's Hardware (2024), [24] University of Florida (2024), [25] Data Center Knowledge (2024)"
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="py-20 bg-black relative overflow-hidden">
        <ParticleBackground />
        <TechGrid />
        <ScanLine />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-black rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Advanced Systems
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Technology <span className="text-gray-400">Highlights</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>

          <div className="space-y-12">
            <TechnologyCard 
              title="Natural Thermal Regulation"
              description="Our sealed data center tubes maintain consistent temperatures by using the surrounding ocean water to absorb heat from the servers. This steady temperature prevents uneven expansion and contraction of computer components, further reducing hardware failures."
              citation="[21] CleanTechnica (2022)"
              image="/images/thermal-regulation.jpg"
            />
            
            <TechnologyCard 
              title="Advanced Heat Exchange Systems"
              description="Taking inspiration from submarine cooling technology, our system pulls raw seawater through specialized heat exchangers at the back of the server racks and discharges it back into the ocean. The water flow is carefully managed to prevent biofouling and ensure optimal thermal transfer."
              citation="[1] Data Center Knowledge (2024), [6] The Liquid Grid (2024)"
              image="/images/heat-exchange.jpg"
              reversed
            />
            
            <TechnologyCard 
              title="Environmental Monitoring"
              description="Our facility includes comprehensive sensors to monitor both internal conditions and the surrounding marine environment, ensuring optimal operation without disrupting local ecosystems."
              image="/images/environmental-monitoring.jpg"
            />
            
            <TechnologyCard 
              title="Renewable Energy Integration"
              description="The Mississippi Gulf Coast's offshore environment provides opportunities to integrate renewable energy sources, including wind and tidal power. The data center can be co-located with offshore renewable energy installations to create a sustainable computing ecosystem."
              citation="[2] InformationWeek (2024), [7] Microsoft News (2023)"
              image="/images/renewable-energy.jpg"
              reversed
            />
          </div>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <TechGrid />
        
        {/* Moving tech elements background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"
              style={{
                left: 0,
                right: 0,
                top: `${20 + i * 15}%`,
                opacity: 0.6 - i * 0.1,
              }}
              animate={{
                left: ["-100%", "100%"],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Strategic Benefits
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Strategic <span className="text-gray-400">Advantages</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StrategicCard 
              icon={<Globe size={30} />}
              title="Coastal Population Service"
              description="With more than half the world's population living within 120 miles of coastlines, our underwater data center is strategically positioned to provide high-speed, low-latency connectivity to the growing Gulf Coast population and businesses."
              citation="[2] InformationWeek (2024), [7] Microsoft News (2023)"
            />
            
            <StrategicCard 
              icon={<Shield size={30} />}
              title="Natural Disaster Resilience"
              description="The underwater environment provides natural protection from many disasters that threaten land-based facilities, including hurricanes, flooding, and other extreme weather events common to the Gulf Coast region."
            />
            
            <StrategicCard 
              icon={<MapPin size={30} />}
              title="Reduced Land Use"
              description="By utilizing underwater space, we preserve valuable coastal land for other purposes while still providing critical digital infrastructure to the region."
            />
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-black relative">
        <ParticleBackground />
        <TechGrid />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-black rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Development Schedule
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Project <span className="text-gray-400">Timeline</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-600/30"></div>

            <div className="space-y-16">
              <TimelineItem 
                period="Q3-Q4 2025"
                title="Prototyping and Engineering Validation"
                description="Initial prototyping phase to validate the underwater data center design, thermal exchange systems, and environmental monitoring capabilities."
                side="left"
              />
              
              <TimelineItem 
                period="Q1-Q2 2026"
                title="First Module Deployment and Testing"
                description="Deployment of the first underwater data center module in the Gulf of Mexico, with comprehensive thermal efficiency and performance testing."
                side="right"
              />
              
              <TimelineItem 
                period="Q3-Q4 2026"
                title="Full Operational Capability"
                description="Transition to full operational status, with integration of all monitoring systems and connection to the coastal fiber optic network."
                side="left"
              />
              
              <TimelineItem 
                period="2027 and beyond"
                title="Expansion of Capacity"
                description="Phased expansion of underwater data center capacity based on demand and performance metrics from initial modules."
                side="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <TechGrid />
        <ScanLine />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Sustainability
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              Environmental <span className="text-gray-400">Commitment</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-48 h-px bg-gradient-to-r from-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg relative group"
          >
            <motion.div 
              className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
              animate={{ 
                boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Biloxi Underwater Data Center is designed with sustainability as a core principle. Beyond energy efficiency, our facility eliminates freshwater consumption for cooling—a significant advantage in preserving local water resources.<sup className="text-gray-400 ml-1">[<a href="https://news.microsoft.com/source/features/sustainability/project-natick-underwater-datacenter/" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">7</a>, <a href="https://news.ufl.edu/2024/05/underwater-data-center-security/" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">24</a>]</sup> Our sealed environments are engineered to minimize impact on marine ecosystems, and in some cases, the external structures can serve as artificial reefs, potentially enhancing local marine habitats.<sup className="text-gray-400 ml-1">[<a href="https://cleantechnica.com/2022/09/26/underwater-data-centers-could-be-a-great-way-to-lower-environmental-impacts/" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">21</a>]</sup>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-700/30">
                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                  <Droplet className="mr-3 text-blue-400" size={24} />
                  Zero Freshwater Usage
                </h3>
                <p className="text-gray-400">
                  By using seawater for cooling, our facility eliminates the need for precious freshwater resources typically consumed by traditional data centers.
                </p>
              </div>
              
              <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-700/30">
                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                  <Wind className="mr-3 text-blue-400" size={24} />
                  Renewable Energy
                </h3>
                <p className="text-gray-400">
                  Our facility is designed to integrate with offshore renewable energy sources, reducing our carbon footprint and dependency on fossil fuels.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-black relative overflow-hidden">
        <ParticleBackground />
        
        {/* Tech grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-gray-800/10 to-gray-900/20"></div>
          <div className="absolute inset-0 grid grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-gray-500/5 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-b border-gray-500/5 w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Scan line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400/10 to-transparent h-32"
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center p-10 border border-gray-700/20 rounded-xl bg-gradient-to-b from-gray-900/80 to-black/80 relative overflow-hidden shadow-2xl">
              {/* Tech decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/40 to-transparent"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gray-500/30"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gray-500/30"></div>
              
              <motion.div 
                className="mb-6 p-3 bg-gray-900/20 inline-block rounded-full border border-gray-700/30"
                animate={{
                  boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 20px 5px rgba(75,85,99,0.15)", "0 0 0px 0px rgba(75,85,99,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Mail size={30} className="text-gray-300" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                Contact <span className="text-gray-400">Information</span>
              </h2>
              
              <div className="space-y-4 text-center mb-8">
                <div className="flex items-center justify-center">
                  <Mail size={18} className="text-gray-400 mr-3" />
                  <span className="text-gray-300">info@biloxiUDC.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone size={18} className="text-gray-400 mr-3" />
                  <span className="text-gray-300">(228) 555-1234</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin size={18} className="text-gray-400 mr-3" />
                  <span className="text-gray-300">100 Beach Boulevard, Biloxi, MS 39530</span>
                </div>
              </div>
              
              <button 
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-medium rounded-md transition-all duration-300 inline-flex items-center shadow-lg shadow-black/20 group border border-gray-600/30"
              >
                Schedule a Discussion
                <motion.div
                  className="ml-2"
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-gray-950 relative">
        <TechGrid />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-px bg-gradient-to-r from-gray-700/40 via-gray-400/40 to-gray-700/40 rounded-md mb-4">
              <div className="px-4 py-1 bg-gray-950 rounded-md text-sm text-gray-400 uppercase tracking-wider">
                Information Sources
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 relative inline-block">
              References <span className="text-gray-400">& Citations</span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-48 h-px bg-gradient-to-r from-gray-500/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-sm">
              <div>
                <p>[1] Data Center Knowledge (2024). <a href="https://www.datacenterknowledge.com/microsoft/why-microsoft-thinks-underwater-data-centers-may-cost-less" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Why Microsoft Thinks Underwater Data Centers May Cost Less</a></p>
                <p>[2] InformationWeek (2024). <a href="https://www.informationweek.com/sustainability/is-the-future-of-data-centers-under-the-sea-" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Is the Future of Data Centers Under the Sea?</a></p>
                <p>[3] Samsung C&T (2024). <a href="https://news.samsungcnt.com/en/features/engineering-construction/2024-08-data-center-cooling-is-the-future-underwater/" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Data Center Cooling: Is the Future Underwater?</a></p>
                <p>[6] The Liquid Grid (2024). <a href="https://theliquidgrid.com/underwater-data-centers/" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Underwater Data Centers</a></p>
                <p>[7] Microsoft News (2023). <a href="https://news.microsoft.com/source/features/sustainability/project-natick-underwater-datacenter/" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Microsoft finds underwater datacenters are reliable, practical and use energy sustainably</a></p>
                <p>[9] Tom's Hardware (2024). <a href="https://www.tomshardware.com/desktops/servers/microsoft-shelves-its-underwater-data-center" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Microsoft shelves its underwater data center</a></p>
              </div>
              <div>
                <p>[10] Greentech Media (2016). <a href="https://www.greentechmedia.com/articles/read/microsoft-built-a-super-efficient-underwater-data-center" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Microsoft Built a Super-Efficient Underwater Data Center</a></p>
                <p>[15] DGTL Infra (2024). <a href="https://dgtlinfra.com/underwater-data-centers-servers/" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Underwater Data Centers: Servers Beneath the Surface</a></p>
                <p>[17] Freethink (2024). <a href="https://www.freethink.com/energy/future-of-data-centers" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">The future of data centers — on land, at sea, and in space</a></p>
                <p>[21] CleanTechnica (2022). <a href="https://cleantechnica.com/2022/09/26/underwater-data-centers-could-be-a-great-way-to-lower-environmental-impacts/" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Underwater Data Centers Could Be A Great Way To Lower Environmental Impacts</a></p>
                <p>[24] University of Florida (2024). <a href="https://news.ufl.edu/2024/05/underwater-data-center-security/" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Underwater data centers are the future. But a speaker system could cripple them.</a></p>
                <p>[26] Euronews (2022). <a href="https://www.euronews.com/next/2022/08/31/underwater-data-centres-are-coming-can-they-slash-co2-emissions-and-make-the-internet-fast" className="text-gray-300 hover:text-white underline" target="_blank" rel="noopener noreferrer">Are underwater data centres the future of the Internet?</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            © 2025 Reticuli Technologies All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

// Advantage Card Component
const AdvantageCard = ({ icon, title, description, citation, variants }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/20 p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 relative group h-full flex flex-col"
      variants={variants}
      whileHover={{ 
        boxShadow: "0 10px 30px 0 rgba(0,0,0,0.5), 0 0 30px 0 rgba(75,85,99,0.1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="text-gray-400 mb-4 p-3 bg-gray-900/20 inline-block rounded-full border border-gray-700/30">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-100 mb-4 group-hover:text-gray-50 transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{description}</p>
      
      {citation && (
        <div className="mt-4 text-gray-500 text-xs">
          Sources: {citation}
        </div>
      )}
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Technology Card Component
const TechnologyCard = ({ title, description, citation, image, reversed }) => {
  return (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 rounded-lg overflow-hidden relative group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        boxShadow: "0 0 30px 0 rgba(0,0,0,0.2), 0 0 15px 0 rgba(75,85,99,0.1)",
      }}
    >
      <motion.div 
        className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 md:hidden"></div>
        <div 
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${image || '/images/placeholder.jpg'})` }}
        ></div>
        
        {/* Tech overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-transparent to-transparent opacity-50"></div>
        
        {/* Scan effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400/10 to-transparent h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            top: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="md:w-3/5 p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        
        {citation && (
          <div className="mt-4 text-gray-500 text-xs">
            Sources: {citation}
          </div>
        )}
      </div>
      
      {/* Tech decoration */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Strategic Card Component
const StrategicCard = ({ icon, title, description, citation }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/10 p-8 rounded-lg relative group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        boxShadow: "0 0 30px 0 rgba(0,0,0,0.2), 0 0 15px 0 rgba(75,85,99,0.1)",
        y: -5
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      
      <motion.div 
        className="absolute inset-0 border border-gray-400/0 rounded-lg group-hover:border-gray-400/20 transition-all duration-500"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 1px rgba(75,85,99,0.1)", "0 0 0px 0px rgba(75,85,99,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="text-gray-400 mb-4 p-3 bg-gray-900/20 inline-block rounded-full border border-gray-700/30 group-hover:text-gray-300 transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{description}</p>
      
      {citation && (
        <div className="mt-4 text-gray-500 text-xs">
          Sources: {citation}
        </div>
      )}
      
      {/* Tech decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Timeline Item Component
const TimelineItem = ({ period, title, description, side }) => {
  return (
    <motion.div 
      className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center`}
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`w-1/2 ${side === 'left' ? 'pr-12 text-right' : 'pl-12'}`}>
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{period}</span>
        <h3 className="text-xl font-bold text-gray-100 mt-1 mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      
      <motion.div 
        className="w-8 h-8 bg-gray-700 rounded-full border-4 border-black z-10 flex items-center justify-center relative"
        whileHover={{ scale: 1.2 }}
        animate={{
          boxShadow: ["0 0 0px 0px rgba(75,85,99,0)", "0 0 10px 2px rgba(75,85,99,0.3)", "0 0 0px 0px rgba(75,85,99,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </motion.div>
      
      <div className="w-1/2"></div>
    </motion.div>
  );
};

export default UnderwaterDataCenter;