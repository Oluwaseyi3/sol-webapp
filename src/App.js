import React from 'react';
import logo from './logo.svg';
import './App.css'; // Your base CSS
import cash from "./images/cash.png";
import Button from './components/Button';
import Card from './components/Card';
import usdt from "./images/usdt.svg";
import { motion } from 'framer-motion'; // Import motion

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
      {/* Hero Section: Original flex layout preserved */}
      <div className=" flex flex-col lg:flex-row justify-around  text-left items-center  pt-20 gap-5 text-center md:text-left">
        {/* --- Hero Text Section Animation --- */}
        {/* motion.div retains original structure + adds flex-1 for balance */}
        <motion.div
          className='' // Added flex-1 for better layout balance
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* H1 retains its original classes */}
          <h1 className='text-white md:text-5xl text-4xl font-spacemono'>
            SOLANA CASH MACHINE
          </h1>

          {/* Description div retains its classes */}
          <motion.div
            className='md:text-2xl text-lg pt-10 flex flex-col gap-5 mx-auto px-2'
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Paragraphs retain their classes, wrapped in motion.p */}
            <motion.p variants={fadeInUp}><span className='text-green-400'></span> – The world’s fastest rewards system for <span className='text-green-400'>$USDT</span> on Solana!</motion.p>
            <motion.p variants={fadeInUp}> – The Solana Cash Machine distributes <span className='text-green-400'>$USDT</span> to ALL holders every few minutes.</motion.p>
          </motion.div>

          {/* Button container retains its classes */}
          <motion.div
            className='pt-20 flex md:flex-row flex-col items-center gap-5'
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
          >
            {/* Each Button is wrapped for stagger, Button component itself is unchanged */}
            <motion.div variants={fadeInUp}>
              <Button type="Buy $CASH now" link="https://jup.ag/tokens/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button type="Refer and Earn" link="https://t.me/CASHRefBot" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button type="Play $CASH Casino" link="https://solcashmachine.ngrok.app/" />
            </motion.div>
          </motion.div>

          {/* CA Paragraph retains its classes */}
          <motion.p
            className='md:text-base text-center md:text-left text-xs pt-10 mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            CA: CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK
          </motion.p>

          {/* Social Links container retains its classes */}
          <motion.div
            className='flex flex-row gap-5 pt-10 md:justify-start justify-center'
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1, delayChildren: 1.0 }}
          >
            {/* Links retain their classes, wrapped in motion.a */}
            <motion.a variants={fadeInUp} href="https://t.me/SolanaCashMachine" className="group relative flex items-center justify-start px-3 w-[130px] h-[50px] gap-2 bg-sky-500 text-white rounded-xl border-none cursor-pointer overflow-hidden">
              {/* SVG and Span content - unchanged */}
              <svg className="w-[23px] h-[23px] transition-transform duration-800 ease-in-out group-hover:ml-10 group-hover:rotate-[50deg]" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g transform="scale(5.12,5.12)"><path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z" /></g></svg>
              <span className="text-white font-bold text-base transition-all duration-300 ease-in-out group-hover:hidden">Telegram</span>
            </motion.a>

            <motion.a variants={fadeInUp} href='https://x.com/SOLCashMachine' className="group relative flex items-center justify-start px-3 w-[130px] h-[50px] gap-2 bg-white text-black rounded-xl border-none cursor-pointer overflow-hidden">
              <svg className="w-[23px] h-[23px] transition-transform duration-800 ease-in-out group-hover:ml-10 group-hover:rotate-[50deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M20.207 3H17.1L12.92 8.227 8.4 3H3l7.92 9.486L3 21h3.106l4.602-5.813L15.6 21h5.4l-8.148-9.77L20.207 3ZM16.5 19.5l-4.852-5.828-1.385 1.773-3.779 4.055H7.5l5.484-6.602L7.5 4.5h1.5l4.398 5.283 1.265-1.605 3.984-4.178h1.5l-5.535 6.543L16.5 19.5Z" /></svg>
              <span className="font-bold text-base transition-all duration-300 ease-in-out group-hover:hidden">Twitter</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --- Hero Image Animation --- */}
        {/* motion.div retains original structure + adds flex utils */}
        <motion.div
          className='flex-1 flex justify-center lg:justify-end' // Added flex utils
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Image retains its classes + adds object-contain */}

        </motion.div>
      </div>

      {/* --- DexTools Links Section Animation --- */}
      {/* Container motion.div retains original classes */}
      <motion.div
        className='px-10 font-bold text-3xl mt-10 pt-[80px] py-5 md:pt-[130px] flex flex-col items-center md:flex-row justify-around text-green-400'
        variants={staggerContainer}
        {...whileInViewSettings} // Apply viewport settings here
      >
        {/* Links retain classes, wrapped in motion.a */}
        <motion.a variants={fadeInUp} href="https://www.dextools.io/app/en/solana/pair-explorer/Fqti16kJDid3uEJr3y81xrsN6PgzkeD9g7c5JhNfpaW6?t=1744018404578"><p className='p-5 hover:text-white transition-colors'>DexTools</p></motion.a>
        <motion.a variants={fadeInUp} href='https://gmgn.ai/sol/token/CvkCfadCfCUc319WNhWnaYH6xAZCS7VNQEQM8nxQC1sK'><p className='p-5 hover:text-white transition-colors'>GMGN</p></motion.a>
        <motion.a variants={fadeInUp} href='https://dexscreener.com/solana/fqti16kjdid3uejr3y81xrsn6pgzked9g7c5jhnfpaw6'><p className='p-5 hover:text-white transition-colors'>DexScreener</p></motion.a>
      </motion.div>

      {/* --- Cards Section Animation (Staggered) --- */}
      {/* Container motion.div retains original classes */}
      <motion.div
        className='flex md:flex-row flex-col items-center md:items-start justify-between gap-[40px] flex-wrap pb-20 mt-10'
        variants={staggerContainer}
        {...whileInViewSettings} // Use viewport settings for the container
      >
        {/* Wrap each Card in motion.div for staggering; Card component itself is unchanged */}
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

      {/* Note retains its classes */}
      <motion.div
        className='text-center text-sm text-green-400 '
        {...whileInViewSettings}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        *Distributions go out every 5 minutes unless volume doesn’t justify the expense. In that case, rewards accumulate for another epoch.
      </motion.div>

      {/* --- Fair Launch Section --- */}
      {/* Title retains its classes */}
      <motion.div
        className='md:text-5xl text-3xl pt-[100px] text-center'
        {...whileInViewSettings}
        variants={fadeInUp}
      >
        REAL FAIR LAUNCH
      </motion.div>

      {/* Points container retains its classes */}
      <motion.div
        className='flex flex-col text-center gap-3 md:flex-row md:text-3xl text-lg justify-around md:pt-[100px] pt-[70px] '
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        {/* Points retain their classes, wrapped in motion.p */}
        <motion.p variants={fadeInUp}>NO TEAM TOKENS!</motion.p>
        <motion.p variants={fadeInUp}>NO PRESALE!</motion.p>
        <motion.p variants={fadeInUp}>NO MAX WALLET LIMITS!</motion.p>
      </motion.div>

      {/* --- How It Works Section --- */}
      {/* Container retains its classes */}
      <div className='flex flex-col md:flex-row justify-around items-center pt-[100px] md:pt-[200px]'>
        {/* Text part container retains structure */}
        <motion.div
          {...whileInViewSettings}
          variants={fadeInUp}
        >
          {/* Title retains classes */}
          <h1 className='text-3xl text-green-400 pb-10'>HOW IT WORKS</h1>
          {/* Inner div retains classes */}
          <div className=''>
            {/* Paragraphs retain classes */}
            <p className='p-2'>- 5% tax collected from every transaction</p>
            <p className='p-2'>- Tax automatically converted to USDT</p>
            <p className='p-2'>- Automatically distributes 80% (4%) of all tax collected to all holders of $CASH</p>
            <p className='p-2'>- 10% (0.5%) of all tax collected goes to daily buybacks</p>
            <p className='p-2'>- Remaining 10% (0.5%) goes towards further marketing and development</p>
            <p className='p-2'>- Buyback, marketing, and development funding ensures continued price support and promotional <br />activities compared to similar reward tokens with no such budgets.</p>
            <p className='p-2'>- Rewards are proportionate to your holdings</p>
          </div>
        </motion.div>
        {/* Image part container retains structure */}
        <motion.div
          {...whileInViewSettings}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Image retains its classes */}
          <img src={usdt} alt='' className='md:h-[300px] h-[200px] mt-20' />
        </motion.div>
      </div>

      {/* --- Stats Section (Staggered) --- */}
      {/* Container retains classes + added text align/padding */}
      <motion.div
        className='pt-[100px] flex flex-col md:flex-row pb-10 justify-around text-center md:text-left' // Added text align utils
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        {/* Each stat item wrapped for stagger, retains inner classes + added padding */}
        <motion.div className=' flex flex-col gap-5 p-4' variants={fadeInUp}> {/* Added padding */}
          <h1 className='text-green-400 text-3xl'>1 Billion</h1>
          <p className='text-base'>Total Supply</p>
        </motion.div>
        {/* Other stats items follow same pattern... */}
        <motion.div className=' flex flex-col gap-5 p-4' variants={fadeInUp}>
          <h1 className='text-green-400 text-3xl'>5%</h1>
          <p className='text-base'>Tax On Transactions</p>
        </motion.div>
        <motion.div className=' flex flex-col gap-5 p-4' variants={fadeInUp}>
          <h1 className='text-green-400 text-3xl'>100%</h1>
          <p className='text-base'>LP Burned</p>
        </motion.div>
        <motion.div className=' flex flex-col gap-5 p-4' variants={fadeInUp}>
          <h1 className='text-green-400 text-3xl'>100%</h1>
          <p className='text-base'>Community Owned</p>
        </motion.div>
        <motion.div className=' flex flex-col gap-5 p-4' variants={fadeInUp}>
          <h1 className='text-green-400 text-3xl'>100%</h1>
          <p className='text-base'>Automated</p>
        </motion.div>
      </motion.div>

      {/* --- Explorer Link Animation --- */}
      {/* Container retains its classes */}
      <motion.div
        className='flex justify-center'
        {...whileInViewSettings}
        variants={fadeInUp}
      >
        {/* Link retains ALL its original classes */}
        <a href='https://explorer.solana.com/address/4pF7P8zfE6Xg88K54L2747KLBUSpe87Uj6aMfe42BhJ2'
          className="group w-[90%] md:w-[40%] mt-20 relative bg-slate-900 h-30 md:h-20 border-2 border-teal-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
        >
          Click here to review $USDT reward distribution stats
        </a>
      </motion.div>

      {/* --- Final Details Section (Staggered Paragraphs) --- */}
      {/* Container retains classes */}
      <motion.div
        className='px-10 text-green-400 py-10 mt-10' // Added mt-10
        variants={staggerContainer}
        {...whileInViewSettings}
      >
        {/* Paragraphs retain classes, wrapped in motion.p */}
        <motion.p className='py-5' variants={fadeInUp}>- 100% of the total supply is added to liquidity at launch then LP tokens are locked, with no team tokens, no presale, and no max wallet limits.</motion.p>
        <motion.p className='py-5' variants={fadeInUp}>- This ensures that this token can NEVER be rug-pulled.</motion.p>
        <motion.p className='py-5' variants={fadeInUp}>- The 5% tax on transactions is automatically distributed every 5 minutes according to the terms mentioned above.</motion.p>
        <motion.p className='py-5' variants={fadeInUp}>- Launch is 100% fair. Even core devs and team members need to buy on the open market if they wish to hold tokens and receive rewards.</motion.p>
        <motion.p className='py-5' variants={fadeInUp}>- Wallets need to have .01 usdt in pending rewards before they are released to the wallet for economic reasons (e.g., gas costs).</motion.p>
      </motion.div>

      {/* --- Final Social Links --- */}
      {/* Container retains classes + added pb-20 */}
      <motion.div
        className='flex flex-row gap-5 pt-10 pb-20 justify-center' // Added pb-20
        variants={staggerContainer}
        {...whileInViewSettings}
        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
      >
        {/* Links retain classes, wrapped in motion.a */}
        <motion.a variants={fadeInUp} href="https://t.me/SolanaCashMachine" className="group relative flex items-center justify-start px-3 w-[130px] h-[50px] gap-2 bg-sky-500 text-white rounded-xl border-none cursor-pointer overflow-hidden">
          {/* SVG and Span content - unchanged */}
          <svg className="w-[23px] h-[23px] transition-transform duration-800 ease-in-out group-hover:ml-10 group-hover:rotate-[50deg]" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g transform="scale(5.12,5.12)"><path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z" /></g></svg>
          <span className="text-white font-bold text-base transition-all duration-300 ease-in-out group-hover:hidden">Telegram</span>
        </motion.a>
        <motion.a variants={fadeInUp} href='https://x.com/SOLCashMachine' className="group relative flex items-center justify-start px-3 w-[130px] h-[50px] gap-2 bg-white text-black rounded-xl border-none cursor-pointer overflow-hidden">
          {/* SVG and Span content - unchanged */}
          <svg className="w-[23px] h-[23px] transition-transform duration-800 ease-in-out group-hover:ml-10 group-hover:rotate-[50deg]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M20.207 3H17.1L12.92 8.227 8.4 3H3l7.92 9.486L3 21h3.106l4.602-5.813L15.6 21h5.4l-8.148-9.77L20.207 3ZM16.5 19.5l-4.852-5.828-1.385 1.773-3.779 4.055H7.5l5.484-6.602L7.5 4.5h1.5l4.398 5.283 1.265-1.605 3.984-4.178h1.5l-5.535 6.543L16.5 19.5Z" /></svg>
          <span className="font-bold text-base transition-all duration-300 ease-in-out group-hover:hidden">Twitter</span>
        </motion.a>
      </motion.div>

    </div>
  );
}

export default App;