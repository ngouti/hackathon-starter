import React from 'react'
import { Router, navigate } from '@reach/router'
import { LayoutVertical } from './Layout/LayoutVertical'
import Somewhere from './Pages/Somewhere'
import { Home } from './Pages/Home'
// import { Foo } from './Pages/Foo'
import { Page } from './Layout/Page'
import { MissingPage } from './Common/MissingPage'
import { Somewhere } from './Pages/Somewhere'
import { Inspect } from './Common/Inspect'
import { useAuth, axios } from '@arundo/react-auth'

const Foo = () => <Page centeredMessage><h1>Foo</h1></Page>
const Bar = () => <Page centeredMessage><h1>Bar</h1></Page>

export default function App() {
  let { user } = useAuth()

  return (
    <LayoutVertical>
      <Router className="page-content">
        <Foo path="/foo" />
        <Bar path="/bar" />
        <Somewhere path="/somewhere" />
        <MissingPage default />
      </Router>

    { /*<Inspect item={user} />*/ }
    </LayoutVertical>
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
