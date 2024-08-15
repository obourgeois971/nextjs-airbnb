// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';

// const createProfileAction = async (formData: FormData) => {
//   'use server';
//   const firstName = formData.get('firstName') as string;
//   console.log(firstName);
// };

const createProfileAction = async (prevState: any, formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  if (firstName !== 'shakeAndBake') return { message: 'there was an error...' };
  return { message: 'Profile Created' };
};

function CreateProfilePage() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
      <div className='border p-8 rounded-md'>
        {/* <form action={createProfileAction}> */}
        {/* <div className='mb-2'>
            <Label htmlFor='firstName'>First Name</Label>
            <Input id='firstName' name='firstName' type='text' />
          </div> */}
        {/* <Button type='submit' size='lg'>
            Create Profile
          </Button> */}
        {/* </form> */}
        <FormContainer action={createProfileAction}>
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput type='text' name='firstName' label='First Name' />
            <FormInput type='text' name='lastName' label='Last Name' />
            <FormInput type='text' name='username' label='Username' />
          </div>
          <SubmitButton text='Create Profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfilePage;
