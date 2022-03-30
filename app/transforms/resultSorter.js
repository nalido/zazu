const resultSorter = {
  sort (results, clickedResults, useRawOrder) {
    return results.slice(0).map((result) => {
      if (result.id) {
        const score = clickedResults.reduce((memo, clickedResult, index) => {
          if (clickedResult.id === result.id) memo++
          return useRawOrder? index: memo
        }, result.blockRank)
        return { score, result }
      }
      const noIdScore = result.blockRank - 3
      return { score: noIdScore, result }
    }).sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score
      const aIndex = results.indexOf(a.result)
      const bIndex = results.indexOf(b.result)
      return aIndex - bIndex
    }).map((item) => {
      return item.result
    })
  },
}

module.exports = resultSorter
