'use server';

import { signIn, signOut } from '@/auth';
import { signInFormSchema } from '../validators';

export async function signInWithCredentials(
    prevState: unknown,
    formData: FormData
) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        await signIn('credentials', {
            ...user,
            redirect: false,
        });

        return { success: true, message: 'Signed in successfully' };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                message: 'Invalid email or password',
                error: error.message,
            };
        }

        return {
            success: false,
            message: 'Invalid email or password',
            error: 'Unknown error occurred',
        };
    }
}

export async function signOutUser() {
    await signOut();
}
