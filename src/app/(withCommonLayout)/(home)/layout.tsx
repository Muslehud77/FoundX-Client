

type layoutProps = {
  children: React.ReactNode;
  recentPosts : React.ReactNode;
};

const layout = ({ children, recentPosts }: layoutProps) => {
  return (
    <>
      {children}
      
      {recentPosts}
    </>
  );
};

export default layout;