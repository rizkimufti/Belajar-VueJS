new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    showAlert () {
      alert(this.message)
    }
  }
})

new Vue({
  el: '#appA',
  data: {
    message: 'Hello Rizki!'
  },
  methods: {
    showAlert () {
      alert(this.message)
    }
  }
})

new Vue({
  el: '#appB',
  data: {
    message: 'Hello World!'
  },
  methods: {
    showAlert () {
      alert(this.message)
    }
  }
})