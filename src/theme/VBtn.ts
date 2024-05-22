export default {
  elevation: 0,
  class: 'focus-with-outline',
  style: {
    background: 'red', // direct use...

    '&:hover': {
      background: 'blue !important',
    },
    '& .v-btn__content': {
      color: 'red !important',
      fontSize: '10px !important',
    },
  }
}
