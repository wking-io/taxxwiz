import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const PrivacyPage = () => (
  <Layout label="Privacy">
    <SEO title="Privacy Policy" />
    <div className="max-w-4xl mx-auto w-3/5 my-40 font-serif">
      <h2 className="font-serif font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-8">
        Privacy Policy
      </h2>
      <p className="mb-6">Your privacy is important to us.</p>
      <p className="mb-6">
        It is <strong>Alabama Home Mortgage Loans’s</strong> policy to respect
        your privacy regarding any information we may collect while operating
        our website. Accordingly, we have developed this privacy policy in order
        for you to understand how we collect, use, communicate, disclose and
        otherwise make use of personal information. We have outlined our privacy
        policy below.
      </p>
      <ul className="mb-6 list-disc ml-8">
        <li className="pl-3 mb-2">
          We will collect personal information by lawful and fair means and,
          where appropriate, with the knowledge or consent of the individual
          concerned.
        </li>
        <li className="pl-3 mb-2">
          Before or at the time of collecting personal information, we will
          identify the purposes for which information is being collected.
        </li>
        <li className="pl-3 mb-2">
          We will collect and use personal information solely for fulfilling
          those purposes specified by us and for other ancillary purposes,
          unless we obtain the consent of the individual concerned or as
          required by law.
        </li>
        <li className="pl-3 mb-2">
          Personal data should be relevant to the purposes for which it is to be
          used, and, to the extent necessary for those purposes, should be
          accurate, complete, and up-to-date.
        </li>
        <li className="pl-3 mb-2">
          We will protect personal information by using reasonable security
          safeguards against loss or theft, as well as unauthorized access,
          disclosure, copying, use or modification.
        </li>
        <li className="pl-3 mb-2">
          We will make readily available to customers information about our
          policies and practices relating to the management of personal
          information.
        </li>
        <li className="pl-3">
          We will only retain personal information for as long as necessary for
          the fulfilment of those purposes.
        </li>
      </ul>
      <p className="mb-12">
        We are committed to conducting our business in accordance with these
        principles in order to ensure that the confidentiality of personal
        information is protected and maintained.{" "}
        <strong>Alabama Home Mortgage Loans</strong> may change this privacy
        policy from time to time at{" "}
        <strong>Alabama Home Mortgage Loans’s</strong> sole discretion.
      </p>
      <p className="mb-12">
        <em>
          <strong>Updated:</strong> 05-23-2017
        </em>
      </p>
    </div>
  </Layout>
)

export default PrivacyPage
