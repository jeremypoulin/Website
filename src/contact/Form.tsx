import React from "react";
import "./CStyle.css";

const Form = () => {

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    
        formData.append("access_key", "8fd5153d-5117-4a6e-a5df-5f876f212694");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>feel free to reach out!</h2>
                <div className="input-box">
                    <label>full name</label>
                    <input type="text" className="field" placeholder="Enter your name" name="name" required/>
                </div>
                <div className="input-box">
                    <label>email address</label>
                    <input type="email" className="field" placeholder="Enter your email" name="email" required/>
                </div>
                <div className="input-box">
                    <label>message</label>
                    <textarea name="message" className="field mess" placeholder="Type your message here" required/>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Form;