import { DropdownMenu } from "./components";

const Layout = () => {
  return (
    <div className="flex flex-col p-10 items-center bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-medium">Animated Dropdown Multi-Menus</h1>
      <div className="flex flex-col items-center mt-4 ">
        <DropdownMenu
          listOne={[
            {
              icon: "",
              label: "Click me",
            },
          ]}
          listTwo={[
            {
              icon: "π©βπ«",
              label: "Go back",
            },
            {
              icon: "π©βπ",
              label: "One",
            },
            {
              icon: "π¦ΈββοΈ",
              label: "Two",
            },
            {
              icon: "π©βπ¨",
              label: "Three",
            },
            {
              icon: "π¨ββοΈ",
              label: "Four",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Layout;
