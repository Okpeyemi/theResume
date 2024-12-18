"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '../ui/button';

import GitHub from "@/public/assets/images/github.png"
import LinkedIn from "@/public/assets/images/linkedin.png"
import Image from 'next/image';

const Section7 = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  console.log("Toutes les variables d'environnement :", process.env);
  
  const [borderColor, setBorderColor] = useState('border-popover');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Message envoyé avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      alert("Échec de l'envoi du message.");
    }
  };

  return (
    <div className="flex max-xl:flex-col my-10 border border-muted bg-card rounded-xl items-center p-10 justify-between">
      <div className="w-[50%] max-xl:w-full max-xl:pb-10">
        <h1 className="text-[50px] font-bold max-xl:text-center max-xl:mb-10 text-primary max-sm:text-[35px]">
          Travaillons <br /> ensemble!
        </h1>
        <p className="max-xl:text-center">
          Remplissez ce formulaire pour que nous puissions envisager une future collaboration.
        </p>
        <form onSubmit={handleSubmit} className="my-10">
          <input
            type="text"
            name="firstName"
            className={`border-b ${borderColor} pb-5 my-5 bg-card w-full font-medium focus:outline-none placeholder:text-popover`} 
            onClick={() => setBorderColor("border-primary")} 
            onBlur={() => setBorderColor("border-popover")} 
            onChange={handleChange}
            placeholder="Prénom"
            aria-label="First Name"
          />
          <input
            type="text"
            name="lastName"
            className={`border-b ${borderColor} pb-5 my-5 bg-card w-full font-medium focus:outline-none placeholder:text-popover`} 
            onClick={() => setBorderColor("border-primary")} 
            onBlur={() => setBorderColor("border-popover")} 
            onChange={handleChange}
            placeholder="Nom"
            aria-label="Last Name"
          />
          <input
            type="email" // Changed type to email for better validation
            name="email"
            className={`border-b ${borderColor} pb-5 my-5 bg-card w-full font-medium focus:outline-none placeholder:text-popover`} 
            onClick={() => setBorderColor("border-primary")} 
            onBlur={() => setBorderColor("border-popover")} 
            onChange={handleChange}
            placeholder="Adresse mail"
            aria-label="Email Address"
          />
          <input
            type="tel" // Changed type to tel for better input control
            name="phone"
            className={`border-b ${borderColor} pb-5 my-5 bg-card w-full font-medium focus:outline-none placeholder:text-popover`} 
            onClick={() => setBorderColor("border-primary")} 
            onBlur={() => setBorderColor("border-popover")} 
            onChange={handleChange}
            placeholder="Numéro de téléphone"
            aria-label="Phone Number"
          />
          <textarea
            name="message"
            className={`border-b ${borderColor} pb-5 my-5 bg-card w-full font-medium resize-none focus:outline-none placeholder:text-popover`} 
            onClick={() => setBorderColor("border-primary")} 
            onBlur={() => setBorderColor("border-popover")} 
            onChange={handleChange}
            placeholder="Message"
            rows={8}
            aria-label="Message"
          ></textarea>
          <Button type="submit" className="font-semibold rounded-full p-7 max-xl:w-full">
            Envoyez un message
          </Button>
        </form>
      </div>
      <div className="w-[35%] max-xl:w-full">
          <p className="my-5 text-start">Je suis actuellement disponible pour prendre en charge de nouveaux projets, alors n&apos;hésitez pas à m&apos;envoyer un message sur tout ce que vous souhaitez me confier. Vous pouvez me contacter à tout moment 24h/24 et 7j/7.</p>
          <div className="flex flex-col">
            <a href="tel:+22961916209" className="font-semibold my-5 underline text-[20px] hover:text-primary max-sm:text-[15px]">+229 619 162 09</a>
            <a href="mailto:maqsoud.tawaliou@epitech.eu" className="font-semibold my-5 underline text-[20px] hover:text-primary max-sm:text-[15px]">maqsoud.tawaliou@epitech.eu</a>
          </div>
          <div className="flex max-xl:justify-center items-center my-5">
                <a href="#">
                    <Image
                        className="mx-2 cursor-pointer"
                        src={GitHub}
                        width={35}
                        height={35}
                        alt="GitHub" 
                    />
                </a>
                <a href="#">
                    <Image
                        className="mx-2 cursor-pointer"
                        src={LinkedIn}
                        width={35}
                        height={35}
                        alt="LinkedIn" 
                    />
                </a>
            </div>
        </div>
    </div>
  );
};

export default Section7;
