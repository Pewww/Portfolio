import Vue from 'Vue'

var vm = new Vue({
  name: 'event-bus',
  data () {
    return {
      toggle: false
    }
  },
  watch: {
    toggle(val) {
      this.$emit('update:toggle', val);
    }
  }
});

export default vm