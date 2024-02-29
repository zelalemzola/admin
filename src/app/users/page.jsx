"use client"
import DataTable from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import React from 'react'

const Users = () => {
   const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell:({row})=>{
        return <div className='flex gap-2 items-center'>
        <img src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`} className='w-10 h-10'  alt="user-image" />
        <p>{row.getValue("name")}</p>

        </div>
      }
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "lastOrder",
      header: "Last Order",
    },
    {
      accessorKey: "method",
      header: "Method",
    },
  ]
   const data = [
    {
     name:"Jhon Doe",
     email:"jhon@example.com",
     lastOrder:"2020-01-01",
     method:"Credit Card"
    },
    {
      name:"Jane Austin ",
      email:"Jane@example.com",
      lastOrder:"2024-06-01",
      method:"Paypal"
    },
    {
      name:"Allce Smith ",
      email:"alice@example.com",
      lastOrder:"2015-11-11",
      method:"Credit"
    },
    {
      name:"Bob Jhonson",
      email:"bobjhonson@gmail.com",
      lastOrder:"2023-05-06",
      method:"Cash"
    },
    {
      name:"Marie Curie",
      email:"mariecurie@gmail.com",
      lastOrder:"2022-02-09",
      method:"Stripe"
    },
    {
     name:"Jhon Doe",
     email:"jhon@example.com",
     lastOrder:"2020-01-01",
     method:"Credit Card"
    },
    {
      name:"Jane Austin ",
      email:"Jane@example.com",
      lastOrder:"2024-06-01",
      method:"Paypal"
    },
    {
      name:"Allce Smith ",
      email:"alice@example.com",
      lastOrder:"2015-11-11",
      method:"Credit"
    },
    {
      name:"Bob Jhonson",
      email:"bobjhonson@gmail.com",
      lastOrder:"2023-05-06",
      method:"Cash"
    },
    {
      name:"Marie Curie",
      email:"mariecurie@gmail.com",
      lastOrder:"2022-02-09",
      method:"Stripe"
    },
    {
     name:"Jhon Doe",
     email:"jhon@example.com",
     lastOrder:"2020-01-01",
     method:"Credit Card"
    },
    {
      name:"Jane Austin ",
      email:"Jane@example.com",
      lastOrder:"2024-06-01",
      method:"Paypal"
    },
    {
      name:"Allce Smith ",
      email:"alice@example.com",
      lastOrder:"2015-11-11",
      method:"Credit"
    },
    {
      name:"Bob Jhonson",
      email:"bobjhonson@gmail.com",
      lastOrder:"2023-05-06",
      method:"Cash"
    },
    {
      name:"Marie Curie",
      email:"mariecurie@gmail.com",
      lastOrder:"2022-02-09",
      method:"Stripe"
    },
    {
     name:"Jhon Doe",
     email:"jhon@example.com",
     lastOrder:"2020-01-01",
     method:"Credit Card"
    },
    {
      name:"Jane Austin ",
      email:"Jane@example.com",
      lastOrder:"2024-06-01",
      method:"Paypal"
    },
    {
      name:"Allce Smith ",
      email:"alice@example.com",
      lastOrder:"2015-11-11",
      method:"Credit"
    },
    {
      name:"Bob Jhonson",
      email:"bobjhonson@gmail.com",
      lastOrder:"2023-05-06",
      method:"Cash"
    },
    {
      name:"Marie Curie",
      email:"mariecurie@gmail.com",
      lastOrder:"2022-02-09",
      method:"Stripe"
    },
    
  ]
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title="Users"/>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default Users