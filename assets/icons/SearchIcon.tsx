import { Icon } from "./IconType";

const SearchIcon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.7666"
        cy="11.7664"
        r="8.98856"
        // stroke="#010886"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0183 18.4849L21.5423 21.9997"
        // stroke="#010886"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
