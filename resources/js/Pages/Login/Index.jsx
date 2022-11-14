
import { useState } from 'react'
import { Head } from '@inertiajs/inertia-react'

export default function Login() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <Head title="Login" />
      <button onClick={() => setCount(oldValue => oldValue + 1)}> increment</button>
      <h1>{count}</h1>
    </div>
  )
}
