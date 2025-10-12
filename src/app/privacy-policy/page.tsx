
import ScrollReveal from "@/components/scroll-reveal";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-foreground/80">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="prose max-w-none prose-invert text-foreground/80 space-y-6">
            <p>
              Exnus Protocol ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our protocol. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="text-2xl font-bold text-primary">1. Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, that you voluntarily give to us when you contact us.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </li>
              <li>
                <strong>Wallet Information:</strong> We may collect public wallet addresses you provide when interacting with our protocol. We do not collect or store private keys.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">2. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Administer our protocol, including airdrops and staking rewards.</li>
              <li>Communicate with you regarding your account or our services.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Notify you of updates to the Site and protocol.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">3. Disclosure of Your Information</h2>
            <p>
              We do not share, sell, rent, or trade your information with third parties for their commercial purposes. We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </li>
               <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, hosting services, and customer service.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary">4. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-bold text-primary">5. Policy for Children</h2>
            <p>
              We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
            </p>

            <h2 className="text-2xl font-bold text-primary">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:contact@exnus.xyz" className="text-primary hover:underline">contact@exnus.xyz</a>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
