import Image from "next/image";
import PageTitle from "@/components/PageTitle"
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Card from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard from "@/components/SalesCard";

export default function Home() {
  const cardData=[
    {
      label:"Total Revenue",
      amount:"$45,231.89",
      description:"+20.1% from last month",
      icon:DollarSign
    },
    {
      label:"Subscriptions",
      amount:"$2350",
      description:"+180.1% from last month",
      icon:Users
    },
    {
      label:"Sales",
      amount:"$12,234",
      description:"+19% from last month",
      icon:CreditCard
    },
    {
      label:"Active Now",
      amount:"$573",
      description:"+201% from last hour",
      icon:Activity
    },
  ]

  const userSalesData=[
      {
        name:"Olivia Martin",
        email:"oliviamartin@gmail.com",
        sellAmount:"+$1,999.00"
      },
      {
        name:"Jackson Lee",
        email:"jacksonlee@gmail.com",
        sellAmount:"+$1,99.00"
      },
      {
        name:"Isabella Nugen",
        email:"isabellaNugen@gmail.com",
        sellAmount:"+$999.00"
      },
      {
        name:"William Kim ",
        email:"williamkin@gmail.com",
        sellAmount:"+$299.00"
      },
      {
        name:"Sophia Davis  ",
        email:"sophiadavis@gmail.com",
        sellAmount:"+$4596.00"
      },
  ]

  return (
   <div className="flex flex-col gap-5 w-full">
    <PageTitle title="Dashboard"/>
     <Card cardData={cardData}/>
     <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <div className="flex w-full flex-col gap-3 rounded-xl border p-5 shadow">
        <div>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart/>
        </div>
        </div>
        <div  className="flex justify-between w-full flex-col gap-4 rounded-xl border p-5 shadow">
          <p>Recent Sales</p>
          <p className="text-sm text-gray-400">You have made 265 sales this month</p>
        {userSalesData.map((d,i)=>(<SalesCard key={i} email={d.email} name={d.name} sellAmount={d.sellAmount}/>))}
      </div>
        
     
       
     </section>
   </div>
  );
}
