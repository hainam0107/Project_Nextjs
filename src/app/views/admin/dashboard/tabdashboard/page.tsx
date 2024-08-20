import { Button } from "@/components/ui/button"
import BoxProDashBoardPage from "../BoxProDashBoard/page"
import { ChartComponent } from "../../dashboardsecond/chart/page"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className=" px-[10px] mt-[30px]">
      <TabsList className="w-full flex justify-start gap-10 text-[14px] font-[600] mt-[80px]">
        <TabsTrigger value="account" className="w-[174px] h-[55px]  flex justify-center items-center">REVIEWED PRODUCTS</TabsTrigger>
        <TabsTrigger value="password" className="w-[174px] h-[55px]  flex justify-center items-center">ANALYTICS</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent className="">
            <div className="mt-[50px] text-center">
              <p className="text-[22px] font-bold">Reviewed 16 Products</p>
              <div className="mt-[15px]">
                <button className="w-[156px] h-[55px] bg-black text-white font-bold text-[16px]">SELL WITH US</button>
              </div>
            </div>
            <div className="mt-[30px] px-[95px] grid grid-cols-3 gap-[30px] pb-[150px]">
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
              <BoxProDashBoardPage />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent className="space-y-2">
            <div className=" pb-[100px] mt-[30px]">
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-[35px] font-bold">4565 Visitor</p>
                  <ChartComponent />
                </div>
                <div>
                  <p className="text-[35px] font-bold">AED1430 Total Purchases </p>
                  <ChartComponent />
                </div>
              </div>
              <div className="mt-[50px]">
                <p className="text-[22px] font-bold">Purchases by Product</p>
                <div className="w-full">
                  <table className="border-collapse border-2 w-full border-black">
                    <thead className="border-collapse border-2 border-black">
                      <tr>
                        <th className="w-[33%] py-5 px-10 text-start">Product</th>
                        <th className="w-[33%]">Quantity</th>
                        <th className="w-[33%]">Amoun</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="px-10 py-5 text-start">Product Name</th>
                        <th>3 </th>
                        <th>AED 159</th>
                      </tr>
                      <tr>
                        <th className="px-10 py-5 text-start">Product Name</th>
                        <th>3 </th>
                        <th>AED 159</th>
                      </tr><tr>
                        <th className="px-10 py-5 text-start">Product Name</th>
                        <th>3 </th>
                        <th>AED 159</th>
                      </tr><tr>
                        <th className="px-10 py-5 text-start">Product Name</th>
                        <th>3 </th>
                        <th>AED 159</th>
                      </tr><tr>
                        <th className="px-10 py-5 text-start">Product Name</th>
                        <th>3 </th>
                        <th>AED 159</th>
                      </tr><tr>
                        <th className="px-10 py-5 text-start">Product Name</th>
                        <th>3 </th>
                        <th>AED 159</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
