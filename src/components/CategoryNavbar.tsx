import React from "react";

type Props = {
  categories: string[];
  onClick: (category: string) => void;
};

export default function CategoryNavbar({ categories, onClick }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selected = e.currentTarget.innerText;
    onClick(selected);
  };

  return (
    <nav className="mx-6 text-center">
      <h3 className="text-xl font-bold my-4 mb-2 border-b-4">Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={handleClick}>{category}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
