<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title"  v-if="item.active">{{ item.title }}</li>
    </ul>
  </div>
</template>


<script setup lang="ts">

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
