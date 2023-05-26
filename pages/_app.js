import "@/styles/scss/main.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Raleway } from "@next/font/google";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const onExitComplete = () => {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 200);
  };

  return (
    <AnimatePresence
      onExitComplete={onExitComplete}
      mode="wait"
      initial={false}
    >
      <motion.div
        className={raleway.className}
        key={router.asPath}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1.75,
          ease: "anticipate",
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            opacity: 0,
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
