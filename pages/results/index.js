import React from "react";
import { useRouter } from "next/router";
import MainButton from "../../components/MainButton";
import { StarIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";

export default function Results() {
  const router = useRouter();
  const meal = router.query.meal;
  const ingredients = router.query.ingredients;
  console.log(ingredients);
  return (
    <main className="flex flex-col h-[80vh] w-screen items-center justify-center space-y-2">
      <section className="flex flex-col w-[80vw] items-center justify-end space-y-2">
        <h1 className="font-nunito font-bold text-2xl text-dark-color text-center">
          Ok, we think you should{" "}
          <span className="font-permanent-marker text-center text-2xl text-dark-color font-bold">
            Chews{" "}
          </span>
          this recipe:
        </h1>
        <Divider />
        <h1 className="font-permanent-marker text-center text-2xl text-primary-color">
          Creamy Steak Alfredo
        </h1>
        <img
          className="w-full object-cover rounded"
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
        />
      </section>
      <section className="flex flex-row justify-between w-4/5 space-x-2">
        <MainButton
          buttonText="View Recipe"
          buttonSize="md"
          colorMode="dark"
          buttonWidth="70%"
        />
        <MainButton
          buttonText={<StarIcon />}
          buttonSize="md"
          colorMode="dark"
          buttonWidth="30%"
        />
      </section>
      <section className="flex flex-col w-[80vw] items-center justify-end space-y-2">
        <Divider />
        <h1 className="font-permanent-marker text-center text-2xl text-dark-color">
          Prefer something else?
        </h1>
        <section className="flex flex-row justify-between w-[100%] space-x-2">
          <MainButton
            buttonText="Chews Again"
            buttonSize="md"
            colorMode="dark"
            buttonWidth="50%"
          />
          <MainButton
            buttonText="See All"
            buttonSize="md"
            colorMode="dark"
            buttonWidth="50%"
          />
        </section>
        {/* <MainButton
        buttonText="Add Search Filters"
        buttonSize="xs"
        colorMode="light"
        buttonWidth="80%"
      /> */}
      </section>
    </main>
  );
}
