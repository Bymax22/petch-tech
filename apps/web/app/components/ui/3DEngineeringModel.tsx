"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2,
  Cpu,
  Settings,
  Wrench,
  Factory,
  Sparkles,
  Target,
  Info,
  X
} from "lucide-react";
import Image from "next/image";

const engineeringModels = [
  {
    id: "pump",
    name: "Centrifugal Pump",
    category: "Mechanical",
    description: "Industrial slurry pump with wear-resistant components for mining applications",
    image: "/3d1.jpg", // Store in public/images/3d/
    icon: Settings,
    parts: [
      { name: "Impeller", description: "Rotating component that transfers energy to the fluid", color: "from-blue-500 to-cyan-500" },
      { name: "Volute Casing", description: "Converts kinetic energy to pressure energy", color: "from-purple-500 to-pink-500" },
      { name: "Shaft", description: "Transmits torque from motor to impeller", color: "from-gray-500 to-slate-500" },
      { name: "Bearings", description: "Supports the shaft and reduces friction", color: "from-green-500 to-emerald-500" },
      { name: "Seals", description: "Prevents leakage along the shaft", color: "from-yellow-500 to-amber-500" },
    ],
  },
  {
    id: "control-panel",
    name: "Control Panel",
    category: "Electrical",
    description: "Motor control center with PLC and advanced safety systems",
    image: "/elec.jpg",
    icon: Cpu,
    parts: [
      { name: "PLC", description: "Programmable Logic Controller for automation", color: "from-blue-500 to-indigo-500" },
      { name: "Circuit Breakers", description: "Protects electrical circuits from overload", color: "from-red-500 to-orange-500" },
      { name: "Contactors", description: "Electrically controlled switch for motors", color: "from-green-500 to-teal-500" },
      { name: "Relays", description: "Switches electrical signals", color: "from-yellow-500 to-amber-500" },
      { name: "HMI", description: "Human Machine Interface for operator control", color: "from-purple-500 to-pink-500" },
    ],
  },
  {
    id: "structural",
    name: "Steel Structure",
    category: "Civil",
    description: "Industrial building structural framework with seismic resistance",
    image: "/i5.jpg",
    icon: Factory,
    parts: [
      { name: "Columns", description: "Vertical structural members carrying load", color: "from-gray-500 to-slate-500" },
      { name: "Beams", description: "Horizontal structural members supporting floors", color: "from-blue-500 to-cyan-500" },
      { name: "Trusses", description: "Triangular framework for roof support", color: "from-green-500 to-emerald-500" },
      { name: "Bracing", description: "Diagonal members providing lateral stability", color: "from-orange-500 to-red-500" },
      { name: "Connections", description: "Bolted or welded joints between members", color: "from-yellow-500 to-amber-500" },
    ],
  },
  {
    id: "piping",
    name: "Process Piping",
    category: "Mechanical",
    description: "Industrial process piping with instrumentation and safety valves",
    image: "/pip.jpg",
    icon: Wrench,
    parts: [
      { name: "Pipes", description: "Conduits for fluid transport under pressure", color: "from-blue-500 to-indigo-500" },
      { name: "Valves", description: "Controls flow rate, pressure, and direction", color: "from-green-500 to-emerald-500" },
      { name: "Fittings", description: "Connects and redirects pipe sections", color: "from-orange-500 to-red-500" },
      { name: "Supports", description: "Holds piping in position and absorbs stress", color: "from-gray-500 to-slate-500" },
      { name: "Instruments", description: "Measures and controls process variables", color: "from-purple-500 to-pink-500" },
    ],
  },
];

