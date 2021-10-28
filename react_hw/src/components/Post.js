import { useState } from "react";

function Post(){
    const [comment, setComment] = useState()

  //  const [posts, setPosts] = useState([
      let  posts=[ {  name:"@Fahad", title:"Tuwaiq", text:"tuwaiq bootcamp was so exciting experince"},
{ name:"@Ahmad", title:"Sport", text:"regular sports can improve health"},
{ name:"@Steve", title:"school", text:"School is fun!"}]
    //  ]);

      

return(
    <div id="n">

<div className="card" id="id1">
<img src= "/images/pic1.jpg" id="imgID"/> 
<h3 > {posts[0].name} </h3>
  <p> <b>{posts[0].title}: </b>{posts[0].text}</p>
 
  
  <br/>
  
</div>
<br/>
<div className="card" id="id2">
<img src= "/images/pic2.jpg" id="imgID"/> 
  <h3 >  {posts[1].name} </h3>
  <p> <b>{posts[1].title}: </b>{posts[1].text}</p>


  <br/>
</div>
<br/>
<div className="card" id="id3" >
<img src= "/images/pic3.jpg" id="imgID"/> 
<h3 >  {posts[2].name} </h3>
  <p> <b>{posts[2].title}: </b>{posts[2].text}</p>

  
  <br/>
  
</div>


    </div>
)


}

export default Post