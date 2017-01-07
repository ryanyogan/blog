<template>
  <section class="post-view">
    <div v-if="!content">loading...</div>
    <h1 class="post-title">
      {{ title }}
      <time pubdate="pubdate"
        :datetime="this.date | formatDate"
        :title="this.date | formatDate"
        class="post-date"
      >
        {{ this.date | timeago }}
      </time>
    </h1>
    <article
      v-if="content"
      v-html="htmlFromMarkdown"
    ></article>
  </section>
</template>

<script>
/* global window document */
import Vue from 'vue';
import fm from 'front-matter';
import api from '../api';
import conf from '../conf.json';
import marked from '../utils/render';

export default {
  name: 'post-view',

  data() {
    return {
      title: '',
      date: null,
      content: '',
    };
  },

  computed: {
    htmlFromMarkdown() {
      return marked(this.content);
    },
  },

  created() {
    this.loadPost();
  },

  methods: {
    loadPost() {
      api.getDetail(this.$route.params.hash)
        .then((text) => {
          const content = fm(text);
          this.content = content.body;
          this.title = content.attributes.titles;
          this.date = content.attributes.date;

          window.document.title = `${this.title} - ${conf.blogTitle}`;
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },

    newTab() {
      Vue.nextTick(() => {
        const linksArray = Array.from(document.querySelectorAll('a'));
        const currentHost = window.location.host;
        linksArray.forEach((el) => {
          if (el.href && el.host !== currentHost) {
            // eslint-disable-next-line
            el.target = '_blank';
            // eslint-disable-next-line
            el.rel = 'noopener noreferrer';
          }
        });
      });
    },
  },

  watch: {
    htmlFromMarkdown: 'newTab',
  },
};
</script>
