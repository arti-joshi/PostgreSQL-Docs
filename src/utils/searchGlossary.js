export function searchGlossary(glossaryData, searchTerm) {
  const searchLower = searchTerm.toLowerCase()
  return glossaryData.filter(item => {
    const termMatch = item.term.toLowerCase().includes(searchLower)
    const definitionMatch = item.definition.toLowerCase().includes(searchLower)
    const examplesMatch = item.examples?.some(example => 
      example.toLowerCase().includes(searchLower)
    )
    const relatedMatch = item.relatedTerms?.some(term => 
      term.toLowerCase().includes(searchLower)
    )
    
    return termMatch || definitionMatch || examplesMatch || relatedMatch
  })
} 