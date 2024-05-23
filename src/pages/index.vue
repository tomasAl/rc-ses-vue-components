<template>

  <h1 class="text-h1">H1 Heading, here comes the grasshopper</h1>
  <h2>H1 Heading, here comes the grasshopper</h2>
  <h3>H1 Heading, here comes the grasshopper</h3>
  <h4>H1 Heading, here comes the grasshopper</h4>
  <h5>H1 Heading, here comes the grasshopper</h5>
  <h6>H1 Heading, here comes the grasshopper</h6>

  <div class="px-5 py-5">
    <Button color="error" variant="outlined">Button</Button>
    <Button color="primary" variant="tonal" class="mx-2">Button</Button>
    <br/><br/>
    <Textfield
    ></Textfield>
  </div>


  <div class="text-body-3">some some</div>
  <HelloWorld />
</template>

<script lang="ts" setup>
  //
import Textfield from "../components/common/inputs/Textfield/Textfield.vue";
</script>
