import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [toggle, setToggle] = useState(false);

  // when we click on sent change body class = sent jo bhi class thi usse none =  .sent{props}

  return (
    <>
      <body className={toggle ? "sent" : "none"}>
        {/* <small>Enter message (optional) and click button "Send"</small> */}
        <div class="wrapper centered">
          <article class="letter">
            <div class="side">
              <h1 className="Headdd">Contact us</h1>
              <p className="Paraggg">
                <textarea placeholder="Your message"></textarea>
              </p>
            </div>
            <div class="side">
              <p className="Paraggg">
                <input type="text" placeholder="Your name" />
              </p>
              <p className="Paraggg">
                <input type="email" placeholder="Your email" />
              </p>
              <p className="Paraggg">
                <button id="sendLetter" onClick={() => setToggle(!toggle)}>
                  Send
                </button>
              </p>
            </div>
          </article>
          <div class="envelope front"></div>
          <div class="envelope back"></div>
        </div>
        <p class="result-message centered">Thank you for your message</p>
      </body>
    </>
  );
};
