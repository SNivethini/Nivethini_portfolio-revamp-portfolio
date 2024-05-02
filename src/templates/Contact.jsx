import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
export const Contact = () => {
  const form = useRef();

  const [email, setEmail] = useState()
  const [error, setError] = useState()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_q5qesvb", "template_x894o4i", form.current, {
        publicKey: "RLbdr2I5qOEe-CqZW",
      })
      .then(
        () => {
          alert("Mail sent!");
        },
        (error) => {
          setError('FAILED...');
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      className="flex flex-col max-w-[600px] w-[100%] text-blue-950 "
      ref={form}
      onSubmit={sendEmail}
    >
      <label className="pt-[10px] pb-[5px]">Name </label>
      <input type="text" className="bg-[#fff] py-[8px] px-[15px] rounded-[5px]" name="from_name" required />
      <label className="pt-[10px] pb-[5px]">Email</label>
      <input type="email" name="from_email" className="bg-[#fff] py-[8px] px-[15px] rounded-[5px]" onChange={(e) => { setEmail(e.target.value) }} formNoValidate required />{error}
      <label className="pt-[10px] pb-[5px]">Message</label>
      <textarea name="message" className="bg-[#fff] py-[8px] px-[15px] rounded-[5px]" required />
      <input
        className="border border-black w-full rounded-[5px] bg-blue-950 text-white mt-[20px] p-[8px] cursor-pointer"
        type="submit"
        value="Send"
      />
    </form>
  );
};
