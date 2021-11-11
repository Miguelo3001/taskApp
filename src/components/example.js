import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";

const App = () => {
  const AppMain = () => <h1>AppMain</h1>;
  const Articles = () => <h1>Articles</h1>;
  const Contact = () => <h1>Contact</h1>;
  const About = () => <h1>About</h1>;

  return (
    <div style={{ backgroundColor: "gray", height: "100vh", width: "100%" }}>
      <ReactNavbar
        color="#191919"
        menu={[
          { name: "AppMain", to: "/https://www.facebook.com", component: AppMain },
          { name: "ARTICLES", to: "/articles", component: Articles },
          { name: "ABOUT ME", to: "/about", component: About },
          { name: "CONTACT", to: "/Contact", component: Contact},
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    </div>
  );
};

export default App;
