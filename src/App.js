import { useTransform } from "framer-motion";
import "./App.css";
import Bye from "./Components/Bye/Bye";
import Hello from "./Components/Hello/Hello";
import Logo from "./Components/Logo/Logo";

import Magazine from "./Components/Magazine/Magazine";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function App() {
  return (
    <div className="App">
      <section id="logoSection">
        <Logo />
      </section>
      <section id="helloSection">
        <Hello />
      </section>
      <section id="magazineSection">
        <Magazine />
      </section>
      <section id="byeSection">
        <Bye />
      </section>
    </div>
  );
}

export default App;

// import { useTransform } from "framer-motion";
// import "./App.css";
// import Bye from "./Components/Bye/Bye";
// import Hello from "./Components/Hello/Hello";
// import Logo from "./Components/Logo/Logo";
// import Magazine from "./Components/Magazine/Magazine";
// import Mail from "./Components/Mail/Mail";

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function App() {
//   // const ref = useRef(null);
//   // const { scrollYProgress } = useScroll({ target: ref });
//   // const y = useParallax(scrollYProgress, 300);

//   return (
//     <div className="App">
//       <section>
//         <Logo ref={ref} />
//       </section>
//       <section>
//         <Hello ref={ref} />
//       </section>
//       <section>
//         <Mail ref={ref} />
//       </section>
//       <section>
//         <Magazine ref={ref} />
//       </section>
//       <section>
//         <Bye ref={ref} />
//       </section>
//     </div>
//   );
// }

// export default App;
