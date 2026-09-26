import { use, useState } from "react";
import type { Technology } from "../type/types";
import TechnologyCard from "./TechnologyCard";
import { toast } from "react-toastify";

export interface TechnologyProp {
    prop: Promise<Technology[]>;
}

export default function ExploreTech({ prop }: TechnologyProp) {
    const technologies = use(prop);

    const [stack, setStack] = useState<Technology[]>([]);

    // Add technology
    const addToStack = (technology: Technology) => {
        const isAlreadyInStack = stack.some((item) => item.id === technology.id);

        if (isAlreadyInStack) {
            toast.warn(`${technology.name} is already in your stack!`);
            return;
        }

        setStack([...stack, technology]);
        toast.success(`${technology.name} added to your stack!`);
    };

    // Removed technology
    const removeFromStack = (id: string, name: string) => {
        setStack(stack.filter((item) => item.id !== id));
        toast.info(`${name} removed from your stack.`);
    };

    // Removed all 
    const removeAllFromStack = () => {
        setStack([]);
        toast.error("Removed all technologies from your stack!");
    };

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    Explore the <span className="brand-gradient bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className="text-gray-600 mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((technology) => {
                        const isSelected = stack.some((item) => item.id === technology.id);

                        return (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                onAdd={addToStack}
                                isSelected={isSelected}
                            />
                        );
                    })}
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Your Stack</h3>
                    <p className="text-xs text-gray-400 mb-6">
                        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
                    </p>

                    {stack.length === 0 ? (
                        <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">
                            Your stack is empty.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="space-y-3">
                                {stack.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                                            <div>
                                                <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
                                                <span className="text-[10px] text-gray-500">{item.category}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromStack(item.id, item.name)}
                                            className="text-gray-400 hover:text-red-500 font-bold p-1 cursor-pointer"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={removeAllFromStack}
                                className="w-full border border-red-200 text-red-600 py-2.5 rounded-xl text-sm font-medium hover:bg-red-50 transition cursor-pointer"
                            >
                                Remove All
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}