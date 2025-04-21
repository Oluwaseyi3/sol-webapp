

import React, { useState, useEffect } from 'react';
import './App.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import cash from "./images/cash.png";
import fx from "./images/fx.jpg";
import { motion } from 'framer-motion';

function App() {
  const [copied, setCopied] = useState({ cash: false, prntr: false });
  const [activeToken, setActiveToken] = useState('cash');
  const [activeTab, setActiveTab] = useState('cash');

  const addresses = {
    cash: "CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK",
    prntr: "PRNTR9DLzZGj7KKMoXgqMsbzLsWfThjYyRpz9WU95VK"
  };


  const platforms = [
    {
      name: 'DexTools',
      url: 'https://www.dextools.io/',
      logo: 'https://via.placeholder.com/40x40?text=DT', // Replace with actual logo
    },
    {
      name: 'DexScreener',
      url: 'https://dexscreener.com/',
      logo: 'https://via.placeholder.com/40x40?text=DS', // Replace with actual logo
    },
    {
      name: 'GMGN',
      url: 'https://gmgn.ai/',
      logo: 'https://via.placeholder.com/40x40?text=GM', // Replace with actual logo
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleCopy = async (token) => {
    try {
      await navigator.clipboard.writeText(addresses[token]);
      setCopied({ ...copied, [token]: true });
      setTimeout(() => setCopied({ ...copied, [token]: false }), 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Animation settings for sections to animate when they come into view
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  // Control navbar transparency on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-sans overflow-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-4 lg:py-6'}`}>
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl lg:text-2xl font-bold text-green-400">$CASH</h1>
            <span className="text-gray-400">|</span>
            <h1 className="text-xl lg:text-2xl font-bold text-purple-400">$PRNTR</h1>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#dual-system" className="hover:text-green-400 transition-colors">Dual System</a>
            <a href="#how-it-works" className="hover:text-green-400 transition-colors">How It Works</a>

            <a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-4">
            <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="hidden lg:block px-4 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all duration-300">
              Buy $CASH
            </a>
            <a href="https://jup.ag/tokens/PRNTR9DLzZGj7KKMoXgqMsbzLsWfThjYyRpz9WU95VK" className="hidden lg:block px-4 py-2 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-black transition-all duration-300">
              Buy $PRNTR
            </a>
            <a href="https://solcashmachine.com/casino" className="px-3 py-2 lg:px-6 lg:py-2 bg-green-400 text-black text-sm lg:text-base font-medium rounded-md hover:bg-green-500 transition-all duration-300">
              Casino
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Gradient Background */}
      <div className="relative flex items-center pt-16 lg:pt-20 pb-10 overflow-hidden md:min-h-0 sm:min-h-0">
        {/* Background Animation */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-[500px] bottom-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="absolute w-full lg:w-3/4 h-[2px] top-1/2 left-0 bg-gradient-to-r from-green-400 to-blue-500 blur-sm"></div>
          <div className="absolute w-full lg:w-1/2 h-[3px] top-[55%] left-0 bg-gradient-to-r from-purple-500 to-green-400 blur-md"></div>
          <div className="absolute w-full lg:w-2/3 h-[2px] top-[60%] left-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 lg:pt-10 pt-0 lg:px-6 z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 pt-12 lg:pt-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                The <span className='text-green-400'>$CASH</span>  Ecosystem:
                <span className="block text-2xl pt-2 sm:text-3xl lg:text-4xl  mt-2"> Solana Cash Machine <span className='text-green-400'>($CASH)</span> + <br /> CASH Printer <span className='text-green-400'>($PRNTR)</span></span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                A dual-token system powering the fastest rewards on Solana. $CASH provides USDT rewards, while $PRNTR prints more $CASH for holders.
              </p>

              <div className="flex flex-wrap gap-3 lg:gap-4 pt-4 lg:pt-6">
                <button onClick={() => setActiveTab('cash')} className={`w-full sm:w-auto px-6 py-3 font-medium rounded-md transition-all duration-300 ${activeTab === 'cash' ? 'bg-green-400 text-black' : 'bg-black/30 border border-gray-700 hover:border-green-400'}`}>
                  $CASH
                </button>
                <button onClick={() => setActiveTab('prntr')} className={`w-full sm:w-auto px-6 py-3 font-medium rounded-md transition-all duration-300 ${activeTab === 'prntr' ? 'bg-purple-400 text-black' : 'bg-black/30 border border-gray-700 hover:border-purple-400'}`}>
                  $PRNTR
                </button>
                <a href="https://solcashmachine.com/casino" className="w-full sm:w-auto px-6 py-3 border border-white/30 text-center hover:border-green-400 rounded-md hover:bg-black/30 transition-all duration-300">
                  $CASH Casino
                </a>
              </div>

              {activeTab === 'cash' && (
                <div className="space-y-4 animate-fadeIn">


                  <div className="flex justify-start space-x-4">
                    <a href="https://x.com/SOLCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                      <FaXTwitter />
                    </a>
                    <a href="https://t.me/SolanaCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                      <FaTelegram />
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">$CASH Contract Address:</p>
                    <div className="relative inline-block w-full">
                      <p
                        onClick={() => handleCopy('cash')}
                        className="text-xs sm:text-sm font-mono bg-black/30 p-2 rounded-md border border-gray-800 mt-1 overflow-auto whitespace-nowrap cursor-pointer hover:bg-black/40 transition"
                        title={copied.cash ? "Copied!" : "Click to copy"}
                      >
                        {addresses.cash}
                      </p>
                      {copied.cash && (
                        <div className="absolute top-0 right-0 mt-[-30px] mr-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md opacity-90">
                          Copied!
                        </div>
                      )}
                    </div>
                  </div>


                  <div>
                    <p className="text-sm text-gray-400">$PRNTR Contract Address:</p>
                    <div className="relative inline-block w-full">
                      <p
                        onClick={() => handleCopy('cash')}
                        className="text-xs sm:text-sm font-mono bg-black/30 p-2 rounded-md border border-gray-800 mt-1 overflow-auto whitespace-nowrap cursor-pointer hover:bg-black/40 transition"
                        title={copied.cash ? "Copied!" : "Click to copy"}
                      >
                        Coming soon
                      </p>

                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'prntr' && (
                <div className="space-y-4 animate-fadeIn">
                  <h2 className="text-xl font-bold text-purple-400">$CASH Printer</h2>
                  <p className="text-gray-300">Prints $CASH tokens directly to your wallet - the ultimate $CASH generation machine.</p>

                  <div className="flex justify-start space-x-4">
                    <a href="https://x.com/SOLCashPrinter" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <FaXTwitter />
                    </a>
                    <a href="https://t.me/SOLCashPrinter" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <FaTelegram />
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">$PRNTR Contract Address:</p>
                    <div className="relative inline-block w-full">
                      <p
                        onClick={() => handleCopy('prntr')}
                        className="text-xs sm:text-sm font-mono bg-black/30 p-2 rounded-md border border-gray-800 mt-1 overflow-auto whitespace-nowrap cursor-pointer hover:bg-black/40 transition"
                        title={copied.prntr ? "Copied!" : "Click to copy"}
                      >
                        {addresses.prntr}
                      </p>
                      {copied.prntr && (
                        <div className="absolute top-0 right-0 mt-[-30px] mr-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md opacity-90">
                          Copied!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative hidden lg:block">
              {activeTab === 'cash' ? (
                <img src={fx} alt="Cash Machine" className="rounded-lg shadow-2xl animate-fadeIn" />
              ) : (
                <img src={fx} alt="Cash Printer" className="rounded-lg shadow-2xl animate-fadeIn" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-green-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h6 className="text-green-400 font-medium text-lg tracking-wider mb-3">TRUSTED PLATFORMS</h6>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Track Our Tokens
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Monitor the performance of $CASH and $PRNTR on leading decentralized platforms.
            </p>
          </div>

          {/* Token Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800/50 backdrop-blur-md rounded-full p-1 border border-gray-700">
              <button
                onClick={() => setActiveToken('cash')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeToken === 'cash'
                  ? 'bg-green-400 text-black shadow-lg'
                  : 'text-gray-400 hover:text-green-400'
                  }`}
              >
                $CASH
              </button>
              <button
                onClick={() => setActiveToken('prntr')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeToken === 'prntr'
                  ? 'bg-purple-400 text-black shadow-lg'
                  : 'text-gray-400 hover:text-purple-400'
                  }`}
              >
                $PRNTR
              </button>
            </div>
          </div>

          {/* Platform Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-center hover:border-green-400/50 hover:bg-gray-800/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={cardVariants}
              >
                <div className="flex justify-center mb-4">
                  {/* <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  /> */}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                  {platform.name}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  View {activeToken === 'cash' ? '$CASH' : '$PRNTR'} stats
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dual Token System Section */}
      <div id="dual-system" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h6 className="text-green-400 font-medium mb-3">THE ECOSYSTEM</h6>
            <h2 className="text-3xl md:text-5xl font-bold">Dual-Token Reward System</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              Discover how our innovative dual-token ecosystem maximizes your rewards through synergistic tokenomics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-400/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-400 to-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-green-400/20">
                  <span className="font-bold text-lg">$</span>
                </div>
                <h3 className="text-2xl font-bold ml-4 text-green-400"> Solana Cash Machine  ($CASH)</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">5% tax on every transaction</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">3% converts to USDT and distributed as rewards</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">1% goes to marketing and development</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">1% goes to buy backs</span>
                </li>
              </ul>

              <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="block w-full text-center mt-8 py-3 bg-green-400 text-black font-medium rounded-md hover:bg-green-500 transition-colors">
                Buy $CASH
              </a>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-purple-400/20">
                  <span className="font-bold text-lg">P</span>
                </div>
                <h3 className="text-2xl font-bold ml-4 text-purple-400">CASH Printer ($PRNTR)</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-purple-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">10% tax on every transaction</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">5% buys $CASH and distributes to $PRNTR holders</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">3% goes to marketing and development</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">2% gets burned</span>
                </li>
              </ul>

              <a href="https://jup.ag/tokens/PRNTR9DLzZGj7KKMoXgqMsbzLsWfThjYyRpz9WU95VK" className="block w-full text-center mt-8 py-3 bg-purple-400 text-black font-medium rounded-md hover:bg-purple-500 transition-colors">
                Buy $PRNTR
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h6 className="text-green-400 font-medium mb-3">PROCESS</h6>
            <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              Understanding the mechanics behind the Solana Cash Machine ecosystem and how it generates rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl hover:border-green-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 text-black w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Buy & Hold</h3>
              <p className="text-gray-400">
                Purchase $CASH or $PRNTR tokens on Jupiter or your preferred DEX. Simply holding tokens qualifies you for automatic rewards.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl hover:border-green-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 text-black w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Contracts Work</h3>
              <p className="text-gray-400">
                Our contracts automatically handle tax collection, conversion to rewards, and distribution. No staking or claiming required.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl hover:border-green-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 text-black w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Receive Rewards</h3>
              <p className="text-gray-400">
                $CASH holders receive USDT rewards while $PRNTR holders receive $CASH tokens directly to their wallets every few minutes.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Stats Section */}




      {/* Casino Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h6 className="text-green-400 font-medium">PLAY & EARN</h6>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Solana Cash Casino
              </h2>
              <p className="text-gray-300 text-lg">
                Experience the thrill of our Solana Cash Casino, where $CASH and $PRNTR tokens unite for an unparalleled gaming experience.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Classic casino games including dice, coin flip, crash and more</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Use $CASH to play and win more tokens</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Every bet generates rewards for all $CASH holders</span>
                </div>
              </div>

              <a href="https://solcashmachine.com/casino" className="inline-block px-8 py-3 mt-4 bg-green-400 text-black font-medium rounded-md hover:bg-green-500 transition-colors">
                $CASH Casino
              </a>
            </div>



          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h6 className="text-green-400 font-medium mb-3">QUESTIONS</h6>
            <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              Everything you need to know about the Solana Cash ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all">
              <h3 className="text-xl font-bold mb-4">How do I receive rewards?</h3>
              <p className="text-gray-400">
                Simply hold $CASH tokens in your wallet to receive USDT rewards every few minutes automatically. For $PRNTR holders, you'll receive $CASH tokens directly with each transaction in the ecosystem.
              </p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all">
              <h3 className="text-xl font-bold mb-4">Where can I buy tokens?</h3>
              <p className="text-gray-400">
                Both $CASH and $PRNTR are available on Jupiter Aggregator and other Solana DEXs. You can use the "Buy" buttons on our website to go directly to Jupiter swap interface.
              </p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all">
              <h3 className="text-xl font-bold mb-4">Which token should I buy?</h3>
              <p className="text-gray-400">
                Both tokens offer unique benefits. $CASH provides steady USDT rewards, while $PRNTR gives you more $CASH over time. For maximum returns, holding both is recommended to benefit from both reward streams.
              </p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all">
              <h3 className="text-xl font-bold mb-4">Is there a minimum holding requirement?</h3>
              <p className="text-gray-400">
                There's no minimum amount to start earning rewards, but larger holdings receive proportionally higher rewards. We recommend holding at least 10,000 $CASH or 1,000 $PRNTR to see meaningful rewards.
              </p>
            </div>



          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-purple-500 to-blue-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-400"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Earning?
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="px-8 py-3 bg-green-400 text-black font-medium rounded-md hover:bg-green-500 transition-colors">
                Buy $CASH
              </a>
              <a href="https://jup.ag/tokens/PRNTR9DLzZGj7KKMoXgqMsbzLsWfThjYyRpz9WU95VK" className="px-8 py-3 bg-purple-400 text-black font-medium rounded-md hover:bg-purple-500 transition-colors">
                Buy $PRNTR
              </a>
              <a href="https://solcashmachine.com/casino" className="px-8 py-3 border border-white/30 rounded-md hover:bg-black/30 hover:border-green-400 transition-all">
                $CASH Casino
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-green-400">$CASH</h1>
                <span className="text-gray-400">|</span>
                <h1 className="text-xl font-bold text-purple-400">$PRNTR</h1>
              </div>
              <p className="text-gray-400">
                The most innovative dual-token reward system on Solana.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://x.com/SOLCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                  <FaXTwitter size={20} />
                </a>
                <a href="https://t.me/SolanaCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                  <FaTelegram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#dual-system" className="text-gray-400 hover:text-green-400 transition-colors">Dual System</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors">How It Works</a></li>
                <li><a href="#tokenomics" className="text-gray-400 hover:text-green-400 transition-colors">Tokenomics</a></li>
              </ul>
            </div>


            <div>
              <h4 className="text-lg font-medium mb-4">Exchanges</h4>
              <ul className="space-y-2">
                <li><a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="text-gray-400 hover:text-green-400 transition-colors">Jupiter (CASH)</a></li>
                <li><a href="https://jup.ag/tokens/PRNTR9DLzZGj7KKMoXgqMsbzLsWfThjYyRpz9WU95VK" className="text-gray-400 hover:text-green-400 transition-colors">Jupiter (PRNTR)</a></li>
                <li><a href="https://raydium.io/swap/" className="text-gray-400 hover:text-green-400 transition-colors">Raydium</a></li>
                <li><a href="https://dexscreener.com" className="text-gray-400 hover:text-green-400 transition-colors">DexScreener</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 Solana Cash Ecosystem. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;





