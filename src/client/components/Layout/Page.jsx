import React, { useEffect } from 'react'
import classNames from 'classnames'
import './Page.scss'

const useScrollToTop = (scrollToTopOnLoad) => {
  useEffect(() => {
    scrollToTopOnLoad && document.body.scrollTo(0,0)
  }, [])
}

export const Page = ({
  children,
  visible = true,
  className,
  back,
  style,
  centeredMessage,
  morePadding = false,
  scrollToTopOnLoad = true,
  ...props
}) => {
  useScrollToTop(scrollToTopOnLoad)

  return (
    <div
      className={
        classNames(
          'page',
          centeredMessage && 'centered-message',
          morePadding && 'more-padding',
          className
        )}
      style={style}
      {...props}
    >
      { visible && children }
    </div>
  )
}

