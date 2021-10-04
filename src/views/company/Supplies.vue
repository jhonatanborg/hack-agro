<template>
  <div>
    <v-row justify="space-between" align="center">
      <v-col
        ><div class="headline py-5"><span>Insumos</span></div></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="3">
        <div>
          <span>Nome</span>
          <div>
            <span class="font-weight-bold" v-text="supplies.description"></span>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-col cols="10">
      <div>
        <span class="headline">Transações anteriores</span>
        <v-row>
          <v-col cols="3"
            ><div class="">
              <span>Hash</span>
            </div></v-col
          >
          <v-col cols="3"
            ><div class="">
              <span>To</span>
            </div></v-col
          >
          <v-col cols="3"
            ><div class="">
              <span>From</span>
            </div></v-col
          >
          <v-col cols="3"
            ><div class="">
              <span>Input</span>
            </div></v-col
          >
        </v-row>
        <v-card class="pa-5" outlined>
          <v-row
            justify="space-between"
            align="center"
            v-for="(transaction, index) in transactions"
            :key="index"
          >
            <v-col cols="3"
              ><div class="">
                <span v-text="transaction.hash"></span></div
            ></v-col>
            <v-col cols="3"
              ><div class="">
                <span v-text="transaction.to">To</span>
              </div></v-col
            >
            <v-col cols="3"
              ><div class="">
                <span v-text="transaction.from"></span></div
            ></v-col>
            <v-col cols="3"
              ><div class="">
                <v-btn color="primary" outlined>Visualizar</v-btn>
              </div></v-col
            >
          </v-row>
        </v-card>
      </div>
    </v-col>
  </div>
</template>

<script>
import { getSupplies } from "../../services/services";
import fromUnixTime from "date-fns/fromUnixTime";

export default {
  mounted() {
    this.getSuppliesData();
  },
  data() {
    return {
      supplies: null,
      timeStamp: null,
      infos: null,
      transactions: null,
    };
  },
  methods: {
    async getSuppliesData() {
      const { data } = await getSupplies();
      console.log(data);
      if (data) this.supplies = data.list[0].supplies;
      // this.timeStamp = data.list[0].timeStamp;
      // this.infos = data.list[0];
      // const transactions = data.list.filter(
      //   (item) => item.hash !== data.list[0].hash
      // );
      // this.transactions = transactions;
    },
    convertDate(timestamp) {
      const result = fromUnixTime(timestamp);
      return result.toLocaleDateString();
    },
  },
};
</script>

<style>
</style>