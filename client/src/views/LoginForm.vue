<template>
  <div>
    <form @submit.prevent="sendCredentials">
      <p>
        <label for="username">
          Username
        </label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Username"
        >
      </p>
      <p>
        <label for="password">
          Password
        </label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Password"
        >
      </p>
      <button type="submit">
        Se connecter
      </button>
    </form>
    <div>
      <p>
        Username :
        {{ username }}
      </p>
      <p>
        Password :
        {{ password }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',

  data () {
    return {
      username: undefined,
      password: undefined,
    }
  },

  methods: {
    sendCredentials () {
      const login = this.username
      const password = this.password

      fetch('/api/v1/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login,
          password,
        }),
      })
        .then(res => res.json())
        .then(({ success, token, message }) => {
          localStorage.setItem('token', token)
        })
        .catch(error => { this.error = error })
    },
  },
}
</script>

<style scoped>

</style>
