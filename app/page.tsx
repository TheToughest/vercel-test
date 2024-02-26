import { isItWeekend } from "@/app/lib/helpers/functions";
import WeekendCard from "./lib/components/weekendCard";

export default function Home() {

    const weekend = isItWeekend();

    return (
        <main className="flex h-screen items-center justify-center">
            <WeekendCard 
                weekend={weekend} 
            />
        </main>
    );
}
