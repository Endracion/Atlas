---
title: Our Portfolio
layout: renotheme-page
permalink: /portfolio2/
subtitle: "Showcasing Our Construction Expertise"
---

<!-- Portfolio Hero -->
<section class="section">
  <div class="container">
    <div class="text-center mb-4">
      <h1>Our Construction Portfolio</h1>
      <p class="text-muted">Showcasing our expertise in residential, commercial, and landscaping projects</p>
    </div>
  </div>
</section>

<!-- Portfolio Grid -->
<section class="section">
  <div class="container">
    <div class="grid grid-3">
      {% for project in site.pages %}
        {% if project.layout == "project" %}
        <div class="card project-card">
          {% if project.thumbnail %}
          <img src="{{ project.thumbnail }}" alt="{{ project.title }}" class="project-image">
          {% endif %}
          <div class="card-body">
            <h4>{{ project.title }}</h4>
            <p class="text-muted">
              <i class="fas fa-map-marker-alt"></i> {{ project.location }}<br>
              {% if project.year %}<i class="fas fa-calendar"></i> {{ project.year }}{% endif %}
              {% if project.cost %} • <i class="fas fa-dollar-sign"></i> {{ project.cost }}{% endif %}
            </p>
            <p>{{ project.content | strip_html | truncatewords: 25 }}</p>
            <div class="hero-cta">
              <a href="{{ project.url }}" class="btn btn-outline">View Project</a>
            </div>
          </div>
        </div>
        {% endif %}
      {% endfor %}
      
      <!-- Featured Projects (if no project pages exist) -->
      {% if site.pages.size == 0 %}
      <div class="card project-card">
        <img src="/assets/images/kitchen-renovation.jpg" alt="Kitchen Renovation" class="project-image">
        <div class="card-body">
          <h4>Complete Kitchen Renovation</h4>
          <p class="text-muted">
            <i class="fas fa-map-marker-alt"></i> Québec City, QC<br>
            <i class="fas fa-calendar"></i> 2024 • <i class="fas fa-dollar-sign"></i> $45,000
          </p>
          <p>Comprehensive kitchen renovation transforming a dated 1990s kitchen into a modern, functional space with custom cabinetry and high-end appliances.</p>
          <div class="hero-cta">
            <a href="/portfolio/kitchen-renovation/" class="btn btn-outline">View Project</a>
          </div>
        </div>
      </div>
      
      <div class="card project-card">
        <img src="/assets/images/office-renovation.jpg" alt="Office Renovation" class="project-image">
        <div class="card-body">
          <h4>Commercial Office Renovation</h4>
          <p class="text-muted">
            <i class="fas fa-map-marker-alt"></i> Montreal, QC<br>
            <i class="fas fa-calendar"></i> 2024 • <i class="fas fa-dollar-sign"></i> $75,000
          </p>
          <p>Modern office transformation creating an open, collaborative work environment with contemporary design and integrated technology.</p>
          <div class="hero-cta">
            <a href="/portfolio/office-renovation/" class="btn btn-outline">View Project</a>
          </div>
        </div>
      </div>
      
      <div class="card project-card">
        <img src="/assets/images/patio-landscaping.jpg" alt="Patio & Landscaping" class="project-image">
        <div class="card-body">
          <h4>Outdoor Patio & Landscaping</h4>
          <p class="text-muted">
            <i class="fas fa-map-marker-alt"></i> Laval, QC<br>
            <i class="fas fa-calendar"></i> 2024 • <i class="fas fa-dollar-sign"></i> $28,000
          </p>
          <p>Comprehensive outdoor living space with natural stone patio, custom pergola, and professional landscaping design.</p>
          <div class="hero-cta">
            <a href="/portfolio/patio-landscaping/" class="btn btn-outline">View Project</a>
          </div>
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</section>

<!-- Services CTA -->
<section class="section bg-light">
  <div class="container text-center">
    <h2>Ready to Start Your Project?</h2>
    <p class="text-muted mb-3">Let us bring your vision to life with quality craftsmanship and professional service</p>
    <div class="hero-cta">
      <a href="/contact/" class="btn btn-primary">
        <i class="fas fa-envelope"></i> Get Free Quote
      </a>
      <a href="tel:{{ site.company.phone }}" class="btn btn-secondary">
        <i class="fas fa-phone"></i> Call Now
      </a>
      <a href="/services/" class="btn btn-secondary">
        <i class="fas fa-tools"></i> View Services
      </a>
    </div>
  </div>
</section>