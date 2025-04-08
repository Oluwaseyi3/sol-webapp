import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-400">$CASH</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="hover:text-green-400 transition-colors">How It Works</a>
            <a href="#tokenomics" className="hover:text-green-400 transition-colors">Tokenomics</a>
            <a href="#stats" className="hover:text-green-400 transition-colors">Stats</a>
            <a href="#casino" className="hover:text-green-400 transition-colors">Casino</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            <a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="hidden md:block px-4 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all duration-300">
              Chart
            </a>
            <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="px-6 py-2 bg-green-400 text-black font-medium rounded-md hover:bg-green-500 transition-all duration-300">
              Buy Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Gradient Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute w-full h-[500px] bottom-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="absolute w-full md:w-3/4 h-[2px] top-1/2 left-0 bg-gradient-to-r from-green-400 to-blue-500 blur-sm"></div>
          <div className="absolute w-full md:w-1/2 h-[3px] top-[55%] left-0 bg-gradient-to-r from-purple-500 to-green-400 blur-md"></div>
          <div className="absolute w-full md:w-2/3 h-[2px] top-[60%] left-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-sm"></div>
        </div>

        <div className="container mx-auto px-6 z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Solana Cash Machine
                <span className="block text-green-400 mt-2">USDT Rewards Every 5 Minutes</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300">
                The world's fastest automatic rewards system on Solana. Distributing $USDT to ALL holders every few minutes - just hold to earn.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="px-8 py-3 bg-green-400 text-black font-medium rounded-md hover:bg-green-500 transition-all duration-300">
                  Buy $CASH Now
                </a>
                <a href="https://t.me/SolanaCashMachine" className="px-8 py-3 border border-white/30 hover:border-green-400 rounded-md hover:bg-black/30 transition-all duration-300">
                  Join Community
                </a>
              </div>

              <div className="pt-6">
                <p className="text-sm text-gray-400">Contract Address:</p>
                <p className="text-sm font-mono bg-black/30 p-2 rounded-md border border-gray-800 mt-1">
                  CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK
                </p>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-purple-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-medium">Real-Time Rewards</h3>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">LIVE</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Next Distribution</span>
                      <span className="font-medium">04:32</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                      <p className="text-gray-400 text-sm">Total Rewards</p>
                      <p className="text-xl font-medium mt-1">15,426 USDT</p>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                      <p className="text-gray-400 text-sm">Holders</p>
                      <p className="text-xl font-medium mt-1">2,184</p>
                    </div>
                  </div>

                  <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-green-400 p-1 rounded-md mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-300">
                        Your rewards are proportional to your holdings. The more $CASH you hold, the more $USDT you earn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="container mx-auto px-6 py-12">
            <p className="text-center text-gray-500 mb-6 text-sm">FEATURED ON</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              <div className="text-gray-400 opacity-50 hover:opacity-80 transition-opacity">
                <span className="text-xl font-medium">DexTools</span>
              </div>
              <div className="text-gray-400 opacity-50 hover:opacity-80 transition-opacity">
                <span className="text-xl font-medium">DexScreener</span>
              </div>
              <div className="text-gray-400 opacity-50 hover:opacity-80 transition-opacity">
                <span className="text-xl font-medium">GMGN</span>
              </div>
              <div className="text-gray-400 opacity-50 hover:opacity-80 transition-opacity">
                <span className="text-xl font-medium">Solana FM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h6 className="text-green-400 font-medium mb-3">MECHANICS</h6>
            <h2 className="text-3xl md:text-5xl font-bold">How Solana Cash Machine Works</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our unique reward mechanism distributes USDT to all holders automatically and continuously.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-400/20">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Transaction Tax</h3>
              <p className="text-gray-400">
                Every transaction is subject to a 5% tax, which is automatically collected by the smart contract.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-400/20">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">USDT Conversion</h3>
              <p className="text-gray-400">
                The collected tax is automatically swapped to USDT on decentralized exchanges.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-400/20">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Distribution</h3>
              <p className="text-gray-400">
                80% of tax goes to holders, 10% to buybacks, and 10% to marketing and development.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-400 to-green-500 text-black w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-400/20">
                <span className="font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Automatic Rewards</h3>
              <p className="text-gray-400">
                Rewards are distributed every 5 minutes based on your proportional holdings.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-400/5 to-purple-500/5 rounded-xl border border-white/5 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Beyond Traditional Reward Systems</h3>
                <p className="text-gray-400">
                  Unlike similar tokens, $CASH includes dedicated buyback and marketing funds to ensure continued price support and promotional activities for long-term sustainability.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <a href="https://explorer.solana.com/address/4pF7P8zfE6Xg88K54L2747KLBUSpe87Uj6aMfe42BhJ2" className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-medium rounded-md hover:from-green-500 hover:to-green-600 transition-all duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Distribution Stats
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div id="tokenomics" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-1/3 h-64 bg-green-400/5 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-0 w-1/4 h-64 bg-purple-500/5 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h6 className="text-green-400 font-medium mb-3">TOKENOMICS</h6>
            <h2 className="text-3xl md:text-5xl font-bold">Transparent Token Economics</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our unique tokenomics model focuses on sustainability, holder rewards, and long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Supply */}
            <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">Token Supply</h3>
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Total Supply</span>
                  <span>1 Billion</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                  <div className="bg-green-400 h-2 rounded-full w-full"></div>
                </div>

                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Circulating Supply</span>
                  <span>1 Billion</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                100% of the total supply is added to liquidity at launch with LP tokens locked. No team tokens, no presale allocations.
              </p>
            </div>

            {/* Transaction Tax */}
            <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">Transaction Tax</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Holder Rewards</span>
                    <span>4%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Buybacks</span>
                    <span>0.5%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Marketing</span>
                    <span>0.5%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                5% tax on every transaction ensures continuous reward generation and project sustainability.
              </p>
            </div>

            {/* Security */}
            <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">Security Features</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="bg-green-400 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Liquidity Locked 100%</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-400 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Contract Verified & Audited</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-400 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">100% Fair Launch</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-400 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Smart Contract Automation</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400">
                Our locked liquidity and fair launch model ensures that this token can NEVER be rug-pulled.
              </p>
            </div>
          </div>

          {/* Fair Launch Highlight */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-green-400/10 to-green-400/5 border border-green-400/20 rounded-xl py-4 px-8">
              <h3 className="text-2xl font-bold text-green-400 mb-2">REAL FAIR LAUNCH</h3>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-4">
                <div className="flex items-center">
                  <div className="bg-green-400/20 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">NO TEAM TOKENS</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-400/20 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">NO PRESALE</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-400/20 p-1 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">NO MAX WALLET LIMITS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h6 className="text-green-400 font-medium mb-3">KEY METRICS</h6>
            <h2 className="text-3xl md:text-5xl font-bold">Solana Cash Machine Stats</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Transparent and verifiable statistics that showcase our project's growth and stability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-green-400/30 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">1B</h3>
              <p className="text-gray-400 text-sm">Total Supply</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-green-400/30 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">5%</h3>
              <p className="text-gray-400 text-sm">Transaction Tax</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-green-400/30 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">100%</h3>
              <p className="text-gray-400 text-sm">LP Burned</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-green-400/30 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">100%</h3>
              <p className="text-gray-400 text-sm">Community Owned</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-green-400/30 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">100%</h3>
              <p className="text-gray-400 text-sm">Automated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me Section */}
      <div id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h6 className="text-green-400 font-medium mb-3">CONTACT</h6>
            <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-800">
            <p className="text-lg text-gray-300 mb-6">
              For general inquiries, please join our Telegram community. For business or partnership opportunities, please reach out via email.
            </p>
            <div className="space-y-4">
              <div>
                <h5 className="text-lg font-medium text-green-400">Telegram Community</h5>
                <p className="text-gray-300">
                  <a href="https://t.me/SolanaCashMachine" className="hover:text-green-400 transition-colors">Join our Telegram group</a>
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-green-400">Email</h5>
                <p className="text-gray-300">
                  <a href="mailto:info@solanacashmachine.com" className="hover:text-green-400 transition-colors">info@solanacashmachine.com</a>
                </p>
              </div>
              {/* You can add more contact methods here if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h6 className="text-green-400 font-medium mb-3">FAQ</h6>
            <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Find answers to common questions about Solana Cash Machine.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-2">What is Solana Cash Machine?</h4>
              <p className="text-gray-300">
                Solana Cash Machine ($CASH) is a cryptocurrency on the Solana blockchain that features an automatic USDT rewards system. Holders receive USDT directly to their wallets every 5 minutes just by holding $CASH.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-2">How do I earn USDT rewards?</h4>
              <p className="text-gray-300">
                You automatically earn USDT rewards by holding $CASH tokens in your Solana wallet. Rewards are distributed every 5 minutes based on the proportion of $CASH you hold.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-2">What is the transaction tax?</h4>
              <p className="text-gray-300">
                There is a 5% tax on every $CASH transaction. This tax is allocated as follows: 80% for USDT rewards to holders, 10% for buybacks, and 10% for marketing and development.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-2">Is Solana Cash Machine secure?</h4>
              <p className="text-gray-300">
                Yes, security is a top priority. The liquidity pool is 100% locked, and the smart contract has been verified and audited. We also had a fair launch with no team tokens or presale, ensuring a community-owned project.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-2">Where can I buy $CASH?</h4>
              <p className="text-gray-300">
                You can buy $CASH on decentralized exchanges (DEXs) on the Solana network, such as Jupiter. Links to the chart and buy options are available on our website.
              </p>
            </div>

            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h6 className="text-green-400 font-bold mb-4">$CASH</h6>
              <p className="text-gray-400 text-sm">
                The ultimate Solana cash machine, rewarding holders with USDT every 5 minutes.
              </p>
            </div>

            <div className="text-center">
              <h6 className="text-green-400 font-bold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors text-sm">How It Works</a></li>
                <li><a href="#tokenomics" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Tokenomics</a></li>
                <li><a href="#stats" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Stats</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Contact Us</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-green-400 transition-colors text-sm">FAQ</a></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h6 className="text-green-400 font-bold mb-4">Follow Us</h6>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="https://t.me/SolanaCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* Add Telegram Icon here - you might need to install a library like react-icons */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.657 8.343l-8.928 3.571c-.336.134-.336.504 0 .638l3.214 1.286 1.286 3.214c.134.336.504.336.638 0l3.571-8.928c.268-.67.067-1.407-.603-1.675-.67-.268-1.407-.067-1.675.603z" />
                  </svg>
                </a>
                {/* Add other social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Solana Cash Machine. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;