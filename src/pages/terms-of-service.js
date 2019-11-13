import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TermsPage = () => (
  <Layout label="Terms">
    <SEO title="Terms Of Use" />
    <div className="max-w-4xl mx-auto w-3/5 my-40 font-serif">
      <h2 className="font-serif font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-8">
        Terms of Service
      </h2>
      <h3 className="text-xl uppercase font-sans font-bold text-primary-dark mb-4">
        1. Terms of Service
      </h3>
      <p className="mb-12">
        By accessing the website at{" "}
        <Link className="underline hover:no-underline" to="/">
          https://alahomemortgage.com
        </Link>
        , you are agreeing to be bound by these terms of service, all applicable
        laws and regulations, and agree that you are responsible for compliance
        with any applicable local laws. If you do not agree with any of these
        terms, you are prohibited from using or accessing this site. The
        materials contained in this website are protected by applicable
        copyright and trademark law.
      </p>
      <h3 className="text-xl uppercase font-sans font-bold text-primary-dark mb-4">
        2. Use License
      </h3>
      <p className="mb-6">
        Permission is granted to temporarily download one copy of the materials
        (information or software) on Alabama Home Mortgage Loans’s website for
        personal, non-commercial transitory viewing only. This is the grant of a
        license, not a transfer of title, and under this license you may not:
      </p>
      <ol className="mb-6 list-decimal ml-8">
        <li className="pl-3 mb-2">modify or copy the materials;</li>
        <li className="pl-3 mb-2">
          use the materials for any commercial purpose, or for any public
          display (commercial or non-commercial);
        </li>
        <li className="pl-3 mb-2">
          attempt to decompile or reverse engineer any software contained on
          Alabama Home Mortgage Loans’s website;
        </li>
        <li className="pl-3 mb-2">
          remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li className="pl-3">
          transfer the materials to another person or “mirror” the materials on
          any other server.
        </li>
      </ol>
      <p className="mb-12">
        This license shall automatically terminate if you violate any of these
        restrictions and may be terminated by Alabama Home Mortgage Loans at any
        time. Upon terminating your viewing of these materials or upon the
        termination of this license, you must destroy any downloaded materials
        in your possession whether in electronic or printed format.
      </p>

      <h3 className="text-xl uppercase font-sans font-bold text-primary-dark mb-4">
        3. Disclaimer
      </h3>
      <p className="mb-6">
        The materials on Alabama Home Mortgage Loans’s website are provided on
        an ‘as is’ basis. Alabama Home Mortgage Loans makes no warranties,
        expressed or implied, and hereby disclaims and negates all other
        warranties including, without limitation, implied warranties or
        conditions of merchantability, fitness for a particular purpose, or
        non-infringement of intellectual property or other violation of rights.
      </p>
      <p className="mb-12">
        Further, Alabama Home Mortgage Loans does not warrant or make any
        representations concerning the accuracy, likely results, or reliability
        of the use of the materials on its website or otherwise relating to such
        materials or on any sites linked to this site.
      </p>
      <h3 className="text-xl uppercase font-sans font-bold text-primary-dark mb-4">
        4. Limitations
      </h3>
      <p className="mb-12">
        In no event shall Alabama Home Mortgage Loans or its suppliers be liable
        for any damages (including, without limitation, damages for loss of data
        or profit, or due to business interruption) arising out of the use or
        inability to use the materials on Alabama Home Mortgage Loans’s website,
        even if Alabama Home Mortgage Loans or a Alabama Home Mortgage Loans
        authorized representative has been notified orally or in writing of the
        possibility of such damage. Because some jurisdictions do not allow
        limitations on implied warranties, or limitations of liability for
        consequential or incidental damages, these limitations may not apply to
        you.
      </p>
      <h3 className="text-xl uppercase font-sans font-bold text-primary-dark mb-4">
        5. Accuracy of materials
      </h3>
      <p className="mb-12">
        The materials appearing on Alabama Home Mortgage Loans’s website could
        include technical, typographical, or photographic errors. Alabama Home
        Mortgage Loans does not warrant that any of the materials on its website
        are accurate, complete or current. Alabama Home Mortgage Loans may make
        changes to the materials contained on its website at any time without
        notice. However Alabama Home Mortgage Loans does not make any commitment
        to update the materials.
      </p>
      <h3 className="text-xl uppercase font-sans font-bold text-primary-dark mb-4">
        6. Links
      </h3>
      <p className="mb-12">
        Alabama Home Mortgage Loans has not reviewed all of the sites linked to
        its website and is not responsible for the contents of any such linked
        site. The inclusion of any link does not imply endorsement by Alabama
        Home Mortgage Loans of the site. Use of any such linked website is at
        the user’s own risk.
      </p>
      <h3 className="text-xl uppercase font-sans font-bold text-primary-dark mb-4">
        7. Modifications
      </h3>
      <p className="mb-12">
        Alabama Home Mortgage Loans may revise these terms of service for its
        website at any time without notice. By using this website you are
        agreeing to be bound by the then current version of these terms of
        service.
      </p>
      <h3 className="text-xl uppercase font-sans font-bold text-primary-dark mb-4">
        8. Governing Law
      </h3>
      <p className="mb-12">
        These terms and conditions are governed by and construed in accordance
        with the laws of Alabama and you irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.
      </p>
    </div>
  </Layout>
)

export default TermsPage