export default function Engineering3DModel() {
  const [selectedModel, setSelectedModel] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [activePart, setActivePart] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  const currentModel = engineeringModels[selectedModel];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setRotation((prev) => (prev + 0.5) % 360);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setRotation((prev) => (prev + deltaX * 0.5) % 360);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
  };

  const handleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && containerRef.current) {
        await containerRef.current.requestFullscreen();
        setFullscreen(true);
      } else {
        await document.exitFullscreen();
        setFullscreen(false);
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handlePartClick = (partName: string) => {
    setActivePart(partName === activePart ? null : partName);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Interactive Engineering
          </span>
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
          Explore Our <span className="text-primary">Engineering Models</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Interact with detailed 3D models of our engineering solutions. Click parts for details.
        </p>
      </div>

      {/* Main 3D Viewer */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
        {/* 3D Viewer Container */}
        <div
          ref={containerRef}
          className={`relative ${
            fullscreen ? "fixed inset-0 z-50" : "h-[500px] md:h-[600px]"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          {/* Background Image with 3D Effect */}
          <div className="absolute inset-0">
            <Image
              src={currentModel.image}
              alt={currentModel.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* 3D Rotation Effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                transform: `rotateY(${rotation}deg) scale(${zoom})`,
                transition: isDragging.current ? 'none' : 'transform 0.3s ease',
              }}
            >
              {/* Floating Parts */}
              {currentModel.parts.map((part, index) => {
                const angle = (index * 360) / currentModel.parts.length;
                const radius = 150;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <motion.button
                    key={part.name}
                    className={`absolute w-16 h-16 rounded-xl cursor-pointer flex items-center justify-center shadow-lg backdrop-blur-sm ${
                      activePart === part.name
                        ? "ring-2 ring-accent ring-offset-2"
                        : "hover:ring-2 hover:ring-primary/50"
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePartClick(part.name)}
                    animate={{
                      y: [0, -10, 0],
                      transition: {
                        duration: 2 + index * 0.3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      },
                    }}
                  >
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br ${part.color} flex items-center justify-center`}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Part Label */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <div className="px-3 py-1 bg-black/80 text-white text-xs rounded-lg backdrop-blur-sm">
                        {part.name}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Controls Overlay */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-full px-4 py-3 shadow-xl">
            <button
              onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.2))}
              className="p-2 hover:bg-white/10 rounded-full transition-colors hover:scale-110"
              title="Zoom Out"
            >
              <ZoomOut className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={() => setRotation(0)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors hover:scale-110"
              title="Reset Rotation"
            >
              <RotateCw className="w-5 h-5 text-white" />
            </button>
            
            <div className="px-3 py-1 bg-white/10 rounded-full">
              <span className="text-sm text-white font-medium">
                {Math.round(zoom * 100)}%
              </span>
            </div>
            
            <button
              onClick={() => setZoom((prev) => Math.min(3, prev + 0.2))}
              className="p-2 hover:bg-white/10 rounded-full transition-colors hover:scale-110"
              title="Zoom In"
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={handleFullscreen}
              className="p-2 hover:bg-white/10 rounded-full transition-colors hover:scale-110"
              title={fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {fullscreen ? (
                <Minimize2 className="w-5 h-5 text-white" />
              ) : (
                <Maximize2 className="w-5 h-5 text-white" />
              )}
            </button>

            <button
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors hover:scale-110"
              title={showInfo ? "Hide Info" : "Show Info"}
            >
              <Info className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Model Info Panel */}
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-6 left-6 max-w-sm"
            >
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <currentModel.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{currentModel.name}</h4>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium mt-1">
                        {currentModel.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowInfo(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {currentModel.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Interactive 3D Model</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Click parts for details</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Active Part Details */}
          {activePart && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 max-w-sm"
            >
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-lg mb-2">{activePart}</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {currentModel.parts.find(p => p.name === activePart)?.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setActivePart(null)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <span className="text-sm text-gray-500">Click other parts to explore</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-32 pointer-events-none" />
      </div>

      {/* Model Selection */}
      <div className="mt-8">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          Select Engineering Model
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {engineeringModels.map((model, index) => (
            <motion.button
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => {
                setSelectedModel(index);
                setActivePart(null);
              }}
              className={`relative overflow-hidden rounded-xl p-4 text-left transition-all ${
                selectedModel === index
                  ? "ring-2 ring-primary bg-primary/5"
                  : "glass-effect hover:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  selectedModel === index
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"
                }`}>
                  <model.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">{model.name}</div>
                  <div className="text-xs text-muted-foreground">{model.category}</div>
                </div>
              </div>
              {selectedModel === index && (
                <motion.div
                  layoutId="activeModel"
                  className="absolute inset-0 bg-primary/5 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Parts Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 glass-effect rounded-2xl p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h4 className="font-bold text-lg mb-2">Interactive Parts</h4>
            <p className="text-sm text-muted-foreground">
              Click on any highlighted part to learn about its function
            </p>
          </div>
          <button
            onClick={() => setActivePart(null)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Clear Selection
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {currentModel.parts.map((part) => (
            <button
              key={part.name}
              onClick={() => handlePartClick(part.name)}
              className={`relative overflow-hidden rounded-lg p-4 transition-all ${
                activePart === part.name
                  ? "ring-2 ring-accent"
                  : "hover:ring-2 hover:ring-primary/30"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${part.color} opacity-10`} />
              <div className="relative">
                <div className="font-medium text-sm mb-1">{part.name}</div>
                <div className="text-xs text-muted-foreground line-clamp-2">
                  {part.description}
                </div>
              </div>
              {activePart === part.name && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent" />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Instructions */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span className="flex items-center gap-1">
            <RotateCw className="w-4 h-4" />
            Drag to rotate
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ZoomIn className="w-4 h-4" />
            Scroll to zoom
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Target className="w-4 h-4" />
            Click parts for details
          </span>
        </p>
      </div>
    </div>
  );
}