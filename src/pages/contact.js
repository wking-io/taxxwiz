import React, { useState } from "react"
import { validate } from "email-validator"
import VisuallyHidden from "@reach/visually-hidden"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Field, Textarea } from "../components/form"

const verify = ({ name, phone, email, message }) =>
  validate(email) && [message, name, phone].every(field => field.length > 0)

const ContactForm = props => {
  const [name, updateName] = useState("")
  const [phone, updatePhone] = useState("")
  const [email, updateEmail] = useState("")
  const [message, updateMessage] = useState("")
  const isValid = verify({ email, message, name, phone })

  return (
    <form
      name="contact"
      method="POST"
      action="/contact-thank-you"
      netlify-honeypot="bot-field"
      data-netlify="true"
      data-track
      data-event-category="Contact"
      data-event-action="Submitted Message"
      data-event-label="Contact Form"
      {...props}
    >
      <input type="hidden" name="form-name" value="contact" />
      <VisuallyHidden>
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </VisuallyHidden>
      <Field
        name="name"
        label="Full Name"
        value={name}
        update={updateName}
        dark
      />
      <Field
        name="phone-number"
        label="Phone Number"
        value={phone}
        update={updatePhone}
        dark
      />
      <Field
        name="email"
        label="Email Address"
        value={email}
        update={updateEmail}
        dark
      />
      <Textarea
        name="message"
        label="Message"
        value={message}
        update={updateMessage}
        dark
      />
      <input
        type="submit"
        className="py-4 btn btn--primary w-full"
        value="Send Message"
        disabled={!isValid}
      />
    </form>
  )
}

const ContactPage = () => (
  <Layout theme="light" label="Contact">
    <SEO title="Contact Us" />
    <section className="bg-black text-white min-h-screen pt-32 flex flex-col lg:flex-row">
      <div className="lg:max-w-lg px-12 flex-shrink-0 self-center mb-12 md:flex lg:block">
        <div className="md:mr-12 lg:mr-0 md:flex-shrink-0 md:w-2/5 lg:w-full">
          <h2 className="text-3xl font-serif font-bold leading-tight mb-6">
            Do you have questions for us? Send us a message.
          </h2>
          <div className="mb-4">
            <p className="font-bold">Hours:</p>
            <p>Mon - Fri: 8:30am-4:30pm</p>
          </div>
          <div className="flex mb-8">
            <div className="w-1/2 mr-2">
              <p className="font-bold">Phone:</p>
              <p>334-567-4223</p>
            </div>
            <div className="w-1/2 ml-2">
              <p className="font-bold">Fax:</p>
              <p>877-395-9876</p>
            </div>
          </div>
        </div>
        <ContactForm className="w-full" />
      </div>
      <div className="w-full aspect-4:3 lg:aspect-none">
        <iframe
          className="w-full h-full absolute top-0 left-0 lg:static"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26937.395484295597!2d-86.1358861039382!3d32.44126537850192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fb2188ac5c8715%3A0x7a62e4304fb8822f!2sAlabama%20Home%20Mortgage%20Loans!5e0!3m2!1sen!2sus!4v1567542900813!5m2!1sen!2sus"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          title="ahm-map"
        ></iframe>
      </div>
    </section>
  </Layout>
)

export default ContactPage
