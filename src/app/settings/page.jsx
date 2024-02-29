import DataTable from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import React from 'react'

const Settings = () => {
  const columns = [
    {
      accessorKey: "category",
      header: "Category",

    },
    {
      accessorKey: "value",
      header: "Value",
    }
  ]
  const data = [
    {
      category: "Account",
      value: true
    },
    {
      category: "Notifications",
      value: false
    },
    {
      category: "Language",
      value: "English"
    },
    {
      category: "Theme",
      value: "Dark"
    },

  ]
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Settings;