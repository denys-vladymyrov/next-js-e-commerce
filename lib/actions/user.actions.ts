'use server';

import { signIn, signOut } from '@/auth';
import {signInFormSchema, signUpFormSchema} from '../validators';
import {prisma} from "@/db/prisma";
import { hashSync } from "bcrypt-ts-edge";
import { formatError } from "@/lib/utils";

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

// Sign up user
export async function signUpUser(prevState: unknown, formData: FormData) {
    try {
        const user = signUpFormSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });

        const plainPassword = user.password;

        user.password = hashSync(user.password);

        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });

        await signIn('credentials', {
            email: user.email,
            password: plainPassword,
            redirect: false,
        });

        return { success: true, message: 'User registered successfully' };
    } catch (error) {
        if (error instanceof Error) {

            return {
                success: false,
                message: formatError(error),
                error: error.message,
            };
        }

        return { success: false, message: formatError(error) };
    }
}
