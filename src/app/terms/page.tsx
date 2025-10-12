
import ScrollReveal from "@/components/scroll-reveal";

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-foreground/80">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="prose max-w-none prose-invert text-foreground/80 space-y-6">
            <h2 className="text-2xl font-bold text-primary">1. Agreement to Terms</h2>
            <p>
              By accessing our website and using the Exnus Protocol, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
            
            <h2 className="text-2xl font-bold text-primary">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Exnus Protocol's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Exnus Protocol's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Exnus Protocol at any time.
            </p>

            <h2 className="text-2xl font-bold text-primary">3. Disclaimer</h2>
            <p>
              The materials on Exnus Protocol's website are provided on an 'as is' basis. Exnus Protocol makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
                Further, Exnus Protocol does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. Staking, trading, and investing in cryptocurrencies involve significant risk of loss and is not suitable for all investors.
            </p>

            <h2 className="text-2xl font-bold text-primary">4. Limitations</h2>
            <p>
              In no event shall Exnus Protocol or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Exnus Protocol's website, even if Exnus Protocol or a Exnus Protocol authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-primary">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Exnus Protocol's website could include technical, typographical, or photographic errors. Exnus Protocol does not warrant that any of the materials on its website are accurate, complete or current. Exnus Protocol may make changes to the materials contained on its website at any time without notice. However, Exnus Protocol does not make any commitment to update the materials.
            </p>

            <h2 className="text-2xl font-bold text-primary">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2 className="text-2xl font-bold text-primary">7. Changes to Terms</h2>
            <p>
              Exnus Protocol may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-primary">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:contact@exnus.xyz" className="text-primary hover:underline">contact@exnus.xyz</a>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
