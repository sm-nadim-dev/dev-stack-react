import type { Technology } from "../type/types";
import { FaStar } from "react-icons/fa";

interface TechnologyCardProps {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    isSelected: boolean;
}

export default function TechnologyCard({ technology, onAdd, isSelected }: TechnologyCardProps) {
    return (
        <section>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:shadow-gray-300">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <img src={technology.icon} alt={technology.name} className="w-12 h-12 object-contain" />
                    {technology.badge && (
                        <span className="text-xs font-semibold px-3 py-1 bg-sky-50 text-sky-600 rounded-full">
                            {technology.badge}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{technology.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{technology.description}</p>
            </div>

            <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-gray-50">
                    <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-600 font-medium">
                        {technology.category}
                    </span>
                    <span className="font-medium">{technology.difficulty}</span>
                    <span className="flex items-center gap-1 font-semibold text-gray-700">
                        <FaStar className="text-amber-400 text-sm" /> {technology.rating}
                    </span>
                </div>

                <button
                    onClick={() => onAdd(technology)}
                    disabled={isSelected}
                    className={`w-full py-3 rounded-xl font-medium transition cursor-pointer ${isSelected
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-[#0F172A] text-white hover:bg-slate-800"
                        }`}
                >
                    {isSelected ? "✔ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
        </section>
    );
}