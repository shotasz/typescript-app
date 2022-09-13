import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState
} from 'react'

type User = {
  id: number
  name: string
}

const UserContext = createContext<User | null>(null)

const GrandChild = () => {
  const user = useContext(UserContext)

  return user !== null ? <p>Hello {user.name}</p> : null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      {/* <p>Current: {now.toLocaleString()}</p> */}
      <GrandChild />
    </div>
  )
}

const Clock = () => {
  const user: User = {
    id: 1,
    name: 'Miguel'
  }

  return (
    <div>
      <UserContext.Provider value={user}>
        <Child />
      </UserContext.Provider>
    </div>
  )
}

export default Clock
