<template>
  <div>
    <v-row justify="space-between" align="center">
      <v-col
        ><div class="headline py-5"><span> Lista de empresas</span></div></v-col
      >
      <v-col cols="3"
        ><v-btn color="primary" block :to="{ name: 'form-company' }"
          >Nova empresa</v-btn
        ></v-col
      >
    </v-row>

    <div>
      <v-card
        outlined
        @click="
          $router.push({
            name: 'details-company',
            params: { id: '0x248e4A9dA571a4549014FfBE690ae299be6088A1' },
          })
        "
      >
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Fazenda JMD</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getCompanyList() {},
  },
};
</script>

<style>
</style>