import Nav from "../comps/Nav.jsx";
import Footer from "../comps/Footer.jsx";

export default function RefundPolicy() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

          .refund-page {
            min-height: 100vh;
            padding: 140px 20px 80px 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background: linear-gradient(135deg, #ffd6ff 0%, #f5b3f0 40%, #e592e0 100%);
            font-family: 'Montserrat', sans-serif;
          }

          .refund-container {
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

          .refund-container h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #6c197c;
            border-bottom: 2px solid #c6238d;
            padding-bottom: 12px;
          }

          .refund-container h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 12px;
            color: #c6238d;
          }

          .refund-container p {
            font-size: 0.95rem;
            margin-bottom: 14px;
            color: #444;
          }

          .refund-container ul {
            padding-left: 20px;
            margin-bottom: 20px;
          }

          .refund-container li {
            font-size: 0.95rem;
            margin-bottom: 8px;
          }

          .refund-container a {
            color: #6c197c;
            font-weight: 500;
            text-decoration: none;
            border-bottom: 1px solid rgba(108, 25, 124, 0.3);
            transition: all 0.2s ease;
          }

          .refund-container a:hover {
            color: #c6238d;
            border-color: #c6238d;
          }

          @media (max-width: 768px) {
            .refund-container {
              padding: 40px 25px;
            }

            .refund-container h1 {
              font-size: 1.6rem;
            }
          }
        `}
      </style>

      <Nav />

      <div className="refund-page">
        <div className="refund-container">
          <h1>Refund Policy</h1>

          <p>
            This Refund Policy applies to all payments and fees associated with the
            Infludot platform operated by Infludot Technologies (“InfluDot”, “we”, “us”, or “our”). It outlines how refunds are handled for influencer subscriptions and brand payments. 1
          </p>

          <h2>1. Influencer Subscriptions</h2>
          <p>
            All subscription fees paid by influencers are <strong>non-refundable under all circumstances</strong> once a payment has been completed. 2
          </p>

          <h2>2. Brand Payments</h2>
          <p>
            Brands are only required to make payments to influencers after content has
            been received and approved. Since brand registration on the platform is
            currently free, there are no refund policies applicable to brand payments
            at this time. 3
          </p>

          <h2>3. Future Updates</h2>
          <p>
            If a registration fee or new paid feature for brands is introduced in the
            future, this Refund Policy will be updated accordingly and published on
            the website. 4
          </p>

          <h2>4. Contact Information</h2>
          <p>
            If you have any questions regarding this Refund Policy, you may reach
            out to us at the contacts listed on our main site. 5
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}