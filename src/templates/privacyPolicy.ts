/**
 * Privacy Policy template with placeholders for dynamic content
 * 
 * Placeholders:
 * - {{companyName}} - The name of the company
 * - {{email}} - Contact email address
 * - {{date}} - The current date
 * - {{dataCollected}} - List of data types collected
 * - {{dataUsage}} - List of how data is used
 */

export const privacyPolicyTemplate = `
  <div class="privacy-policy" style="color: #333; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6;">
    <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 16px;">Privacy Policy for {{companyName}}</h1>
    <p style="color: #4a5568; margin-bottom: 16px;">Last updated: {{date}}</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">1. Introduction</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">{{companyName}} ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">2. Contact Information</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
    <p style="color: #4a5568; margin-bottom: 16px;">Email: {{email}}</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">3. Data We Collect</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">We collect and process the following data about you:</p>
    <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
      {{dataCollected}}
    </ul>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">4. How We Use Your Data</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">We use your data for the following purposes:</p>
    <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
      {{dataUsage}}
    </ul>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">5. Data Security</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">6. Your Legal Rights</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">7. Changes to the Privacy Policy</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.</p>
  </div>
`; 