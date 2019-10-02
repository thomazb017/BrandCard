<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        lg="3"
      >
        <brand-card
          v-for="(brand, index) in brandItems"
          :key="brand.id"          
          :brand="brand"
          :index="index"
         />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      brandItems: state => state.brand.brandItems,
    }),
    created () {
      this.$store.dispatch('brand/loadBrandItems')
    },
    methods: {
      
    },

  }
</script>
