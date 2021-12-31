import { useState } from "react";

function Post() {

  
  let posts = [
    {
      name: "@Fahad",
      img: "/images/pic1.jpg",
      tweet: [
        "hello I'm at tuwaiq bootcamp ",
        "react is fun! ",
        " study smart ",
      ],
    },
    {
      name: "@Ahmad",
      img: "/images/pic2.jpg",
      tweet: ["Good morning ", "Good after noon ", "Good evening"],
    },
    {
      name: "@Steve",
      img: "/images/pic3.jpg",
      tweet: [
        "Jave programming seems to be easy ",
        "never waste your time ",
        "study hard",
      ],
    },
  ];

  return (
    <div id="n">
      {posts.map((element, index) => {
        return (
          <div id="cards">
            <p>User Name: {" " + element.name}</p>
            <img src={element.img} />
            <h5>Tweets:</h5>
            <p> {element.tweet + "  "}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
