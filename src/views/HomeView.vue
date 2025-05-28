<template>
    <!-- intro -->
    <section class="intro">
        <h1 class="main-title" id="header1">Explore Space</h1>
      </section>
  
      <!-- nav  -->
      <NavBar />
  
      <!-- book a service -->
      <div class="form-div" style="display: flex">
        <section class="form-container" style="flex: 1">
          <h2>Sign up</h2>
          <form id="booking-form">
            <!-- name -->
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
              />
            </div>
  
            <!-- cell number -->
            <div class="form-group">
              <label for="phone">Cell:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Enter your number"
              />
            </div>
  
            <!-- email -->
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>
  
            <!-- training type -->
            <div class="form-group">
              <label>training:</label>
              <div class="radio-group">
                <label>
                  <input
                    type="radio"
                    name="training-type"
                    value="group"
                    required
                  />
                  <span>group</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="training-type"
                    value="personal"
                    required
                  />
                  <span>personal</span>
                </label>
              </div>
            </div>
  
            <!-- button -->
            <button type="submit">done</button>
          </form>
        </section>
        <article class="greeting" style="flex: 1">
          <p class="line-break">
            Welcome to the Surfing School Shell — your reliable support in the
            surfing world! We offer professional training for all levels, from
            beginners taking their first steps on the board to experienced riders
            aspiring to new heights. Our team of certified instructors with many
            years of experience guarantees safety, individual approach and
            effective teaching methods. We use only high-quality equipment from
            trusted brands to make your journey to mastery comfortable and
            inspiring. Trust the Surfing School Shell and discover an ocean of
            possibilities!
          </p>
        </article>
      </div>
  
      <!-- shop-overview -->
      <section class="shop-overview">
        <h2>Description</h2>
        <div class="shop-items">
          <div class="shop-item">
            <img
      
              alt="Serfboard"
            />
            <h3>Serfboards</h3>
            <p>A wide selection of serfboards for all levels</p>
          </div>
          <div class="shop-item">
         
            <h3>Ocean</h3>
            <p>Have a look at the place where you're gonna train</p>
          </div>
          <div class="shop-item">

            <h3>Accessories</h3>
            <p>All the necessary things and tools for surfing</p>
          </div>
        </div>
      </section>
  
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
//     data() {
//       return {
//         form: {
//           name: '',
//           phone: '',
//           email: '',
//           trainingType: ''
//         }
//       }
//     },
//     methods: {
//       submitForm() {
//         // Submit form to backend
//         console.log('Form submitted:', this.form)
//         // Add API call here
//       }
//     }
  }
  </script>
  
  <style scoped>
  /* @import '@/assets/css/style.css'; */
  @import '@/assets/css/homeView.css'; 
  </style>