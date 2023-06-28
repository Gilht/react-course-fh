import React from 'react'
import { useState } from 'react'
import { AddCategories } from './components/AddCategories';

export const GiftExpertApp = () => {
const [category, setCategory] = useState([]);

const onAddCategory = (newCategory) => {
    setCategory([newCategory, ...category])
}

  return (
    <>
        <h1>Gift Expert app </h1>

        <AddCategories         // setCategories={setCategory}
        onNewCategory={(event) => onAddCategory(event)}
        />

        <ol>
          {category.map(cat => {
            return <li key={cat}> {cat} </li>
          })}
        </ol>
    </>
  )
}
