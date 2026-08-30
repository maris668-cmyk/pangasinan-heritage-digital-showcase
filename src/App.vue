<script setup>
import { computed, ref } from 'vue'

const active = ref('home')
const query = ref('')
const menu = ref(false)
const selected = ref(null)
const baseUrl = import.meta.env.BASE_URL

const sites = [
  {
    id: 'hundred',
    name: 'Hundred Islands',
    place: 'Alaminos City',
    tag: 'Nature + Heritage',
    img: import.meta.env.BASE_URL + 'images/hundred-islands.jpg',
    desc: 'A breathtaking group of islands and islets known for clear waters, scenic views, and memorable island adventures.'
  },
  {
    id: 'lighthouse',
    name: 'Bolinao Lighthouse',
    place: 'Bolinao, Pangasinan',
    tag: 'Landmark',
    img: import.meta.env.BASE_URL + 'images/bolinao-lighthouse.jpg',
    desc: 'A historic coastal landmark and a favorite viewpoint for visitors discovering the western side of Pangasinan.'
  },
  {
    id: 'hot',
    name: 'Balungao Hot Spring',
    place: 'Balungao, Pangasinan',
    tag: 'Wellness + Nature',
    img: import.meta.env.BASE_URL + 'images/balungao-hot-spring.jpg',
    desc: 'A relaxing natural destination where warm spring water and green surroundings create a calm escape.'
  }
]

const filtered = computed(() => {
  const term = query.value.trim().toLowerCase()

  if (!term) return sites

  return sites.filter(site =>
    `${site.name} ${site.place} ${site.tag}`
      .toLowerCase()
      .includes(term)
  )
})

