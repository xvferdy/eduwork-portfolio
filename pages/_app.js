import "@/styles/scss/main.scss";

import { Raleway } from "@next/font/google";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
  );
}
