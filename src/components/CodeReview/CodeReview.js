import React from 'react';
import"./CodeReview.css";
import { useState, useEffect } from 'react';
import {CgEnter} from 'react-icons/cg';
import {AiFillRobot} from "react-icons/ai";
import {GrUserManager} from 'react-icons/gr';


const CodeReview = () => {
    const [input, setInput] = useState("");
    const [chatlog, setchatlog] = useState([
      {
        
      }
      
    ]);
  
    async function handleSubmit(e) {
      e.preventDefault();
      let newchatlog = [...chatlog, { user: "me", message: `${input}` }];
      const code = input;
      setInput("");
      setchatlog(newchatlog);
  
      const response = await fetch("https://codereview-backend2.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: code
        })
      });
  
      const data = await response.json();
      // console.log(data.data);
      setchatlog([...newchatlog, { user: "gpt", message: data.data }]);
  
    }
  
  
    function clearChat() {
      setchatlog([]);
    }
  return (
    <div  className='CodeReview'>
          <aside className="sidebox">
        <div className="newchat" onClick={clearChat}>
          Clear chat
        </div>
      </aside>
      <section className="mainbox">

        {chatlog.map((message, index) =>
          (<Chat key={index} message={message} />)
        )}

        <div className="chat-input-container" >
          <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", justifyContent: "center" }}   >
            <input className="chat-input" placeholder="Paste you code here"
              value={input}

              onChange={(e) => setInput(e.target.value)}
            >

            </input>

            <button  type='submit'  className='button'  style={{width:"40px"}}>
              <CgEnter/>
          </button>
          </form>


        </div>
      </section>
    </div>
  )
}


const Chat = ({ message }) => {
    return (
      <div className={`chat-log  ${message.user == "me" && "me"}`}  >
        <div className="chat-message"  >
          <div className="avatar">
            {message.user == "me" ? <GrUserManager/> : <AiFillRobot  />}
          </div>
          <div className="message">
            {message.message}
          </div>
        </div>
  
      </div>
    )
  }
export default CodeReview