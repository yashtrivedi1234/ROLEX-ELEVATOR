import React, { useEffect } from 'react'
import BreadCums from '../../Component/BreadCums'

const TermCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section >
            <BreadCums headText={"Terms and Conditions"} />
            <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
                <p className="mb-4">Welcome to Rolex Elevator Lift Showroom, Lucknow. By accessing our website, you agree to comply with these Terms and Conditions.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">1. Use of the Website</h3>
                <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">2. Product Information</h3>
                <p>All product descriptions and pricing are subject to change without notice. We strive to provide accurate information but do not guarantee completeness or accuracy.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">3. Limitation of Liability</h3>
                <p>Rolex Elevator Lift Showroom is not responsible for any direct, indirect, or incidental damages arising from the use of this website.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">4. Intellectual Property</h3>
                <p>All content, including text, graphics, and logos, is the property of Rolex Elevator Lift Showroom and is protected by copyright laws.</p>

                <h3 className="text-xl font-semibold mt-4 mb-2">5. Changes to Terms</h3>
                <p>We may update these Terms and Conditions at any time. Continued use of the website signifies your acceptance of any changes.</p>

                <p className="mt-4">For any inquiries, contact us at <strong>Rolex Elevator Lift Showroom, Lucknow</strong>.</p>
            </div>
        </section>
    );
};


export default TermCondition