---
title: Contact Les Entrepreneurs Atlas
layout: renotheme-page
permalink: /contact/
subtitle: "Get In Touch With Our Team"
---

<!-- Contact Hero -->
<section class="section">
  <div class="container">
    <div class="text-center mb-4">
      <h1>Get In Touch</h1>
      <p class="text-muted">Ready to start your project? Contact us today for a free consultation and detailed quote</p>
    </div>
  </div>
</section>

<!-- Contact Form & Info -->
<section class="section">
  <div class="container">
    <div class="grid grid-2">
      
      <!-- Contact Form -->
      <div>
        <div class="card">
          <div class="card-header">
            <h3><i class="fas fa-envelope text-primary"></i> Request a Quote</h3>
            <p>Fill out the form below and we'll get back to you within 24 hours</p>
          </div>
          <div class="card-body">
            <form id="contact-form" action="#" method="POST">
              <div class="grid grid-2">
                <div>
                  <label for="first-name">First Name *</label>
                  <input type="text" id="first-name" name="first_name" required>
                </div>
                <div>
                  <label for="last-name">Last Name *</label>
                  <input type="text" id="last-name" name="last_name" required>
                </div>
              </div>
              
              <div class="grid grid-2">
                <div>
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" name="email" required>
                </div>
                <div>
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone">
                </div>
              </div>
              
              <div>
                <label for="project-type">Project Type</label>
                <select id="project-type" name="project_type">
                  <option value="">Select a service...</option>
                  <option value="kitchen-renovation">Kitchen Renovation</option>
                  <option value="bathroom-renovation">Bathroom Renovation</option>
                  <option value="home-renovation">Whole Home Renovation</option>
                  <option value="patio-deck">Patio & Deck Construction</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label for="budget">Estimated Budget</label>
                <select id="budget" name="budget">
                  <option value="">Select budget range...</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
              </div>
              
              <div>
                <label for="timeline">Project Timeline</label>
                <select id="timeline" name="timeline">
                  <option value="">When do you want to start?</option>
                  <option value="immediately">As soon as possible</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="just-planning">Just planning ahead</option>
                </select>
              </div>
              
              <div>
                <label for="message">Project Details *</label>
                <textarea id="message" name="message" rows="6" required placeholder="Please describe your project, location, specific requirements, and any questions you have."></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Contact Information -->
      <div>
        <div class="card">
          <div class="card-header">
            <h3><i class="fas fa-phone text-primary"></i> Contact Information</h3>
          </div>
          <div class="card-body">
            <div class="contact-info">
              <div class="contact-item">
                <i class="fas fa-map-marker-alt text-primary"></i>
                <div>
                  <h4>Our Location</h4>
                  <p>{{ site.company.address }}</p>
                  <p>Serving Greater Montreal, Québec City, and surrounding areas</p>
                </div>
              </div>
              
              <div class="contact-item">
                <i class="fas fa-phone text-primary"></i>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:{{ site.company.phone }}">{{ site.company.phone }}</a></p>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div class="contact-item">
                <i class="fas fa-envelope text-primary"></i>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:{{ site.company.email }}">{{ site.company.email }}</a></p>
                  <p>We respond to emails within 24 hours</p>
                </div>
              </div>
              
              <div class="contact-item">
                <i class="fas fa-certificate text-primary"></i>
                <div>
                  <h4>Licenses & Insurance</h4>
                  <p>RBQ License: {{ site.company.rbq_license }}</p>
                  <p>Full liability & workers' compensation insurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Service Areas -->
        <div class="card mt-3">
          <div class="card-header">
            <h3><i class="fas fa-map text-primary"></i> Service Areas</h3>
          </div>
          <div class="card-body">
            <p>We proudly serve clients throughout Québec:</p>
            <ul class="service-areas">
              <li>Montreal & Greater Montreal</li>
              <li>Québec City</li>
              <li>Laval</li>
              <li>Lévis</li>
              <li>Sherbrooke</li>
              <li>Surrounding regions</li>
            </ul>
            <p><strong>Don't see your area listed?</strong> Contact us anyway - we may still be able to help with your project.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="section bg-light">
  <div class="container">
    <div class="section-title">
      <h2>Frequently Asked Questions</h2>
      <p>Common questions about our services and process</p>
    </div>
    
    <div class="grid grid-2">
      <div>
        <h4>How long does a typical renovation take?</h4>
        <p>Project timelines vary based on scope and complexity. Kitchen renovations typically take 6-10 weeks, while bathroom renovations take 3-6 weeks. We'll provide a detailed timeline during your consultation.</p>
        
        <h4>Do you handle permits and inspections?</h4>
        <p>Yes! We handle all permit acquisitions, inspections, and regulatory compliance as part of our general contracting services.</p>
        
        <h4>What's included in your free consultation?</h4>
        <p>Our consultation includes on-site assessment, project discussion, preliminary timeline, and detailed written quote. There's no obligation and no hidden fees.</p>
      </div>
      
      <div>
        <h4>What payment methods do you accept?</h4>
        <p>We accept cash, check, and major credit cards. We also offer flexible payment plans for larger projects - just ask during your consultation.</p>
        
        <h4>Do you provide warranties?</h4>
        <p>Yes! We provide comprehensive warranties on all our work. Most work comes with a 2-year warranty, with some materials and finishes having extended manufacturer warranties.</p>
        
        <h4>Can you work with our existing contractor?</h4>
        <p>We're happy to collaborate with your preferred contractors or tradespeople. We can serve as the general contractor to ensure proper coordination and quality control.</p>
      </div>
    </div>
  </div>
</section>

<!-- Emergency Contact -->
<section class="section bg-primary text-white">
  <div class="container text-center">
    <h2>Emergency Construction Services</h2>
    <p class="mb-3">Need urgent repairs or emergency construction services? We're here to help.</p>
    <a href="tel:{{ site.company.phone }}" class="renotheme-btn renotheme-btn-secondary">
      <i class="fas fa-exclamation-triangle"></i> Call Emergency Line
    </a>
  </div>
</section>