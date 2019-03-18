import React from 'react'
import { Router, navigate } from '@reach/router'
import { LayoutVertical } from './Layout/LayoutVertical'
import Somewhere from './Pages/Somewhere'
import { Home } from './Pages/Home'
import { Foo } from './Pages/Foo'

export default function App() {
  return (
    <LayoutVertical>
      <div>
        foo
      </div>
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
