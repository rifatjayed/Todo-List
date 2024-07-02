// import { ReactNode } from "react";

// type TContinerProps = {
//   children: ReactNode;
// };

// const Container = ({ children }: TContinerProps) => {
//   return (
//     <div className=" h-screen w-full max-w-7xl mx-auto bg-red-500">
//       {children}
//     </div>
//   );
// };

// export default Container;

import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
