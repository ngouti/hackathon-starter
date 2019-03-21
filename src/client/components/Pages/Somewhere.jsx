import React, { useState, useEffect } from 'react'
import { useStore } from '@kwhitley/use-store'
import { Page } from 'Layout/Page'
import { useAuth, axios } from '@arundo/react-auth'
import 'react-virtualized/styles.css'
import { List, AutoSizer, WindowScroller } from 'react-virtualized'

const useTags = (isLoggedIn) => {
  let [ tags, setTags ] = useStore('tags', [], { persist: true })
  let [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true)
      axios
        .get('https://gke-develop.arundo.com/v0/tags')
        .then(({ data }) => {
          console.log('data', data)
          console.log('data.data', data.data.data)

          setTags(data.data.data.map(r => ({
            guid: r.guid,
          })))
          setIsLoading(false)
        })
    }
  }, [isLoggedIn])

  return { tags, isLoading }
}

const rowRenderer = (list) => ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style        // Style object to be applied to row (to position it)
}) => {
  return (
    <div
      className="tag"
      key={key}
      style={style}
    >
      { list[index].guid }
    </div>
  )
}

const VirtualizedList = ({ items }) => {
  return (
    <AutoSizer>
      {
        ({ height, width }) => {
          console.log('AutoSizer', { height, width })
          return (
            <List
              width={width}
              height={height}
              rowCount={items.length}
              rowHeight={30}
              rowRenderer={rowRenderer(items)}
            />
          )
        }
      }
    </AutoSizer>
  )
}

export default function Somewhere() {
  let { isLoggedIn } = useAuth({ required: true })
  let { isLoading, tags } = useTags(isLoggedIn)

  console.log('tags.length', tags.length)

  return isLoggedIn && (
    <div className="virtualized">
      {
        !tags.length
        ? 'Loading Tags...'
        : <VirtualizedList items={tags} />
      }
    </div>
  )
}
