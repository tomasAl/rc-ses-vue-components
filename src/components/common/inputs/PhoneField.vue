<template>
  <FieldWrapper :label="label" :description="description" :for="name">
    <v-select
      v-model="model"
      :name="name"
      class="rc-select-field"
      variant="outlined"
      :placeholder="placeholder"
      :items="computedItems"
      :hide-details="!error"
      :error="!!error"
      :error-messages="error"
      :menu-props="menuProps"
      :readonly="readonly"
      :disabled="disabled"
      transition="scroll-y-transition"
      :multiple="multiple"
      @update:menu="updateVList"
      @update:focused="() => searchValue = ''"
    >
      <template #prepend-item>
        <SearchableArea v-model="searchValue" :multiple="false" />
      </template>

      <template #item="{ item, props }">
        <v-list-item
          v-bind="props"
          class="rc-menu-list-item"
          :subtitle="item.raw.subtitle"
          :append-icon="model === item.value ? '$checkPrimary' : undefined"
        >
          <template #prepend>
            <v-checkbox
              v-if="multiple"
              base-color="white"
              color="primary"
              :model-value="model?.includes(<never>item.value)"
              hide-details
            ></v-checkbox>
          </template>
        </v-list-item>
      </template>
    </v-select>
  </FieldWrapper>
</template>
<script setup lang="ts">
import SearchableArea from '@/components/common/inputs/shared/SearchableArea/SearchableArea.vue'

const model = defineModel<any[] | null | undefined>()

const searchValue = ref<string>()
</script>
