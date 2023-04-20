import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

export const Work4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Tech Consulting
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Need help solving a technical problem? Want to know the best solution
          for your business? Our technical consulting team is here to help. With
          our expertise in technology and software development, we can help you
          find the perfect solution for any technical problem you may have.
        </li>
      </ul>
    </motion.div>
  );
};
