"use client"

import { useState } from "react"
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea"


const WordCountPage = () => {
  const [content, setContent] = useState("")

  const onChangeText = (content: string) => {
    setContent(content);
  }

  const wordCounter = (content: string) => {
    if (content) {
      const words = content.trim().split(" ")
      return words?.length
    }
    return 0
  }

  const characterCounter = (content: string) => {
    const characters = content.trim().split("")
    return characters?.length ?? 0
  }

  const sentencesCounter = (content: string) => {
    const sentences = content.match(/[^\.!\?]+[\.!\?]+/g)
    return sentences?.length ?? 0
  }

  const paragraphsCounter = (content: string) => {
    if (content) {
      const paragraphs = content.split(/\r?\n/)
      return paragraphs?.length
    }
    return 0
  }

  return(
    <section className="p-3 surface-section text-center" data-testid="word-count-page">
      <h1 className="text-900 font-bold text-6xl">Word Counter</h1>
      <div className="input-text flex justify-content-center">
        <InputTextarea
          value={content}
          onChange={e => onChangeText(e.target.value)}
          autoResize
          className="w-6"
          rows={10}
          data-testid="word-count-textarea"
        />
      </div>
      <div className="counters col-12 flex flex-wrap justify-content-center gap-2 mt-3">
        <Card title="Words" className="w-4" data-testid="words">
          <span className="text-xl font-medium" data-testid="words-value">{wordCounter(content)}</span>
        </Card>
        <Card title="Characters" className="w-4" data-testid="characters">
          <span className="text-xl font-medium" data-testid="characters-value">{characterCounter(content)}</span>
        </Card>
        <Card title="Sentences" className="w-4">
          <span className="text-xl font-medium">{sentencesCounter(content)}</span>
        </Card>
        <Card title="Paragraphs" className="w-4">
          <span className="text-xl font-medium">{paragraphsCounter(content)}</span>
        </Card>
      </div>
      
    </section>
  )
}

export default WordCountPage