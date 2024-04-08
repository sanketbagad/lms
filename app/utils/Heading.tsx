import React, { FC } from "react";

interface HeadingProps {
  title: string;
  description: string;
  keywords: string;
}

const Heading: FC<HeadingProps> = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sanket Bagad" />
      <meta name="icon" content="/assets/logo.png" />
    
    </>
  );
};

export default Heading;
