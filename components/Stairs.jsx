import { motion } from "framer-motion";

//components
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for the staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // total number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each rep a step of the stairs.    
    Each div will have the same animation defined by the stairsAnimation <object data.
    The delay from each div is calculated sinamically based on it's reversed index, 
    creating a stagger effect with increasing delay for each subsequent step.    
    */}
      {[...Array(6)].map((_, index) => {
        return(
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
        );
      })}
    </>
  );
};

export default Stairs;
