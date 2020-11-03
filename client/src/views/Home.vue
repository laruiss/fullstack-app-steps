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
    }
  },

  mounted () {
    // Fetch de currencies
    fetch('/api/v1/currencies')
      .then(res => res.json())
      .then(({ currencies }) => {
        this.currencies = currencies
      })
      .catch(error => { this.error = error })
  },
}
</script>
