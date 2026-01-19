import { motion } from "framer-motion";

const Logo = () => {
  const logos = [
    { src: "descript.svg", alt: "Descript" },
    { src: "grammarly.svg", alt: "Grammarly" },
    { src: "intercom.svg", alt: "Intercom" },
    { src: "notion.svg", alt: "Notion" },
    { src: "unplash.svg", alt: "Unsplash" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-10 md:mt-20 mx-6 md:mx-20 flex flex-col gap-8 md:gap-15 items-center overflow-hidden">
      
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-bold text-2xl md:text-[40px] text-center leading-tight"
      >
        More than 25,000 teams use Collabs
      </motion.p>

      {/* Grille de logos responsive */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 w-full"
      >
        {logos.map((logo, index) => (
          <motion.img 
            key={index}
            variants={itemVariants}
            src={logo.src} 
            alt={logo.alt}
            className="h-6 md:h-10 lg:h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Logo;