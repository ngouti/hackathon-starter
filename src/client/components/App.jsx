import React from 'react'
import classNames from 'classnames'
import { LayoutSidenav } from './Layout/LayoutSidenav'
import { Home } from './Pages/Home'
import { Page } from './Layout/Page'
import { Sidenav } from './Layout/Sidenav'
import { SidenavItem } from './Layout/SidenavItem'
import { MissingPage } from './Pages/Missing'
import { Somewhere } from './Pages/Somewhere'
import { Inspect } from './Common/Inspect'
import { useAuth, axios } from '@arundo/react-auth'
import { Router } from '@reach/router'

import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const Foo = () => <Page centeredMessage><h1>Foo</h1></Page>
const Bar = () => <Page centeredMessage><h1>Bar</h1></Page>

export default function App() {
  let { user } = useAuth()

  return (
    <LayoutSidenav navigation={[
        {
          name: 'Foo',
          icon: <MailIcon />,
          to:'/foo',
        },
        {
          name: 'Bar',
          icon: <InboxIcon />,
          to:'/bar',
        },
      ]}>

      <Page>
        <Router>
          <Foo path="/foo" />
          <Bar path="/bar" />
        </Router>
      </Page>
    </LayoutSidenav>
  )
}

// import React from 'react'
// import { Router, LayoutStandard, useAuth } from '@arundo/react-shell'
// import PageA from './Pages/PageA'
// import PageB from './Pages/PageB'

// export default function App() {
//   return (
//     <LayoutStandard>
//       <Router>
//         <PageA path="page-a" />
//         <PageB path="page-b" />
//       </Router>
//     </LayoutStandard>
//   )
// }
