import React from 'react';
import logo from './logo.svg';
import './App.css'; // Your base CSS
import cash from "./images/cash.png";
import Button from './components/Button';
import Card from './components/Card';
import usdt from "./images/usdt.svg";
import fx from "./images/fx.jpg";
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
        className='dextools-links px-10 font-bold text-3xl mt-10 pt-[80px] py-5 md:pt-[130px] flex flex-col items-center md:flex-row justify-around text-green-400'
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
      <div className='how-it-works flex flex-col md:flex-row justify-around items-center pt-[100px] md:pt-[200px]'>
        {/* Text part container */}
        <motion.div
          {...whileInViewSettings}
          variants={fadeInUp}
        >
          <h1 className='how-it-works-title pb-10'>HOW IT WORKS</h1>
          <div className='how-it-works-text'>
            <p>- 5% tax collected from every transaction</p>
            <p>- Tax automatically converted to USDT</p>
            <p>- Automatically distributes 80% (4%) of all tax collected to all holders of $CASH</p>
            <p>- 10% (0.5%) of all tax collected goes to daily buybacks</p>
            <p>- Remaining 10% (0.5%) goes towards further marketing and development</p>
            <p>- Buyback, marketing, and development funding ensures continued price support and promotional <br />activities compared to similar reward tokens with no such budgets.</p>
            <p>- Rewards are proportionate to your holdings</p>
          </div>
        </motion.div>
        {/* Image part container */}
        <motion.div
          {...whileInViewSettings}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={fx} alt='' className='how-it-works-image md:h-[300px] h-[200px] mt-20 rounded-lg' />
        </motion.div>
      </div>

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

      {/* --- Contact Us Section --- */}
      <motion.div
        className='contact-us-container py-[100px] px-[50px] text-center'
        {...whileInViewSettings}
        variants={fadeInUp}
      >
        <h2 className='contact-us-title md:text-4xl text-2xl font-bold text-white pb-10'>Contact Us</h2>
        <div className='contact-us-form-wrapper max-w-md mx-auto p-8 rounded-lg shadow-lg bg-[#1a1a1a]'>
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
      <motion.div
        className='final-details px-10 text-green-400 py-10 mt-10'
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        <motion.p className='py-5' variants={fadeInUp}>- 100% of the total supply is added to liquidity at launch then LP tokens are locked, with no team tokens, no presale, and no max wallet limits.</motion.p>
        <motion.p className='py-5' variants={fadeInUp}>- This ensures that this token can NEVER be rug-pulled.</motion.p>
        <motion.p className='py-5' variants={fadeInUp}>- The 5% tax on transactions is automatically distributed every 5 minutes according to the terms mentioned above.</motion.p>
        <motion.p className='py-5' variants={fadeInUp}>- Launch is 100% fair. Even core devs and team members need to buy on the open market if they wish to hold tokens and receive rewards.</motion.p>
        <motion.p className='py-5' variants={fadeInUp}>- Wallets need to have .01 usdt in pending rewards before they are released to the wallet for economic reasons (e.g., gas costs).</motion.p>
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

    </div>
  );
}

export default App;