<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="editor" class="nav-link">
            <i class="ion-compose"></i>&nbsp;New Article
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="settings" class="nav-link">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item" v-if="user.username">
          <router-link to="profile" class="nav-link">{{ user.username }}</router-link>
        </li>
        <li class="nav-item" v-if="!user.username">
          <router-link to="login" class="nav-link">Sign in</router-link>
        </li>
        <li class="nav-item" v-if="!user.username">
          <router-link to="register" class="nav-link">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { User } from '../api/types';

@Component
export default class NavHeader extends Vue {
  private mounted() {
    const user: User = {
      email: 'mjpatter88@gmail.com',
      token: 'foo',
      username: 'mjpatter88',
      bio: 'Michael Patterson',
      image: null,
    };

    this.$store.dispatch('setUser', user);
  }

  get user(): User {
    return this.$store.state.user;
  }
}
</script>
