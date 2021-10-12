<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <h1>Heroes List</h1>
    <b-table :items="heroes" :fields="fields" dark hover small striped stacked="sm">
      <template v-slot:cell(name)="data">
        <hero-ico :hero="data.item" />
      </template>
      <template v-slot:cell(class)="data">
        <hero-class-level :hero="{class: data.item.class, level: data.item.level}"/>
      </template>
      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroClassLevel from './HeroClassLevel.vue'
import HeroIco from './HeroIco.vue'
import { formatNumber } from '@/filters/numeral'

export default {
  name: 'HeroesList',
  components: { HeroIco, HeroClassLevel },
  filters: {
    formatNumber
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  }
}
</script>
