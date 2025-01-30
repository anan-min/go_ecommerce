import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Products = () => {
  return (
    <div className="flex flex-col gap-8 overflow-hidden p-2 justify-center items-center min-w-screen">
      <Separator />
      <div className="w-2/3 text-center">
        <h1 className="font-normal text-5xl pb-4">Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          consequatur quibusdam alias. Fugit quia reprehenderit sunt eum, unde,
          voluptas beatae, dolorum expedita adipisci dolore delectus quidem
          ratione nihil aliquid soluta.
        </p>
      </div>
      <div
        id="products"
        className="flex flex-row gap-6 p-2 w-full justify-center"
      >
        <Card className="flex-1 max-w-sm">
          <CardHeader className="rounded-t-lg bg-slate-300 mb-2">
            <CardTitle className="font-normal text-2xl text-center">
              Forever Pants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square h-full bg-gray-300 mt-6"></div>

            <h2 className="font-semibold text-3xl text-center mt-3">
              $260<span className="font-normal text-lg">.00</span>
            </h2>
            <p className="text-center py-1">
              100% recycled materials
              <br />
              100 year warranty
              <br />
              free repair
            </p>
            <Button
              variant="outline"
              className="w-full text-blue-600 border-blue-600 mt-2"
            >
              BUY NOW
            </Button>
          </CardContent>
        </Card>
        <Card className="flex-1 max-w-sm">
          <CardHeader className="rounded-t-lg bg-slate-300 mb-2">
            <CardTitle className="font-normal text-2xl text-center">
              Forever Pants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square h-full bg-gray-300 mt-6"></div>

            <h2 className="font-semibold text-3xl text-center mt-3">
              $260<span className="font-normal text-lg">.00</span>
            </h2>
            <p className="text-center py-1">
              100% recycled materials
              <br />
              100 year warranty
              <br />
              free repair
            </p>
            <Button
              variant="outline"
              className="w-full text-blue-600 border-blue-600 mt-2"
            >
              BUY NOW
            </Button>
          </CardContent>
        </Card>
        <Card className="flex-1 max-w-sm">
          <CardHeader className="rounded-t-lg bg-slate-300 mb-2">
            <CardTitle className="font-normal text-2xl text-center">
              Forever Pants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square h-full bg-gray-300 mt-6"></div>

            <h2 className="font-semibold text-3xl text-center mt-3">
              $260<span className="font-normal text-lg">.00</span>
            </h2>
            <p className="text-center py-1">
              100% recycled materials
              <br />
              100 year warranty
              <br />
              free repair
            </p>
            <Button
              variant="outline"
              className="w-full text-blue-600 border-blue-600 mt-2"
            >
              BUY NOW
            </Button>
          </CardContent>
        </Card>
      </div>
      <Separator />
      <div
        id="links"
        className="flex flex-row gap-6 px-2 w-full justify-between"
      >
        <div className="flex flex-col flex-1">
          <h3 className="font-bold text-left text-lg">Company</h3>
          <a href="" className="underline text-slate-600">
            Team
          </a>
          <a className="underline text-slate-600">History</a>
          <a className="underline text-slate-600">Contact us</a>
          <a className="underline text-slate-600">Locations</a>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="font-bold text-left text-lg">Company</h3>
          <a href="" className="underline text-slate-600">
            Team
          </a>
          <a className="underline text-slate-600">History</a>
          <a className="underline text-slate-600">Contact us</a>
          <a className="underline text-slate-600">Locations</a>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="font-bold text-left text-lg">Company</h3>
          <a href="" className="underline text-slate-600">
            Team
          </a>
          <a className="underline text-slate-600">History</a>
          <a className="underline text-slate-600">Contact us</a>
          <a className="underline text-slate-600">Locations</a>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="font-bold text-left text-lg">Company</h3>
          <a href="" className="underline text-slate-600">
            Team
          </a>
          <a className="underline text-slate-600">History</a>
          <a className="underline text-slate-600">Contact us</a>
          <a className="underline text-slate-600">Locations</a>
        </div>
      </div>
      <div className="text-slate-500">@2023 All rights reserved</div>
    </div>
  );
};
