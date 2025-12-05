---
title: Contactez-nous
layout: renotheme-page
permalink: /fr/contact/
subtitle: "Prêt à commencer votre projet?"
---

<section class="section">
  <div class="container">
    <div class="spacer-big"></div>
    <div class="row">
      <div class="col-md-12">
        <h1>Contactez-nous</h1>
        <p class="lead">Vous avez un projet de rénovation ou de construction en tête? Contactez Les Entrepreneurs Atlas pour une consultation gratuite et un devis personnalisé.</p>
      </div>
    </div>
  </div>
</section>

<div class="row">
  <div class="col-md-8">
    <h3>Envoyez-nous un message</h3>
    <form class="contact-form" action="#" method="post">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="first-name">Prénom *</label>
            <input type="text" class="form-control" id="first-name" name="first-name" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="last-name">Nom *</label>
            <input type="text" class="form-control" id="last-name" name="last-name" required>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Courriel *</label>
        <input type="email" class="form-control" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Téléphone</label>
        <input type="tel" class="form-control" id="phone" name="phone">
      </div>
      <div class="form-group">
        <label for="project-type">Type de projet</label>
        <select class="form-control" id="project-type" name="project-type">
          <option value="">Sélectionnez un type</option>
          <option value="renovation">Rénovation intérieure</option>
          <option value="exterior">Travaux extérieurs</option>
          <option value="paving">Pavage et terrasses</option>
          <option value="concrete">Travaux de béton</option>
          <option value="drainage">Systèmes de drainage</option>
          <option value="other">Autre</option>
        </select>
      </div>
      <div class="form-group">
        <label for="message">Message *</label>
        <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="renotheme-btn renotheme-btn-primary">Envoyer le message</button>
    </form>
  </div>

  <div class="col-md-4">
    <div class="contact-info">
      <h3>Informations de contact</h3>
      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <div>
          <strong>Téléphone</strong><br>
          <a href="tel:{{ site.company.phone }}">{{ site.company.phone }}</a>
        </div>
      </div>
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <div>
          <strong>Courriel</strong><br>
          <a href="mailto:{{ site.company.email }}">{{ site.company.email }}</a>
        </div>
      </div>
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <div>
          <strong>Adresse</strong><br>
          {{ site.company.address }}
        </div>
      </div>
      <div class="contact-item">
        <i class="fas fa-clock"></i>
        <div>
          <strong>Heures d'ouverture</strong><br>
          Lundi - Samedi: 8h00 - 18h00<br>
          Dimanche: Fermé
        </div>
      </div>
    </div>

    <div class="spacer"></div>

    <div class="license-info">
      <h4>Informations légales</h4>
      <p><strong>Numéro de licence RBQ:</strong> 5731-6820-01</p>
      <p><strong>Assuré et conforme aux normes</strong></p>
      <p>Nous sommes fiers d'offrir des services de qualité avec une assurance complète et le respect de toutes les normes de construction du Québec.</p>
    </div>
  </div>
</div>

<div class="spacer-big"></div>

<section class="section bg-light">
  <div class="container text-center">
    <h3>Pourquoi nous choisir?</h3>
    <div class="row">
      <div class="col-md-4">
        <div class="feature-item">
          <i class="fas fa-certificate fa-3x text-primary"></i>
          <h4>Licencié RBQ</h4>
          <p>Entrepreneur général licencié avec le Régie du bâtiment du Québec</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="feature-item">
          <i class="fas fa-shield-alt fa-3x text-primary"></i>
          <h4>Assuré</h4>
          <p>Assurance responsabilité civile complète pour votre tranquillité d'esprit</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="feature-item">
          <i class="fas fa-clock fa-3x text-primary"></i>
          <h4>À temps</h4>
          <p>Livraison professionnelle et ponctuelle sur tous nos projets</p>
        </div>
      </div>
    </div>
  </div>
</section>