<template>
      <!-- nav  -->
      <NavBar />

           <div class="about-container">
        <div class="section">
            <h1>About Space Explorer</h1>
            <h2>Our Mission</h2>
            <p>At <strong>Space Explorer</strong>, we believe that the wonders of the universe should be accessible to everyone. Our goal is to make space exploration <strong>simple, engaging, and inspiring</strong> by presenting cosmic marvels in an easy-to-digest format—like Pinterest-style cards with stunning visuals and bite-sized facts.</p>
            <p>Whether you're a curious beginner or a seasoned space enthusiast, our platform invites you to <strong>discover, learn, and be amazed</strong> by the beauty of the cosmos.</p>
        </div>
        
        <div class="section">
            <h2>Who We Are</h2>
            <p>We are two <strong>software engineers</strong> and university friends who share a passion for technology and the mysteries of space.</p>
            
            <div class="team-members">
                <div class="member">
                    <strong>Alex</strong>
                    The dreamer behind the project, fascinated by galaxies, black holes, and the endless expanse of the universe.
                </div>
                
                <div class="member">
                    <strong>Jordan</strong>
                    The problem-solver who turned this cosmic curiosity into a functional, beautiful web experience.
                </div>
            </div>
            
            <p>Together, we combined our skills to build <strong>Space Explorer</strong>—a place where science meets inspiration.</p>
        </div>
        
        <div class="section">
            <h2>The Story Behind Space Explorer</h2>
            <p>The idea for <strong>Space Explorer</strong> was born during a late-night coding session, where Alex's endless space facts met Jordan's desire to create something meaningful.</p>
            <p><strong>Alex</strong> wanted to share the awe of the cosmos in a way that didn't feel overwhelming—<strong>no complex terms, just pure fascination</strong>.</p>
            <p><strong>Jordan</strong> saw an opportunity to blend <strong>clean design, smooth interactivity, and educational value</strong> into one project.</p>
            <p>And so, <strong>Space Explorer</strong> was launched—a platform where anyone can explore the universe, one captivating image at a time.</p>
        </div>
        
        <div class="cta">
            <h2>Why Explore With Us?</h2>
            <p><strong>Simple & Beautiful</strong> – No clutter, just stunning space visuals and easy-to-understand descriptions.</p>
            <p><strong>Interactive & Engaging</strong> – Comment, discuss, and connect with fellow space lovers.</p>
            <p><strong>Always Growing</strong> – We regularly update our gallery with new cosmic discoveries.</p>
            <p>Join us on this journey across the stars—because the universe is too incredible not to explore!</p>
        </div>
        
        <div class="signature">Keep looking up! 🚀</div>
    </div>

      <TheFooter />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import TheFooter from '@/components/TheFooter.vue'
  export default {
    name: 'HomeView',
    components: {
      NavBar,
      TheFooter
    }
  }
  </script>
  
  <style scoped>
  @import '@/assets/css/AboutStyle.css';
  </style>