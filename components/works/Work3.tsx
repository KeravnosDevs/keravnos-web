import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

export const Work3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Desktop Apps
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          We also offer desktop app development services. From simple
          applications to complex enterprise solutions, we can help you create
          an app that meets all of your needs. Additionally, our developers have
          experience across multiple platforms, allowing us to create solutions
          for Windows, Mac, and Linux.
        </li>
      </ul>
    </motion.div>
  );
};
