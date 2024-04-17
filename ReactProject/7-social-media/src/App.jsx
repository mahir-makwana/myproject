import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Sidebar from "./componants/Sidebar";
import CreatePost from "./componants/CreatePost";
import PostList from "./componants/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelrctedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelrctedTab={setSelrctedTab}
        ></Sidebar>
        <div className="contact">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
