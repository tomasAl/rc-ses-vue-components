import TextFieldDefaults from '@/components/common/inputs/TextField/defaults'

const { appendInnerIcon, ...textFieldDefaults } = TextFieldDefaults

const SelectFieldDefaults = {
  ...textFieldDefaults,
  items: () => [],
  chips: false,
  closableChips: false,
  closeText: '$vuetify.close',
  eager: false,
  hideNoData: false,
  hideSelected: false,
  itemChildren: false,
  itemColor: undefined,
  itemProps: undefined,
  itemTitle: 'title',
  itemValue: 'value',
  listProps: undefined,
  menu: false,
  menuIcon: '$dropdown',
  // menuProps: undefined, - omitted
  multiple: false,
  openOnClear: false,
  returnObject: false,
  role: 'combobox',
  transition: 'VDialogTransition',
  valueComparator: undefined,
  // custom
  searchable: false,
}

export default SelectFieldDefaults
