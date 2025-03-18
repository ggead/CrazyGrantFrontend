import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import CrazyGrantDetails from '../pages/CrazyGrantDetails'
import ApplyGrant from '../pages/ApplyGrant'
import GrantSquare from '../pages/GrantSquare'
import AppBody from '../pages/AppBody'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppBody,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'CrazyGrantDetails',
        element: <CrazyGrantDetails />
      },
      {
        path: 'CrazyGrantDetails',
        element: <CrazyGrantDetails />
      },
      {
        path: 'ApplyGrant',
        element: <ApplyGrant />
      },
      {
        path: 'GrantSquare',
        element: <GrantSquare />
      }
    ]
  }
])
