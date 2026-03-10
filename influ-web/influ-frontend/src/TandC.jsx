import Nav from "../comps/Nav.jsx";
import Footer from "../comps/Footer.jsx";

export default function TermsConditions() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

          .terms-page {
            min-height: 100vh;
            padding: 140px 20px 80px 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background: linear-gradient(135deg, #ffd6ff 0%, #f5b3f0 40%, #e592e0 100%);
            font-family: 'Montserrat', sans-serif;
          }

          .terms-container {
            width: 100%;
            max-width: 950px;
            padding: 60px 50px;
            border-radius: 18px;

            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);

            box-shadow: 0 15px 45px rgba(108, 25, 124, 0.15);
            border: 1px solid rgba(198, 35, 141, 0.15);

            color: #2e1d2f;
            line-height: 1.8;
          }

          .terms-container h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #6c197c;
            border-bottom: 2px solid #c6238d;
            padding-bottom: 12px;
          }

          .terms-container h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 12px;
            color: #c6238d;
          }

          .terms-container p {
            font-size: 0.95rem;
            margin-bottom: 14px;
            color: #444;
          }

          .terms-container ul {
            padding-left: 20px;
            margin-bottom: 20px;
          }

          .terms-container li {
            font-size: 0.95rem;
            margin-bottom: 8px;
          }

          .terms-container a {
            color: #6c197c;
            font-weight: 500;
            text-decoration: none;
            border-bottom: 1px solid rgba(108, 25, 124, 0.3);
            transition: all 0.2s ease;
          }

          .terms-container a:hover {
            color: #c6238d;
            border-color: #c6238d;
          }

          @media (max-width: 768px) {
            .terms-container {
              padding: 40px 25px;
            }

            .terms-container h1 {
              font-size: 1.6rem;
            }
          }
        `}
      </style>

      <Nav />

      <div className="terms-page">
        <div className="terms-container">
          <h1>Terms & Conditions</h1>

          <p>
            These Terms & Conditions (“Terms”) govern your access to and use of
            the Infludot platform (“Platform”), operated by Infludot Technologies
            (“InfluDot”, “we”, “us”, or “our”). By accessing or using Infludot,
            you agree to be bound by these Terms. If you do not agree, you may
            not use the Platform. 1
          </p>

          <h2>1. Definitions</h2>
          <ul>
            <li><strong>BUSINESS:</strong> A business or individual registering to promote products/services using influencer campaigns.</li>
            <li><strong>Influencer:</strong> A content creator offering promotional services through the Platform.</li>
            <li><strong>User:</strong> Any individual or entity using the Platform (including both businesses and influencers).</li>
            <li><strong>Platform:</strong> Website, mobile app, Web App and all associated services provided by Infludot.</li>
          </ul>

          <h2>2. User Accounts and Registration</h2>
          <ul>
            <li>Users must be 18 years or older to register.</li>
            <li>Information provided must be accurate and updated regularly.</li>
            <li>Businesses must complete KYC verification before full access is granted.</li>
            <li>Users are responsible for maintaining the confidentiality of login credentials.</li>
          </ul>

          <h2>3. Platform Usage</h2>
          <ul>
            <li>Do not impersonate another person or entity.</li>
            <li>Do not engage in fraudulent activities.</li>
            <li>Do not misuse or copy campaign materials, influencer content, or business insights.</li>
            <li>Infludot may suspend or terminate accounts that violate these Terms. 2</li>
          </ul>

          <h2>4. Campaign Creation</h2>
          <p>
            Businesses can create promotional campaigns and optionally enable
            influencers to apply and quote based on the business's requirements.
            Businesses may accept or reject campaign participation at their discretion. 3
          </p>

          <h2>5. Payment</h2>
          <p>
            All transactions between businesses and influencers are handled
            directly between the parties, and Infludot is not responsible for
            payments, negotiations, or disputes between users. 4
          </p>

          <h2>6. Content Guidelines</h2>
          <ul>
            <li>Avoid plagiarism, hate speech, adult content, or misinformation.</li>
            <li>Respect all copyright and intellectual property laws.</li>
            <li>Businesses may request revisions before final approval. 5</li>
          </ul>

          <h2>7. Subscription and Cancellation</h2>
          <ul>
            <li>Influencer subscriptions may be billed monthly, quarterly, or yearly.</li>
            <li>Users may cancel at any time, but no partial refunds will be issued.</li>
            <li>At present, businesses are not charged a subscription fee.</li>
            <li>Infludot may revise subscription fees with prior notice. 6</li>
          </ul>

          <h2>8. Termination</h2>
          <p>
            Infludot may suspend or permanently disable accounts for misuse,
            fraud, or breach of these Terms. Users may also lose access if
            agreements are violated. 7
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            Infludot is not liable for losses caused by platform downtime,
            campaign disputes, or third-party actions. We do not guarantee
            campaign success or influencer performance. Total liability is
            limited to the amount paid by the user in the last six months. 8
          </p>

          <h2>10. Intellectual Property</h2>
          <p>
            All trademarks, logos, and platform content belong to Infludot.
            Users retain rights to their content but grant Infludot a license
            to use it for purposes including promotion, analytics, and reporting. 9
          </p>

          <h2>11. Dispute Resolution</h2>
          <p>
            Most disputes should be resolved via in-app chat or support.
            Unresolved matters will be governed by Indian laws, with jurisdiction
            set in Visakhapatnam, Andhra Pradesh. 10
          </p>

          <h2>12. Updates to These Terms</h2>
          <p>
            We may modify these Terms from time to time. Users will be notified
            by email or dashboard alerts of significant changes. 11
          </p>

          <h2>13. Contact Information</h2>
          <p>Email: <a href="mailto:Infludottecnologies@gmail.com">Infludottecnologies@gmail.com</a></p>
          <p>Address: 0-0, Panchadarla, Rambilli, Anakapalli, Andhra Pradesh – 531061</p>
          <p>Phone: 9059910137 12</p>
        </div>
      </div>

      <Footer />
    </>
  );
}