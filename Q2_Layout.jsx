// Q2: Page layout using component composition.
//     Header, Sidebar, Content and Footer components are built,
//     the page title is passed to Header using props,
//     and all of them are rendered inside a Layout component used by App.

import React from "react";

function Header(props) {
  return (
    <header style={{ background: "#1e3a8a", color: "white", padding: "16px" }}>
      <h1 style={{ margin: 0 }}>{props.title}</h1>
    </header>
  );
}

function Sidebar() {
  return (
    <aside style={{ background: "#e2e8f0", padding: "16px", width: "200px" }}>
      <h3>Menu</h3>
      <ul style={{ paddingLeft: "18px" }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
}

function Content() {
  return (
    <main style={{ flex: 1, padding: "16px" }}>
      <h2>Main Content</h2>
      <p>This is the main content area of the page.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#1e3a8a",
        color: "white",
        padding: "12px",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0 }}>&copy; 2026 My Website. All rights reserved.</p>
    </footer>
  );
}

// Layout composes Header, Sidebar, Content and Footer
function Layout(props) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header title={props.title} />
      <div style={{ display: "flex", minHeight: "250px" }}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

// App uses the Layout component
function App() {
  return <Layout title="My Page Title" />;
}

export default App;
