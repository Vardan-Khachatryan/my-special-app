import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = (props) => {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
        }}
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
};
