<template>
  <div>
    <Textfield label="Tiskslas" description="(neprivaloma)"/>

<!--    <ul>
      <li v-for="item in items" :key="item.title"  v-if="item.active">{{ item.title }}</li>
    </ul>-->
  </div>
</template>


<script setup lang="ts">

import FieldWrapper from "../components/common/inputs/FieldWrapper/FieldWrapper.vue";

type TestType = {
  active: boolean
  expanded: boolean
  title: string
}

const items: Array<TestType> = [
  { active: false, expanded: false, title: 'test titlel' },
  { active: true, expanded: false, title: 'test title1' },
  { active: false, expanded: false, title: 'test title2' },
]
</script>
