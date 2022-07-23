import axios from "axios"


export var getStory = () => {
    axios.get("http://localhost:3307/story").then( (res, rej) => {
      if(res){
        return res.data;
      }else{
        console.log(rej);
        return
      }
    })
  }

