import * as rules from '@vee-validate/rules'
import { defineRule } from 'vee-validate'

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})
