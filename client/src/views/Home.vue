<template>
  <div class="home">
    <h1>Home</h1>

    Liste des crypto-monnaies

    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>

    <ul>
      <li
        v-for="currency in currencies"
        :key="currency.id"
      >
        <router-link :to="{name: 'Currencies', params: { slug: currency.slug }}">
          {{ currency.name }}
        </router-link>
        <button
          v-if="!favorites.includes(currency.slug)"
          @click="addToFavorites(currency.slug)"
        >
          ajouter aux favoris
        </button>
        <button
          v-if="favorites.includes(currency.slug)"
          @click="removeFromFavorites(currency.slug)"
        >
          supprimer des favoris
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      currencies: [],
      error: '',
      favorites: [],
    }
  },

  mounted () {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const token = localStorage.getItem('token')
    // Fetch de currencies
    fetch('/api/v1/currencies', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(({ currencies }) => {
        this.currencies = currencies
      })
      .catch(error => { this.error = error })
  },

  methods: {
    addToFavorites (slug) {
      this.favorites.push(slug)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    removeFromFavorites (slug) {
      this.favorites = this.favorites.filter(favSlug => favSlug !== slug)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
  },
}
</script>
