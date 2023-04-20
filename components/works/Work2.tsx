import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

export const Work2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Mobile Apps
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          With our expertise in mobile app development, we can help you create a
          unique and functional app that meets the needs of your users. Whether
          you're looking for an app for iOS or Android, our development team can
          help you create the perfect solution.
        </li>
      </ul>
    </motion.div>
  );
};
