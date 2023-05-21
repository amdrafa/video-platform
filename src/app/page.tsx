"use client";
import Header from "@/components/header/header";
import ModelCard from "@/components/model-card.tsx/model-card";
import { useState } from "react";



export default function Home() {

  const [selectedFilterOption, setSelectedFilterOption] = useState("Mulheres")

  return (
    <>
      <Header />
      <div className={`w-full bg-stone-900 my-4 p-4 space-x-4 overflow-x-auto whitespace-nowrap`}>
        <button
          className={` ${selectedFilterOption === "Mulheres" ? "bg-pink-700" : "bg-stone-950"} py-2 px-8 rounded-xl focus:outline-green-500`}
          onClick={() => setSelectedFilterOption("Mulheres")}
        >
          Mulheres
        </button>
        <button
          className={`${selectedFilterOption === "Transex" ? "bg-pink-700" : "bg-stone-950"} py-2 px-8 rounded-xl`}
          onClick={() => setSelectedFilterOption("Transex")}
        >
          Transex
        </button>
        <button
          className={`${selectedFilterOption === "Homens" ? "bg-pink-700" : "bg-stone-950"} py-2 px-8 rounded-xl`}
          onClick={() => setSelectedFilterOption("Homens")}
        >
          Homens
        </button>
        <button
          className={`${selectedFilterOption === "Transboy" ? "bg-pink-700" : "bg-stone-950"} py-2 px-8 rounded-xl`}
          onClick={() => setSelectedFilterOption("Transboy")}
        >
          Transboy
        </button>
      </div>

      {selectedFilterOption === "Mulheres" ? (
        <div className="grid grid-cols-2 tablet:grid-cols-6">

          <ModelCard
            isOnline={true}
            name="Amanda Schutz"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image="assets/test3.jpg"
            price="R$29,00"
          />
          <ModelCard
            isOnline={true}
            name="Larissa Silva"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image="assets/test8.jpg"
            price="R$49,00"
          />
          <ModelCard
            isOnline={false}
            name="Julia Silva"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image="assets/test2.jpg"
            price="R$49,00"
          />

          <ModelCard
            isOnline={true}
            name="Julia Silva"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image="assets/test7.jpg"
            price="R$49,00"
          />
          <ModelCard
            isOnline={true}
            name="Vanessa Lucrezia"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image="assets/test5.jpg"
            price="R$39,00"
          />
          <ModelCard
            isOnline={false}
            name="Laisa Eduarda"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image="assets/test6.jpg"
            price="R$29,00"
          />
          <ModelCard
            isOnline={true}
            name="Gigi Amaral"
            whatsappLink="https://api.whatsapp.com/send?phone=5547992479009&text=Oi,%20quero%20fazer%20uma%20chamada%20de%20v%C3%ADdeo%20com%20voc%C3%AA.%20Como%20posso%20fazer%20o%20pagamento?"
            image="assets/test4.jpg"
            price="R$29,00"
          />
        </div>
      ) : (
        <div className="flex w-full justify-center py-6 text-lg">
          Esta categoria não possui anunciantes.
        </div>
      )}

    </>
  )
}