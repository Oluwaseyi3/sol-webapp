import React, { useState, useEffect } from 'react';
import './App.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import fx from "./images/fx.jpg"

function App() {
  const [copied, setCopied] = useState(false);

  const textToCopy = "CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset copied after 1.5s
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
          <div className="flex items-center">
            <h1 className="text-xl lg:text-2xl font-bold text-green-400">$CASH</h1>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#how-it-works" className="hover:text-green-400 transition-colors">How It Works</a>
            <a href="#tokenomics" className="hover:text-green-400 transition-colors">Tokenomics</a>
            <a href="#stats" className="hover:text-green-400 transition-colors">Stats</a>

            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            <a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-4">
            <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="hidden lg:block px-4 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all duration-300">
              Chart
            </a>
            <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="px-3 py-2 lg:px-6 lg:py-2 bg-green-400 text-black text-sm lg:text-base font-medium rounded-md hover:bg-green-500 transition-all duration-300">
              Buy Now
            </a>
            <a href="https://solcashmachine.ngrok.app/" className="px-3 py-2 lg:px-6 lg:py-2 bg-green-400 text-black text-sm lg:text-base font-medium rounded-md hover:bg-green-500 transition-all duration-300">
              Play $CASH Casino
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Gradient Background */}
      {/* Hero Section with Animated Gradient Background */}
      <div className="relative flex items-center pt-16 lg:pt-20 overflow-hidden md:min-h-0 sm:min-h-0">
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
                Solana Cash Machine
                <span className="block text-green-400 mt-2">USDT Rewards Every Few Minutes</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                The world's fastest automatic rewards system on Solana. Distributing $USDT to ALL holders every few minutes - just hold to earn.
              </p>

              <div className="flex flex-wrap gap-3 lg:gap-4 pt-4 lg:pt-6">
                <a href="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="w-full sm:w-auto px-6 py-3 bg-green-400 text-black text-center font-medium rounded-md hover:bg-green-500 transition-all duration-300">
                  Buy $CASH Now
                </a>
                <a href="https://solcashmachine.ngrok.app/" className="w-full sm:w-auto px-6 py-3 bg-green-400 text-black text-center font-medium rounded-md hover:bg-green-500 transition-all duration-300">
                  Play $CASH Casino
                </a>
                <a href="https://t.me/SolanaCashMachine" className="w-full sm:w-auto px-6 py-3 border border-white/30 text-center hover:border-green-400 rounded-md hover:bg-black/30 transition-all duration-300">
                  Join Community
                </a>
              </div>


              <div className="flex justify-start space-x-4">
                <a href="https://x.com/SOLCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* Add Telegram Icon here - you might need to install a library like react-icons */}
                  <FaXTwitter />

                </a>
                <a href="https://t.me/SolanaCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* Add Telegram Icon here - you might need to install a library like react-icons */}
                  <FaTelegram />

                </a>
                {/* Add other social media icons here */}
              </div>

              <div className="pt-4 lg:pt-6">
                <p className="text-sm text-gray-400">Contract Address:</p>
                <div className="relative inline-block w-full">
                  <p
                    onClick={handleCopy}
                    className="text-xs sm:text-sm font-mono bg-black/30 p-2 rounded-md border border-gray-800 mt-1 overflow-auto whitespace-nowrap cursor-pointer hover:bg-black/40 transition"
                    title={copied ? "Copied!" : "Click to copy"}
                  >
                    {textToCopy}
                  </p>

                  {/* Copied badge */}
                  {copied && (
                    <div className="absolute top-0 right-0 mt-[-30px] mr-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md opacity-90">
                      Copied!
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img src={fx} alt="" />
            </div>
          </div>
        </div>


      </div>

      {/* Trusted By */}
      <div id="featured-on-section" className="">
        <div className="container mx-auto px-6 py-12">
          <p className="text-center text-gray-500 mb-6 pt-5 text-base">CHECK STATS ON</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <div className="text-gray-400 opacity-50 hover:opacity-80 transition-opacity">
              <a href='https://www.dextools.io/app/en/solana/pair-explorer/Fqti16kJDid3uEJr3y81xrsN6PgzkeD9g7c5JhNfpaW6?t=1741409414783'> <span className="text-xl font-medium">DexTools</span></a>
            </div>
            <div className="text-gray-400 opacity-50 hover:opacity-80 transition-opacity">
              <a href='https://dexscreener.com/solana/fqti16kjdid3uejr3y81xrsn6pgzked9g7c5jhnfpaw6?__cf_chl_rt_tk=yRWm4JxcXF7gaXx7ihKkukhanaGfI2Ta78LuxPN9BPg-1744158872-1.0.1.1-DFP3twZs5PmOrUnOwqMmwj..Hu0tQwjEftnSBq1R3KY'><span className="text-xl font-medium">DexScreener</span></a>
            </div>
            <div className="text-gray-400 opacity-50 hover:opacity-80 transition-opacity">
              <a href='https://gmgn.ai/sol/token/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK'><span className="text-xl font-medium">GMGN</span></a>
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
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
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
                Rewards are distributed every few minutes based on your proportional holdings.
              </p>
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
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
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
                Solana Cash Machine ($CASH) is a cryptocurrency on the Solana blockchain that features an automatic USDT rewards system. Holders receive USDT directly to their wallets every few minutes just by holding $CASH.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-2">How do I earn USDT rewards?</h4>
              <p className="text-gray-300">
                You automatically earn USDT rewards by holding $CASH tokens in your Solana wallet. Rewards are distributed every few minutes based on the proportion of $CASH you hold.
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
                The ultimate Solana cash machine, rewarding holders with USDT every few minutes.
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
                <a href="https://x.com/SOLCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* Add Telegram Icon here - you might need to install a library like react-icons */}
                  <FaXTwitter />

                </a>
                <a href="https://t.me/SolanaCashMachine" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* Add Telegram Icon here - you might need to install a library like react-icons */}
                  <FaTelegram />

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