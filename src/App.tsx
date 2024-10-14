
import { CheckoutButton, LoadingButton, UserProfileForm } from './index'; // Import components
import { User } from './types'; // Assuming you have types defined

const App = () => {
    const mockUser: User = {
        _id: '1',
        email: 'example@example.com',
        name: 'John Doe',
        addressLine1: '123 Main St',
        city: 'Anytown',
        country: 'Country'
    };

    return (
        <div>
           
            <UserProfileForm currentUser={mockUser} onSave={(data) => console.log(data)} isLoading={false} />
           
            <div className='flex flex-col justify-center items-center gap-4 my-5 flex-1'>
         
            <CheckoutButton onCheckout={(data) => console.log(data)} disabled={false} isLoading={false} />
             <LoadingButton />    
            </div>    
           
        </div>
    );
};

export default App;
