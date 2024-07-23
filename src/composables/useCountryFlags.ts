import countries from 'countries-phone-masks'
import FileSaver from 'file-saver'
import { defineComponent, ref } from 'vue'

export const useCountryFlags = () => {
  const status = ref('') // Manages the status message of downloads
  const maxRetries = 3 // Maximum number of retries for a failed download

  const downloadFlag = async (index = 0, retries = 0) => {
    if (index >= countries.length) {
      status.value = 'All flags downloaded!'
      return
    }

    const country = countries[index] // Get the country from the list
    try {
      const response = await fetch(country.flag) // Fetch the flag image from the URL
      if (!response.ok) throw new Error('Network response was not ok.')
      const blob = await response.blob() // Convert the response to blob
      FileSaver.saveAs(blob, `${country.iso.toLowerCase()}.svg`) // Save the blob as an SVG file
      status.value = `Downloaded ${index + 1} of ${countries.length} flags` // Update status for each flag
      setTimeout(() => downloadFlag(index + 1), 200) // Wait for 200ms before the next download
    } catch (error) {
      if (retries < maxRetries) {
        console.error(`Retry ${retries + 1} for ${country.name}:`, error) // Log retry attempt
        setTimeout(() => downloadFlag(index, retries + 1), 500) // Retry after 500ms
      } else {
        console.error(
          `Failed to download flag for ${country.name} after ${maxRetries} attempts:`,
          error,
        ) // Max retries reached
        downloadFlag(index + 1) // Move to the next flag
      }
    }
  }

  const downloadFlags = () => {
    status.value = 'Downloading flags...'
    downloadFlag() // Start the recursive downloading
  }

  return {
    status,
    downloadFlags,
  }
}
