
import './globals.css'
const disccont = "absolute w-[120px] bottom-[7%]"
const disclaimer = "absolute w-[30px]  h-[30px]  rounded-md";
const relative = "absolute flex flex-col justify-center left-[33%] top-[30%] whitespace-nowrap"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute flex flex-col justify-center items-center top-[1%] left-[1%] w-[98%] lg:w-[1200px] lg:h-[900px] h-[98vh] border-2 border-green-500">
        
        {children}
        <div className={`left-[15%] ${disccont}`}>
          <div className={` bg-blue-200  ${disclaimer}`}>
           
        </div>
        <span className={relative}>Клиентская часть</span>
        </div>
        <div className={`left-[40%] ${disccont}`}>
          <div className={` bg-purple-500 ${disclaimer}`}>
          
          </div>
          <span className={relative}>Серверная часть</span>
        </div>
        <div className={`left-[65%] ${disccont}`}>
          <div className={` bg-red-300  ${disclaimer}`}>
          
          </div>
          <span className={relative}>База данных</span>
        </div>
        </body>
    </html>
  );
}
