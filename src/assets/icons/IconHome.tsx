import React from "react";

function IconHome({className}: {className: string}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" stroke="currentColor">
      <g strokeWidth="1.5" clipPath="url(#home)">
        <path d="M24.36 14.043v1.702c0 2.327-.003 3.984-.2 5.242-.193 1.223-.555 1.965-1.21 2.525-.671.574-1.588.904-3.078 1.076-1.501.173-3.468.174-6.176.174s-4.675-.001-6.176-.174c-1.49-.172-2.407-.502-3.078-1.076-.655-.56-1.017-1.302-1.21-2.525-.197-1.258-.2-2.915-.2-5.242v-1.702c0-2.265.02-3.134.426-3.895.198-.372.495-.724 1.005-1.172.519-.455 1.214-.973 2.188-1.7 1.8-1.34 3.098-2.305 4.21-2.943 1.092-.626 1.943-.898 2.835-.898.892 0 1.743.272 2.835.898 1.112.638 2.41 1.603 4.21 2.944.974.726 1.67 1.244 2.188 1.7.51.447.807.799 1.005 1.17.405.762.425 1.631.425 3.896Z" />
        <rect width="7.631" height="7.631" x="17.511" y="19.055" rx="3.815" transform="rotate(-180 17.511 19.055)" />
      </g>
      <defs>
        <clipPath id="home">
          <path fill="#fff" d="M0 .402h27.392v27.392H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconHome;
