import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

export const Work1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Web Development</h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          With our web development service, we can create attractive and
          functional websites for your business. Whether you need a simple
          website or a complex e-commerce platform, we can help you create the
          perfect solution. We also work with WordPress and can develop full
          code websites to meet your specific needs.
        </li>
      </ul>
    </motion.div>
  );
};
