<template>
  <div class="pa-5">
    <div class="py-5 px-5">
      <span class="headline">Movimentação</span>
    </div>
    <v-row class="px-5">
      <v-col sm="5" md="4">
        <v-text-field
          dense
          hide-details=""
          label="Nota fiscal"
          placeholder="Nota fiscal"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="4">
        <v-text-field
          dense
          hide-details=""
          label="Quantidade Origem"
          placeholder="Quantidade Origem"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="4">
        <v-text-field
          dense
          hide-details=""
          label="Quantidade Destino"
          placeholder="Quantidade Destino"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="4">
        <v-text-field
          dense
          hide-details=""
          label="Tipo da movimentação"
          placeholder="Tipo da movimentação"
          outlined
        ></v-text-field
      ></v-col>

      <v-col sm="5" md="4">
        <v-text-field
          dense
          hide-details=""
          label="Valor Total"
          placeholder=""
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="4">
        <v-text-field
          dense
          hide-details=""
          label="Safra"
          placeholder="Safra"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="12">
        <v-text-field
          dense
          hide-details=""
          label="Endereço"
          placeholder="Endereço"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="4">
        <v-btn block color="success" large depressed>Cadastrar</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>