<template>
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <button @click="increment">Increment</button>
        Value: {{ count }}
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NavFooterModule extends Vue {
  get count() {
    return this.$store.state.count;
  }

  private increment() {
    this.$store.dispatch('increment');
  }

}
</script>
