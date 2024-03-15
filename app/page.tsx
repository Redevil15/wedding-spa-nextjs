import { ConfirmacionComponent } from "@/components/confirmacion-component";
import { DateComponent } from "@/components/date-component";
import { DescriptionComponent } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MesaRegalos } from "@/components/mesa-regalos";
import { Navbar } from "@/components/navbar";
import { PlaceComponent } from "@/components/place-component";
import { VestimentaComponent } from "@/components/vestimenta-component";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Home() {
  const scrollToIds = ['home', 'time&place', 'giftTable', 'confirmation']
  return (
    <div>
      <div className="">
        <Navbar
          scrollToIds={scrollToIds}
        />
        <Header />
        <DescriptionComponent />
        <DateComponent
          suppressHydrationWarning
        />
        <PlaceComponent />
        <VestimentaComponent />
        <MesaRegalos />
        <ConfirmacionComponent />
        <Footer />
      </div>
    </div>
  );
}
