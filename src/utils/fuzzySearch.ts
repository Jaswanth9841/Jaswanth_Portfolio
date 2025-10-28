export interface SearchableItem {
  id: string
  title: string
  content: string
  type: 'page' | 'project' | 'action'
  path?: string
  action?: () => void
}

export function fuzzySearch(items: SearchableItem[], query: string): SearchableItem[] {
  if (!query.trim()) return items

  const lowerQuery = query.toLowerCase()
  
  return items
    .map(item => {
      const titleLower = item.title.toLowerCase()
      const contentLower = item.content.toLowerCase()
      
      let score = 0
      
      // Exact match bonus
      if (titleLower === lowerQuery) score += 100
      if (contentLower === lowerQuery) score += 50
      
      // Starts with bonus
      if (titleLower.startsWith(lowerQuery)) score += 50
      if (contentLower.startsWith(lowerQuery)) score += 25
      
      // Contains bonus
      if (titleLower.includes(lowerQuery)) score += 25
      if (contentLower.includes(lowerQuery)) score += 10
      
      // Fuzzy match
      let fuzzyScore = 0
      let prevIndex = -1
      for (const char of lowerQuery) {
        const titleIndex = titleLower.indexOf(char, prevIndex + 1)
        const contentIndex = contentLower.indexOf(char, prevIndex + 1)
        
        if (titleIndex > -1) {
          fuzzyScore += 1
          prevIndex = titleIndex
        } else if (contentIndex > -1) {
          fuzzyScore += 0.5
          prevIndex = contentIndex
        }
      }
      
      score += fuzzyScore
      
      return { ...item, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
}

