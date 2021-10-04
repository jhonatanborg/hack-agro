<template>
  <div class="pa-5">
    <div class="py-5 px-5">
      <span class="headline">Cadastrar empresa</span>
    </div>
    <v-row class="px-5">
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Nome"
          placeholder="Nome"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="CNPJ"
          placeholder="CNPJ"
          v-mask="'##.###.###/####-##'"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="CAR"
          placeholder="CAR"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Latitude"
          placeholder="Latitude"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Longitude"
          placeholder="Longitude"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Area"
          placeholder="Area"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Validade do Certificado"
          placeholder="Validade do Certificado"
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
        <v-text-field
          dense
          hide-details=""
          label="Quantidade vendida"
          placeholder="quantidade vendida"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Quantidade em transito"
          placeholder="Quantidade em transito"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Tipo de empresa"
          placeholder="Tipo de empresa"
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
          label="Carteira"
          placeholder="Carteira"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Armazem"
          placeholder="Armazem"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Estoque Oleo"
          placeholder="Estoque Oleo"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-text-field
          dense
          hide-details=""
          label="Fator conversão soja/oleo"
          placeholder="Fator conversão soja/oleo"
          outlined
        ></v-text-field
      ></v-col>
      <v-col sm="5" md="5">
        <v-btn color="success" large depressed>Cadastrar</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
};
</script>

<style>
</style>