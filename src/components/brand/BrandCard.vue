<template>
  <v-card class="v-card-profile">
          <v-card-text class="text-center">
            <h2 class="title mb-3">
              {{ brand.name }}
            </h2>

            <p class="font-weight-light">
              {{ brand.state_registrations.length }} State Registrations
            </p>
            <v-btn
              color="success"
              @click="goToBrandDetail(index)"
            >
              View Detail
            </v-btn>
          </v-card-text>
        </v-card>
</template>

<script>
  export default {
    name: 'BrandCard',

    inheritAttrs: false,

    props: {
      brand: {
        type: Object,
        default: null,
      },
      index:{
        type: Number,
        default:"0",
      }
    },

    computed: {
      hasOffset () {
        return this.$slots.header ||
          this.$slots.offset ||
          this.title ||
          this.text
      },
      styles () {
        if (!this.hasOffset) return null

        return {
          marginBottom: `${this.offset}px`,
          marginTop: `${this.offset * 2}px`,
        }
      },
    },

    methods: {
      goToBrandDetail (index) {
        this.$router.push({ name: 'detail', query: { id: index } })
      },
    },

  }
</script>
