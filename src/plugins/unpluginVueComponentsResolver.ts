export default (name: string) => {
  // List of components to exclude from prefixing
  const excludedComponents = ['RouterLink', 'RouterView']

  if (excludedComponents.includes(name)) {
    return name
  }

  // Check if the component is from the assets folder
  if (
    name.startsWith('Regular') ||
    name.startsWith('Filled') ||
    name.startsWith('Inputs') ||
    name.includes('Icon')
  ) {
    return { name, from: '@/assets/icons' }
  }

  return `RcSes${name}`
}
