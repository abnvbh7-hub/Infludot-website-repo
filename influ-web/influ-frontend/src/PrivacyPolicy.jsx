import Nav from "../comps/Nav.jsx";
import Footer from "../comps/Footer.jsx";

export default function PrivacyPolicy() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

          .privacy-page {
            min-height: 100vh;
            padding: 140px 20px 80px 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background: linear-gradient(135deg, #ffd6ff 0%, #f5b3f0 40%, #e592e0 100%);
            font-family: 'Montserrat', sans-serif;
          }

          .privacy-container {
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

          .privacy-container h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #6c197c;
            border-bottom: 2px solid #c6238d;
            padding-bottom: 12px;
          }

          .privacy-container h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 12px;
            color: #c6238d;
          }

          .privacy-container p {
            font-size: 0.95rem;
            margin-bottom: 14px;
            color: #444;
          }

          .privacy-container ul {
            padding-left: 20px;
            margin-bottom: 20px;
          }

          .privacy-container li {
            font-size: 0.95rem;
            margin-bottom: 8px;
          }

          .privacy-container a {
            color: #6c197c;
            font-weight: 500;
            text-decoration: none;
            border-bottom: 1px solid rgba(108, 25, 124, 0.3);
            transition: all 0.2s ease;
          }

          .privacy-container a:hover {
            color: #c6238d;
            border-color: #c6238d;
          }

          @media (max-width: 768px) {
            .privacy-container {
              padding: 40px 25px;
            }

            .privacy-container h1 {
              font-size: 1.6rem;
            }
          }
        `}
      </style>

      <Nav />

      <div className="privacy-page">
        <div className="privacy-container">
          <h1>Privacy Policy</h1>

          <p>
            <strong>Infludot Technologies</strong> (“InfluDot”, “we”, “us”, or “our”) respects your privacy and is committed
            to protecting your personal data. This Privacy Policy outlines how we collect, use, share, and safeguard
            your information when you use our website, mobile application, and related services (collectively, the “Platform”).
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> business and influencer details like name, email, phone number, company/shop certificates, social media links, audience metrics, and KYC documents.</li>
            <li><strong>Usage Information:</strong> IP address, browser type, device information, access times, and pages visited.</li>
            <li><strong>Campaign Data:</strong> content briefs, budgets, messages, and campaign performance metrics.</li>
            <li><strong>Payment & Transaction Data:</strong> payment information collected securely via third-party gateways (e.g., Razorpay).</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Create and manage user accounts.</li>
            <li>Facilitate influencer-brand collaborations.</li>
            <li>Send updates, notifications, and reports.</li>
            <li>Improve user experience and platform functionality.</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We may share your data with:</p>
          <ul>
            <li>Verified influencers or brands as needed for collaboration.</li>
            <li>Payment processors and KYC verification partners.</li>
            <li>Legal and regulatory authorities when required.</li>
            <li>Service providers assisting in technology, analytics, and marketing.</li>
            <li>Other users during relevant campaign discussions.</li>
            <li>We do not sell your personal information to third parties.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures, including encrypted data storage, secure gateways, and access control.
            However, no method of transmission or electronic storage is 100% secure.
          </p>

          <h2>5. Your Rights and Choices</h2>
          <ul>
            <li>Access or update your personal information.</li>
            <li>Withdraw consent and delete your account.</li>
            <li>Request corrections or restrictions on use.</li>
            <li>Opt-out of promotional communications.</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to improve functionality, track behavior analytics, and remember preferences.
            You can manage cookie settings through your browser.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our platform may contain links to external websites, but we are not responsible for the privacy practices of those sites.
          </p>

          <h2>8. Children’s Privacy</h2>
          <p>
            The Platform is not intended for individuals under the age of 18, and we do not knowingly collect personal data from minors.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy occasionally. Material changes will be communicated via email or platform notifications.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, you can reach us at:
          </p>
          <p>Email: <a href="mailto:infludottechnologies@gmail.com">infludottechnologies@gmail.com</a></p>
          <p>Address: 0-0, Panchadarla, Rambilli, Anakapalli, Andhra Pradesh 531061</p>
        </div>
      </div>

      <Footer />
    </>
  );
}