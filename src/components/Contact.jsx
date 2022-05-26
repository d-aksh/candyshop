import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>ORDER SPECIAL</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Type Your E-mail" />
        <textarea placeholder="Write here..."></textarea>
        <input type="submit" value="ORDER" />
      </form>
    </div>
  );
}

export default Contact;
