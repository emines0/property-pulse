import '@/assets/styles/global.css'

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find the perfect rental property with Property Pulse. Search for apartments, houses, and condos for rent in your area.',
  keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>   
            <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout