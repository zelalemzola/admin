"use client"
import DataTable from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import React from 'react'

const OrdersPage = () => {
   const columns = [
    {
      accessorKey: "order",
      header: "Order",
    
    },
    {
      accessorKey: "status",
      header: "Status",
      cell:({row})=>{
        return <div className={`font-medium w-fit px-4 py-2 rounded-lg ${row.getValue("status")=== "Pending" && "bg-red-200"} ${row.getValue("status")=== "Processing" && "bg-orange-200"} ${row.getValue("status")=== "Completed" && "bg-green-200"}`}>{row.getValue("status")}</div>
        
      }
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
    order:"ORD001",
    status:"Pending",
    lastOrder:"2023-01-15",
    method:"Credit Card"
    },
    {
      order:"ORD002",
      status:"Processing",
      lastOrder:"2022-05-20",
      method:"Venmo"
    },
    {
      order:"ORD003",
      status:"Completed",
      lastOrder:"2022-05-20",
      method:"Paypal"
    },
    {
      order:"ORD004",
      status:"Pending",
      lastOrder:"2023-01-15",
      method:"Credit Card"
      },
      {
        order:"ORD005",
        status:"Completed",
        lastOrder:"2022-05-20",
        method:"Paypal"
      },
      {
        order:"ORD006",
        status:"Processing",
        lastOrder:"2022-05-20",
        method:"Venmo"
      },
      {
        order:"ORD007",
        status:"Completed",
        lastOrder:"2022-05-20",
        method:"Paypal"
      },
      {
        order:"ORD008",
        status:"Pending",
        lastOrder:"2023-01-15",
        method:"Credit Card"
        },
    {
    order:"ORD009",
    status:"Pending",
    lastOrder:"2023-01-15",
    method:"Credit Card"
    },
    {
      order:"ORD010",
      status:"Processing",
      lastOrder:"2022-05-20",
      method:"Venmo"
    },
    {
      order:"ORD011",
      status:"Completed",
      lastOrder:"2022-05-20",
      method:"Paypal"
    },
    {
      order:"ORD0012",
      status:"Pending",
      lastOrder:"2023-01-15",
      method:"Credit Card"
      },
      {
        order:"ORD0013",
        status:"Completed",
        lastOrder:"2022-05-20",
        method:"Paypal"
      },
      {
        order:"ORD014",
        status:"Processing",
        lastOrder:"2022-05-20",
        method:"Venmo"
      },
      {
        order:"ORD015",
        status:"Completed",
        lastOrder:"2022-05-20",
        method:"Paypal"
      },
      {
        order:"ORD0016",
        status:"Pending",
        lastOrder:"2023-01-15",
        method:"Credit Card"
        },
  ]
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title="Orders"/>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default OrdersPage;