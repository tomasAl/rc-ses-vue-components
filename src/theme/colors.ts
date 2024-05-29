const primary = {
  'primary-50': '#F3FBFE',
  'primary-100': '#DCF4FC',
  'primary-200': '#B9E9FA',
  'primary-300': '#88DAF7',
  'primary-400': '#50C9F3',
  'primary-500': '#06A0D4',
  'primary-600': '#087FB2',
  'primary-700': '#0E6790',
  'primary-800': '#155575',
  'primary-900': '#164763',
  'primary-950': '#082D44',
  primary: '#0E6790',
}

const secondary = {
  'secondary-50': '#ecfdf6',
  'secondary-100': '#d1fae7',
  'secondary-200': '#a5f3d3',
  'secondary-300': '#6fe7bd',
  'secondary-400': '#05d091',
  'secondary-500': '#00c288',
  'secondary-600': '#00a879',
  'secondary-700': '#008561',
  'secondary-800': '#00664e',
  'secondary-900': '#004e3d',
  'secondary-950': '#002c24',
  secondary: '#00c288',
}

const grey = {
  'grey-50': '#f9fafb',
  'grey-100': '#edeff2',
  'grey-200': '#dfe1e5',
  'grey-300': '#d0d4d9',
  'grey-400': '#bcc3cc',
  'grey-500': '#9da6b2',
  'grey-600': '#6b737f',
  'grey-700': '#4e5866',
  'grey-800': '#343e4c',
  'grey-900': '#222d3d',
  'grey-950': '#0f161f',
  grey: '#6b737f',
}

const warning = {
  'warning-50': '#fef9ef',
  'warning-100': '#fdefcf',
  'warning-200': '#fce09f',
  'warning-300': '#fbd170',
  'warning-400': '#fac240',
  'warning-500': '#f9b311',
  'warning-600': '#c78f0d',
  'warning-700': '#956b0a',
  'warning-800': '#634706',
  'warning-900': '#4a3504',
  'warning-950': '#312303',
  warning: '#f9b311',
}

const error = {
  'error-50': '#fef4f2',
  'error-100': '#fededa',
  'error-200': '#fdbdb5',
  'error-300': '#fc9c90',
  'error-400': '#fb7b6b',
  'error-500': '#fa5a46',
  'error-600': '#c84838',
  'error-700': '#96362a',
  'error-800': '#63231b',
  'error-900': '#4a1a14',
  'error-950': '#31110d',
  error: '#fa5a46',
}

export const MergedColors = { ...primary, ...secondary, ...grey, ...warning, ...error }

export const Colors = { primary, secondary, grey, warning, error }
export default { primary, secondary, grey, warning, error }
