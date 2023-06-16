import React, { useState } from "react";
import Header from "./Components/Header";
import Videos from "./Components/Videos";
import Footer from "./Components/Footer";

function App() {
  const [category, setCategory] = useState("Happiness");

  const filteredVideos = DUMMY_DATA.filter((videoInfo) =>
    videoInfo.category === category ? category : ""
  );

  const categoryGetterHandler = (category) => {
    setCategory(category);

    // Working fine, we are getting data(category) here.
    // console.log(category);
  };

  return (
    <div>
      <Header onCategoryGetter={categoryGetterHandler} />

      {filteredVideos.map((videoInfo) => (
        <Videos
          title={videoInfo.title}
          videoLink={videoInfo.videoLink}
          category={videoInfo.category}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

const DUMMY_DATA = [
  {
    title: "v1",
    videoLink: "https://www.youtube.com/embed/gYeHV_nA36c",
    category: "Happiness",
  },
  {
    title: "v2",
    videoLink: "https://www.youtube.com/embed/78nsxRxbf4w",
    category: "Happiness",
  },
  {
    title: "v3",
    videoLink: "https://www.youtube.com/embed/xnLoToJVQH4",
    category: "Happiness",
  },
  {
    title: "v4",
    videoLink: "https://www.youtube.com/embed/LNHBMFCzznE",
    category: "Psychology",
  },
  {
    title: "v5",
    videoLink: "https://www.youtube.com/embed/7sxpKhIbr0E",
    category: "Psychology",
  },
  {
    title: "v6",
    videoLink: "https://www.youtube.com/embed/tTb3d5cjSFI",
    category: "Psychology",
  },
  {
    title: "v7",
    videoLink: "https://www.youtube.com/embed/Hu4Yvq-g7_Y",
    category: "Efficiency",
  },
  {
    title: "v8",
    videoLink: "https://www.youtube.com/embed/kKvK2foOTJM",
    category: "Efficiency",
  },
  {
    title: "v9",
    videoLink: "https://www.youtube.com/embed/I4svF7J6MWg",
    category: "Efficiency",
  },
  {
    title: "v10",
    videoLink: "https://www.youtube.com/embed/NA_u3MVvvWM",
    category: "Others",
  },
  {
    title: "v11",
    videoLink: "https://www.youtube.com/embed/uiUPD-z9DTg",
    category: "Others",
  },
  {
    title: "v12",
    videoLink: "https://www.youtube.com/embed/oITW0XsZd3o",
    category: "Others",
  },
  {
    title: "v13",
    videoLink: "https://www.youtube.com/embed/MdZAMSyn_As",
    category: "Others",
  },
];
