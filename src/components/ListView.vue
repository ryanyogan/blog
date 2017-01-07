<template>
  <section class="list-view">
    <div v-if="!lists">loading...</div>
    <ol v-if="lists" class="list">
      <li v-for="{ title, sha, date } in filteredList" :key="sha" class="list-item">
        <router-link :to="`/post/${sha}`" class="item-title">
          {{ title }}
        </router-link>
        <br>
        <time
          pubdate="pubdate"
          :datetime="date | formatDate"
          :title="date | formatDate"
          class="item-date"
        >
          {{ date | timeago }}
        </time>
      </li>
    </ol>
  </section>
</template>

<script>
/* global window */
import api from '../api';
import conf from '../conf.json';

export default {
  name: 'list-view',

  data() {
    return {
      lists: null,
      date: null,
    };
  },

  created() {
    this.loadList();
  },

  computed: {
    filteredList() {
      const keyword = (this.$route.query.keyword || '').toLowerCase();

      return this.lists
        .filter(item => (item.title.toLowerCase().indexOf(keyword) !== -1))
        .sort((itemA, itemB) => (new Date(itemB.date) - new Date(itemA.date)));
    },
  },

  methods: {
    loadList() {
      window.document.title = conf.blogTitle;
      api.getList()
        .then((list) => {
          this.lists = list;
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
  },

  watch: {
    $route: 'loadList',
  },
};
</script>
