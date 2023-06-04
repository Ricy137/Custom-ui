import "./globals.css";
import "/uno.css";
import RecoilRootWrapper from "./RecoilRootWrapper";

export const metadata = {
  title: "Custome UI",
  description: "react component library by Ricy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>
          {children}
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
