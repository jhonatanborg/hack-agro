<template>
  <div class="pa-5">
    <div class="py-5 px-5">
      <span class="headline">Cadastrar insumo</span>
    </div>
    <v-row class="px-5">
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Nota fiscal"
          placeholder="Nota fiscal"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Codigo do insumo"
          placeholder="Codigo do insumo"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Descrição"
          placeholder="Descrição"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Quantidade"
          placeholder="Quantidade"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Valor Total"
          placeholder="Valor Total"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Endereço"
          placeholder="Endereço"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Safra"
          placeholder="Safra"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
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