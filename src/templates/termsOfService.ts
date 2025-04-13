/**
 * Terms of Service template with placeholders for dynamic content
 * 
 * Placeholders:
 * - {{productName}} - The name of the product/service
 * - {{date}} - The current date
 * - {{paymentModels}} - List of payment models
 * - {{jurisdiction}} - The legal jurisdiction
 */

export const termsOfServiceTemplate = `
  <div class="terms-of-service" style="color: #333; font-family: 'JetBrains Mono', monospace; line-height: 1.6;">
    <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 16px;">Terms of Service for {{productName}}</h1>
    <p style="color: #4a5568; margin-bottom: 16px;">Last updated: {{date}}</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">1. Introduction</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">Welcome to {{productName}}. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms.</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">2. Definitions</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">In these Terms:</p>
    <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
      <li style="margin-bottom: 8px;">"Service" refers to {{productName}} and all related services.</li>
      <li style="margin-bottom: 8px;">"User," "you," and "your" refer to the individual or entity using our Service.</li>
      <li style="margin-bottom: 8px;">"We," "us," and "our" refer to {{productName}}.</li>
    </ul>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">3. Payment Terms</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">Our payment models include:</p>
    <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
      {{paymentModels}}
    </ul>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">4. User Obligations</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">You agree to:</p>
    <ul style="color: #4a5568; margin-bottom: 16px; padding-left: 24px;">
      <li style="margin-bottom: 8px;">Provide accurate information when using our Service</li>
      <li style="margin-bottom: 8px;">Maintain the security of your account</li>
      <li style="margin-bottom: 8px;">Comply with all applicable laws and regulations</li>
      <li style="margin-bottom: 8px;">Not use our Service for any illegal or unauthorized purpose</li>
    </ul>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">5. Intellectual Property</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">All content, features, and functionality of our Service are owned by {{productName}} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">6. Limitation of Liability</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">To the maximum extent permitted by law, {{productName}} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">7. Governing Law</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">These Terms shall be governed by and construed in accordance with the laws of {{jurisdiction}}, without regard to its conflict of law provisions.</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">8. Changes to Terms</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
    
    <h2 style="color: #2d3748; font-size: 20px; margin-top: 24px; margin-bottom: 12px;">9. Contact Us</h2>
    <p style="color: #4a5568; margin-bottom: 16px;">If you have any questions about these Terms, please contact us.</p>
  </div>
`; 