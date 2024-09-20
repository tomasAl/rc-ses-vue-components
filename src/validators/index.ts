import * as rules from '@vee-validate/rules'
import { defineRule } from 'vee-validate'

Object.keys(rules).forEach((rule) => {
  if (typeof rules[rule] === 'function') {
    defineRule(rule, rules[rule])
  }
})
