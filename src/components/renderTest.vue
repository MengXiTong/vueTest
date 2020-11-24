<script>
export default {
  render: function(createElement) {
    return createElement(this.tag);
  },
  props: {
    tag: {
      type: String,
      default: () => 'p',
      required: true
    }
  }
};
</script>