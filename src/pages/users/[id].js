import React from 'react'
import { useRouter } from 'next/router'

function AccountId() {
   const router = useRouter()
    const { id } = router.query
  return (
    <div>AccountId {id}</div>
  )
}

export default AccountId