import { SVGProps } from 'react';

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.077 19v-2.923h-2.923v-1h2.923v-2.923h1v2.923H21v1h-2.923V19zm-6.462-2.923H7.077q-1.692 0-2.884-1.192Q3 13.693 3 12q0-1.691 1.193-2.885q1.192-1.193 2.884-1.193h3.538v1H7.077q-1.27 0-2.173.904T4 12q0 1.27.904 2.173t2.173.904h3.538zM8.5 12.5v-1h7v1zM21 12h-1q0-1.27-.904-2.173t-2.173-.904h-3.538v-1h3.538q1.692 0 2.885 1.193Q21 10.308 21 12"
      ></path>
    </svg>
  );
}
