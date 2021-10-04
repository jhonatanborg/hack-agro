<template>
  <div>
    <v-row>
      <v-col>
        <div class="headline py-5">Dados da empresa</div>
      </v-col>
      <v-col>
        <v-btn color="primary" :to="{ name: 'supplies-details' }"
          >Insumos</v-btn
        >
      </v-col>
    </v-row>
    <div>
      <v-row>
        <v-col cols="3">
          <div>
            <span>Nome da empresa</span>
            <div>
              <span class="font-weight-bold" v-text="company.name"></span>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div>
            <span>CNPJ</span>
            <div>
              <span class="font-weight-bold" v-text="company.cnpj"></span>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div>
            <span>Validade do Certificado</span>
            <div>
              <span
                class="font-weight-bold"
                v-text="company.certificateValidityDate"
              ></span>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div>
            <span>Localização</span>
            <div>
              <span
                class="font-weight-bold"
                v-text="
                  'Lat: ' + company.latitude + ' Long' + company.longitude
                "
              ></span>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div>
            <span>Data transação</span>
            <div v-if="timeStamp">
              <span
                class="font-weight-bold"
                v-text="convertDate(timeStamp)"
              ></span>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div>
            <span>To</span>
            <div>
              <span class="font-weight-bold" v-text="infos.to"></span>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div>
            <span>From</span>
            <div>
              <span class="font-weight-bold" v-text="infos.from"></span>
            </div>
          </div>
        </v-col>
        <v-col cols="10">
          <div>
            <span>Hash</span>
            <div>
              <span class="font-weight-bold" v-text="infos.hash"></span>
            </div>
          </div>
        </v-col>
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
      </v-row>
    </div>
  </div>
</template>

<script>
import { getCompany } from "../../services/services";
import fromUnixTime from "date-fns/fromUnixTime";

export default {
  mounted() {
    this.getCompanyDetails();
  },
  data() {
    return {
      company: null,
      timeStamp: null,
      infos: null,
      transactions: null,
    };
  },
  methods: {
    async getCompanyDetails() {
      const { data } = await getCompany();
      if (data) this.company = data.list[0].company;
      this.timeStamp = data.list[0].timeStamp;
      this.infos = data.list[0];
      const transactions = data.list.filter(
        (item) => item.hash !== data.list[0].hash
      );
      this.transactions = transactions;
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