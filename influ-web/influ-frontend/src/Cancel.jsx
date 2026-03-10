import Nav from "../comps/Nav.jsx";
import Footer from "../comps/Footer.jsx";

export default function CancellationPolicy() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

          .cancel-page {
            min-height: 100vh;
            padding: 140px 20px 80px 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            background: linear-gradient(135deg, #ffd6ff 0%, #f5b3f0 40%, #e592e0 100%);
            font-family: 'Montserrat', sans-serif;
          }

          .cancel-container {
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

          .cancel-container h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #6c197c;
            border-bottom: 2px solid #c6238d;
            padding-bottom: 12px;
          }

          .cancel-container h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 12px;
            color: #c6238d;
          }

          .cancel-container p {
            font-size: 0.95rem;
            margin-bottom: 14px;
            color: #444;
          }

          .cancel-container ul {
            padding-left: 20px;
            margin-bottom: 20px;
          }

          .cancel-container li {
            font-size: 0.95rem;
            margin-bottom: 8px;
          }

          @media (max-width: 768px) {
            .cancel-container {
              padding: 40px 25px;
            }

            .cancel-container h1 {
              font-size: 1.6rem;
            }
          }
        `}
      </style>

      <Nav />

      <div className="cancel-page">
        <div className="cancel-container">
          <h1>Cancellation Policy</h1>

          <p>
            This Cancellation Policy describes how you may cancel subscriptions,
            campaigns, and user accounts on the Infludot platform operated by
            Infludot Technologies (“InfluDot”, “we”, “us”, or “our”). 3
          </p>

          <h2>1. Subscription Cancellation (Influencers)</h2>
          <p>
            Influencers may cancel their subscription at any time. Once canceled,
            the subscription will remain active until the end of the current billing
            period. However, <strong>no refunds will be issued</strong> for any
            fees already paid. 4
          </p>

          <h2>2. Campaign Cancellation (Brands)</h2>
          <p>
            Brands have the ability to cancel a campaign any time before an
            influencer has been selected. Once an influencer has been selected
            and both parties have accepted terms, the campaign cannot be
            canceled. 5
          </p>

          <h2>3. Account Termination</h2>
          <p>
            Infludot reserves the right to terminate or suspend a user’s account
            for violations of platform policies, misrepresentation, or unethical
            behaviour. Termination may result in loss of access but does not
            entitle the user to any refunds. 6
          </p>

          <h2>4. Contact Information</h2>
          <p>
            For any questions about this Cancellation Policy, you may contact us
            using the contact details provided on the Infludot website or platform.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}