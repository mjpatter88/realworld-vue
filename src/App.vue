<template>
  <div id="app">
    <NavHeader></NavHeader>
    <NavFooter></NavFooter>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import NavFooter from '@/components/NavFooter.vue';
import NavHeader from '@/components/NavHeader.vue';
import Vue from 'vue';

@Component({
  components: {NavFooter, NavHeader},
})
export default class App extends Vue {

}
</script>
