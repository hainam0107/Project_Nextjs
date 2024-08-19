import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="outline-none">ALL BRANDS <i className="fa-solid fa-angle-down"></i>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-white shadow-[#a6a6a6] rounded-none w-[250px] ml-[152px]">
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel className="border-b-2 border-[#cecece] text-[13px]">Brand Name</DropdownMenuLabel>
                <DropdownMenuLabel >Brand Name</DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
