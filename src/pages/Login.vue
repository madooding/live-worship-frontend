<template lang="pug">
  .login-page
    section.section--logo
      .block-content <span>Live</span>Worship
    button.fb-login(@click="fblogin")
      img(src="@/assets/svg/facebook-logo.svg")
      | Facebook Login

</template>

<script>
import qs from 'querystring'
import cookies from 'browser-cookies'

export default {
  created () {
    if (this.$route.hash) {
      let query = qs.parse(this.$route.hash.replace('#', ''))
      if (query.access_token) {
        cookies.set('fb_token', query.access_token)
        this.$router.push({ name: 'Me' })
      }
    }
  },

  methods: {
    fblogin () {
      let appID = '347795859105938', redirect = `${window.location.origin}/login/`
      window.open('https://www.facebook.com/v3.0/dialog/oauth?client_id=' + appID + '&display=page&response_type=token&auth_type=rerequest&scope=email&redirect_uri=' + redirect, '_self')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  position: relative;
  width: 100%;
  height: 100vh;

  section {
    width: 100%;
    box-sizing: border-box;

    .block-content {
      width: 100%;
    }

    &.section--logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0px 30px;

      .block-content {
        font-size: 36px;
        font-weight: lighter;
        text-align: center;
        color: #333;
      }
    }
  }

  .fb-login {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    bottom: 30px;
    width: 100%;
    height: 44px;
    max-width: 169.27px;
    padding: 0px 10px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    background-color: #3578E5;
    transform: translateX(-50%);
    outline: none !important;
    border: none;
    cursor: pointer;
    transition: all .25s ease;

    &:active {
      transform: translateX(-50%) scale(0.9);
    }

    img {
      width: 25px;
      height: auto;
      margin-right: 10px;
    }
  }
}
</style>
