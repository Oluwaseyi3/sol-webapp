import React from 'react';
import logo from './logo.svg';
import './App.css'; // Your base CSS
import cash from "./images/cash.png";
import Button from './components/Button';
import Card from './components/Card';
import usdt from "./images/usdt.svg";
import fx from "./images/fx.jpg";
import red from "./images/red.jpg"
import { motion } from 'framer-motion'; // Import motion
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

function App() {

  // Simple fade-in-up animation variant
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  // Container variant for staggering children
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15, // Adjust stagger delay as needed
      },
    },
  };

  // Animation settings for elements entering viewport
  const whileInViewSettings = {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true, amount: 0.2 }, // Animate once when 20% is visible
    transition: { duration: 0.6, ease: "easeOut" },
  };


  return (
    // Root container: Keeps original classes + overflow-x-hidden for animation safety
    <div className='h-[100%] w-full bg-black text-white font-spacemono px-[50px] overflow-x-hidden'>
      {/* Hero Section */}
      <div className="hero-container flex flex-col lg:flex-row justify-around text-left items-center pt-20 gap-5 text-center md:text-left">
        {/* --- Hero Text Section Animation --- */}
        <motion.div
          className='flex-1' // Ensure it takes up available space
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className='hero-title'>
            SOLANA CASH MACHINE
          </h1>
          <motion.div
            className='hero-description md:text-2xl text-lg pt-10 flex flex-col gap-5 mx-auto px-2'
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeInUp}><span className='text-green-400'></span> – The world’s fastest rewards system for <span className='text-green-400'>$USDT</span> on Solana!</motion.p>
            <motion.p variants={fadeInUp}> – The Solana Cash Machine distributes <span className='text-green-400'>$USDT</span> to ALL holders every few minutes.</motion.p>
          </motion.div>
          <motion.div
            className='hero-buttons pt-20 flex md:flex-row flex-col items-center gap-5'
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
          >
            <motion.div variants={fadeInUp}>
              <Button type="Buy $CASH now" link="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" className="button" /> {/* Add className */}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button type="Refer and Earn" link="https://t.me/CASHRefBot" className="button" /> {/* Add className */}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button type="Play $CASH Casino" link="https://solcashmachine.ngrok.app/" className="button" /> {/* Add className */}
            </motion.div>
          </motion.div>
          <motion.p
            className='hero-ca md:text-base text-center md:text-left text-xs pt-10 mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            CA: CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK
          </motion.p>
          <motion.div
            className='hero-social flex flex-row gap-5 pt-10 md:justify-start justify-center'
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1, delayChildren: 1.0 }}
          >
            <motion.a variants={fadeInUp} href="https://t.me/SolanaCashMachine" className="group relative flex items-center justify-start px-3 w-[130px] h-[50px] gap-2 bg-sky-500 text-white rounded-xl border-none cursor-pointer overflow-hidden">
              <svg className="w-[23px] h-[23px] transition-transform duration-800 ease-in-out group-hover:ml-10 group-hover:rotate-[50deg]" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g transform="scale(5.12,5.12)"><path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z" /></g></svg>
              <span className="text-white font-bold text-base transition-all duration-300 ease-in-out group-hover:hidden">Telegram</span>
            </motion.a>

            <motion.a variants={fadeInUp} href='https://x.com/SOLCashMachine' className="group relative flex items-center justify-start px-3 w-[130px] h-[50px] gap-2 bg-white text-black rounded-xl border-none cursor-pointer overflow-hidden">
              <svg className="w-[23px] h-[23px] transition-transform duration-800 ease-in-out group-hover:ml-10 group-hover:rotate-[50deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M20.207 3H17.1L12.92 8.227 8.4 3H3l7.92 9.486L3 21h3.106l4.602-5.813L15.6 21h5.4l-8.148-9.77L20.207 3ZM16.5 19.5l-4.852-5.828-1.385 1.773-3.779 4.055H7.5l5.484-6.602L7.5 4.5h1.5l4.398 5.283 1.265-1.605 3.984-4.178h1.5l-5.535 6.543L16.5 19.5Z" /></svg>
              <span className="font-bold text-base transition-all duration-300 ease-in-out group-hover:hidden">Twitter</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --- Hero Image --- */}
        <motion.div
          className='flex-1 flex justify-center lg:justify-end'
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Add your hero image here */}
          <img src={fx} alt="Solana Cash Machine" className='md:h-[350px] h-[250px] object-contain rounded-lg shadow-lg' />
        </motion.div>
      </div>

      {/* --- DexTools Links Section --- */}
      <motion.div
        className='dextools-links px-10 font-bold text-3xl  pt-[10px] py-5 md:pt-[40px] flex flex-col items-center md:flex-row justify-around text-green-400'
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        <motion.a variants={fadeInUp} href="https://www.dextools.io/app/en/solana/pair-explorer/Fqti16kJDid3uEJr3y81xrsN6PgzkeD9g7c5JhNfpaW6?t=1744018404578"><p className='hover:text-white transition-colors'>DexTools</p></motion.a>
        <motion.a variants={fadeInUp} href='https://gmgn.ai/sol/token/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK'><p className='hover:text-white transition-colors'>GMGN</p></motion.a>
        <motion.a variants={fadeInUp} href='https://dexscreener.com/solana/fqti16kjdid3uejr3y81xrsn6pgzked9g7c5jhnfpaw6'><p className='hover:text-white transition-colors'>DexScreener</p></motion.a>
      </motion.div>

      {/* --- Cards Section --- */}
      <motion.div
        className='flex md:flex-row flex-col items-center md:items-start justify-between gap-[40px] flex-wrap pb-20 mt-10'
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        <motion.div variants={fadeInUp}>
          <Card title="Fast Rewards" description="Receive USDT rewards automatically " second="every few minutes. Just 'hodl' to earn." />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Card title="Price Is Irrelevant" description="Rewards are independent of the volatile " second="token price. Stack $CASH and earn." />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Card title="Play Games" description="Earn more $CASH by spending" second=" $CASH in the $CASH Casino." />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Card title="Compound & Earn" description="Reinvest your $USDT rewards to " second="maximize earnings. Stack and earn." />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Card title="Buybacks & Marketing" description="$CASH has ongoing buybacks and " second="marketing support, unlike competitors." />
        </motion.div>
      </motion.div>

      {/* Note */}
      <motion.div
        className='text-center text-sm text-green-400 '
        {...whileInViewSettings}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        *Distributions go out every 5 minutes unless volume doesn’t justify the expense. In that case, rewards accumulate for another epoch.
      </motion.div>

      {/* --- Fair Launch Section --- */}
      <motion.div
        className='fair-launch md:text-5xl text-3xl pt-[100px] text-center'
        {...whileInViewSettings}
        variants={fadeInUp}
      >
        REAL FAIR LAUNCH
      </motion.div>

      {/* Points container */}
      <motion.div
        className='fair-launch-points flex flex-col text-center gap-3 md:flex-row md:text-3xl text-lg justify-around md:pt-[100px] pt-[70px] '
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        <motion.p variants={fadeInUp}>NO TEAM TOKENS!</motion.p>
        <motion.p variants={fadeInUp}>NO PRESALE!</motion.p>
        <motion.p variants={fadeInUp}>NO MAX WALLET LIMITS!</motion.p>
      </motion.div>

      {/* --- How It Works Section --- */}
      {/* --- How It Works Section --- */}
      <motion.div
        className='how-it-works py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 rounded-xl mx-4 md:mx-8 lg:mx-16'
        {...whileInViewSettings}
      >
        <div className="container mx-auto">
          <motion.h2
            className='text-4xl md:text-5xl font-bold text-center mb-16 text-green-400'
            variants={fadeInUp}
          >
            HOW IT WORKS
          </motion.h2>

          <div className='flex flex-col lg:flex-row items-center justify-between px-6 md:px-12'>
            {/* Left side - Visual representation */}
            <motion.div
              className="w-full lg:w-2/5 mb-12 lg:mb-0"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={red}
                  alt="Solana Cash Machine Process"
                  className='rounded-xl shadow-2xl shadow-green-400/20 w-full object-cover'
                />
                <div className="absolute -bottom-6 -right-6 bg-green-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg text-lg">
                  AUTOMATIC REWARDS
                </div>
              </div>
            </motion.div>

            {/* Right side - Steps with icons */}
            <motion.div
              className="w-full lg:w-1/2"
              variants={staggerContainer}
              {...whileInViewSettings}
            >
              {/* Step 1 */}
              <motion.div
                className="flex items-start mb-8 bg-black/50 p-6 rounded-lg hover:bg-black/80 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Transaction Tax</h3>
                  <p className="text-gray-300">5% tax is collected from every buy and sell transaction</p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="flex items-start mb-8 bg-black/50 p-6 rounded-lg hover:bg-black/80 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">USDT Conversion</h3>
                  <p className="text-gray-300">All collected tax is automatically converted to USDT</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="flex items-start mb-8 bg-black/50 p-6 rounded-lg hover:bg-black/80 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Distribution</h3>
                  <p className="text-gray-300">
                    <span className="text-green-400 font-bold">80% (4%)</span> distributed to all $CASH holders<br />
                    <span className="text-green-400 font-bold">10% (0.5%)</span> allocated for daily buybacks<br />
                    <span className="text-green-400 font-bold">10% (0.5%)</span> for marketing and development
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="flex items-start bg-black/50 p-6 rounded-lg hover:bg-black/80 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Automatic Rewards</h3>
                  <p className="text-gray-300">Rewards are automatically distributed every 5 minutes based on your proportional holdings</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Additional information */}
          <motion.div
            className="mt-16 text-center px-6"
            variants={fadeInUp}
            {...whileInViewSettings}
          >
            <div className="inline-block bg-green-400/10 border border-green-400 rounded-lg p-6">
              <p className="text-green-400 font-medium">
                Unlike similar tokens, $CASH includes dedicated buyback and marketing funds to ensure
                continued price support and promotional activities for long-term sustainability.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- Stats Section --- */}
      <motion.div
        className='stats-container pt-[100px] pb-10'
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        <div className='stats-grid'>
          <motion.div className='stat-item' variants={fadeInUp}>
            <h1 className='stat-number'>1 Billion</h1>
            <p className='stat-label'>Total Supply</p>
          </motion.div>
          <motion.div className='stat-item' variants={fadeInUp}>
            <h1 className='stat-number'>5%</h1>
            <p className='stat-label'>Tax On Transactions</p>
          </motion.div>
          <motion.div className='stat-item' variants={fadeInUp}>
            <h1 className='stat-number'>100%</h1>
            <p className='stat-label'>LP Burned</p>
          </motion.div>
          <motion.div className='stat-item' variants={fadeInUp}>
            <h1 className='stat-number'>100%</h1>
            <p className='stat-label'>Community Owned</p>
          </motion.div>
          <motion.div className='stat-item' variants={fadeInUp}>
            <h1 className='stat-number'>100%</h1>
            <p className='stat-label'>Automated</p>
          </motion.div>
        </div>
      </motion.div>

      {/* --- Explorer Link --- */}
      <motion.div
        className='explorer-link-container flex justify-center'
        {...whileInViewSettings}
        variants={fadeInUp}
      >
        <a href='https://explorer.solana.com/address/4pF7P8zfE6Xg88K54L2747KLBUSpe87Uj6aMfe42BhJ2'
          className="explorer-link"
        >
          Click here to review $USDT reward distribution stats
        </a>
      </motion.div>

      <motion.div
        className='contact-us-container py-[100px] px-[20px] text-center md:px-[50px]' // Adjusted horizontal padding
        {...whileInViewSettings}
        variants={fadeInUp}
      >
        <h2 className='contact-us-title md:text-4xl text-2xl font-bold text-white pb-10'>Contact Us</h2>
        <div className='contact-us-form-wrapper p-8 rounded-lg shadow-lg bg-[#1a1a1a]'> {/* Removed max-w-md and mx-auto */}
          <p className='mb-6 text-gray-300'>We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.</p>
          <form className='contact-us-form grid grid-cols-1 gap-6'>
            <div>
              <label htmlFor="name" className='block text-gray-400 text-sm font-bold mb-2'>
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Name
              </label>
              <input type="text" id="name" className='contact-us-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300' placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className='block text-gray-400 text-sm font-bold mb-2'>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
              </label>
              <input type="email" id="email" className='contact-us-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300' placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className='block text-gray-400 text-sm font-bold mb-2'>
                <FontAwesomeIcon icon={faMessage} className="mr-2" /> Message
              </label>
              <textarea id="message" className='contact-us-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300' placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className='contact-us-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300'>Send Message</button>
          </form>
        </div>
      </motion.div>

      {/* --- Final Details Section --- */}
      {/* --- Final Details Section --- */}
      <motion.div
        className='final-details py-20 md:py-28 px-4 md:px-8 lg:px-16'
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400"
          variants={fadeInUp}
        >
          COMMITMENT TO TRANSPARENCY
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            {...whileInViewSettings}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-black/50 border border-green-400/30 rounded-xl p-6 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-400 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">100% Fair Launch</h3>
              </div>
              <p className="text-gray-300">
                100% of the total supply is added to liquidity at launch with LP tokens locked. No team tokens, no presale, and no max wallet limits.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-black/50 border border-green-400/30 rounded-xl p-6 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-400 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Anti-Rug Protection</h3>
              </div>
              <p className="text-gray-300">
                Our locked liquidity and fair launch model ensures that this token can NEVER be rug-pulled, providing security for all holders.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-black/50 border border-green-400/30 rounded-xl p-6 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-400 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Automatic Distribution</h3>
              </div>
              <p className="text-gray-300">
                The 5% tax on transactions is automatically distributed every 5 minutes according to the formula outlined in our tokenomics.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-black/50 border border-green-400/30 rounded-xl p-6 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-400 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Reward Threshold</h3>
              </div>
              <p className="text-gray-300">
                Wallets need to accumulate 0.01 USDT in pending rewards before distribution for economic efficiency (reducing gas costs).
              </p>
            </motion.div>
          </motion.div>

          {/* Highlight Box */}
          <motion.div
            className="mt-12 bg-green-400/10 border-l-4 border-green-400 rounded-r-lg p-6"
            variants={fadeInUp}
            {...whileInViewSettings}
          >
            <h4 className="text-xl font-bold text-white mb-3">Equal Opportunity for All</h4>
            <p className="text-gray-300">
              Launch is 100% fair - even core developers and team members must purchase tokens on the open market if they wish to hold $CASH and receive rewards. This ensures complete alignment of incentives between the team and the community.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* --- Final Social Links --- */}
      <motion.div
        className='final-social flex flex-row gap-5 pt-10 pb-20 justify-center'
        variants={staggerContainer}
        {...whileInViewSettings}
        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
      >
        <motion.a variants={fadeInUp} href="https://t.me/SolanaCashMachine" className="group relative flex items-center justify-start px-3 w-[130px] h-[50px] gap-2 bg-sky-500 text-white rounded-xl border-none cursor-pointer overflow-hidden">
          <svg className="w-[23px] h-[23px] transition-transform duration-800 ease-in-out group-hover:ml-10 group-hover:rotate-[50deg]" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g transform="scale(5.12,5.12)"><path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z" /></g></svg>
          <span className="text-white font-bold text-base transition-all duration-300 ease-in-out group-hover:hidden">Telegram</span>
        </motion.a>
        <motion.a variants={fadeInUp} href='https://x.com/SOLCashMachine' className="group relative flex items-center justify-start px-3 w-[130px] h-[50px] gap-2 bg-white text-black rounded-xl border-none cursor-pointer overflow-hidden">
          <svg className="w-[23px] h-[23px] transition-transform duration-800 ease-in-out group-hover:ml-10 group-hover:rotate-[50deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M20.207 3H17.1L12.92 8.227 8.4 3H3l7.92 9.486L3 21h3.106l4.602-5.813L15.6 21h5.4l-8.148-9.77L20.207 3ZM16.5 19.5l-4.852-5.828-1.385 1.773-3.779 4.055H7.5l5.484-6.602L7.5 4.5h1.5l4.398 5.283 1.265-1.605 3.984-4.178h1.5l-5.535 6.543L16.5 19.5Z" /></svg>
          <span className="font-bold text-base transition-all duration-300 ease-in-out group-hover:hidden">Twitter</span>
        </motion.a>
      </motion.div>

      {/* --- Footer Section --- */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-10 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            {/* Left side - Copyright */}
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Solana Cash Machine. All rights reserved.
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-4">
              <a href="https://t.me/SolanaCashMachine" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Telegram
              </a>
              <a href="https://x.com/SOLCashMachine" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Twitter
              </a>
              {/* You can add more social media links here */}
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Disclaimer: Cryptocurrency investments are highly risky and may lead to financial loss. Please do your own research before investing.
          </p>
        </div>
      </footer>


    </div>
  );
}

export default App;