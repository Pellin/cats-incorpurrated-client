import React from 'react'
import { LayoutProps } from './types'
import styles from './Layout.module.scss'

const Layout: React.FC<LayoutProps> = (props) => {
  return <main className={styles.layout}>{props.children}</main>
}

export default Layout
