<template>
  <v-container
    fluid
  >
    <v-row justify="center">
      <v-col cols="6">
        <material-card
          color="green"
          :title="brandItems[brandId].name"
          text=""
        >
          <v-data-table
            :headers="headers"
            :items="brandItems[brandId].state_registrations"
            hide-default-footer
          />
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {

    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'State',
          value: 'state',
        },
        {
          sortable: false,
          text: 'RegistrationNumber',
          value: 'registrationNumber',
        },
      ],      
      brandId: 0
    }),

    computed: mapState({
        brandItems: state => state.brand.brandItems,
      }      
    ),
    
    created () {      
      this.brandId = this.$route.query.id;
    },
  }
</script>
