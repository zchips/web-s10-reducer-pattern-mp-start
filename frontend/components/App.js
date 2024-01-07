import React from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'

const CREATE_QUOTE = 'CREATE_QUOTE'
const DELETE_QUOTE = 'DELETE_QUOTE'
const EDIT_QUOTE_AUTHENTICITY = 'EDIT_QUOTE_AUTHENTICITY'
const SET_HIGHLIGHTED_QUOTE = 'SET_HIGHLIGHTED_QUOTE'
const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

let id = 1
const getNextId = () => id++
const quotes = [
  {
    id: getNextId(),
    quoteText: "Don't cry because it's over, smile because it happened.",
    authorName: "Dr. Seuss",
    apocryphal: false,
  },
  {
    id: getNextId(),
    quoteText: "So many books, so little time.",
    authorName: "Frank Zappa",
    apocryphal: false,
  },
  {
    id: getNextId(),
    quoteText: "Be yourself; everyone else is already taken.",
    authorName: "Oscar Wilde",
    apocryphal: false,
  },
]

const reducer = (state, action) => {

}

export default function App() {

  const createQuote = ({ authorName, quoteText }) => {

  }
  const deleteQuote = id => {

  }
  const editQuoteAuthenticity = id => {

  }
  const setHighlightedQuote = id => {

  }
  const toggleVisibility = () => {

  }

  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
        quotes={quotes}
      />
      <QuoteForm
        createQuote={createQuote}
      />
    </div>
  )
}
