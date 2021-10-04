<template>
  <div>
    <div class="py-5 px-5">
      <span class="headline">Insumos</span>
    </div>
    <div>
      <v-card
        outlined
        @click="
          $router.push({
            name: 'details-supplies',
            params: { id: '0x308E23F7BEcAB8BE712831758A75Aa68243b861d' },
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
export default {};
</script>

<style>
</style>