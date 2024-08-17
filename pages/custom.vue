<script setup>
definePageMeta({
  layout: 'custom',
  title: 'Custom Page',
  description: 'This is a custom page',
  image: 'https://example.com/image.jpg',
  url: 'https://example.com/custom',
  type: 'website',
  site_name: 'My Site',
  locale: 'en_US',
  twitter: {
    card: 'summary_large_image',
    site: '@my_site',
    creator: '@my_site'
  },
  og: {
    title: 'Custom Page',
    description: 'This is a custom page',
    image: 'https://example.com/image.jpg',
    url: 'https://example.com/custom',
    type: 'website',
    site_name: 'My Site'
  }
})
</script>

<template>
  <div class="custom-page">Custom Page</div>
</template>