function go(page) {
  active.value = page
  menu.value = false
  selected.value = null

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function openStory(site) {
  selected.value = site
}
</script>

<template>
  <div class="app">

    <!-- HEADER -->
    <header class="header">
      <button
        class="brand"
        @click="go('home')"
        aria-label="Go to home"
      >
        <span class="brandIcon">✿</span>

        <span class="brandWords">
          <strong>PANGASINAN</strong>
          <small>HERITAGE DIGITAL SHOWCASE</small>
        </span>
      </button>

      <button
        class="menuBtn"
        @click="menu = !menu"
        :aria-expanded="menu"
        aria-label="Open navigation"
      >
        ☰
      </button>

      <nav
        :class="{ open: menu }"
        aria-label="Main navigation"
      >
        <button
          :class="{ on: active === 'home' }"
          @click="go('home')"
        >
          Home
        </button>

        <button
          :class="{ on: active === 'sites' }"
          @click="go('sites')"
        >
          Heritage Sites
        </button>

        <button
          :class="{ on: active === 'about' }"
          @click="go('about')"
        >
          About Pangasinan
        </button>

        <button
          class="navCta"
          @click="go('sites')"
        >
          ♡ Plan a Visit
        </button>
      </nav>
    </header>

    <!-- MAIN -->
    <main>

      <!-- HOME -->
      <section
        v-if="active === 'home'"
        class="home"
      >

        <!-- HERO -->
        <section class="hero">

          <div
            class="heroImage"
            aria-label="Scenic view representing Pangasinan"
          >
            <img
              :src="import.meta.env.BASE_URL + 'images/hero-pangasinan.jpg'"
              alt="Scenic view representing Pangasinan"
            >

            <div class="heroShade"></div>

            <div class="heroBadge">
              DISCOVER • EXPLORE • EXPERIENCE
            </div>
          </div>

          <div class="heroContent">

            <p class="eyebrow">
              CULTURE • PLACE • PEOPLE
            </p>

            <h1>
              Discover the heritage,<br>
              <em>love Pangasinan.</em>
            </h1>

            <p class="lead">
              Explore beautiful places, local stories, and natural wonders
              through a simple digital showcase designed for curious travelers
              and proud locals.
            </p>

            <div class="actions">

              <button
                class="primary"
                @click="go('sites')"
              >
                Explore Places
                <span>→</span>
              </button>

              <button
                class="secondary"
                @click="go('about')"
              >
                Learn More
              </button>

            </div>
          </div>

        </section>

        <!-- QUICK FACTS -->
        <section
          class="quickFacts"
          aria-label="Project highlights"
        >

          <div>
            <span>♡</span>
            <strong>Iconic Places</strong>
            <small>3 featured destinations</small>
          </div>

          <div>
            <span>✦</span>
            <strong>Rich Culture</strong>
            <small>History &amp; traditions</small>
          </div>

          <div>
            <span>⌁</span>
            <strong>Warm People</strong>
            <small>Pangasinan pride</small>
          </div>

        </section>

        <!-- FEATURED HERITAGE -->
        <section class="featured sectionPad">

          <div class="sectionTitle">

            <p class="eyebrow">
              OUR HERITAGE SITES
            </p>

            <h2>
              Explore Pangasinan's
              <em>treasures.</em>
            </h2>

            <p>
              Three places to start your journey through the province.
            </p>

          </div>

          <div class="grid">

            <article
              v-for="site in sites"
              :key="site.id"
              class="card"
            >

              <div class="photo">

                <img
                  :src="site.img"
                  :alt="site.name"
                >

                <span>
                  {{ site.tag }}
                </span>

              </div>

              <div class="cardBody">

                <p class="place">
                  ⌖ {{ site.place }}
                </p>

                <h3>
                  {{ site.name }}
                </h3>

                <p>
                  {{ site.desc }}
                </p>

                <button
                  class="linkBtn"
                  @click="openStory(site)"
                >
                  Explore More
                  <span>→</span>
                </button>

              </div>

            </article>

          </div>

        </section>

        <!-- RESPONSIBLE TOURISM -->
        <section class="responsible">

          <div>

            <span class="heart">
              ♡
            </span>

            <div>
              <strong>
                Let's preserve our heritage.
              </strong>

              <p>
                Be a proud traveler. Be a responsible tourist.
              </p>
            </div>

          </div>

          <button
            class="secondary"
            @click="go('about')"
          >
            About this project →
          </button>

        </section>

      </section>

      <!-- HERITAGE SITES PAGE -->
      <section
        v-else-if="active === 'sites'"
        class="page"
      >

        <div class="pageHead">

          <div>

            <p class="eyebrow">
              HERITAGE DIRECTORY
            </p>

            <h1>
              Explore the
              <em>places.</em>
            </h1>

            <p>
              Browse the featured destinations and open a story card
              for more information.
            </p>

          </div>

          <label class="search">

            <span>⌕</span>

            <input
              v-model="query"
              placeholder="Search a site or town..."
              aria-label="Search heritage sites"
            >

          </label>

        </div>

        <div class="grid">

          <article
            v-for="site in filtered"
            :key="site.id"
            class="card"
          >

            <div class="photo">

              <img
                :src="site.img"
                :alt="site.name"
              >

              <span>
                {{ site.tag }}
              </span>

            </div>

            <div class="cardBody">

              <p class="place">
                ⌖ {{ site.place }}
              </p>

              <h3>
                {{ site.name }}
              </h3>

              <p>
                {{ site.desc }}
              </p>

              <button
                class="linkBtn"
                @click="openStory(site)"
              >
                View Story →
              </button>

            </div>

          </article>

        </div>

        <p
          v-if="!filtered.length"
          class="empty"
        >
          No heritage site matches “{{ query }}”.
        </p>

      </section>

      <!-- ABOUT PAGE -->
      <section
        v-else
        class="page about"
      >

        <p class="eyebrow">
          ABOUT THE PROJECT
        </p>

        <h1>
          Designed to feel
          <em>local.</em>
        </h1>

        <div class="aboutGrid">

          <div class="quote">
            “Good tourism information should be easy to find,
            pleasant to read, and respectful of the place it represents.”
          </div>

          <div>

            <p>
              This student project follows the activity brief by focusing
              on a fast, mobile-first, maintainable, accessible, and
              deployable heritage showcase.
            </p>

            <p>
              The visual direction uses a soft pink identity, large
              photography, rounded cards, and simple navigation so the
              experience feels friendly without becoming visually heavy.
            </p>

            <div class="aboutStats">

              <div>
                <strong>03</strong>
                <small>Featured Sites</small>
              </div>

              <div>
                <strong>01</strong>
                <small>Province</small>
              </div>

              <div>
                <strong>AA</strong>
                <small>Accessibility Goal</small>
              </div>

            </div>

            <button
              class="primary"
              @click="go('sites')"
            >
              Browse Heritage Sites →
            </button>

          </div>

        </div>

      </section>

    </main>

    <!-- STORY MODAL -->
    <div
      v-if="selected"
      class="modalBackdrop"
      @click.self="selected = null"
    >

      <article class="modal">

        <button
          class="close"
          @click="selected = null"
          aria-label="Close"
        >
          ×
        </button>

        <img
          :src="selected.img"
          :alt="selected.name"
        >

        <div>

          <p class="eyebrow">
            {{ selected.tag }}
          </p>

          <h2>
            {{ selected.name }}
          </h2>

          <p class="place">
            ⌖ {{ selected.place }}
          </p>

          <p>
            {{ selected.desc }}
          </p>

          <button
            class="primary"
            @click="selected = null"
          >
            Nice, got it!
          </button>

        </div>

      </article>

    </div>

    <!-- FOOTER -->
    <footer>
      <span>
        © 2026 Pangasinan Heritage Digital Showcase
      </span>

      <span>
        Built with care for mobile-first browsing.
      </span>
    </footer>

  </div>
</template>


