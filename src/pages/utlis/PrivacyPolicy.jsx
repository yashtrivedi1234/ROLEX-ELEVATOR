import React, { useEffect } from 'react';
import BreadCums from '../../Component/BreadCums';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section >
            <BreadCums headText={"Privacy Policy"} />
            <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                <p className="mb-4">Welcome to Rolex Elevator Lift Showroom, Lucknow. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">1. Information We Collect</h3>
                <p>We may collect personal information such as your name, email address, phone number, and location when you interact with our website, request a quote, or contact us.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Information</h3>
                <p>We use your information to improve our services, respond to inquiries, process orders, and enhance your experience on our website.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">3. Data Protection</h3>
                <p>We implement security measures to safeguard your personal information. However, no method of transmission over the internet is 100% secure.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">4. Third-Party Services</h3>
                <p>We may use third-party services for analytics, advertising, and payment processing. These services have their own privacy policies.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">5. Cookies</h3>
                <p>Our website uses cookies to improve functionality and analyze website traffic. You can manage cookie preferences through your browser settings.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">6. Your Rights</h3>
                <p>You have the right to request access, correction, or deletion of your personal information. Contact us for any privacy-related concerns.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">7. Updates to This Policy</h3>
                <p>We may update this Privacy Policy periodically. Please review it regularly for any changes.</p>

                <p className="mt-4">For any queries regarding this Privacy Policy, contact us at <strong>Rolex Elevator Lift Showroom, Lucknow</strong>.</p>
            </div>
        </section>
    );
};


export default PrivacyPolicy